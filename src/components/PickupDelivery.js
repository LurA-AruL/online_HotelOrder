
import React, { useEffect, useState } from "react";

function PickupDelivery({ CartdetailstoDelivery }) {

    const [orderSend, setOrderSend] = useState([]);
    const [specialComments,setSpecialComments] = useState(false);
    useEffect(() => {

        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setOrderSend(storedCart);
        console.log("trying");
        
    }, [CartdetailstoDelivery]);


    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        comments: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        phoneNumber: "",
        comments: "",
    });

    const minLength = 3; // Minimum length of the name
    const maxLength = 40; // Maximum length of the name
    const validCharsRegex = /^[a-zA-Z\s']+$/;

    const validateForm = () => {
        const { name, phoneNumber,comments } = formData;
        const newErrors = {};

        // Simple validation for name (required)
        if (!name) {
            newErrors.name = "Name is required";
        } else if (name.length < minLength || name.length > maxLength) {
            newErrors.name = "min 3 & max 40 letters";
        } else if (!validCharsRegex.test(name)) {
            newErrors.name = "Name is only letters";
        }



        // Simple validation for phone number (required, numeric)
        if (!phoneNumber) {
            newErrors.phoneNumber = "Phone Number is required";
        } else if (!/^\d+$/.test(phoneNumber)) {
            newErrors.phoneNumber = "Phone Number must contain only numbers";
        } else if (phoneNumber.length !== 10) {
            newErrors.phoneNumber = "Phone Number must be 10 numbers";
        }
        if(!comments){
            setSpecialComments(true);
            console.log('checking comments');
        }

       
        // Simple validation for comments (required)

        setErrors(newErrors);

        // Return true if there are no errors, false otherwise
        return Object.values(newErrors).every((error) => !error);
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        if (validateForm()) {
            // Submit the form data or perform further actions
            console.log("Form is valid and can be submitted.");
            const Nil = '-Nil';
            const total = orderSend.map(e => e.item_qty *  e.item_price).reduce((e,ee) => e+ee );
            const orderDetails = orderSend.map(event => `${event.item_qty} x ${event.item_name} = ${event.item_qty * event.item_price}`);
            const deliveryDetails = `Name: ${formData.name}\nContact Number: ${formData.phoneNumber}`;
            const message = `
*Dear Customer,*

    Thank you for placing an order with *Salem Biriyani* hotel 😋.

*Your Order Details:* 📋

${orderDetails.join('\n')}

*Total Amount* = ${total} /-

*Delivery Information:* 🛵 

~Delivery~ / Pickup Details:

${deliveryDetails}

*Special Instruction:* 🎯
    ${specialComments === false ? Nil : formData.comments  }

    _Kindly confirm the above details to proceed with your order_ 👆`;

            const sendData = encodeURIComponent(message);

            // console.log(document.forms[0][0].value = " ");
            // console.log(document.forms[0][1].value = " ");
            // console.log(document.forms[0][2].value = " ");

            window.open(`https://api.whatsapp.com/send/?phone=${formData.phoneNumber}&text=${sendData}&type=phone_number&app_absent=0`, '_blank');
        } else {
            console.log("Form has errors and cannot be submitted.");
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });


    };

    return (
        <div className="container ">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 pt-3 position-relative">
                <div className="form-group">
                    <label htmlFor="name" className="font_Headers">Name:</label>
                    <input
                        type="text"
                        className="form-control border-0 border-bottom border-white-50 rounded-0 px-0 py-1"
                        placeholder='Your name'
                        id="name"
                        name="name"
                        onChange={handleChange}

                    />
                    <span className="text-danger">{errors.name}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber" className="font_Headers">Contact Number:</label>
                    <input
                        type="text"
                        className="form-control border-0 border-bottom border-white-50 rounded-0 px-0 py-1"
                        placeholder='Enter contact number'
                        id="phoneNumber"
                        name="phoneNumber"
                        onChange={handleChange}
                    />
                    <span className="text-danger">{errors.phoneNumber}</span>
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="comments" className="font_Headers">Comments:</label>
                    <textarea
                        className="form-control border-0 border-bottom border-white-50 rounded-0 px-0 py-1"
                        placeholder="Leave a comment here"
                        id="comments"
                        name="comments"
                        rows="4"
                        onChange={handleChange}
                    />
                    <div className="form-text">We'll never share your location with anyone else.</div>
                    <span className="text-danger">{errors.comments}</span>
                </div>


                <div className="form-group sticky-lg-bottom d-none d-lg-block">
                    <button type="submit" className="btn border w-100 bg-warning whatsappBtn "><i className="bi bi-whatsapp px-2 text-success"></i>Order on Whatsapp</button>
                </div>
            </form>
        </div>
    );
}

export default PickupDelivery;

