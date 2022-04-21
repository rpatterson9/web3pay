import React  from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import Footer from './includes/footer';
import Header from './includes/header';

function Creators() {

  const { user } = useUserContext();
  return (
    <>
      <Header />
      <div id='cr' className='buying-nft'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className='text mob'>
                <h1>Simple credit card  <br /> checkout for NFTs</h1>
              </div>
              
                <div className='mobile-image'>
                  <img src='../images/credit_card.svg' className='img-fluid' alt='' />
              
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className='text'>
                <h1>Simple credit card  <br /> checkout for NFTs</h1>
                <p>Enable anyone to mint your NFT in 3 easy steps using an email address and credit card. No wallet needed.</p>
              </div>
              <div className='register-now request-access'>
                {!(user?.name) && (<Link to='/register'>Request access</Link>)}
                <a className='see-demo' target={'_blank'} href='https://devdemo.web3pay.xyz' rel="noreferrer">See demo</a>
              </div>
              {/* <div className='payment-method mob'>
                <img src='../images/payment.svg' className='img-fluid' alt='' />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className='creators-box'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
              <div class="creators_app_box shadow">
                <span class="d-flex align-items-center justify-content-center h-70px w-70px rounded-pill border mx-auto mb-3 fs-22 text-theme3 bg-white">
                  <img src="../images/seller.svg" alt="" className='img-fluid' />
                </span>
                <h3 class="">Free for sellers</h3>
                <p>Web3Pay is 100% free for sellers. You get the full mint amount instantly.</p>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
              <div class="creators_app_box shadow">
                <span class="d-flex align-items-center justify-content-center h-70px w-70px rounded-pill border mx-auto mb-3 fs-22 text-theme3 bg-white">
                  <img src="../images/integration.svg" alt="" className='img-fluid' />
                </span>
                <h3 class="">3 step integration</h3>
                <p>Paste 8 lines of code on your minting page and you are done!</p>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
              <div class="creators_app_box shadow">
                <span class="d-flex align-items-center justify-content-center h-70px w-70px rounded-pill border mx-auto mb-3 fs-22 text-theme3 bg-white">
                  <img src="../images/chargeback.svg" alt="" className='img-fluid' />
                </span>
                <h3 class="">Zero chargebacks</h3>
                <p>Full protection against credit card fraud. All related financial or operational costs are on us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Creators;