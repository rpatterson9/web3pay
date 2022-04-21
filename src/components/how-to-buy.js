import React from 'react';
const  HowToBuyNFT = () => {
  

  return (

    <>
      <div className='how-to-buy' id="about">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-12 mb-5'>
              <h3>Most people don’t know how to buy an NFT and we don’t blame them.</h3>
              <p>Web3Pay makes this complex process simple. With our plug-and-play model you can buy an NFT directly with your credit card. As simple as 1-2-3.</p>
              <div className='btns'><a href='#'>Learn More</a> </div>
            </div>
            <div className='col-md-6 col-sm-12'>
            <div className='payment-box'>
                <div className='purchase-nft'>
                  <div className='left-box'>
                    <h4>Purchase NFT</h4>
                    <p>Doodles</p>
                  </div>
                  <div className='right-box'>
                    <p>DoodleContract</p>
                    <p> <a href="https://rinkeby.etherscan.io/address/0x06b1703F31322edFe07774c41C7cb3b1dFE068D5">View Contract</a></p>
                  </div>
                </div>
                <div className='summary-box'>
                  <div className='row'>
                    <div className='col-4'>
                      <div className='image'>
                        <img src='../images/toy.svg' className='img-fluid' alt='' />
                      </div>
                    </div>
                    <div className='col-8'>
                      <h3>Summary</h3>
                      <div className='summary-contant'>
                        <div className='details'>
                          <h5>Doodles</h5>
                          <h5>Network fee</h5>
                        </div>
                        <div className='amount'>
                          <h5>$272.30</h5>
                          <h5>$23.00</h5>
                          <h5><a href='/'>View fees</a> </h5>
                          <h2>$295.30</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToBuyNFT;