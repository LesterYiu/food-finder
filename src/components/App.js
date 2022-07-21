import '../styles/App.scss';
import {Routes, Route} from 'react-router-dom'

import Home from './Home';
import Options from './Options';
import Gallery from './Gallery';
import Footer from './Footer';


function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Options/>
          <Home/>
          <Gallery/>
          <Footer/>
        </>
      }/>

      {/* Product ID Route WIP */}
    </Routes>
  );
}

export default App;
