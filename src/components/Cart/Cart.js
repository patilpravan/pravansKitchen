import React, { useContext, useState } from "react";
import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";



const Cart = (props) => {
    const [orderPlaced, setOrderPlaced] = useState(false);

    const cartCtx = useContext(CartContext);
    const totalAmount = `Rs. ${cartCtx.totalAmount}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    }
    const orderClickHandler = () => {
        setOrderPlaced(true)
        cartCtx.clearCart();

        setTimeout(() => {
            setOrderPlaced(false);
            props.onClose();
        }, 3000)


    }

    const cartItems = (<ul className={classes['cart-items']}>{cartCtx.items.map(
        (item) => (<CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)} />
        ))}</ul>)

    return <div>{!orderPlaced && <Modal onClose={props.onClose}>
        <div>{cartItems}</div>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderClickHandler}>Order</button>}
        </div>
    </Modal>}
        {orderPlaced && <Modal><div><h3> Your Order has been Placed !!! </h3><h5> Thank you for ordering from Us !</h5></div></Modal>}
    </div>

}

export default Cart;