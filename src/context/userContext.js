import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext({
    user:{}
});

export function UserContextProvider({children}){
    let token = localStorage.getItem("token");
    const navigate = useNavigate()
    var userData ={};
    if (token) {
        userData = JSON.parse(localStorage.getItem("user"));
    } 
    const[user,setUser] = useState(userData);
    const updateUser = (data) =>{
        localStorage.setItem("user",JSON.stringify(data.user))
        localStorage.setItem("token",data.token)
        setUser(user)
        navigate('/collection');
        window.location.reload()

    }
    const clearUserData = () =>{
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser({})
        navigate('/');
        window.location.reload()

    }

    return(
        <userContext.Provider value={{user,updateUser,clearUserData}}>
            {children}
        </userContext.Provider>
    )
       
        
    
}

export  function useUserContext(){
    const {user,updateUser,clearUserData} =  useContext(userContext);
    return {
        user,
        updateUser,
        clearUserData
    };
}  
 

