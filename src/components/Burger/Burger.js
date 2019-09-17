import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import styles from './Burger.module.css'

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((el, index) => {
                return <BurgerIngredient key={igKey + index} type={igKey} />
            });
        }).flat();

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients.length > 0 ? transformedIngredients : <h4>Please Add Some Ingredients!</h4>}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
}

export default burger;