import {API} from "../config";





export const getProducts = () => {
    return fetch(`${API}/products?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};








/*to perform crud
get all products f
get a single product 
update single product 
delete product 
*/



export const getProductsList = () => {

    //if we say limit as undefined, we can get all the products
    return fetch(`${API}/products?limit=100`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const deleteProduct = (productId) => {


    return fetch(`${API}/product/${productId}`,{
        method:"DELETE",
        headers:{
            Accept: "application/json",
            "Content-type":"application/json"
        },
        
    }).then(response=>{
        return response.json();
    }).catch(err => console.log(err));


}


//get single product


export const getProduct = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


//update product



export const updateProducts = (productId,product) => {


    return fetch(`${API}/product/${productId}`,{
        method:"PUT",
        headers:{
            Accept: "application/json",
            
        },
        body:product
        
    }).then(response=>{
        return response.json();
    }).catch(err => console.log(err));


}






