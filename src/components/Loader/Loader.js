import './loader.css'

const Loader = ({backgroundColor}) => {
    return(
       
            <div className="full-page-loader" style={{'background':backgroundColor}}>
                <div className="loader-inner-wrapper">
                    <img alt="loader" className="loader-image" src="/images/loader.gif" />
                    <p>Please wait...</p>
                </div>
            </div>
    )
}

   
export default Loader;