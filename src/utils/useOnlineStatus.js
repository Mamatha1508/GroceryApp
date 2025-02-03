import { useEffect, useState } from "react";


const useOnlineStatus=()=>{

   
const [onlineStatus,setOnlineStatus]=useState('Offline');
    useEffect(()=>{
       

        window.addEventListener('online',()=>{
            setOnlineStatus('Online')
        })
        window.addEventListener('offline',()=>{
            setOnlineStatus('Offline')
        })
    },[])
   
    

    return onlineStatus;

}

export default useOnlineStatus;