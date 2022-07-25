import axios from "axios";
import { useState } from 'react';
import CuisineForm from './CuisineForm';
import IntoleranceForm from "./IntoleranceForm";
import DietForm from "./DietForm";

const breakPoints = [
    {width: 1, itemsToShow: 2},
    {width: 550, itemsToShow: 3},
    {width: 768, itemsToShow: 5},
    {width: 1200, itemsToShow: 6},    
];

const Form = () => {
    const [userCuisine, setUserCuisine] = useState([]);
    const [userAllergy, setUserAllergy] = useState([]);
    const [userDiet, setUserDiet] = useState('');
    const [isFirstQuestion, setIsFirstQuestion] = useState(true);
    const [isSecondQuestion, setIsSecondQuestion] = useState(false);
    const [isThirdQuestion, setIsThirdQuestion] = useState(false);

    // axios({
    //     url: 'https://api.spoonacular.com/recipes/complexSearch',
    //     method: 'GET',
    //     dataResponse: 'json',
    //     params: {
    //         apiKey: 'b816c6f070174a9596e8c0889839e0da',
    //         instructionsRequired: true,
    //         addRecipeInformation: true,
    //         diet:'vegan'
    //     }
    // }).then( (response) => {
    //     console.log(response.data.results);
    // })

    return(
        <>
            {isFirstQuestion ? <CuisineForm breakPoints={breakPoints} setUserCuisine={setUserCuisine} userCuisine={userCuisine} setIsFirstQuestion={setIsFirstQuestion} setIsSecondQuestion={setIsSecondQuestion}/> : null}
            {isSecondQuestion ? <IntoleranceForm breakPoints={breakPoints} setUserAllergy={setUserAllergy} userAllergy={userAllergy} setIsThirdQuestion={setIsThirdQuestion} setIsSecondQuestion={setIsSecondQuestion}/> : null}
            {isThirdQuestion ? <DietForm breakPoints={breakPoints} /> : null}
        </>
    )
}

export default Form;