import { useLocation } from "react-router-dom";
import Header from "../includes/header";
import Collections from "./collection";
import InfoBar from "./infoBar";
import SideBar from "./sideBar";
import Support from "./support";
import Transactions from "./transactions";


const LandingPage = () => {
    const location =  useLocation();

    const getComponent = () =>{
        if(location?.pathname === "/collection"){
            return (<Collections /> )
        }else if(location?.pathname === "/transactions"){
            return (<Transactions />)
        }else if(location?.pathname === "/support-requests"){
            return (<Support />)
        }
    }
    const getHeading = ()=>{
        return (location?.pathname.replace('/','').charAt(0).toUpperCase() + location?.pathname.replace('/','').slice(1));
    }
    
   
    return (

            <>
                <Header />
                <div className="body-wrapper">
                    <div className="inner-body-outer-wrapper">
                        <InfoBar  />    
                        <div className="inner-body-wrapper">
                            <div className="left">
                                <SideBar  />
                            </div>
                            <div className="right">
                                <div className="data-wrapper text-center ">
                                    <h3 className="text-center heading-text">{getHeading()}</h3>
                                    {getComponent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                </>
                );
    
}

export default LandingPage