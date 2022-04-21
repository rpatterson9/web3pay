import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import axios from 'axios';
import Loader from './Loader/Loader'
import { Link } from 'react-router-dom';
import Header from './includes/header';
import Footer from './includes/footer';

const Registration = () => {
  const [validationError, setValidationError] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    toc: true,
  });
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
    password: '',
    toc: true,
  });
  const [isChecked,setIsChecked] = useState(true);
  const handleSubmit = async event => {
    setLoaded(false)
    event.preventDefault()
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/register`, formData).then(res => {
      resetForm();
      setLoaded(true)
      setValidationError([]);
      Swal.fire({
        icon: 'success',
        title: `Thank you !`,
        showConfirmButton: true,
        // timer: 3000,
        text: `${res?.data?.message}`
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
        <div className='content-main-wrapper' >
          <div id="contact-us" className='contact-form form-top'>
            <div className='container register'>
              <div className='row'>
                <div className='col-12'>
                  <div className='heading'>
                    <h3>Register</h3>
                    {/* <p>Ilorem ipsum!</p> */}
                  </div>
                </div>
            
                  <div className='col-md-6 col-xs-12  col-sm-12 mx-auto'>
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
                    <Form.Group className="contact-form-error-wrapper" controlid="formBasicpassword">
                      <Form.Control type="password" placeholder="Enter password here" autoComplete="off"
                        name="password"
                        value={formData?.password}
                        onChange={(e) => handleFromChange(e)}
                        className={`form-control ${hasErrorFor('password') ? 'is-invalid' : ''}`}
                      />
                      {renderErrorFor('password')}
                    </Form.Group>
                    <div  className="contact-form-error-wrapper" controlid="formBasicMessage">
                      <div className='pt-4'>
                        <Form.Check.Input checked={isChecked}  type={'checkbox'}  className={` mr-2 ${hasErrorFor('message') ? 'is-invalid' : ''}`} name="toc"  onChange={(e) => handleCheckBox(e)}   />
                        <Form.Check.Label className='text-white tnc-label'>  You agree to our <Link target={'_blank'} to="/term-of-services" className='text-primary'>Terms and Conditions</Link>  </Form.Check.Label>
                      </div>
                      {renderErrorFor('toc')}
                    </div>
                    <Button variant="primary" type="submit">{loaded ?'Register':'...wait' }  </Button>
                    {!loaded && (<Loader />)}
                    
                    <h5 className='text-white pt-4'>Already have an account  <Link className='text-primary' to={'/login'}>Login</Link> </h5>
                  </form>
                </div>
              
                
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Registration;