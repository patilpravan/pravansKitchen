import React from "react";
import classes from "./MealsSummary.module.css"

const MealsSummary = (props) => {
    return <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
            Choose your favorite breakfast from our broad selection of available items
            and enjoy a delicious breakfast at home.
        </p>
        <p>
            All our food items are cooked with high-quality ingredients, just-in-time and
            of by experienced chefs!
        </p>
    </section>
}
export default MealsSummary;