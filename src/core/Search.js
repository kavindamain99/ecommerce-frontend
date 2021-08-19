import React, { useState, useEffect } from 'react';
import { list } from './apiCore'
//layout 
import Layout from './Layout';
import Card from './card';



const Search = () => {

    const [data, setData] = useState({
        search: '',
        results: [],
        searched: false
    })

     //this can use instead of writing data.search or data.results likewise
    const { search, results, searched } = data;

    const searchData = () => {
        //take data using api request
        //for the verify
        //console.log(search);

        if (search) {

            list({ search: search || undefined })
                .then(response => {
                    if (response.error) {
                        console.log(response.error);
                    }
                    else {
                        setData({ ...data, results: response, searched: true });
                    }

                })


        }




    }

    const searchSubmit = (e) => {
        e.preventDefault();
        //grab the event
        searchData()
    }

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });

    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <input type="search" className="form-control" placeholder="Search By Name" onChange={handleChange("search")}></input>

            <div className="input-group">
                <button className="btn btn-primary btn-lg btn-block input-group-text">Search</button>

            </div>
        </form>
    );

    const searchedProduct = results =>{
        
        return(
            <div>
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, results)}
                </h2>
            

        <div className="row">

               {results.map((product,i)=>(
                   <Card key={i} product={product}/>
               ))} 

        </div>
        </div>
        )
    }

   

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) {
            return `Found ${results.length} products`;
        }
        if (searched && results.length < 1) {
            return `No products found`;
        }
    };

    return (
        <div className="row">
            <div className="container mb-3">
               {searchForm()}
               
            </div>
            <div className="container-fluid mb-3">
               {searchedProduct(results)}
               
            </div>
        </div>
    );
};


export default Search;