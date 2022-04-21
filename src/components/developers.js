import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import Footer from './includes/footer';
import Header from './includes/header';

function Developers() {
  const { user } = useUserContext();
  return (
    <>
      <Header />
        <div id='dev' className='buying-nft developers-wrapper'>
          <div className='developer-main'>
              <div className='developer container'>
                <div className='row'>
                  <div className='col-md-12'>

                    <h4> Web3Pay Developer</h4>
                    <h3> Build a seamless NFT payment solution that's right for you with Web3Pay for Developers.</h3>
                    <p className='banner-body'> Accept credit cards in your drop in 3 easy steps</p>
                    <div className='register-now request-access'>
                      <a className='docs' href='/'><img src="../images/book.svg" className='img-fluid' alt='' /> Docs</a>
                      {!(user?.name) && (<Link className='see-demo' to='/register'>Request access</Link>)}
                    </div>
                  </div>
                </div>
              </div>  
          </div>  
        </div>
        <div className='devloper-resources'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <div className='dev-image '>
                  <img src='../images/programming.svg' className='img-fluid' alt='' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row developer-boxes'>
                    <div className='col-2 text-center'>
                      <img src="../images/ph_sparkle-thin.svg" className='img-fluid' alt='' />
                    </div>
                    <div className='col-10'>
                      <h3>100% free for sellers</h3>
                      <p>Using our service is free. We only charge the user a small tax fee with each transaction.</p>
                    </div>
                </div>
                <div className='row developer-boxes'>
                    <div className='col-2 text-center'>
                      <img src="../images/cil_puzzle.svg" className='img-fluid' alt='' />
                    </div>
                    <div className='col-10'>
                      <h3>Easy Integration</h3>
                      <p>Integrating with Web3Pay is easy! It takes under 8 lines of code and can be done in 3 easy steps.</p>
                    </div>
                </div>
                <div className='row developer-boxes'>
                    <div className='col-2 text-center'>
                      <img src="../images/need_support.svg" className='img-fluid' alt='' />
                    </div>
                    <div className='col-10'>
                      <h3>Support?</h3>
                      <p>If you have any general questions visit FAQs, if you need support, please contact: <a href='mailto:support@Web3Pay.xyz'>support@Web3Pay.xyz</a> </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='creators-box'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                <h4><img src="../images/ph_sparkle-thin.svg" className='img-fluid' alt='' /> 100% free for sellers</h4>
                <div className='inner-box dev devloper'>
                  <p>Using our service is free. We only charge the user a small tax fee with each transaction.</p>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                <h4><img src="../images/cil_puzzle.svg" className='img-fluid' alt='' /> Easy Integration</h4>
                <div className='inner-box dev devloper'>
                  <p>Integrating with Web3Pay is easy! It takes under 8 lines of code and can be done in 3 easy steps.</p>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                <h4><img src="../images/need_support.svg" className='img-fluid' alt='' /> Support?</h4>
                <div className='inner-box dev devloper'>
                  <p>If you have any general questions visit FAQs, if you need support, please contact: <a href='mailto:support@Web3Pay.xyz'>support@Web3Pay.xyz</a> </p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div> */}
      <Footer />
    </>
  );
};

export default Developers;