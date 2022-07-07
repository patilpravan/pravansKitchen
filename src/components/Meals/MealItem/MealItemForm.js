import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"

const MealItemForm = (props) => {
    const [amountValid, setAmountValid] = useState(true);
    const inputAmountRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const amountEntered = inputAmountRef.current.value;
        const amountEnteredNumber = +amountEntered;
        if (amountEntered.trim().length === 0 || amountEnteredNumber < 1 || amountEnteredNumber > 5) {
            setAmountValid(false);
            return;
        }
        props.onAddCartHandler(amountEnteredNumber);
        setAmountValid(true)

    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={inputAmountRef} label="Qty" input={{ id: 'Amount_' + props.id, type: 'number', min: 1, max: 5, defaultValue: 1, step: 1 }} />
        <button>+ Add</button>
        {!amountValid && <p>Please Enter valid amount i.e. 1-5</p>}
    </form>
}

export default MealItemForm;