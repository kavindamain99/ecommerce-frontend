import React, { useState, useEffect } from 'react';
import { getProducts } from './apiCore'
//layout 
import Layout from './Layout';
import Card from './card';

import Search from './Search'

const Home = () => {

    const [productBySell, setProductBySell] = useState([]);
    const [productByArrival, setProductByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductBySell(data);
            }
        });
    };

    const loadProductByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductByArrival(data);
            }
        });
    };
    useEffect(() => {
        loadProductBySell();
        loadProductByArrival();
    }, []);


    return (
        <Layout title="Home Page" description="Mern stack" className="container-fluid">



                <Search/> 

            <h2 className="mb-4">New Arrivals</h2>

            <div className="row">


                {productByArrival.map((product, i) => (
                    <Card key={i} product={product} />
                ))}

            </div>


            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">


                {productBySell.map((product, i) => (
                    <Card key={i} product={product} />
                ))}

            </div>



        </Layout>
    )
};

export default Home;