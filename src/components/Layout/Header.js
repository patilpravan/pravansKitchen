import React from "react";
import classes from "./Header.module.css"
import mealsImage from "../../assets/images/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Pravan's Kitchen</h1>

            <HeaderCartButton onShowCart={props.onShowcart} />
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="Food all Over Table" />
        </div>

    </React.Fragment>
}

export default Header;