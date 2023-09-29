import React, { useState,useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cards from './pages/Cards';
import Heart from './pages/Heart';
import Portfolio from './pages/Portfolio';
import ReactsSideOfCan from './components/ReactsSideOfCan';


function App() {
const [cartCounting,setcartCounting] = useState(0);
const [activeIcon, setActiveIcon] = useState(''); // Initialize the activeIcon state
 

useState(() => {

},[cartCounting])

// ----------------search fun----------------

const childInputRef = useRef(null);

  const focusChildInput = () => {

    handleIconClickOne('search');
    
    if (childInputRef.current) {
      // Use the "focus" method to place the cursor in the child input field
      childInputRef.current.focus();
    }
  };

  // ---------- end ----------------------
 
const cartItems = (cardItemValue) => {

     setcartCounting(cardItemValue);
     console.log(cardItemValue,"the run app.js")
}

  const handleIconClickOne = (iconName) => {
    setActiveIcon(iconName); // Set the active icon based on the clicked icon name
  };

  return (
    <>
      <div className='d-flex mainBody position-relative'>
      <Router> 
          
        <div className='NavBarFooter min-vh-100 col-12 d-sm-block NavBar_Bg' style={{width:"5%"}}>
        <div className='d-lg-flex mt-lg-5 flex-lg-column p-lg-2 gap-lg-5 align-items-lg-center position-sticky top-0 NavBarFooter_inner' >
        {/* <div className='d-none d-lg-block'><ReactsSideOfCan  /></div>  */}
        {/* <Link onClick={((e) => handleIconClick(e))} className='navLink_icons navLink_icons_active w-100 text-center d-md-block' to="/">      <i onClick={((e) => handleIconClickOne(e))} className="icons border-0 NavBarFooter_inner_icons bi bi-house-door NavBarFooter_inner_icons_active "></i></Link>
        <Link onClick={((e) => handleIconClick(e))} className='navLink_icons  w-100 text-center d-md-block' to="/cards">                     <i onClick={((e) => handleIconClickOne(e))} className="icons border-0 NavBarFooter_inner_icons bi bi-cart-plus position-relative"><span className="position-absolute  top-0 start-100 translate-middle badge rounded-pill bg-warning " id='badgeChangePosition'>{cartCounting}+</span></i></Link>
        <Link onClick={((e) => handleIconClick(e))} className='navLink_icons  w-100 text-center d-md-block' to="/heart">                     <i onClick={((e) => handleIconClickOne(e))} className="icons border-0 NavBarFooter_inner_icons bi bi-suit-heart "></i></Link>
        <Link onClick={((e) => handleIconClick(e))} className='navLink_icons  w-100 text-center d-lg-block d-none' to="/portfolio">          <i onClick={((e) => handleIconClickOne(e))} className="icons border-0 NavBarFooter_inner_icons bi bi-person-gear  text-black"></i></Link> */}
        <Link
        onClick={() => handleIconClickOne('home')}
        className={`navLink_icons w-100 text-center d-md-block ${activeIcon === 'home' ? 'navLink_icons_active' : ''}`}
        to="/"
      >
        <i className={`icons border-0 NavBarFooter_inner_icons bi bi-house-door-fill text-secondary${activeIcon === 'home' ? 'NavBarFooter_inner_icons_active bi-house-fill text-warning' : ''}`}></i>
      </Link>

      <Link
        onClick={focusChildInput}
        className={`navLink_icons w-100 text-center d-lg-none ${activeIcon === 'search' ? 'navLink_icons_active' : ''}`}
        to=""
      >
        <i className={`icons border-0  NavBarFooter_inner_icons bi bi-search text-secondary position-relative ${activeIcon === 'search' ? 'NavBarFooter_inner_icons_active text-warning' : ''}`}></i>
      </Link>

      <Link
        onClick={() => handleIconClickOne('cart')}
        className={`navLink_icons w-100 text-center d-md-block ${activeIcon === 'cart' ? 'navLink_icons_active' : ''}`}
        to="/cards"
      >
        <i className={`icons border-0 NavBarFooter_inner_icons bi bi-cart-plus-fill text-secondary position-relative ${activeIcon === 'cart' ? 'NavBarFooter_inner_icons_active text-warning' : ''}`}>
          <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary ${activeIcon === 'cart' ? 'bg-warning' : ''}`}  id='badgeChangePosition'>{cartCounting}</span>
        </i>
      </Link>

      <Link
        onClick={() => handleIconClickOne('heart')}
        className={`navLink_icons w-100 text-center d-md-block ${activeIcon === 'heart' ? 'navLink_icons_active' : ''}`}
        to="/heart"
      >
        <i className={`icons border-0 NavBarFooter_inner_icons bi bi-suit-heart-fill text-secondary ${activeIcon === 'heart' ? 'NavBarFooter_inner_icons_active text-warning' : ''}`}></i>
      </Link>

      <Link
        onClick={() => handleIconClickOne('portfolio')}
        className={`navLink_icons w-100 text-center d-none ${activeIcon === 'portfolio' ? 'navLink_icons_active' : ''}`}
        to="/portfolio"
      >
        <i className={`icons border-0 NavBarFooter_inner_icons bi bi-person-gear text-black ${activeIcon === 'portfolio' ? 'NavBarFooter_inner_icons_active' : ''}`}></i>
      </Link>
        </div>
        

        </div>
      <Routes>
        <Route path='/' element={<Home  cartreciveFun={cartItems} inputRef={childInputRef} />} />
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
