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
                <div>
                    <label htmlFor="african">African</label>
                    <input id="african" type="checkbox" name="cuisine" value="african" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="american">American</label>
                    <input id="american" type="checkbox" name="cuisine" value="american" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="african">British</label>
                    <input id="british" type="checkbox" name="cuisine" value="british" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="cajun">Cajun</label>
                    <input id="cajun" type="checkbox" name="cuisine" value="cajun" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="caribbean">Caribbean</label>
                    <input id="caribbean" type="checkbox" name="cuisine" value="caribbean" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="chinese">Chinese</label>
                    <input id="chinese" type="checkbox" name="cuisine" value="chinese" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="eastern european">Eastern European</label>
                    <input id="eastern european" type="checkbox" name="cuisine" value="eastern european" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="european">European</label>
                    <input id="european" type="checkbox" name="cuisine" value="european" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="french">French</label>
                    <input id="french" type="checkbox" name="cuisine" value="french" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="german">German</label>
                    <input id="german" type="checkbox" name="cuisine" value="german" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="german">Greek</label>
                    <input id="greek" type="checkbox" name="cuisine" value="greek" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="indian">Indian</label>
                    <input id="indian" type="checkbox" name="cuisine" value="indian" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="irish">Irish</label>
                    <input id="irish" type="checkbox" name="cuisine" value="irish" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="italian">Italian</label>
                    <input id="italian" type="checkbox" name="cuisine" value="italian" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="japanese">Japanese</label>
                    <input id="japanese" type="checkbox" name="cuisine" value="japanese" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="jewish">Jewish</label>
                    <input id="jewish" type="checkbox" name="cuisine" value="jewish" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="korean">Korean</label>
                    <input id="korean" type="checkbox" name="cuisine" value="korean" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="latin american">Latin American</label>
                    <input id="latin american" type="checkbox" name="cuisine" value="latin american" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="mediterranean">Mediterranean</label>
                    <input id="mediterranean" type="checkbox" name="cuisine" value="mediterranean" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="mexican">Mexican</label>
                    <input id="mexican" type="checkbox" name="cuisine" value="mexican" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="middle eastern">Middle Eastern</label>
                    <input id="middle eastern" type="checkbox" name="cuisine" value="middle eastern" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="nordic">Nordic</label>
                    <input id="nordic" type="checkbox" name="cuisine" value="nordic" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="southern">Southern</label>
                    <input id="southern" type="checkbox" name="cuisine" value="southern" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="spanish">Spanish</label>
                    <input id="spanish" type="checkbox" name="cuisine" value="spanish" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="thai">Thai</label>
                    <input id="thai" type="checkbox" name="cuisine" value="thai" className="sr-only"/>
                </div>
                <div>
                    <label htmlFor="vietnamese">Vietnamese</label>
                    <input id="vietnamese" type="checkbox" name="cuisine" value="vietnamese" className="sr-only"/>
                </div>
            </Carousel>
        </form>
    )
}

export default Form;