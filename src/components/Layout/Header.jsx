import React, { Fragment } from "react";

// Components
import HeaderCartButton from "./HeaderCartButton";

// Utils
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food!" />
      </div>
    </Fragment>
  );
}

export default Header;
