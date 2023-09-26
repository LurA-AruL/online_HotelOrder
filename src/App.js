import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cards from './pages/Cards';
import Heart from './pages/Heart';
import Portfolio from './pages/Portfolio';
import ReactsSideOfCan from './components/ReactsSideOfCan';


function App() {
const [cartCounting,setcartCounting] = useState(0);

 

useState(() => {

},[cartCounting])
 
const cartItems = (cardItemValue) => {

     setcartCounting(cardItemValue);
     console.log(cardItemValue,"the run app.js")
}


  return (
    <>
      <div className='d-flex mainBody position-relative'>
      <Router> 
          
        <div className='NavBarFooter col-12 col-sm-2 min-vh-100 d-sm-block ' style={{width:"80px"}}>
        <div className='d-lg-flex flex-lg-column p-lg-2 gap-lg-4 align-items-lg-center position-sticky top-0 NavBarFooter_inner'>
        <div className='d-none d-sm-block'><ReactsSideOfCan  /></div> 
        <Link className='navLink_icons w-100 text-center rounded d-md-block' to="/">     <i className="icons NavBarFooter_inner_icons bi bi-house-door  "></i></Link>
        <Link className='navLink_icons w-100 text-center rounded d-md-block' to="/cards"><i className="icons NavBarFooter_inner_icons bi bi-cart-plus position-relative"><span className="position-absolute  top-0 start-100 translate-middle badge rounded-pill bg-warning " id='badgeChangePosition'>{cartCounting}+</span></i></Link>
        <Link className='navLink_icons w-100 text-center rounded d-md-block' to="/heart"><i className="icons NavBarFooter_inner_icons bi bi-suit-heart "></i></Link>
        <Link className='navLink_icons w-100 text-center rounded d-md-block d-none' to="/portfolio"><i className="icons NavBarFooter_inner_icons bi bi-person-gear  text-black"></i></Link>
        </div>
        

        </div>
      <Routes>
        <Route path='/' element={<Home  cartreciveFun={cartItems}/>} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/heart' element={<Heart />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
