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
        })
        .catch(err => {
          console.log("Error on cart create")
        })
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
        console.log(response)
      })
      .catch(err => {
        console.log("Error on add to cart", err)
      })
  }
}

module.exports = new Cart()
