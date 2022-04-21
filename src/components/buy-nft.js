import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

const  BuyNFT = () => {
  const {user}= useUserContext();
  

  return (

    <>
     <div className='buying-nft'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className='text'>
                <h1>Buying NFTs with a credit card is now as simple as <br/>1-2-3</h1>
                <h4 className='no-show-mobile'>No Wallet. No Problem.</h4>
               
              </div>
              <div className='pt-2'>
                {!(user?.name) &&(
                  <span className='register-now'>
                    <Link to='/register'>Register Now</Link>
                  </span>
                )}
                <span className='buy-demo-btn'><a href='https://devdemo.web3pay.xyz'>Buy Demo</a> </span>

              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className=''>
              
                  <iframe src="https://player.vimeo.com/video/701556706?h=b48eee5f67&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479&&amp;muted=1&&amp;loop=1" frameBorder="0"  allow="autoplay; fullscreen;" allowFullScreen style={{"top":"0","left":"0","width":"100%","height":"350px"}} title="Web3Pay"></iframe></div>
             
              <div className='mobile-text-view'>
                <p>Web3Pay is built for brands, creators & marketplaces that want to give their users a simple access to buying NFTs with a credit card.</p>
              <div className='register-now'>
                <Link to='/register'>Register Now</Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNFT;
