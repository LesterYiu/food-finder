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

const IntoleranceForm = (props) => {
    const {breakPoints, setUserAllergy, userAllergy} = props;

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

    const handleClick = (e, setAllergyFunc) => {
        if (e.target.checked) {
            setUserAllergy([e.target.value, ...userAllergy]);
            setAllergyFunc(true);
        } else {
            let userAllergyArray = [...userAllergy];
            setUserAllergy(userAllergyArray.filter( (i) => {
                return i !== e.target.value;
            }))
            setAllergyFunc(false);
        }
    }

    const handleOverlayClick = (e, setAllergyFunc) => {
        const input = e.target.offsetParent.childNodes[1];
        input.checked = false;
        let userAllergyArray = [...userAllergy];
        setUserAllergy(userAllergyArray.filter( (i) => {
            return i !== input.value;
        }))
        setAllergyFunc(false);
    }

    console.log(userAllergy);

    return(
        <form name="intoleranceForm">
            <legend><h1>Do you have any food allergies?</h1></legend>
            <Carousel breakPoints={breakPoints}>
                <div className="allergyContainer">
                    <label htmlFor="dairy" className='dairy choice'><span className="sr-only">Dairy</span></label>
                    <input type="checkbox" id='dairy' value='dairy' className='sr-only' onClick={(e) => {handleClick(e, setIsDairyChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={dairy} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Dairy</p>
                    </div>
                    <div className={isDairyChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsDairyChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="egg" className='choice'><span className="sr-only">Egg</span></label>
                    <input type="checkbox" id='egg' value='egg' className='sr-only' onClick={(e) => {handleClick(e, setIsEggChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={egg} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Egg</p>
                    </div>
                    <div className={isEggChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsEggChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="gluten" className='choice'><span className="sr-only">Gluten</span></label>
                    <input type="checkbox" id='gluten' value='gluten' className='sr-only' onClick={(e) => {handleClick(e, setIsGlutenChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={gluten} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Gluten</p>
                    </div>
                    <div className={isGlutenChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsGlutenChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="grain" className='choice'><span className="sr-only">Grain</span></label>
                    <input type="checkbox" id='grain' value='grain' className='sr-only' onClick={(e) => {handleClick(e, setIsGrainChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={grain} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Grain</p>
                    </div>
                    <div className={isGrainChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsGrainChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="peanut" className='choice'><span className="sr-only">Peanut</span></label>
                    <input type="checkbox" id='peanut' value='peanut' className='sr-only' onClick={(e) => {handleClick(e, setIsPeanutChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={peanut} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Peanut</p>
                    </div>
                    <div className={isPeanutChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsPeanutChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="seafood" className='choice'><span className="sr-only">Seafood</span></label>
                    <input type="checkbox" id='seafood' value='seafood' className='sr-only' onClick={(e) => {handleClick(e, setIsSeafoodChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={seafood} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Seafood</p>
                    </div>
                    <div className={isSeafoodChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsSeafoodChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="sesame" className='choice'><span className="sr-only">Sesame</span></label>
                    <input type="checkbox" id='sesame' value='sesame' className='sr-only' onClick={(e) => {handleClick(e, setIsSesameChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={sesame} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Sesame</p>
                    </div>
                    <div className={isSesameChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsSesameChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="shellfish" className='choice'><span className="sr-only">Shellfish</span></label>
                    <input type="checkbox" id='shellfish' value='shellfish' className='sr-only' onClick={(e) => {handleClick(e, setIsShellfishChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={shellfish} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Shellfish</p>
                    </div>
                    <div className={isShellfishChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsShellfishChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="soy" className='choice'><span className="sr-only">Soy</span></label>
                    <input type="checkbox" id='soy' value='soy' className='sr-only' onClick={(e) => {handleClick(e, setIsSoyChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={soy} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Soy</p>
                    </div>
                    <div className={isSoyChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsSoyChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="sulfite" className='choice'><span className="sr-only">Sulfite</span></label>
                    <input type="checkbox" id='sulfite' value='sulfite' className='sr-only' onClick={(e) => {handleClick(e, setIsSulfiteChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={sulfite} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Sulfite</p>
                    </div>
                    <div className={isSulfiteChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsSulfiteChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="tree-nut" className='choice'><span className="sr-only">Tree Nut</span></label>
                    <input type="checkbox" id='tree-nut' value='tree nut' className='sr-only' onClick={(e) => {handleClick(e, setIsTreenutChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={treenut} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Tree Nut</p>
                    </div>
                    <div className={isTreenutChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsTreenutChecked)}}></div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="wheat" className='choice'><span className="sr-only">wheat</span></label>
                    <input type="checkbox" id='wheat' value='wheat' className='sr-only' onClick={(e) => {handleClick(e, setIsWheatChecked)}}/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={wheat} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Wheat</p>
                    </div>
                    <div className={isWheatChecked ? 'allergyOverlay' : null} onClick={(e) => {handleOverlayClick(e, setIsWheatChecked)}}></div>
                </div>
            </Carousel>
            <button type='submit'>Next</button>
        </form>
    )
}

export default IntoleranceForm;