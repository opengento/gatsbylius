/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const Cart = require('./src/client/Cart');

exports.onInitialClientRender = () => {
    console.log("ReactDOM.render has executed")
    new Cart().init();
}