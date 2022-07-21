import Gallery from './Gallery';

const Home = () => {
    return(
        <main>
            <section className='homeSection'>
                <button className="searchButton"><i className="fa-solid fa-magnifying-glass"></i>Search for Recipes</button>
            </section>
            <Gallery/>
        </main>
    )
}

export default Home;