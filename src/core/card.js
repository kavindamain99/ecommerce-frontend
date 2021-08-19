import React from 'react';

import {Link} from 'react-router-dom'
import ShowImage  from './ShowImage';


const card =({product}) =>{
    return (

        <div className="col-4 mb-3">
            <div className="card">
                <div className="card-header">{product.name}</div>
                <div className="card-body">
                    <ShowImage item={product} url="product"></ShowImage>
                    <p>product.description</p>
                    <p>${product.price}</p>
                    <Link to="/"><button className="btn btn-primary mt-2 mb-2">View </button></Link>
                    
                </div>
            </div>


        </div>
    )
}


export default card;