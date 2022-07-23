import Carousel from 'react-elastic-carousel';

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 3},
    {width: 768, itemsToShow: 4},
    {width: 1200, itemsToShow: 6},    
];

const Form = () => {
    return(
        <form action="">
            <legend><h1>What type of cuisines are you craving for?</h1></legend>
            <Carousel focusOnSelect={true} breakPoints={breakPoints}>
                <div className="foodContainer">
                    <label htmlFor="african" className="african choice"><span className="sr-only">African</span></label>
                    <input id="african" type="checkbox" name="cuisine" value="african" className="sr-only"/>
                    <p className="cuisineIdentifier" aria-hidden="true">African</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="american" className="american choice"><span className="sr-only">American</span></label>
                    <input id="american" type="checkbox" name="cuisine" value="american" className="sr-only"/>
                    <p className="cuisineIdentifier" aria-hidden="true">American</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="african" className="british choice"><span className="sr-only">British</span></label>
                    <input id="british" type="checkbox" name="cuisine" value="british" className="sr-only"/>
                    <p className="cuisineIdentifier" aria-hidden="true">British</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="cajun" className="cajun choice"><span className="sr-only">Cajun</span></label>
                    <input id="cajun" type="checkbox" name="cuisine" value="cajun" className="sr-only"/>
                    <p className="cuisineIdentifier" aria-hidden="true">Cajun</p>
                </div>
                <div className="foodContainer">
                    <label htmlFor="caribbean" className="carribean choice"><span className="sr-only">Carribean</span></label>
                    <input id="caribbean" type="checkbox" name="cuisine" value="caribbean" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="chinese" className="chinese choice"><span className="sr-only">Chinese</span></label>
                    <input id="chinese" type="checkbox" name="cuisine" value="chinese" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="eastern european" className="easternEuropean choice"><span className="sr-only">Eastern European</span></label>
                    <input id="eastern european" type="checkbox" name="cuisine" value="eastern european" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="european" className="european choice"><span className="sr-only">European</span></label>
                    <input id="european" type="checkbox" name="cuisine" value="european" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="french" className="french choice"><span className="sr-only">French</span></label>
                    <input id="french" type="checkbox" name="cuisine" value="french" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="german" className="german choice"><span className="sr-only">German</span></label>
                    <input id="german" type="checkbox" name="cuisine" value="german" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="german" className="greek choice"><span className="sr-only">Greek</span></label>
                    <input id="greek" type="checkbox" name="cuisine" value="greek" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="indian" className="indian choice"><span className="sr-only">Indian</span></label>
                    <input id="indian" type="checkbox" name="cuisine" value="indian" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="irish" className="irish choice"><span className="sr-only">Irish</span></label>
                    <input id="irish" type="checkbox" name="cuisine" value="irish" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="italian" className="italian choice"><span className="sr-only">Italian</span></label>
                    <input id="italian" type="checkbox" name="cuisine" value="italian" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="japanese" className="japanese choice"><span className="sr-only">Japanese</span></label>
                    <input id="japanese" type="checkbox" name="cuisine" value="japanese" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="jewish" className="jewish choice"><span className="sr-only">Jewish</span></label>
                    <input id="jewish" type="checkbox" name="cuisine" value="jewish" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="korean" className="korean choice"><span className="sr-only">Korean</span></label>
                    <input id="korean" type="checkbox" name="cuisine" value="korean" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="latin american" className="latinAmerican choice"><span className="sr-only">Latin American</span></label>
                    <input id="latin american" type="checkbox" name="cuisine" value="latin american" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="mediterranean" className="mediterranean choice"><span className="sr-only">Mediterranean</span></label>
                    <input id="mediterranean" type="checkbox" name="cuisine" value="mediterranean" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="mexican" className="mexican choice"><span className="sr-only">Mexican</span></label>
                    <input id="mexican" type="checkbox" name="cuisine" value="mexican" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="middle eastern" className="middleEastern choice"><span className="sr-only">Middle Eastern</span></label>
                    <input id="middle eastern" type="checkbox" name="cuisine" value="middle eastern" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="nordic" className="nordic choice"><span className="sr-only">Nordic</span></label>
                    <input id="nordic" type="checkbox" name="cuisine" value="nordic" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="southern" className="southern choice"><span className="sr-only">Southern</span></label>
                    <input id="southern" type="checkbox" name="cuisine" value="southern" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="spanish" className="spanish choice"><span className="sr-only">Spanish</span></label>
                    <input id="spanish" type="checkbox" name="cuisine" value="spanish" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="thai" className="thai choice"><span className="sr-only">Thai</span></label>
                    <input id="thai" type="checkbox" name="cuisine" value="thai" className="sr-only"/>
                </div>
                <div className="foodContainer">
                    <label htmlFor="vietnamese" className="vietnamese choice"><span className="sr-only">Vietnamese</span></label>
                    <input id="vietnamese" type="checkbox" name="cuisine" value="vietnamese" className="sr-only"/>
                </div>
            </Carousel>
        </form>
    )
}

export default Form;