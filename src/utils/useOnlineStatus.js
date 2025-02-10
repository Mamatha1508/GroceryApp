import { useEffect, useState } from "react";


const useOnlineStatus=()=>{

   
const [onlineStatus,setOnlineStatus]=useState(navigator.onLine ? 'Online' : 'Offline');
 // console.log('online status before',onlineStatus);
  const handleOnline=()=> setOnlineStatus('Online');
  const handleOffline=()=> setOnlineStatus('Offline')
    useEffect(()=>{
       

        window.addEventListener('online',handleOnline)
        window.addEventListener('offline',handleOffline);
        return ()=>{
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }
    },[])
   
    
    //console.log('online stsua',onlineStatus)

    return onlineStatus;

}

export default useOnlineStatus;