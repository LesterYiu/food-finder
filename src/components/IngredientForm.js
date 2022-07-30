import Carousel from 'react-elastic-carousel';
import jsonData from "../storedData/ingredients.json";
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

const IngredientForm = (props) => {
    const {breakPoints} = props;
    const [ingredientList, setIngredientList] = useState();
    const [ingredientMatch, setIngredientMatch] = useState();

    useEffect( () => {
        setIngredientList(jsonData);
    }, []);

    const searchIngredient = (text) => {
        if(text.length > 1) {
            let matches = ingredientList.filter( (item) => {
                const regex = new RegExp(`${text}`, "gi");
                return item.ingredient.match(regex);
            })
            setIngredientMatch(matches);
        }
    }
    return(
        <form name="typeForm">
            <legend><h1>Do you have any ingredients you want to be excluded from your recommended recipes?</h1></legend>
            <Carousel breakPoints={breakPoints}>
                <span></span>
            </Carousel>
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