import Carousel from 'react-elastic-carousel';

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 3},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 6},    
];

const Form = () => {
    return(
        <form action="">
            <Carousel focusOnSelect={true} breakPoints={breakPoints} itemsToScroll={2}>
                <div>
                    <label htmlFor="american">American</label>
                    <input id="american" type="checkbox" name="cuisine" value="american" />
                </div>
                <div>
                    <label htmlFor="african">African</label>
                    <input id="african" type="checkbox" name="cuisine" value="african" />
                </div>
                <div>
                    <label htmlFor="african">British</label>
                    <input id="british" type="checkbox" name="cuisine" value="british" />
                </div>
                <div>
                    <label htmlFor="cajun">Cajun</label>
                    <input id="cajun" type="checkbox" name="cuisine" value="cajun" />
                </div>
                <div>
                    <label htmlFor="caribbean">Caribbean</label>
                    <input id="caribbean" type="checkbox" name="cuisine" value="caribbean" />
                </div>
                <div>
                    <label htmlFor="chinese">Chinese</label>
                    <input id="chinese" type="checkbox" name="cuisine" value="chinese" />
                </div>
                <div>
                    <label htmlFor="eastern european">Eastern European</label>
                    <input id="eastern european" type="checkbox" name="cuisine" value="eastern european" />
                </div>
                <div>
                    <label htmlFor="european">European</label>
                    <input id="european" type="checkbox" name="cuisine" value="european" />
                </div>
                <div>
                    <label htmlFor="french">French</label>
                    <input id="french" type="checkbox" name="cuisine" value="french" />
                </div>
                <div>
                    <label htmlFor="german">German</label>
                    <input id="german" type="checkbox" name="cuisine" value="german" />
                </div>
                <div>
                    <label htmlFor="german">Greek</label>
                    <input id="greek" type="checkbox" name="cuisine" value="greek" />
                </div>
                <div>
                    <label htmlFor="indian">Indian</label>
                    <input id="indian" type="checkbox" name="cuisine" value="indian" />
                </div>
                <div>
                    <label htmlFor="irish">Irish</label>
                    <input id="irish" type="checkbox" name="cuisine" value="irish" />
                </div>
                <div>
                    <label htmlFor="italian">Italian</label>
                    <input id="italian" type="checkbox" name="cuisine" value="italian" />
                </div>
                <div>
                    <label htmlFor="japanese">Japanese</label>
                    <input id="japanese" type="checkbox" name="cuisine" value="japanese" />
                </div>
                <div>
                    <label htmlFor="jewish">Jewish</label>
                    <input id="jewish" type="checkbox" name="cuisine" value="jewish" />
                </div>
                <div>
                    <label htmlFor="korean">Korean</label>
                    <input id="korean" type="checkbox" name="cuisine" value="korean" />
                </div>
                <div>
                    <label htmlFor="latin american">Latin American</label>
                    <input id="latin american" type="checkbox" name="cuisine" value="latin american" />
                </div>
                <div>
                    <label htmlFor="mediterranean">Mediterranean</label>
                    <input id="mediterranean" type="checkbox" name="cuisine" value="mediterranean" />
                </div>
                <div>
                    <label htmlFor="mexican">Mexican</label>
                    <input id="mexican" type="checkbox" name="cuisine" value="mexican" />
                </div>
                <div>
                    <label htmlFor="middle eastern">Middle Eastern</label>
                    <input id="middle eastern" type="checkbox" name="cuisine" value="middle eastern" />
                </div>
                <div>
                    <label htmlFor="nordic">Nordic</label>
                    <input id="nordic" type="checkbox" name="cuisine" value="nordic" />
                </div>
                <div>
                    <label htmlFor="southern">Southern</label>
                    <input id="southern" type="checkbox" name="cuisine" value="southern" />
                </div>
                <div>
                    <label htmlFor="spanish">Spanish</label>
                    <input id="spanish" type="checkbox" name="cuisine" value="spanish" />
                </div>
                <div>
                    <label htmlFor="thai">Thai</label>
                    <input id="thai" type="checkbox" name="cuisine" value="thai" />
                </div>
                <div>
                    <label htmlFor="vietnamese">Vietnamese</label>
                    <input id="vietnamese" type="checkbox" name="cuisine" value="vietnamese" />
                </div>
            </Carousel>
        </form>
    )
}

export default Form;