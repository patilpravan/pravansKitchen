import React, { useContext } from "react";
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";




const MealItem = (props) => {
    const cartCxt = useContext(CartContext);

    const AddCartHandler = (amount) => {
        cartCxt.addItem({
            name: props.name,
            id: props.id,
            amount: amount,
            price: props.price
        })
    }
    const price = `Rs. ${props.price}`
    return <li className={classes.meal}>
        <div >
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <MealItemForm onAddCartHandler={AddCartHandler} id={props.id} />
    </li>
}
export default MealItem;