import {API} from "../config";

export const addProduct=product=>{
    
   //send data to the backend

   return fetch(`${API}/product/create`,{
       method:"POST",
       headers:{

        //for get the form data
           Accept: "application/json"
           
       },
       //for the form data
       body: product
   })
   .then(response=>{
       return response.json();
   })
   .catch(err=>{
       console.log(err);
   });

};