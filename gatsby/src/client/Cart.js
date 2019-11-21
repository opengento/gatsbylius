const LocalStorageAdapter = require("./../helpers/LocalStorageAdapter")
const axios = require("axios")

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL

class Cart extends LocalStorageAdapter {
  async init() {
    console.log(this.get("cartKey"))
    if (this.get("cartKey") === null) {
      await axios
        .post(`${SYLIUS_URL}/shop-api/carts`, {})
        .then(response => {
          this.set("cartKey", response.data.tokenValue)
          this.set("currentCurrency", response.data.locale)
          this.set("totals", JSON.stringify(response.data.totals))
          this.set("items", JSON.stringify(response.data.items))
        })
        .catch(err => {
          console.log("Error on cart create")
        })
    }

    if (this.get("totals") === null) {
        this.set("totals", 0)
    }

    if (this.get("items") === null) {
        this.set("items", JSON.stringify({}))
    }

    if (this.get("currentCurrency") === null) {
        this.set("currentCurrency", "USD")
    }
  }

  async add(productCode, variantsCode, qty) {
    const cartKey = this.get("cartKey")
    await axios
      .post(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items`, {
        productCode: productCode,
        quantity: qty,
        variantCode: variantsCode,
      })
      .then(response => {
        this.set("totals", JSON.stringify(response.data.totals))
        this.set("items", JSON.stringify(response.data.items))
        console.log(response)
      })
      .catch(err => {
        console.log("Error on add to cart", err)
      })
  }

  async drop() {
      let cartKey = this.get("cartKey");
      await axios
          .delete(`${SYLIUS_URL}/shop-api/carts/${cartKey}`)
          .then(async response => {
              console.log(response)
              await axios.post(`${SYLIUS_URL}/shop-api/carts`, {}).then(response => {
                  this.set("cartKey", response.data.tokenValue)
                  this.set("currentCurrency", response.data.locale)
                  this.set("totals", JSON.stringify(response.data.totals))
                  this.set("items", JSON.stringify(response.data.items))
              }).catch(error => {
                  console.log(error)
              })
          }).catch(error => {
              console.log(error)
          })
  }

  async changeQty(itemId, changeType) {
      let cartKey = this.get("cartKey")
      const item = this.getItems().find(item => item.id === itemId)
      let newItemQty = 0;

      if (changeType === "inc") {
          newItemQty = item.quantity + 1;
      } else if(changeType === "dec" && item.quantity > 0) {
          newItemQty = item.quantity - 1;
      }

      await axios.put(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items/${itemId}`,
          {quantity: newItemQty}).then(response => {
          /*    console.log(response)
            const items = this.getItems().map(item => {
                if (item.id === itemId) {
                    item.quantity = newItemQty
                }
                return item
            })
          this.set("items", JSON.stringify(items))*/

          this.set("currentCurrency", response.data.locale)
          this.set("totals", JSON.stringify(response.data.totals))
          this.set("items", JSON.stringify(response.data.items))
      })
  }

  async removeItem(itemId) {
      let cartKey = this.get("cartKey");
      await axios
          .delete(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items/${itemId}`)
          .then(async response => {
              this.set("currentCurrency", response.data.locale)
              this.set("totals", JSON.stringify(response.data.totals))
              this.set("items", JSON.stringify(response.data.items))
          }).catch(error => {
              console.log(error)
          })
  }

  getTotals() {
      return JSON.parse(this.get("totals"))
  }

  getItems() {
      return JSON.parse(this.get("items"))
  }

  getCurrency() {
      return this.get("currentCurrency")
  }
}

module.exports = new Cart()
