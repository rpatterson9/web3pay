import React from 'react';
const  HowItWorks = () => {
  

  return (

    <>
      <div id="how-it-works"  className='how-it-work'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='heading'>
                <h3>How it Works</h3>
                <p>Web3Pay allows customers to make a purchase in 3 simple steps </p>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <div className='box'>
                <div className='bg-color'>
                  <img src='../images/nft.svg' className='img-fluid' alt='' />
                </div>
                <h3> 1. Choose your NFT</h3>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <div className='box'>
                <div className='bg-color'>
                  <img src='../images/payment-info.svg' className='img-fluid' alt='' />
                </div>
                <h3> 2. Enter payment information</h3>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <div className='box'>
                <div className='bg-color'>
                  <img src='../images/cart.svg' className='img-fluid' alt='' />
                </div>
                <h3>3. Receive your purchase</h3>
              </div>
            </div>
            <div className='col-12'>
              <div className='text-box'>
                <p>Our world class dev team makes Web3Pay the safest
                  and most secure credit card payment solution out there.
                  You can simply add Web3Pay to your platform with a
                  single line of code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;