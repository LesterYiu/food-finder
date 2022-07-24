import axios from "axios";
import { useState } from 'react';
import CuisineForm from './CuisineForm';
import IntoleranceForm from "./IntoleranceForm";

const breakPoints = [
    {width: 1, itemsToShow: 2},
    {width: 550, itemsToShow: 3},
    {width: 768, itemsToShow: 5},
    {width: 1200, itemsToShow: 6},    
];

const Form = () => {
    const [userCuisine, setUserCuisine] = useState([]);
    const [userAllergy, setUserAllergy] = useState([]);
    const [isFirstQuestion, setIsFirstQuestion] = useState(true);
    const [isSecondQuestion, setIsSecondQuestion] = useState(false);

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
        <>
            {isFirstQuestion ? <CuisineForm breakPoints={breakPoints} setUserCuisine={setUserCuisine} userCuisine={userCuisine} setIsFirstQuestion={setIsFirstQuestion} setIsSecondQuestion={setIsSecondQuestion}/> : null}
            {isSecondQuestion ? <IntoleranceForm breakPoints={breakPoints} setUserAllergy={setUserAllergy} userAllergy={userAllergy}/> : null}
        </>
    )
}

export default Form;