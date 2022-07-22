import Gallery from './Gallery';
import fruitBowl from '../assets/fruit-bowl-2-img.webp';
import fruitBowlTwo from '../assets/fruit-bowl-img.webp';

const Home = () => {
    return(
        <main>
            <section className='homeSection'>
                <button className="searchButton"><i className="fa-solid fa-magnifying-glass"></i>Search for Recipes</button>
            </section>
            <Gallery/>
            <div className="bowlImage">
                <img src={fruitBowl} alt="" />
            </div>
            <div className="bowlImageTwo">
                <img src={fruitBowlTwo} alt="" />
            </div>
        </main>
    )
}

export default Home;