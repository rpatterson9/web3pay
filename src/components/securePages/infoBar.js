import { useUserContext } from '../../context/userContext';
const InfoBar = () => {
    const { user } = useUserContext();

   
    return (
            <div className="info-bar">
               <h1>Welcome , {user?.name}</h1>
            </div>
    )
}

export default InfoBar