import React from 'react';
import ContactForm from './contact-form';

const  Header = React.lazy(() => import('./includes/header'));
const  Footer = React.lazy(() => import('./includes/footer'));
const  BuyNFT = React.lazy(() => import('./buy-nft'));
const  HowToBuyNFT = React.lazy(() => import('./how-to-buy'));
const  HowItWorks = React.lazy(() => import('./how-it-works'));
const  BlockchainsWeSupport = React.lazy(() => import('./blockchains-we-support'));
const  Faqs = React.lazy(() => import('./faqs'));


function Home() {

  return (

    <>
     
        <Header />
        <BuyNFT />
        <HowToBuyNFT />
        <HowItWorks />
        <BlockchainsWeSupport />
        <Faqs />
        <ContactForm />
        <Footer />
     
    </>
  );
};

export default Home;