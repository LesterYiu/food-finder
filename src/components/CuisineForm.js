import Carousel from 'react-elastic-carousel';
import { useState } from 'react';

const CuisineForm = (props) => {

    const {breakPoints, setUserCuisine, userCuisine, setIsFirstQuestion, setIsSecondQuestion} = props;

    const [isAfricanChecked, setIsAfricanChecked] = useState(false);
    const [isAmericanChecked, setIsAmericanChecked] = useState(false);
    const [isBritishChecked, setIsBritishChecked] = useState(false);
    const [isCajunChecked, setIsCajunChecked] = useState(false);
    const [isCarribeanChecked, setIsCarribeanChecked] = useState(false);
    const [isChineseChecked, setIsChineseChecked] = useState(false);
    const [isEastEuropeChecked, setIsEastEuropeanChecked] = useState(false);
    const [isEuropeanChecked, setIsEuropeanChecked] = useState(false);
    const [isFrenchChecked, setIsFrenchChecked] = useState(false);
    const [isGermanChecked, setIsGermanChecked] = useState(false);
    const [isGreekChecked, setIsGreekChecked] = useState(false);
    const [isIndianChecked, setIsIndianChecked] = useState(false);
    const [isIrishChecked, setIsIrishChecked] = useState(false);
    const [isItalianChecked, setIsItalianChecked] = useState(false);
    const [isJapanaeseChecked, setIsJapaneseChecked] = useState(false);
    const [isJewishChecked, setIsJewishChecked] = useState(false);
    const [isKoreanChecked, setIsKoreanChecked] = useState(false);
    const [isLatinAmericaChecked, setIsLatinAmericaChecked] = useState(false);
    const [isMediterraneanChecked, setIsMediterraneanChecked] = useState(false);
    const [isMexicanChecked, setIsMexicanChecked] = useState(false);
    const [isMiddleEasternChecked, setIsMiddleEasternChecked] = useState(false);
    const [isNordicChecked, setIsNordicChecked] = useState(false);
    const [isSouthernChecked, setIsSouthernChecked] = useState(false);
    const [isSpanishChecked, setIsSpanishChecked] = useState(false);
    const [isThaiChecked, setIsThaiChecked] = useState(false);
    const [isVietnameseChecked, setIsVietnameseChecked] = useState(false);

    const handleClick = (e, setCheckedFunc) => {

        if (e.target.checked === false) {
            let cuisineChoice = [...userCuisine];
            setUserCuisine(cuisineChoice.filter( (i) => {
                return i !== e.target.value;
            }));
            setCheckedFunc(false);
        } else {
            setUserCuisine([e.target.value , ...userCuisine]);
            setCheckedFunc(true);
        }
    }

    const handleSubmit = () => {
        setIsFirstQuestion(false);
        setIsSecondQuestion(true);
    }

    const handleTitleClick = (e, setCheckedFunc) => {
        const input = e.target.parentNode.childNodes[1];
        if (input.checked === false) {
            input.checked = true;
            setUserCuisine([input.value , ...userCuisine]);
            setCheckedFunc(true);
        } else {
            input.checked = false;
            let cuisineChoice = [...userCuisine];
            setUserCuisine(cuisineChoice.filter( (i) => {
                return i !== input.value;
            }));
            setCheckedFunc(false);
        }
    }

    return(
        <form name="cuisineForm">
            <legend><h1>What type of cuisines are you craving for?</h1></legend>
            <Carousel breakPoints={breakPoints}>
                <div className="foodContainer">
                    <label htmlFor="african" className={`african choice ${isAfricanChecked ? 'checked' : 'unchecked'}`}><span className='sr-only'>African</span></label>
                    <input id="african" type="checkbox" name="cuisine" value="african" className="sr-only" onClick={(e) => handleClick(e, setIsAfricanChecked)} />
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsAfricanChecked)}>African</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="american" className={`american choice ${isAmericanChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">American</span></label>
                    <input id="american" type="checkbox" name="cuisine" value="american" className="sr-only" onClick={(e) => handleClick(e, setIsAmericanChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsAmericanChecked)}>American</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="british" className={`british choice ${isBritishChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">British</span></label>
                    <input id="british" type="checkbox" name="cuisine" value="british" className="sr-only" onClick={(e) => handleClick(e, setIsBritishChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsBritishChecked)}>British</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="cajun" className={`cajun choice ${isCajunChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Cajun</span></label>
                    <input id="cajun" type="checkbox" name="cuisine" value="cajun" className="sr-only" onClick={(e) => handleClick(e, setIsCajunChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsCajunChecked)}>Cajun</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="carribean" className={`carribean choice ${isCarribeanChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Carribean</span></label>
                    <input id="carribean" type="checkbox" name="cuisine" value="caribbean" className="sr-only" onClick={(e) => handleClick(e, setIsCarribeanChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsCarribeanChecked)}>Carribean</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="chinese" className={`chinese choice ${isChineseChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Chinese</span></label>
                    <input id="chinese" type="checkbox" name="cuisine" value="chinese" className="sr-only" onClick={(e) => handleClick(e, setIsChineseChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsChineseChecked)}>Chinese</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="eastern european" className={`easternEuropean choice ${isEastEuropeChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Eastern European</span></label>
                    <input id="eastern european" type="checkbox" name="cuisine" value="eastern european" className="sr-only" onClick={(e) => handleClick(e, setIsEastEuropeanChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsEastEuropeanChecked)}>Eastern European</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="european" className={`european choice ${isEuropeanChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">European</span></label>
                    <input id="european" type="checkbox" name="cuisine" value="european" className="sr-only" onClick={(e) => handleClick(e, setIsEuropeanChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsEuropeanChecked)}>European</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="french" className={`french choice ${isFrenchChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">French</span></label>
                    <input id="french" type="checkbox" name="cuisine" value="french" className="sr-only" onClick={(e) => handleClick(e, setIsFrenchChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsFrenchChecked)}>French</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="german" className={`german choice ${isGermanChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">German</span></label>
                    <input id="german" type="checkbox" name="cuisine" value="german" className="sr-only" onClick={(e) => handleClick(e, setIsGermanChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsGermanChecked)}>German</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="greek" className={`greek choice ${isGreekChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Greek</span></label>
                    <input id="greek" type="checkbox" name="cuisine" value="greek" className="sr-only" onClick={(e) => handleClick(e, setIsGreekChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsGreekChecked)}>Greek</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="indian" className={`indian choice ${isIndianChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Indian</span></label>
                    <input id="indian" type="checkbox" name="cuisine" value="indian" className="sr-only" onClick={(e) => handleClick(e, setIsIndianChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsIndianChecked)}>Indian</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="irish" className={`irish choice ${isIrishChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Irish</span></label>
                    <input id="irish" type="checkbox" name="cuisine" value="irish" className="sr-only" onClick={(e) => handleClick(e, setIsIrishChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsIrishChecked)}>Irish</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="italian" className={`italian choice ${isItalianChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Italian</span></label>
                    <input id="italian" type="checkbox" name="cuisine" value="italian" className="sr-only" onClick={(e) => handleClick(e, setIsItalianChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsItalianChecked)}>Italian</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="japanese" className={`japanese choice ${isJapanaeseChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Japanese</span></label>
                    <input id="japanese" type="checkbox" name="cuisine" value="japanese" className="sr-only" onClick={(e) => handleClick(e, setIsJapaneseChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsJapaneseChecked)}>Japanese</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="jewish" className={`jewish choice ${isJewishChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Jewish</span></label>
                    <input id="jewish" type="checkbox" name="cuisine" value="jewish" className="sr-only" onClick={(e) => handleClick(e, setIsJewishChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsJewishChecked)}>Jewish</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="korean" className={`korean choice ${isKoreanChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Korean</span></label>
                    <input id="korean" type="checkbox" name="cuisine" value="korean" className="sr-only" onClick={(e) => handleClick(e, setIsKoreanChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsKoreanChecked)}>Korean</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="latin american" className={`latinAmerican choice ${isLatinAmericaChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Latin American</span></label>
                    <input id="latin american" type="checkbox" name="cuisine" value="latin american" className="sr-only" onClick={(e) => handleClick(e, setIsLatinAmericaChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsLatinAmericaChecked)}>Latin American</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="mediterranean" className={`mediterranean choice ${isMediterraneanChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Mediterranean</span></label>
                    <input id="mediterranean" type="checkbox" name="cuisine" value="mediterranean" className="sr-only" onClick={(e) => handleClick(e, setIsMediterraneanChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsMediterraneanChecked)}>Mediterranean</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="mexican" className={`mexican choice ${isMexicanChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Mexican</span></label>
                    <input id="mexican" type="checkbox" name="cuisine" value="mexican" className="sr-only" onClick={(e) => handleClick(e, setIsMexicanChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsMexicanChecked)}>Mexican</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="middle eastern" className={`middleEastern choice ${isMiddleEasternChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Middle Eastern</span></label>
                    <input id="middle eastern" type="checkbox" name="cuisine" value="middle eastern" className="sr-only" onClick={(e) => handleClick(e, setIsMiddleEasternChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsMiddleEasternChecked)}>Middle Eastern</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="nordic" className={`nordic choice ${isNordicChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Nordic</span></label>
                    <input id="nordic" type="checkbox" name="cuisine" value="nordic" className="sr-only" onClick={(e) => handleClick(e, setIsNordicChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsNordicChecked)}>Nordic</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="southern" className={`southern choice ${isSouthernChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Southern</span></label>
                    <input id="southern" type="checkbox" name="cuisine" value="southern" className="sr-only" onClick={(e) => handleClick(e, setIsSouthernChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsSouthernChecked)}>Southern</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="spanish" className={`spanish choice ${isSpanishChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Spanish</span></label>
                    <input id="spanish" type="checkbox" name="cuisine" value="spanish" className="sr-only" onClick={(e) => handleClick(e, setIsSpanishChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsSpanishChecked)}>Spanish</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="thai" className={`thai choice ${isThaiChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Thai</span></label>
                    <input id="thai" type="checkbox" name="cuisine" value="thai" className="sr-only" onClick={(e) => handleClick(e, setIsThaiChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsThaiChecked)}>Thai</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="vietnamese" className={`vietnamese choice ${isVietnameseChecked ? 'checked' : 'unchecked'}`}><span className="sr-only">Vietnamese</span></label>
                    <input id="vietnamese" type="checkbox" name="cuisine" value="vietnamese" className="sr-only" onClick={(e) => handleClick(e, setIsVietnameseChecked)}/>
                    <p className="cuisineIdentifier" aria-hidden="true" onClick={(e) => handleTitleClick(e, setIsVietnameseChecked)}>Vietnamese</p>
                </div>
            </Carousel>
            <button type='submit' onClick={handleSubmit}>Next</button>
        </form>
    )
}

export default CuisineForm;