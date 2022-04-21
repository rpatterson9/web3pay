import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import axios from 'axios';
import Loader from './Loader/Loader';

const ContactForm = () => {
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
      <div id="contact-us" className='contact-form'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='heading'>
                <h3>The easiest way to buy
                  and sell NFTs.</h3>
                <p>Contact us today to find out what we can do for you!</p>
              </div>
            </div>
            <div className='col-12'>
              <form onSubmit={handleSubmit} autoComplete="off" >
                <Form.Group className="contact-form-error-wrapper" controlid="formBasicname">
                  <Form.Control type="text" placeholder="Enter Name" autoComplete="off"
                    name="name"
                    value={formData?.name}
                    onChange={(e) => handleFromChange(e)}
                    className={`form-control ${hasErrorFor('name') ? 'is-invalid' : ''}`}
                  />
                  {renderErrorFor('name')}
                </Form.Group>
                <Form.Group className="contact-form-error-wrapper" controlid="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" autoComplete="off"
                    name="email"
                    value={formData?.email}
                    onChange={(e) => handleFromChange(e)}
                    className={`form-control ${hasErrorFor('email') ? 'is-invalid' : ''}`}
                  />
                  {renderErrorFor('email')}
                </Form.Group>
                <Form.Group className="contact-form-error-wrapper" controlid="formBasicPhone">
                  <Form.Control type="number" placeholder="Enter phone" autoComplete="off"
                    name="phone"
                    value={formData?.phone}
                    onChange={(e) => handleFromChange(e)}
                    className={`form-control ${hasErrorFor('phone') ? 'is-invalid' : ''}`}
                  />
                  {renderErrorFor('phone')}
                </Form.Group>
                <Form.Group className="contact-form-error-wrapper" controlid="formBasicMessage">
                  <Form.Control type="text" placeholder="Enter message here" autoComplete="off"
                    name="message"
                    as="textarea"
                    value={formData?.message}
                    onChange={(e) => handleFromChange(e)}
                    className={`form-control ${hasErrorFor('message') ? 'is-invalid' : ''}`}
                  />
                  {renderErrorFor('message')}
                </Form.Group>
                <div style={{"display":"none"}} className="contact-form-error-wrapper" controlid="formBasicMessage">
                  <div className='pt-4'>
                    <Form.Check.Input checked={isChecked}  type={'checkbox'}  className={` mr-2 ${hasErrorFor('message') ? 'is-invalid' : ''}`} name="toc"  onChange={(e) => handleCheckBox(e)}   />
                    <Form.Check.Label className='text-white tnc-label'>  You agree to our Terms and Conditions</Form.Check.Label>
                  </div>
                  {renderErrorFor('toc')}
                </div>
                <Button variant="primary" type="submit">{loaded ?'Submit':'...wait' }  </Button>
                {!loaded && (<Loader />)}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;