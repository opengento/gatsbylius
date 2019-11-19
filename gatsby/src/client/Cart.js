const LocalStorageAdapter = require('./../helpers/LocalStorageAdapter');
const axios = require('axios')

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL

class Cart extends LocalStorageAdapter {
  async init() {
    console.log('okok')
    if (!this.get('cartKey')) {
      await axios.post(`${SYLIUS_URL}/shop-api/carts`, {}).then(response => {
        console.log(response, "bibite")
      }).catch(err => {
        console.log('error')
      });
    }
  }
}

module.exports = Cart