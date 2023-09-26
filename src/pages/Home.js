import React, { useEffect, useState, Component } from 'react'
import Delivery from '../components/Delivery';
// import Cards from './Cards';
import ShoppingCart from './ShoppingCart';


export default function Home() {

  // const api = "http://localhost:5000/comments";

  const [cart, setCart] = useState([]);
  // const [totalAmount, SetTotalAmount] = useState([]);

  

  useEffect(() => {
    // Load the cart from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  

  //  ------------------------------ Adding Cart Total Amount and values --------------------------------------

  function sumTotal(arrNumber) {

    return arrNumber.reduce((acc, currentValue) => acc + currentValue, 0);

  }
  
  const TotalValus = cart.map(events => events.item_price * events.item_qty);
  const result = sumTotal(TotalValus);

  //  ------------ To formatted into  currency Simbols ------------------------------

  const formattedAmount = result.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

// ---------------------------------- Aside Carts items Updating function here --------------------------------

const updateCart = (updatedCart) => {
  // Update the cart in component state
  setCart(updatedCart);
  // Update the cart in localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

  // ---------------------------------- Aside and Main Carts items Adding function here --------------------------------
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.item_id === item.item_id);

    if (existingItemIndex !== -1) {
      // Item is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].item_qty += 1;
      updateCart(updatedCart);
    } else {
      // Item is not in the cart, add it
      const updatedCart = [...cart, { ...item, item_qty: 1 }];
      updateCart(updatedCart);
    }
  };

  // ---------------------------------- Aside Carts items Removing function here --------------------------------   

  const removeFromCart = (item) => {
    // Find the item in the cart
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.item_id === item.item_id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      // Decrease the item quantity and remove it if quantity becomes zero
      updatedCart[existingItemIndex].item_qty -= 1;

      if (updatedCart[existingItemIndex].item_qty === 0) {
        updatedCart.splice(existingItemIndex, 1);
      }

      updateCart(updatedCart);
    }
  };
  return (
    <>
      <div className='d-flex col-lg-11 col-12 homeMainDiv'>
        <div className='px-md-4 py-3 col-12 col-sm-10 col-lg-9'>
          {/*------------------------------------- The Header components here---------------------  */}
          <header className='d-flex flex-row align-items-center justify-content-center'>
            <div className='logo col-3 col-sm-2  text-end'>
              <img src="images/salem_biriyani_logo.webp" className='w-75 front_corsur' alt='no image found' />
            </div>
            <div className='col-8 col-md-8 ps-lg-4' >
              {/* <p className=' mb-1 text-center text-lg-start font-monospace text-muted promotionText'><i class="bi bi-emoji-smile-upside-down text-warning"></i> Freshly Cooked, Always Delicious!</p> */}
              <input className="form-control p-lg-2 rounded-pill" type="search" placeholder="what would you like to eat?" id="example-search-input" />
            </div>
            <div className='col-1 col-md-2'>
              <i className="bi bi-filter front_corsur filler_icon" ></i>
            </div>
          </header>
          {/*------------------------------------- The panner components here---------------------  */}
          <div id="carouselExampleIndicators" className="carousel slide p-3 " data-bs-ride="carousel">
            <div className="carousel-indicators">
              <div>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src="images/panner_1.png" className="panner_image" alt="no image found" />
              </div>
              <div className="carousel-item">
                <img src="images/panner_1.png" className="panner_image" alt="no image found" />
              </div>
              <div className="carousel-item">
                <img src="images/panner_1.png" className="panner_image" alt="no image found" />
              </div>
            </div>
          </div>

          {/* ------------------------------------- The Avaible items Filters Buttom components here---------------------  */}
                  {/* if you want set the Avaible items Filters Buttom here */}

          {/*------------------------------------- The Available cart Item Displays components here---------------------  */}
          <div className='d-flex gap-2 flex-wrap py-2 card_Main position-relative'>
            <ShoppingCart Cartdetails={cart} addToCart={addToCart} removeFromCart={removeFromCart} formattedAmountSendToMb={formattedAmount}/>
          </div>

        {/*------------------------------------- The Main Session to be end.... ---------------------  */}
          
        </div>
        {/*------------------------------------- the Aside components here---------------------  */}
        <div className='col-lg-3 d-md-block d-none p-2 asideBg_color position-relative'>
          <div className=' d-flex flex-column align-items-center position-sticky top-0 mt-2 ' >
            <div className='my-order w-100 fs-6 fw-bold ps-3 d-flex '><div className='OrderOption'><img src='assests/ordericon.png' className='w-100' alt='no image found' /></div><div className='ps-1'>My Order</div></div>

            <div className='w-100 d-flex flex-column align-items-center border-bottom'>
              {/*------------------------------------- The Aside Cart Adding and displaying components here---------------------  */}

              <div className='d-flex flex-column px-3 pt-2 cartItems_Scroll overflow-auto'>
                {/* {cart.length} */}
                {cart.length == 0 ?
                  <img src='assests/emtycart.gif' className='w-100' alt='no image' /> 
                  :
                  cart.map((e, index) => (
                    <div className="card border-0 mb-1" style={{ maxWidth: 300 + "px" }} key={index}>
                      <div className="row px-3">
                        <div className="col-md-4 rounded d-flex align-items-center">
                          <img src={e.item_image} className="img-fluid rounded" alt="no image found" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <div className=''>
                              <h5 className="card-title asideCartHeader" >{e.item_name}</h5>
                              <div className="card-price SideCardprice d-flex"><i className="bi bi-currency-rupee "></i><span>
                                {cart.map((item, index) => (
                                  <div key={index} className=''>
                                    {item.item_id == e.item_id ? + item.item_qty * item.item_price : <></>}
                                  </div>
                                ))}
                              </span>
                              </div>
                            </div>
                            <div className='mt-1'>
                              {cart.map((item, index) => (
                                <div key={index} className='d-flex gap-3 align-item-center '>
                                  {item.item_id == e.item_id ? <>
                                    <button className='btn border' onClick={() => removeFromCart(item)}>-</button>
                                    <div className='p-1 d-flex align-items-center'>{item.item_qty}</div>
                                    <button className='btn border' onClick={() => addToCart(item)}>+</button></>
                                    : <></>}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                                    
                  ))}
                    {/*--------------------------- Total Amount Component here ------------------------- */}
                    {result !== 0 ? 
                         <div className='position-sticky bottom-0 bg-white rounded py-2'>
                             <div className='d-flex justify-content-between p-2 '><span className='fontGold'>Total Amount</span><span className='rupesText'>{formattedAmount}</span></div>
                             {/* <div className='d-flex justify-content-between'><span className='fontGold'>Delivery free</span><span className='rupesText'>Free</span></div> */}
                         </div>
                    : <></> }
              </div>
              {/*------------------------------------- The delivery components here---------------------  */}
              <div className='deliveryArea mt-lg-5 border-1 border-warning border-top w-100'>
                <Delivery Cartdetails={cart} />
              </div>

            </div>
            {/* <TotalValus /> */}
          </div>
        </div>
      </div>
    </>
  )
}
