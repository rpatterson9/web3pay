import axios from 'axios';
import React, { useState } from 'react';
import Loader from './Loader/Loader'
import { Form,Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import Header from './includes/header';
import Footer from './includes/footer';




const  ForgotPassword = () => {
 
  const [validationError, setValidationError] = useState([]);
  const [formData, setFormData] = useState({
    email: '',
  });
  const [loaded, setLoaded] = useState(true);
  const [resetLinkSent, setResetLinkSent] = useState(false);
  const [recallResetLink, setRecallResetLink] = useState(false);
  const [resetSuccessMessage,setResetSuccessMessage] = useState('');

  

  

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


  const handleSubmit = async event => {
   
    setLoaded(false)
    setRecallResetLink(false);
    setResetSuccessMessage('');
    event.preventDefault()
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/password/remind`, formData).then(res => {

      setValidationError([]);
      setLoaded(true)
      setResetSuccessMessage(`${res?.data?.message}`);
      setResetLinkSent(true);
      setTimeout(() => {
        setRecallResetLink(true);
      }, 60000);
      Swal.fire({
        icon: 'success',
        title: 'Done',
        showConfirmButton: true,
        // timer: 2000,
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
    const value = type === 'number' ? +newValue : newValue;
    setFormData({
      ...formData,
      [name]: value ? value : '',
    });
  }
 
  return (
    <>
      <Header />
      <div id="" className='contact-form form-top'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-12'>
              <div className='heading'>
                <h3>Forgot Password</h3>
              </div>
            </div>
            <div className='col-md-6 col-xs-12  col-sm-12 mx-auto'>
              {resetLinkSent?(
                <div className='text-center'>
                  <h4 className='mt-5 text-white'>{resetSuccessMessage}</h4>
                  <p>If you do not receive an email , please click the Resend email link below after  60 sec.</p>
                  {recallResetLink ? (<Button variant="primary" className='mt-2' onClick={handleSubmit} >{loaded ?'Resend email':'...wait' }  </Button>)
                    : (<Button variant="primary" className='mt-2' disabled={true} onClick={handleSubmit} > {loaded ?'Resend email':'...wait' }  </Button>)}
                </div>
              ):(
                 <form onSubmit={handleSubmit} autoComplete="off" >
                
                 <Form.Group className="contact-form-error-wrapper" controlid="formBasicEmail">
                   <Form.Control type="email"  placeholder="Enter email" autoComplete="off"
                     name="email"
                     value={formData?.email}
                     onChange={(e) => handleFromChange(e)}
                     className={`form-control ${hasErrorFor('email') ? 'is-invalid' : ''}`}
                   />
                   {renderErrorFor('email')}
                 </Form.Group>
                 <Button variant="primary" type="submit">{loaded ?'Submit':'...wait' }  </Button>
                 {!loaded && (<Loader />)}
               </form>
              )}
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;