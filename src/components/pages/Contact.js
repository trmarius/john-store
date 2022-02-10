import React, { useState } from 'react';
import './Contact.css';
import {
	FaFacebook,
	FaInstagram,
	FaTelegram,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import Swal from 'sweetalert2';


const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const [FirstNameValue, setFirstNameValue] = useState('');
    const [LastNameValue, setLastNameValue] = useState('');
    const [EmailValue, setEmailValue] = useState('');
    const [NumberValue, setNumberValue] = useState('');
    const [MessageValue, setMessageValue] = useState('');

    
   

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      let destination = "marius.trufasu10@gmail.com";
    //   let destination = "tr.marius@yahoo.com";
      const { name, lastname, email, mobile, message } = e.target.elements;
      let details = {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        mobile: mobile.value,
        message: message.value,
        to: email.value
      };
      let response = await fetch("https://mail-server-tm.herokuapp.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
    //   alert(result.status);

      if(result.status = "Message Sent") {
        Swal.fire({
            title:'Message sent!',
            text:'We will contact you as soon as possible.',
            icon:'success',
            timer: 5000
        });
        
        setFirstNameValue("");
        setLastNameValue("");
        setEmailValue("");
        setNumberValue("");
        setMessageValue("");
      }
      else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'It was a problem sending your message.!',
            footer: '<div style="text-align: center">You can try to send the email from your email client to the address: raduionutz110@gmail.com</div>',
            timer: 5000
        })
      }

    };
    
    

    

    return (
        <>
            <div className="header">
            <h3>CONTACT US!</h3>
                <section>
                    <div className="container">
                        <div className="contactinfo">
                            <div className="bigspace">
                                <h2>Contact Info</h2>
                                <ul className="info">
                                    {/* <li>
                                        <span><img src="images/location.png"/></span>
                                        <span>2912  Meadowbrook Road<br/>
                                        Los Angeles, CA<br/>
                                        90017</span>
                                    </li> */}
                                    <li>
                                        <span><img src="images/mail2.png" /></span>
                                        <span><a href="mailto:raduionutz110@gmail.com">raduionutz110@gmail.com</a></span>
                                    </li>
                                    <li>
                                        <span><img src="images/call.png" /></span>
                                        <span><a href="tel:40728384133">+40 (728) 384 133</a></span>
                                    </li>
                                </ul>
                            </div>
                            <ul className="sci">
                                <li><a href="#">< FaFacebook color="rgba(255,255,255,0.5)" /></a></li>
                                <li><a href="#">< FaTwitter color="rgba(255,255,255,0.5)"/></a></li>
                                <li><a href="#">< FaInstagram color="rgba(255,255,255,0.5)" /></a></li>
                                <li><a href="#">< FaTelegram  color="rgba(255,255,255,0.5)"/></a></li>
                                <li><a href="#">< FaYoutube color="rgba(255,255,255,0.5)" /></a></li>
                            </ul> 
                        </div>
                        
                        <div className="contactForm">
                            <h2>Send a Message</h2>
                            <form onSubmit={handleSubmit}>
                            <div className="formBox">
                                <div className="inputBox w50">
                                    <input type="text" id="name" name="" onChange={(event) => setFirstNameValue(event.target.value)}  value={FirstNameValue} required />
                                        <span>First Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" id="lastname" name="" onChange={(event) => setLastNameValue(event.target.value)}  value={LastNameValue} required />
                                        <span>Last Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="email" id="email" name="" onChange={(event) => setEmailValue(event.target.value)}  value={EmailValue} required />
                                        <span>Email Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" id="mobile" name="" onChange={(event) => setNumberValue(event.target.value)}  value={NumberValue}  required />
                                        <span>Mobile Number</span>
                                </div>
                                <div className="inputBox w100">
                                    <textarea name="" id="message" onChange={(event) => setMessageValue(event.target.value)} value={MessageValue} required></textarea>
                                        <span>Write your message here...</span>
                                </div>
                                <div className="inputBox w100">
                                        <button type="submit">{status}</button>
                                        {/* <input type="submit" value="Send"></input> */}
                                </div>
                            </div>
                            </form>
                        </div>
                        
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;