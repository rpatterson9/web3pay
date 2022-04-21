import React from 'react';
import { Accordion } from 'react-bootstrap';
const  Faqs = () => {
  

  return (

    <>
      <div id="faq" className='faqs'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='heading'>
                <h3>FAQs</h3>

              </div>
            </div>
            <div className='col-12'>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is Web3Pay?</Accordion.Header>
                  <Accordion.Body>
                  Web3 Pay enables users to buy and trade cryptocurrencies through credit cards, mobile wallets, and bank transfers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Why is being able to use a credit card important?</Accordion.Header>
                  <Accordion.Body>
                  Buying with a credit card is quick, which helps your customers avoid this difficulty.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Can we still accept crypto payments?</Accordion.Header>
                  <Accordion.Body>
                  Yes! Our service gives your consumers another way to purchase NFTs. You can still utilise your old crypto payment methods.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Can I use Web3Pay if I am not a developer?</Accordion.Header>
                  <Accordion.Body>
                  Web3Pay was made for brands, individuals, and marketplaces to allow anybody with any level of crypto knowledge to easily buy an NFT via credit card.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>What Blockchains does Web3Pay support?</Accordion.Header>
                  <Accordion.Body>
                  Supported platforms include Ethereum, Bi-nance Smart Chain, Polygon, EOS, AVAX, and Fantom.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>What Blockchains are next on your roadmap?</Accordion.Header>
                  <Accordion.Body>
                  We'll be adding Solana, Algorand, Casper, and Cardano chains soon.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>How will this affect buying crypto?</Accordion.Header>
                  <Accordion.Body>
                  Cryptocurrencies are still gained and used for transactions. The more people we can bring into the space, the better.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;