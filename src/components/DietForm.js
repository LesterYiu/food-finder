import Carousel from 'react-elastic-carousel';
import gluten from '../assets/gluten.png';
import seafood from '../assets/seafood.png';
import egg from '../assets/egg.png';
import dairy from '../assets/dairy.png';
import wheat from '../assets/wheat.png';
import grain from '../assets/grain.png';
import peanut from '../assets/peanut.png';

const DietForm = (props) => {
    const {breakPoints} = props;

    return(
        <form name="dietForm">
            <legend><h1>What are your dietary preferences?</h1></legend>
            <Carousel breakPoints={breakPoints}>
                <div className="dietContainer">
                    <label htmlFor="glutenFree" className='choice2'><span className="sr-only">Gluten Free</span></label>
                    <input id="glutenFree" type="checkbox" value='gluten free' className='sr-only'/>
                    <div className="dietInfoContainer">
                        <div className="iconContainer">
                            <img src={gluten} alt="" />
                        </div>
                        <p aria-hidden='true'>Gluten Free</p>
                    </div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="ketogenic" className='choice2'><span className="sr-only">Ketogenic</span></label>
                    <input id="ketogenic" type="checkbox" value='ketogenic' className='sr-only'/>
                    <div className="dietInfoContainer">
                        <div className="iconContainer">
                            <img src={seafood} alt="" />
                        </div>
                        <p aria-hidden='true'>Ketogenic</p>
                    </div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="vegetarian" className='choice2'><span className="sr-only">vegetarian</span></label>
                    <input id="vegetarian" type="checkbox" value='vegetarian' className='sr-only'/>
                    <div className="dietInfoContainer">
                        <div className="iconContainer">
                            <img src={egg} alt="" />
                        </div>
                        <p aria-hidden='true'>Vegetarian</p>
                    </div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="lacto-vegetarian" className='choice2'><span className="sr-only">Lacto-Vegetarian</span></label>
                    <input id="lacto-vegetarian" type="checkbox" value='lacto-vegetarian' className='sr-only'/>
                    <div className="dietInfoContainer">
                        <div className="iconContainer">
                            <img src={dairy} alt="" />
                        </div>
                        <p aria-hidden='true'>Lacto-Vegetarian</p>
                    </div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="vegan" className='choice2'><span className="sr-only">Vegan</span></label>
                    <input id="vegan" type="checkbox" value='vegan' className='sr-only'/>
                    <div className="dietInfoContainer">
                        <div className="iconContainer">
                            <img src={wheat} alt="" />
                        </div>
                        <p aria-hidden='true'>Vegan</p>
                    </div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="pescetarian" className='choice2'><span className="sr-only">Pescetarian</span></label>
                    <input id="pescetarian" type="checkbox" value='pescetarian' className='sr-only'/>
                    <div className="dietInfoContainer">
                        <div className="iconContainer">
                            <img src={grain} alt="" />
                        </div>
                        <p aria-hidden='true'>Pescetarian</p>
                    </div>
                </div>
                <div className="dietContainer">
                    <label htmlFor="paleo" className='choice2'><span className="sr-only">Paleo</span></label>
                    <input id="paleo" type="checkbox" value='paleo' className='sr-only'/>
                    <div className="dietInfoContainer">
                        <div className="iconContainer">
                            <img src={peanut} alt="" />
                        </div>
                        <p aria-hidden='true'>Paleo</p>
                    </div>
                </div>
            </Carousel>
        </form>
    )
}

export default DietForm;