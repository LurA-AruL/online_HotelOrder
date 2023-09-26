import React, { useEffect, useState } from 'react'
import '../styles/Delivery.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import DeliveryDetails from './DeliveryDetails';
import PickupDelivery from './PickupDelivery';

export default function Delivery({Cartdetails}) {

    const [delivery,SetDelivery] = useState([]);
    
    // const [formData,setFormData] = useState("");
    // const [name,setName] = useState("");
    // const [phonoNo,setPhoneNo] = useState("");
    // const [address1,setAddress1] = useState("");
    // const [address2,setAddress2] = useState("");
    // const [specialComments,setSpecialCommands] = useState("");

    // const [nameError, setNameError] = useState(false);
    // const [phoneError, setphoneError] = useState(false);
    // const [addressErro, setAddressError] = useState(false);
    // const [address2Erro, setAddress2Error] = useState(false);
    // const [specialCommentsErro, setspecialCommendsError] = useState(false);

    // const [sendWhatsappFun, setSendWhatsappFun] = useState(false);

    


    
    useEffect(() => {
        // handleSendApi();
    },[Cartdetails]);


    // const initialValues = {
    //     name: '',
    //     phoneNumber: '',
    //     address1: '',
    //     address2: '',
    //     additionalInfo: '', // New textarea field
    //   };

    //   const initialValuesPickup = {
    //     name: '',
    //     phoneNumber: '',
    //     additionalInfo: '', // New textarea field
    //   };
    
      // Define a validation function for the form
    //   const validate = (values) => {
    //     const errors = {};
    
    //     if (!values.name) {
    //       errors.name = 'Name is required*';
    //     }else if (!/^[A-Za-z\s]+$/.test(values.name)) {
    //         errors.name = 'Name should contain only letters and spaces';
    //     }else if (values.name.length < 3 || values.name.length > 50) {
    //         errors.name = 'Name should be between 3 and 30 characters';
    //       }
    
    //     if (!values.phoneNumber) {
    //       errors.phoneNumber = 'Phone Number is required*';
    //     } else if (!/^\d{10}$/i.test(values.phoneNumber)) {
    //       errors.phoneNumber = 'Invalid Phone Number';
    //     }
    
    //     if (!values.address1) {
    //       errors.address1 = 'Address Line 1 is required*';
    //     }else if (values.address1.length < 5 || values.address1.length > 100) {
    //         errors.address1 = 'Address 1 should be between 5 and 100 characters';
    //     }

    //     if (!values.address2) {
    //         errors.address2 = 'Address 2 is required*';
    //       } else if (values.address2.length < 5 || values.address2.length > 100) {
    //         errors.address2 = 'Address 2 should be between 5 and 100 characters';
    //       }

    //     if (!values.additionalInfo) {
    //         errors.additionalInfo = 'Additional Info is required*'; // Validation for the new textarea
    //       }
    
    //     return errors;
    //   };
      
    //   const validatePickup = (values) => {
    //     const errors = {};
    
    //     if (!values.name) {
    //       errors.name = 'Name is required*';
    //     }else if (!/^[A-Za-z\s]+$/.test(values.name)) {
    //         errors.name = 'Name should contain only letters and spaces';
    //     }else if (values.name.length < 3 || values.name.length > 50) {
    //         errors.name = 'Name should be between 3 and 30 characters';
    //       }
    
    //     if (!values.phoneNumber) {
    //       errors.phoneNumber = 'Phone Number is required*';
    //     } else if (!/^\d{10}$/i.test(values.phoneNumber)) {
    //       errors.phoneNumber = 'Invalid Phone Number';
    //     }
    //     if (!values.additionalInfo) {
    //         errors.additionalInfo = 'Additional Info is required*'; // Validation for the new textarea
    //       }
    
    //     return errors;
    //   };
    
      // Define a submit function to handle form submission
    //   const handleSubmit = (values, { setSubmitting }) => {
    //     // Handle form submission logic here
    //     console.log(values);
    
    //     // Don't forget to call setSubmitting(false) when done to enable the submit button
    //     setSubmitting(false);
    //   };

      // Define a submit function to handle form submission
    //   const handleSubmitPickup = (values, { setSubmitting }) => {
    //     // Handle form submission logic here
    //     console.log(values);
    
    //     // Don't forget to call setSubmitting(false) when done to enable the submit button
    //     setSubmitting(false);
    //   };


    // ------------------------ send to whatsapp
    // const handleSendApi = () => {
    //     console.log(formData);
    // }

    // --------------------- clear value 
    // const formValueClear = () => {
    //     setName("");
    //     setPhoneNo("");
    //     setAddress1("");
    //     setAddress2("");
    //     setSpecialCommands("");
    // }
    // --------------------- delivery optional buttons ----------------------
    const handleToggleBtn = (event) => {
        SetDelivery(event);
        // formValueClear();
    }
    
    // ----------- form value submitted -----------------------------
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     console.log(event)
    //     if(name.trim().length === 0){
    //         setNameError(true)
    //     }
    //     else if(phonoNo.length !== 10 ){
    //         setNameError(false)
    //         setphoneError(true)
    //     }
    //     else if(address1.trim().length  === 0){
    //         setphoneError(false)
    //         setAddressError(true)
            
    //     }
    //     else if(address2.trim().length  === 0){
    //         setAddressError(false)
    //         setAddress2Error(true)
    //     }
    //     else if(specialComments.trim().length === 0){
    //         setAddress2Error(false)
    //         setspecialCommendsError(true)   
    //     }
    //     else{
    //         setspecialCommendsError(false);  
    //         setSendWhatsappFun(true);
    //         setAddressError(false);
    //         setAddress2Error(false);
    //         setNameError(false);
    //         setphoneError(false);
        
    //         let data = [{
    //             Name: name,
    //             Phone_Number: phonoNo,
    //             Address1 : address1,
    //             Address2 : address2,
    //             SpecialComments : specialComments
    
    //         }]

    //     //     // console.log(data.customerName);
    //         window.open(`https://api.whatsapp.com/send/?phone=${phonoNo}&text=${data.map(e => "Name: "+e.Name + "; Addresss: "+e.Address1 +"; Addresss2: "+e.Address2+"; phone number: "+e.Phone_Number)}&type=phone_number&app_absent=0`, '_blank');
            
            
    //     }
        
        
        
    //     // name.trim().length === 0 ? setNameError(true) : setNameError(false) ;
    //     // phonoNo.trim().length !== 10 ?  setphoneError(true) : setphoneError(false) ;
    //     // address1.trim().length === 0 ?  setAddressError(true) :  setAddressError(false);
    //     // address2.trim().length  === 0? setAddress2Error(true) : setAddress2Error(false);
    //     // specialComments.trim().length === 0 ? setspecialCommendsError(true) : setspecialCommendsError(false);
        
    //     // let x = [nameError,phoneError,addressErro,address2Erro,specialCommentsErro];
        
        
    //     // let data = [{
    //     //     Name: name,
    //     //     Phone_Number: phonoNo,
    //     //     Address1 : address1,
    //     //     Address2 : address2,
    //     //     SpecialComments : specialComments

    //     // }]

    // //     setFormData();
    // //     // console.log(data.customerName);
    // //     window.open(`https://api.whatsapp.com/send/?phone=${phonoNo}&text=${data.map(e => "Name: "+e.Name + "; Addresss: "+e.Address1 +"; Addresss2: "+e.Address2+"; phone number: "+e.Phone_Number)}&type=phone_number&app_absent=0`, '_blank');

    // //    // window.open() = 'https://api.whatsapp.com/send/?phone=919500802940&text=g&type=phone_number&app_absent=0';
    // //     formValueClear();
    // }
    
    // ------------------------ Nav item active event -----------------------------

    let links = document.querySelectorAll('.nav-link');
        for(let i=0; i<links.length; i++){
        links[i].addEventListener('click', function() {
        for(let j=0; j<links.length; j++)
        links[j].classList.remove('actives');
        this.classList.add('actives');
        });
    }


    
  return (
    <>
          <div>
              <ul className="nav nav-tabs py-3">
                  <li className="nav-item">
                      <a className="nav-link d-flex justify-content-center align-items-center gap-2 actives" href="#" name='Pickup' onClick={((e) => handleToggleBtn(e.target.name))}><div className='pickupOption'><img src='assests/pickup.png' className='w-100' alt='no image found' /></div>Pickup</a>
                  </li>
                  <li className="nav-item me-2 position-relative d-flex">
                      <a className="nav-link d-flex justify-content-center align-items-center" aria-current="page" href="#" name='Delivery' onClick={((e) => handleToggleBtn(e.target.name))}><div className='DeliveryOption'><img src='assests/demo1.png' className='w-100' alt='no image found' /></div>Delivery</a>
                  </li>

              </ul>

              <div className='w-100'>
                  {delivery === "Delivery" ? <DeliveryDetails CartdetailstoDelivery={Cartdetails} /> : <PickupDelivery CartdetailstoDelivery={Cartdetails} />}
              </div>
          </div>
    </>
  )
}
