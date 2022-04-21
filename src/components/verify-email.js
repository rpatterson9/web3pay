import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation ,useParams} from 'react-router-dom';
import Loader from './Loader/Loader'
import { useNavigate  } from 'react-router'
import Swal from 'sweetalert2'




const  VerifyEmail = () => {
  const[loaded,setLoaded] = useState(false);
  const param =  useParams();
  const navigate =  useNavigate();
  const token = param.token
  useEffect(()=>{
    verifyEmail(token)
  },[token])
  const verifyEmail = async (token) =>{
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/verify-email/${token}`).then(res => {
      Swal.fire({
        icon: 'success',
        title: `Thank you !`,
        showConfirmButton: true,
        // timer: 3000,
        text: `${res.data.message}`
      })
      setLoaded(true)
      navigate('/login');
    }).catch(err => {
      console.log(err.response.data.errors);
      Swal.fire({
        icon: 'error',
        title: `Oops !`,
        showConfirmButton: true,
        // timer: 3000,
        text: `Verification Token is invalid`
      })
      navigate('/register');
    });
  }
 

  return (

    <>
          {!loaded &&(
            <Loader backgroundColor="#000" />
          )}
    </>
  );
};

export default VerifyEmail;