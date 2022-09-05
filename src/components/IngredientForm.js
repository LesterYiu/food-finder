import jsonData from "../storedData/ingredients.json";
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

const IngredientForm = () => {
    const [ingredientList, setIngredientList] = useState();
    const [ingredientMatch, setIngredientMatch] = useState();
    useEffect( () => {
        setIngredientList(jsonData);
    }, []);

    const searchIngredient = (text) => {
        if(text.length > 1) {
            let matches = ingredientList.filter( (item) => {
                const regex = new RegExp(`${text}`, "i");

                return item.ingredient.match(regex);
            })
            setTimeout( () => {
                setIngredientMatch(matches);
            }, 300)

            clearTimeout();
        }
    }
    return(
        <form name="typeForm">
            <legend><h1>Do you have any ingredients you want to be excluded from your recommended recipes?</h1></legend>
            <label htmlFor="searchIngredients" className="sr-only">Search for ingredients to exclude</label>
            <input id='searchIngredients' list='ingredients' onChange={(e) => {searchIngredient(e.target.value)}}/>
            <datalist id='ingredients'>
                { ingredientMatch === undefined ? null: 
                    ingredientMatch.map( (item) => {
                        return <option key={uuid()}>{item.ingredient}</option>
                    })
                }
            </datalist>
        </form>
    )
}

export default IngredientForm;