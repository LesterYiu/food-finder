import CuisineForm from './CuisineForm';
import axios from "axios";
import { useState } from 'react';

const breakPoints = [
    {width: 1, itemsToShow: 2},
    {width: 550, itemsToShow: 3},
    {width: 768, itemsToShow: 5},
    {width: 1200, itemsToShow: 6},    
];

const Form = () => {
    const [userCuisine, setUserCuisine] = useState([]);

    // axios({
    //     url: 'https://api.spoonacular.com/recipes/complexSearch',
    //     method: 'GET',
    //     dataResponse: 'json',
    //     params: {
    //         apiKey: 'b816c6f070174a9596e8c0889839e0da',
    //         instructionsRequired: true,
    //         addRecipeInformation: true
    //     }
    // }).then( (response) => {
    //     console.log(response.data.results);
    // })

    return(
        <CuisineForm breakPoints={breakPoints} setUserCuisine={setUserCuisine} userCuisine={userCuisine}/>
    )
}

export default Form;