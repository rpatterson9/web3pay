import { Link } from "react-router-dom"


const Footer = () => {
return(
        <footer>
            <div className='container'>
                <div className="row">
                <div className="col-12 sol-sm-12">
                    <div className="line"></div>
                </div>
                    <div className="col-3 sol-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="footer-logo">
                            <img src="../images/footer-logo.svg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-3 sol-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="footer-link">
                            <h3>COMPANY</h3>
                            <ul>
                                <li><a href="/#about">About us</a> </li>
                                <li><a href="/#contact-us">Contact us</a> </li>
                                <li> <Link to={'/support'}>Help Center</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3 sol-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="footer-link">
                            <h3>TERMS OF USE</h3>
                            <ul>
                                <li><Link to={'/privacy-policy'}>Privacy Policy</Link> </li>
                                <li><Link to={'/term-of-services'}>Terms Of Services</Link> </li>
                                <li><Link to={'/support'}>Support</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3 sol-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="footer-link">
                            <h3>FOLLOW US</h3>
                            <ul>
                                <li><a href="https://instagram.com"><img src="../images/instagram.svg" className="img-fluid" alt="" /> Instagram</a> </li>
                                <li><a href="https://twitter.com"><img src="../images/twitter.svg" className="img-fluid" alt="" /> Twitter</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
} 

export default Footer