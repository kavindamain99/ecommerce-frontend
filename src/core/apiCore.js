import {API} from "../config";
import queryString from 'query-string';

export const getProducts = sortBy =>{
    return fetch (`${API}/products?sortBy=${sortBy}&order=desc&limit=6`,{
        method: "GET"
    }).then(response =>{
        return response.json();
    }).catch(err =>console.log(err));
};



//for the searching
export const list = params =>{

const query =queryString.stringify(params);
console.log('query',query);

    return fetch (`${API}/products/search?${query}`,{
        method: "GET"
    }).then(response =>{
        return response.json();
    }).catch(err =>console.log(err));
};