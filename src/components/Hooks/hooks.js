import { useRef, useEffect } from "react";

export const useOutClick = (calback) =>{
    const ref = useRef(null);

   useEffect(()=>{
      const handleOutClick = (event) => {
         if(!ref.current?.contains(event.target)){
            if(calback) calback();
         }
      }
      window.addEventListener("mousedown", handleOutClick );
 
      return () =>{
         window.removeEventListener("mousedown", handleOutClick);
      }
   }, [])

   return ref;
}


export const useKeydown = (keyId, calback) =>{
    const ref = useRef(null);

   useEffect(()=>{
      const handleKeydown = (event) =>{
        if(event.key === keyId){
            if(calback) calback(ref.current);
        }  
      }

      window.addEventListener("keydown", handleKeydown);

      return () => {
      window.removeEventListener("keydown", handleKeydown);

      }
   },[])

   return ref;

}