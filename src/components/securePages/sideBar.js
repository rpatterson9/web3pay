import { Link, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useUserContext } from '../../context/userContext';

/* eslint-disable jsx-a11y/anchor-is-valid */
const SideBar = () => {
    const location =  useLocation();
    const { clearUserData } = useUserContext();
    const logOut = async event => {
        var tokenStr =  localStorage.getItem("token");
       
        // setLoaded(false)
        // event.preventDefault()
        axios.post(`${process.env.REACT_APP_API_ENDPOINT}/logout`, {}, { headers: {"Authorization" : `Bearer ${tokenStr}`}}).then(res => {
          Swal.fire({
            icon: 'success',
            title: `Thank you !`,
            showConfirmButton: true,
            // timer: 3000,
            text: `Succeessfully logged Out in !!`
          })
          clearUserData();
        }).catch(err => {
            console.log(err); 
          Swal.fire({
            icon: 'error',
            title: `Oops!`,
            showConfirmButton: true,
            // timer: 3000,
            text: (err?.response?.data?.message )? (err?.response?.data?.message): `Some error occured`
          })
         
        });
      }
   
    return (
            <div className="text-white  nav-sidebar">
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to={"/collection"}   className={`nav-link ${location?.pathname === "/collection"?'active':'' }`} > 
                        <img src="/images/collection.svg" width={'40px'} alt={'collection'} />
                         Collection</Link>
                    </li>
                    <li>
                        <Link to={"/transactions"}   className={`nav-link ${location?.pathname === "/transactions"?'active':'' }`} > 
                        <img src="/images/transaction.svg" width={'40px'} alt={'collection'} />
                        Transaction</Link>
                        
                    </li>
                    <li>
                        <Link to={"/support-requests"}  className={`nav-link ${location?.pathname === "/support-requests"?'active':'' }`} >
                        <img src="/images/support.svg" width={'40px'} alt={'collection'} />
                             Support</Link>
                    </li>
                </ul>
                <div className="">
                   <span onClick={logOut} className="text-danger mt-2 fw-bold fs-5 cp">Sign out</span> 
                </div>
            </div>
    )
}

export default SideBar