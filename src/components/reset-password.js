import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import Loader from './Loader/Loader'
import { useNavigate  } from 'react-router'
import { Form,Button } from 'react-bootstrap';
import Swal from 'sweetalert2'




const  ResetPassword = () => {
  const location =  useLocation();
  const search = location.search;
  const navigate =  useNavigate();
  const urlPrams = new URLSearchParams(search)
  const token = urlPrams.get('token');
  const email = atob(urlPrams.get('uhash'));
  const [validationError, setValidationError] = useState([]);
  const [formData, setFormData] = useState({
    email: email,
    password: '',
    token: token,
    password_confirmation: '',
  });
  const [loaded, setLoaded] = useState(true);
  
  useEffect(()=>{
    if(!token){
      navigate('/login');
    }
  },[])

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
    email: email,
    password_confirmation: '',
    token: token,
    password: '',
  });

  const handleSubmit = async event => {
    setLoaded(false)
    event.preventDefault()
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/password/reset`, formData).then(res => {

      resetForm();
      setValidationError([]);
      setLoaded(true)
      Swal.fire({
        icon: 'success',
        title: 'Done',
        showConfirmButton: true,
        // timer: 2000,
        text:  `${res?.data?.message}`
      })
      navigate('/login');
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
      <div id="contact-us" className='contact-form form-top'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-12'>
              <div className='heading'>
                <h3>Reset Password</h3>
              </div>
            </div>
            <div className='col-md-6 col-xs-12  col-sm-12 mx-auto'>
              <form onSubmit={handleSubmit} autoComplete="off" >
                
                <Form.Group className="contact-form-error-wrapper" controlid="formBasicEmail">
                  <Form.Control type="email"  placeholder="Enter email" autoComplete="off"
                    name="email"
                    readOnly={true}
                    value={formData?.email}
                    onChange={(e) => handleFromChange(e)}
                    className={`form-control ${hasErrorFor('email') ? 'is-invalid' : ''}`}
                  />
                  {renderErrorFor('email')}
                </Form.Group>
                <Form.Group className="contact-form-error-wrapper" controlid="formBasicPhone">
                  <Form.Control type="password" placeholder="Enter password" autoComplete="off"
                    name="password"
                    value={formData?.phone}
                    onChange={(e) => handleFromChange(e)}
                    className={`form-control ${hasErrorFor('password') ? 'is-invalid' : ''}`}
                  />
                  {renderErrorFor('password')}
                </Form.Group>
                <Form.Group className="contact-form-error-wrapper" controlid="formBasicPhone">
                  <Form.Control type="password" placeholder="Confirmation password" autoComplete="off"
                    name="password_confirmation"
                    value={formData?.phone}
                    onChange={(e) => handleFromChange(e)}
                    className={`form-control ${hasErrorFor('password_confirmation') ? 'is-invalid' : ''}`}
                  />
                  {renderErrorFor('password_confirmation')}
                </Form.Group>
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

export default ResetPassword;