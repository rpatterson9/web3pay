import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useUserContext } from '../../context/userContext';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useRef } from 'react';

const Header = () => {
    const { user,clearUserData } = useUserContext();
    const  location =  useLocation();
    const navbarRef =  useRef(null);
 

    const closeNavbar =() =>{
        navbarRef?.current?.classList.remove("show");
    }
 
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
        <header>
            <div className='inner-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <Navbar expand="lg">
                                <Navbar.Brand href="/"><img src='../images/logo.svg' className='logo img-fluid' alt='' /> </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse ref={navbarRef} id="navbarScroll">
                                    <div className='row'>
                                        <div className='col-8'>
                                            <a className='navbar-logo' href='/'> <img src='../images/footer-logo.svg' width={'100px'} className='img-fluid' alt='' /> </a>
                                        </div>
                                        <div className='col-4 text-end'>
                                            <Navbar.Toggle aria-controls="navbarScroll" ><img src='../images/close.svg' className='img-fluid' alt='' /> </Navbar.Toggle>
                                        </div>
                                    </div>
                                    <Nav defaultActiveKey="">
                                        <Nav.Link  as={Link} to="/creators" className={location?.pathname === "/creators"?'active':''}>NFT Creators</Nav.Link>
                                        <Nav.Link  as={Link} className={location?.pathname === "/developers"?'active':''} to="/developers">Developers</Nav.Link>
                                        <Nav.Link  eventKey="#about" onClick={closeNavbar} href="/#about">About</Nav.Link>
                                        <Nav.Link eventKey="#how-it-works"  onClick={closeNavbar} href="/#how-it-works">How it Works</Nav.Link>
                                        <Nav.Link eventKey="#faq" onClick={closeNavbar} href="/#faq">FAQ</Nav.Link>
                                        <Nav.Link eventKey="#contact-us"  onClick={closeNavbar} href="/#contact-us">Contact us</Nav.Link>
                                        {user?.name && (
                                            <div className='header-mobile-links'>
                                                <Nav.Link eventKey="#collection" onClick={closeNavbar} className={location?.pathname === "/collection"?'active':''} href="/collection">Collection</Nav.Link>
                                                <Nav.Link eventKey="#transactions" onClick={closeNavbar} className={location?.pathname === "/transactions"?'active':''}  href="/transactions">Transactions</Nav.Link>
                                                <Nav.Link eventKey="#support-requests" onClick={closeNavbar} className={location?.pathname === "/support-requests"?'active':''}  href="/support-requests">Support</Nav.Link>
                                                <Nav.Link eventKey="#logout" onClick={logOut} >Logout</Nav.Link>
                                            </div>
                                        )}
                                    </Nav>
                                    <div className="d-flex">
                                        {user?.name ? (
                                            <div className='navbar-user-acccount-dropdown'>
                                                <DropdownButton align="end" title={user?.name} id="dropdown-menu-align-end">
                                                    <Dropdown.Item as={Link} to={'/collection'} eventKey="1">Account</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item onClick={logOut}  eventKey="2">Logout</Dropdown.Item>
                                                    
                                                </DropdownButton>
                                            </div>
                                        ) : (<div className='nav-btn'><Link to='/register' >Register Now</Link> </div>)}  
                                    </div>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header