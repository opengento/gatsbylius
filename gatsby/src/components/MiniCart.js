import React from "react"
import Cart from "./../client/Cart"

const MiniCart = ({items, totals, currency}) => (
    <div>
        <ul style={{display: "flex", flex: 1}}>
            {items.map(item => {
                let variantName = item.product.variants.map(variant => variant.name)
                return (
                    <li key={item.id}>
                        nom : {item.product.name} <br/>
                        qté : <button onClick={() => Cart.changeQty(item.id, "dec")}>-</button> {item.quantity} <br/>
                        <button onClick={() => Cart.changeQty(item.id, "inc")}>+</button>
                        prix : {item.total} <br/>
                        variantName : {variantName} <br/>
                        <button onClick={() => Cart.removeItem(item.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
        Cart total : {totals.total} / {currency} (Details -> taxes : {totals.taxes} / shipping : {totals.shipping}
        / promotion : {totals.promotion}
        <button onClick={() => Cart.drop()}>Drop the cart</button>
    </div>
)

export default MiniCart