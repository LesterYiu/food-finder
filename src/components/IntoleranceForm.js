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

const IntoleranceForm = (props) => {
    const {breakPoints} = props;

    return(
        <form name="intoleranceForm">
            <legend><h1>Do you have any food allergies?</h1></legend>
            <Carousel breakPoints={breakPoints}>
                <div className="allergyContainer">
                    <label htmlFor="dairy" className='dairy choice'><span className="sr-only">Dairy</span></label>
                    <input type="checkbox" id='dairy' value='dairy' className='sr-only' />
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={dairy} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Dairy</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="egg" className='choice'><span className="sr-only">Egg</span></label>
                    <input type="checkbox" id='egg' value='egg' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={egg} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Egg</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="gluten" className='choice'><span className="sr-only">Gluten</span></label>
                    <input type="checkbox" id='gluten' value='gluten' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={gluten} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Gluten</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="grain" className='choice'><span className="sr-only">Grain</span></label>
                    <input type="checkbox" id='grain' value='grain' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={grain} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Grain</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="peanut" className='choice'><span className="sr-only">Peanut</span></label>
                    <input type="checkbox" id='peanut' value='peanut' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={peanut} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Peanut</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="seafood" className='choice'><span className="sr-only">Seafood</span></label>
                    <input type="checkbox" id='seafood' value='seafood' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={seafood} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Seafood</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="sesame" className='choice'><span className="sr-only">Sesame</span></label>
                    <input type="checkbox" id='sesame' value='sesame' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={sesame} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Sesame</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="shellfish" className='choice'><span className="sr-only">Shellfish</span></label>
                    <input type="checkbox" id='shellfish' value='shellfish' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={shellfish} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Shellfish</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="soy" className='choice'><span className="sr-only">Soy</span></label>
                    <input type="checkbox" id='soy' value='soy' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={soy} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Soy</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="sulfite" className='choice'><span className="sr-only">Sulfite</span></label>
                    <input type="checkbox" id='sulfite' value='sulfite' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={sulfite} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Sulfite</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="tree-nut" className='choice'><span className="sr-only">Tree Nut</span></label>
                    <input type="checkbox" id='tree-nut' value='tree nut' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={treenut} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Tree Nut</p>
                    </div>
                </div>
                <div className="allergyContainer">
                    <label htmlFor="wheat" className='choice'><span className="sr-only">wheat</span></label>
                    <input type="checkbox" id='wheat' value='wheat' className='sr-only'/>
                    <div className="allergyInfoContainer">
                        <div className="iconContainer">
                            <img src={wheat} alt="" />
                        </div>
                        <p aria-hidden="true" className='allergyIdentifier'>Wheat</p>
                    </div>
                </div>
            </Carousel>
        </form>
    )
}

export default IntoleranceForm;