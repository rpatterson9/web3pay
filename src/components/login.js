import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import axios from 'axios';
import Loader from './Loader/Loader'
import { useUserContext } from '../context/userContext';
import Header from './includes/header';
import Footer from './includes/footer';
import { Link } from 'react-router-dom';

const Login = () => {
  const{updateUser} = useUserContext();
  
  const [validationError, setValidationError] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    device_name: 'Web',
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
    email: '',
    password: '',
  });
  const handleSubmit = async event => {
    setLoaded(false)
    event.preventDefault()
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/login`, formData).then(res => {
      resetForm();
      setLoaded(true)
      setValidationError([]);
      // Swal.fire({
      //   icon: 'success',
      //   title: `Thank you !`,
      //   showConfirmButton: true,
      //   timer: 3000,
      //   text: `Succeessfully logged in !!`
      // })
      updateUser(res.data)
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

  return (

    <>
      <Header />
        <div id="contact-us " className='contact-form form-top'>
          <div className='container register'>
            <div className='row d-flex justify-content-center'>
              <div className='col-12'>
                <div className='heading'>
                  <h3>Login</h3>
                  {/* <p>Ilorem ipsum!</p> */}
                </div>
              </div>
          
                <div className='col-md-6 col-xs-12  col-sm-12 mx-auto'>
                <form onSubmit={handleSubmit} autoComplete="off" >
                
                  <Form.Group className="contact-form-error-wrapper" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" autoComplete="off"
                      name="email"
                      value={formData?.email}
                      onChange={(e) => handleFromChange(e)}
                      className={`form-control ${hasErrorFor('email') ? 'is-invalid' : ''}`}
                    />
                    {renderErrorFor('email')}
                  </Form.Group>
                  <Form.Group className="contact-form-error-wrapper" controlId="formBasicpassword">
                    <Form.Control type="password" placeholder="Enter password here" autoComplete="off"
                      name="password"
                      value={formData?.password}
                      onChange={(e) => handleFromChange(e)}
                      className={`form-control ${hasErrorFor('password') ? 'is-invalid' : ''}`}
                    />
                    {renderErrorFor('password')}
                  </Form.Group>
                  <Button variant="primary" type="submit">{loaded ?'Submit':'...wait' }  </Button>
                  {!loaded && (<Loader />)}
                  
                  <h5 className='text-white pt-4'>Forgot your password ? Please <Link className='text-primary' to={'/forgot-password'}>Click Here</Link> </h5>
                </form>
              </div>
            
              
            </div>
          </div>
        </div>
      <Footer />  
    </>
  );
};

export default Login;