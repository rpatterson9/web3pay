import React, { useState } from 'react';
import Footer from "./includes/footer";
import Header from "./includes/header";
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import axios from 'axios';
import Loader from './Loader/Loader';

const ContactSupport = () => {
    const [validationError, setValidationError] = useState([]);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
      toc: true,
    });
    const [isChecked,setIsChecked] = useState(true);
    const [loaded, setLoaded] = useState(true);
  
    const hasErrorFor = (field) => {
      if (validationError) {
        const error = (field in validationError);
        if (error)
          return true;
      } else {
        return false;
      }
    }
  
    const renderErrorFor = (field) => {
      if (hasErrorFor(field)) {
        return (
          <div className="error-wrapper">
            <span className='invalid-feedback'>
              <strong>{validationError[field]}</strong>
            </span>
          </div>
        )
      }
    }
    const resetForm = () => setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      toc: true,
    });
    const handleSubmit = async event => {
      setLoaded(false)
      event.preventDefault()
      axios.post(`${process.env.REACT_APP_API_ENDPOINT}/contact-us`, formData).then(res => {
  
        resetForm();
        setValidationError([]);
        setLoaded(true)
        Swal.fire({
          icon: 'success',
          title: 'Done',
          showConfirmButton: true,
          // timer: 1500,
          text:  `${res?.data?.message}`
        })
      }).catch(err => {
        setLoaded(true)
        Swal.fire({
          icon: 'error',
          title: `Oops!`,
          showConfirmButton: true,
          // timer: 3000,
          text: (err?.response?.data?.message )? (err?.response?.data?.message): `Some error occured`
        })
        setValidationError(err?.response?.data?.errors);
      });
  
  
    }
  
    const handleFromChange = (e) => {
      const { name, value: newValue, type } = e.target;
      console.log(e.target);
      const value = type === 'number' ? +newValue : newValue;
      setFormData({
        ...formData,
        [name]: value ? value : '',
      });
    }
    const handleCheckBox = (e) => {
      setIsChecked(!isChecked);
      setFormData({
        ...formData,
        'toc': !isChecked,
      });
    }
    return (

                <>
                  <Header />
                  
                    <div className="container ">
                        <div id="" className='other-pages-wrapper'>
                            <div className="row">
            
                                <div className="col-md-6 center-on-mobile">
                                    <h1 className="hide-hsupport-heading-on-mobile">Support</h1>
                                    <p>If you have any question reach out to our customer support team or visit our <br/> <a className="text-primary" href="/#faq" >FAQs page</a> </p>
                                    <div className="row support-wrapper">
                                        <div className="col-md-6">
                                            <img className="pt-3" src="images/mail.svg" alt="mail" />
                                            <h4>Email support</h4>
                                            <p><a href="mailto:support@Web3Pay.xyz"> support@Web3Pay.xyz</a> </p>
                                            <a href="mailto:support@Web3Pay.xyz" className="btn btn-outline-secondary">Reach out</a>

                                        </div>
                                        {/* <div className="col-md-6">
                                        <img className="pt-3" src="images/discord.svg" alt="discord" />
                                            <h4>Live support</h4>
                                            <p><a href="https://discord.com/"> Join us on discord</a> </p>
                                            <a href="https://discord.com/" className="btn btn-outline-secondary">Join Discord</a>


                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <p>Contact us today to find out what we can do for you!</p>
                                    <div className=''>
                                        <form onSubmit={handleSubmit} autoComplete="off" >
                                            <Form.Group className="contact-form-error-wrapper" controlid="formBasicname">
                                            <Form.Control  type="text" placeholder="Enter Name" autoComplete="off"
                                                name="name"
                                                value={formData?.name}
                                                onChange={(e) => handleFromChange(e)}
                                                className={`form-control dark ${hasErrorFor('name') ? 'is-invalid' : ''}`}
                                            />
                                            {renderErrorFor('name')}
                                            </Form.Group><br/>
                                            <Form.Group className="contact-form-error-wrapper" controlid="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" autoComplete="off"
                                                name="email"
                                                value={formData?.email}
                                                onChange={(e) => handleFromChange(e)}
                                                className={`form-control dark ${hasErrorFor('email') ? 'is-invalid' : ''}`}
                                            />
                                            {renderErrorFor('email')}
                                            </Form.Group><br/>
                                            <Form.Group className="contact-form-error-wrapper" controlid="formBasicPhone">
                                            <Form.Control type="number" placeholder="Enter phone" autoComplete="off"
                                                name="phone"
                                                value={formData?.phone}
                                                onChange={(e) => handleFromChange(e)}
                                                className={`form-control dark ${hasErrorFor('phone') ? 'is-invalid' : ''}`}
                                            />
                                            {renderErrorFor('phone')}
                                            </Form.Group><br/>
                                            <Form.Group className="contact-form-error-wrapper" controlid="formBasicMessage">
                                            <Form.Control type="text" placeholder="Enter message here" autoComplete="off"
                                                name="message"
                                                as="textarea"
                                                value={formData?.message}
                                                onChange={(e) => handleFromChange(e)}
                                                className={`form-control dark ${hasErrorFor('message') ? 'is-invalid' : ''}`}
                                            />
                                            {renderErrorFor('message')}
                                            </Form.Group><br/>
                                            <div className="contact-form-error-wrapper" controlid="formBasicMessage">
                                            <div className='pt-4' style={{'display':'none'}} >
                                                <Form.Check.Input checked={isChecked}  type={'checkbox'}  className={` mr-2 ${hasErrorFor('message') ? 'is-invalid' : ''}`} name="toc"  onChange={(e) => handleCheckBox(e)}   />
                                                <Form.Check.Label className='tnc-label'>  You agree to our Terms and Conditions</Form.Check.Label>
                                            </div>
                                            {renderErrorFor('toc')}
                                            </div><br/>
                                            <Button variant="primary" type="submit">{loaded ?'Submit':'...wait' }  </Button>
                                            {!loaded && (<Loader />)}
                                            
                                        </form>
                                        </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <Footer />
                </>
            );
    
}

export default ContactSupport