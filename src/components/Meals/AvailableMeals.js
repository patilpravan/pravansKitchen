import React from "react";
import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Vadapav',
        description: 'Maharastraian special recipe',
        price: 30,
    },
    {
        id: 'm2',
        name: 'Idly',
        description: 'A south indian specialty!',
        price: 40,
    },
    {
        id: 'm3',
        name: 'Dosa',
        description: 'Mysore Masala, Crispy, with Chutney',
        price: 70,
    },
    {
        id: 'm4',
        name: 'Misal',
        description: 'Hot!!!! and Spicy!!!!',
        price: 120,
    },
];
const AvailableMeals = (props) => {
    const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />)
    return <section className={classes.meals}>
        <ul>
            <Card>
                {mealsList}
            </Card>
        </ul>
    </section>
}

export default AvailableMeals;