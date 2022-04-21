import React from 'react';
import Header from './includes/header';
import Footer from './includes/footer';

const PageNotFound = () => {
 

  return (

    <>
      <Header />
        <div id="contact-us" className='contact-form'>
          <div className='container register'>
            <div className='row d-flex justify-content-center'>
              <div className='col-12'>
                <div className='heading'>
                  <h3>404 page not found</h3>
                  {/* <p>Ilorem ipsum!</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />  
    </>
  );
};

export default PageNotFound;