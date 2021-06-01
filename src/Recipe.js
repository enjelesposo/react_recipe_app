import React from 'react';
import style from './style.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.img} src={image} alt="" />
            <ol>
                {ingredients.map( ingredient => {
                    return <li>{ingredient.text}</li>
                })}
            </ol>
            <div className={style.caloriesWrapper}>
                <h4>Calories: </h4>
                <p className={style.calorie}>{Math.round(calories * 100) / 100}</p>
            </div>
        </div>
    );
}

export default Recipe;