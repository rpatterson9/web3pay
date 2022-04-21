import React from 'react';
const  BlockchainsWeSupport = () => {
  

  return (

    <>
      <div className='blockchains-we-support'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <h2>Blockchains We Support</h2>
              <h4>Polygon, Ethereum, Binance
                and Avax are among our
                supported chains.</h4>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className='wrapper-box'>
                <div className='blockchains-box'>
                  <img src='../images/icon1.svg' className='img-fluid' alt='' />
                </div>
                <div className='blockchains-box'>
                  <img src='../images/icon2.svg' className='img-fluid' alt='' />
                </div>
                <div className='blockchains-box'>
                  <img src='../images/icon3.svg' className='img-fluid' alt='' />
                </div>
                <div className='blockchains-box'>
                  <img src='../images/icon4.svg' className='img-fluid' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockchainsWeSupport;