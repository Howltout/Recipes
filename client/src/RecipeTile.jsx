import React from 'react';
import "./RecipeTile.css";
export default function RecipeTile({ recipe }) {
    return (
        <div className="recipeTile">
            <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
            <img className="recipeTile__img" src={recipe["recipe"]["image"]} />
            <p className="recipeTile__ing">
                <p>{recipe["recipe"]["ingredientLines"]["0"]}</p>
                <p>{recipe["recipe"]["ingredientLines"]["1"]}</p>
                <p>{recipe["recipe"]["ingredientLines"]["2"]}</p>
                <p>{recipe["recipe"]["ingredientLines"]["3"]}</p>
                <p>{recipe["recipe"]["ingredientLines"]["4"]}</p>
                <p>{recipe["recipe"]["ingredientLines"]["5"]}</p>
                <p>{recipe["recipe"]["ingredientLines"]["6"]}</p>
                <p>{recipe["recipe"]["ingredientLines"]["7"]}</p>
                <p>{recipe["recipe"]["ingredientLines"]["8"]}</p>
                <p>{recipe["recipe"]["ingredientLines"]["9"]}</p>
            </p>
            <p><a className="recipeTile__link"
                href={recipe["recipe"]["shareAs"]}>Official Page for
                {recipe["recipe"]["label"]}</a></p>
        </div>
    )
}
