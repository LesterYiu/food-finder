import Carousel from 'react-elastic-carousel';
import dairy from '../assets/dairy.png';
import egg from '../assets/egg.png';
import gluten from '../assets/gluten.png';
import grain from '../assets/grain.png';
import peanut from '../assets/peanut.png';
import seafood from '../assets/seafood.png';
import sesame from '../assets/sesame.png';
import shellfish from '../assets/shellfish.png';
import soy from '../assets/soy.png';
import sulfite from '../assets/sulfite.png';
import treenut from '../assets/treenut.png';
import wheat from '../assets/wheat.png';

import { useState } from 'react';
import { handleClicked, handleOverlayClicked, handleInfoClicked } from '../customFunctions/handleClicks';

const IntoleranceForm = (props) => {
    const {breakPoints, setUserAllergy, userAllergy, setIsThirdQuestion, setIsSecondQuestion} = props;

    const [isDairyChecked, setIsDairyChecked] = useState(false);
    const [isEggChecked, setIsEggChecked] = useState(false);
    const [isGlutenChecked, setIsGlutenChecked] = useState(false);
    const [isGrainChecked, setIsGrainChecked] = useState(false);
    const [isPeanutChecked, setIsPeanutChecked] = useState(false);
    const [isSeafoodChecked, setIsSeafoodChecked] = useState(false);
    const [isSesameChecked, setIsSesameChecked] = useState(false);
    const [isShellfishChecked, setIsShellfishChecked] = useState(false);
    const [isSoyChecked, setIsSoyChecked] = useState(false);
    const [isSulfiteChecked, setIsSulfiteChecked] = useState(false);
    const [isTreenutChecked, setIsTreenutChecked] = useState(false);
    const [isWheatChecked, setIsWheatChecked] = useState(false);

    const handleSubmit = () => {
        setIsSecondQuestion(false);
        setIsThirdQuestion(true);
    }

    return(
        <form name="intoleranceForm">
            <legend><h1>Do you have any food allergies?</h1></legend>
            <Carousel breakPoints={breakPoints}>
                <div className="allergyContainer">
                    <label htmlFor="dairy" className='dairy choice2'><span className="sr-only">Dairy</span></label>
                    <input type="checkbox" id='dairy' value='dairy' className='sr-only' onClick={(e) => {handleClicked(e, setIsDairyChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsDairyChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={dairy} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Dairy</p>
                    </div>
                    <div className={isDairyChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsDairyChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="egg" className='choice2'><span className="sr-only">Egg</span></label>
                    <input type="checkbox" id='egg' value='egg' className='sr-only' onClick={(e) => {handleClicked(e, setIsEggChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsEggChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={egg} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Egg</p>
                    </div>
                    <div className={isEggChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsEggChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="gluten" className='choice2'><span className="sr-only">Gluten</span></label>
                    <input type="checkbox" id='gluten' value='gluten' className='sr-only' onClick={(e) => {handleClicked(e, setIsGlutenChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsGlutenChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={gluten} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Gluten</p>
                    </div>
                    <div className={isGlutenChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsGlutenChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="grain" className='choice2'><span className="sr-only">Grain</span></label>
                    <input type="checkbox" id='grain' value='grain' className='sr-only' onClick={(e) => {handleClicked(e, setIsGrainChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsGrainChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={grain} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Grain</p>
                    </div>
                    <div className={isGrainChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsGrainChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="peanut" className='choice2'><span className="sr-only">Peanut</span></label>
                    <input type="checkbox" id='peanut' value='peanut' className='sr-only' onClick={(e) => {handleClicked(e, setIsPeanutChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsPeanutChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={peanut} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Peanut</p>
                    </div>
                    <div className={isPeanutChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsPeanutChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="seafood" className='choice2'><span className="sr-only">Seafood</span></label>
                    <input type="checkbox" id='seafood' value='seafood' className='sr-only' onClick={(e) => {handleClicked(e, setIsSeafoodChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsSeafoodChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={seafood} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Seafood</p>
                    </div>
                    <div className={isSeafoodChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsSeafoodChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="sesame" className='choice2'><span className="sr-only">Sesame</span></label>
                    <input type="checkbox" id='sesame' value='sesame' className='sr-only' onClick={(e) => {handleClicked(e, setIsSesameChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsSesameChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={sesame} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Sesame</p>
                    </div>
                    <div className={isSesameChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsSesameChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="shellfish" className='choice2'><span className="sr-only">Shellfish</span></label>
                    <input type="checkbox" id='shellfish' value='shellfish' className='sr-only' onClick={(e) => {handleClicked(e, setIsShellfishChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsShellfishChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={shellfish} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Shellfish</p>
                    </div>
                    <div className={isShellfishChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsShellfishChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="soy" className='choice2'><span className="sr-only">Soy</span></label>
                    <input type="checkbox" id='soy' value='soy' className='sr-only' onClick={(e) => {handleClicked(e, setIsSoyChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsSoyChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={soy} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Soy</p>
                    </div>
                    <div className={isSoyChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsSoyChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="sulfite" className='choice2'><span className="sr-only">Sulfite</span></label>
                    <input type="checkbox" id='sulfite' value='sulfite' className='sr-only' onClick={(e) => {handleClicked(e, setIsSulfiteChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsSulfiteChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={sulfite} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Sulfite</p>
                    </div>
                    <div className={isSulfiteChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsSulfiteChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="tree-nut" className='choice2'><span className="sr-only">Tree Nut</span></label>
                    <input type="checkbox" id='tree-nut' value='tree nut' className='sr-only' onClick={(e) => {handleClicked(e, setIsTreenutChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsTreenutChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={treenut} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Tree Nut</p>
                    </div>
                    <div className={isTreenutChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsTreenutChecked, userAllergy, setUserAllergy)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="wheat" className='choice2'><span className="sr-only">wheat</span></label>
                    <input type="checkbox" id='wheat' value='wheat' className='sr-only' onClick={(e) => {handleClicked(e, setIsWheatChecked, userAllergy, setUserAllergy)}}/>
                    <div className="allergyInfoContainer" onClick={(e) => {handleInfoClicked(e, setIsWheatChecked, userAllergy, setUserAllergy)}}>
                        <div className="iconContainer">
                            <img src={wheat} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Wheat</p>
                    </div>
                    <div className={isWheatChecked ? 'checkedOverlay' : null} onClick={(e) => {handleOverlayClicked(e, setIsWheatChecked, userAllergy, setUserAllergy)}}></div>
                </div>
            </Carousel>
            <button type='submit' onClick={handleSubmit}>Next</button>
        </form>
    )
}

export default IntoleranceForm;