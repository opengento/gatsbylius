import React from "react"
import PropTypes from "prop-types"
import Cart from "../client/Cart"

const AddToCart = props => {
  return (
    <button onClick={() => Cart.add(props.slug, props.variantsCode, props.qty)}>
      Add to cart
    </button>
  )
}

AddToCart.prototype = {
  slug: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  variantsCode: PropTypes.string.isRequired,
}

export default AddToCart
