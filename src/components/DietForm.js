import Carousel from 'react-elastic-carousel';
import gluten from '../assets/gluten.png';
import seafood from '../assets/seafood.png';
import egg from '../assets/egg.png';
import dairy from '../assets/dairy.png';
import wheat from '../assets/wheat.png';
import grain from '../assets/grain.png';
import peanut from '../assets/peanut.png';

import { useState } from 'react';
import { handleClicked, handleOverlayClicked, handleInfoClicked, handleSubmit } from '../customFunctions/handleClicks';

const DietForm = (props) => {
    const {breakPoints, userDiet, setUserDiet, setIsThirdQuestion, setIsFourthQuestion} = props;
    const [isGlutenChecked, setIsGlutenChecked] = useState(false);
    const [isKetogenicChecked, setIsKetogenicChecked] = useState(false);
    const [isVegetarianChecked, setIsVegetarianChecked] = useState(false);
    const [isLactoVegChecked, setIsLactoVegChecked] = useState(false);
    const [isVeganChecked, setIsVeganChecked] = useState(false);
    const [isPescetarianChecked, setIsPescetarianChecked] = useState(false);
    const [isPaleoChecked, setIsPaleoChecked] = useState(false);

    return(
        <form name="dietForm" onSubmit={(event) => {handleSubmit(event, setIsThirdQuestion, setIsFourthQuestion)}}>
            <legend><h1>What are your dietary preferences?</h1></legend>
            <Carousel breakPoints={breakPoints} enableMouseSwipe={true}>
                <div className="dietContainer">
                    <label htmlFor="glutenFree" className='choice2'><span className="sr-only">Gluten Free</span></label>
                    <input id="glutenFree" type="checkbox" value='gluten free' className='sr-only' onClick={(e) => {handleClicked(e, setIsGlutenChecked, userDiet, setUserDiet)}}/>
                    <div className="dietInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsGlutenChecked, userDiet, setUserDiet)}}>
                        <div className="iconContainer">
                            <img src={gluten} alt="" />
                        </div>
                        <p aria-hidden='true'>Gluten Free</p>
                    </div>
                    <div className={isGlutenChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsGlutenChecked, userDiet, setUserDiet)}}></div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="ketogenic" className='choice2'><span className="sr-only">Ketogenic</span></label>
                    <input id="ketogenic" type="checkbox" value='ketogenic' className='sr-only' onClick={(e) => {handleClicked(e, setIsKetogenicChecked, userDiet, setUserDiet)}}/>
                    <div className="dietInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsKetogenicChecked, userDiet, setUserDiet)}}>
                        <div className="iconContainer">
                            <img src={seafood} alt="" />
                        </div>
                        <p aria-hidden='true'>Ketogenic</p>
                    </div>
                    <div className={isKetogenicChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsKetogenicChecked, userDiet, setUserDiet)}}></div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="vegetarian" className='choice2'><span className="sr-only">vegetarian</span></label>
                    <input id="vegetarian" type="checkbox" value='vegetarian' className='sr-only' onClick={(e) => {handleClicked(e, setIsVegetarianChecked, userDiet, setUserDiet)}}/>
                    <div className="dietInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsVegetarianChecked, userDiet, setUserDiet)}}>
                        <div className="iconContainer">
                            <img src={egg} alt="" />
                        </div>
                        <p aria-hidden='true'>Vegetarian</p>
                    </div>
                    <div className={isVegetarianChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsVegetarianChecked, userDiet, setUserDiet)}}></div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="lacto-vegetarian" className='choice2'><span className="sr-only">Lacto-Vegetarian</span></label>
                    <input id="lacto-vegetarian" type="checkbox" value='lacto-vegetarian' className='sr-only' onClick={(e) => {handleClicked(e, setIsLactoVegChecked, userDiet, setUserDiet)}}/>
                    <div className="dietInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsLactoVegChecked, userDiet, setUserDiet)}}>
                        <div className="iconContainer">
                            <img src={dairy} alt="" />
                        </div>
                        <p aria-hidden='true'>Lacto-Vegetarian</p>
                    </div>
                    <div className={isLactoVegChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsLactoVegChecked, userDiet, setUserDiet)}}></div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="vegan" className='choice2'><span className="sr-only">Vegan</span></label>
                    <input id="vegan" type="checkbox" value='vegan' className='sr-only' onClick={(e) => {handleClicked(e, setIsVeganChecked, userDiet, setUserDiet)}}/>
                    <div className="dietInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsVeganChecked, userDiet, setUserDiet)}}>
                        <div className="iconContainer">
                            <img src={wheat} alt="" />
                        </div>
                        <p aria-hidden='true'>Vegan</p>
                    </div>
                    <div className={isVeganChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsVeganChecked, userDiet, setUserDiet)}}></div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="pescetarian" className='choice2'><span className="sr-only">Pescetarian</span></label>
                    <input id="pescetarian" type="checkbox" value='pescetarian' className='sr-only' onClick={(e) => {handleClicked(e, setIsPescetarianChecked, userDiet, setUserDiet)}}/>
                    <div className="dietInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsPescetarianChecked, userDiet, setUserDiet)}}>
                        <div className="iconContainer">
                            <img src={grain} alt="" />
                        </div>
                        <p aria-hidden='true'>Pescetarian</p>
                    </div>
                    <div className={isPescetarianChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsPescetarianChecked, userDiet, setUserDiet)}}></div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="paleo" className='choice2'><span className="sr-only">Paleo</span></label>
                    <input id="paleo" type="checkbox" value='paleo' className='sr-only' onClick={(e) => {handleClicked(e, setIsPaleoChecked, userDiet, setUserDiet)}}/>
                    <div className="dietInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsPaleoChecked, userDiet, setUserDiet)}}>
                        <div className="iconContainer">
                            <img src={peanut} alt="" />
                        </div>
                        <p aria-hidden='true'>Paleo</p>
                    </div>
                    <div className={isPaleoChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsPaleoChecked, userDiet, setUserDiet)}}></div>
                </div>
            </Carousel>
            <button type='submit'>Next</button>
        </form>
    )
}

export default DietForm;