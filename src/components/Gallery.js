import axios from "axios";

const Gallery = () => {

    // axios({
    //     url: 'https://api.spoonacular.com/recipes/complexSearch',
    //     method: 'GET',
    //     dataResponse: 'json',
    //     params: {
    //         apiKey: 'b816c6f070174a9596e8c0889839e0da',
    //         instructionsRequired: true,
    //         addRecipeInformation: true
    //     }
    // }).then( (response) => {
    //     console.log(response.data.results);
    // })

    return(
        <section className="gallerySection">
            <div className="wrapper">
                <h1>What type of cuisines are you craving for?</h1>
            </div>
        </section>
    )
}

export default Gallery;