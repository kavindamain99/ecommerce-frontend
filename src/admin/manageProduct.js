import React,{useState,useEffect} from 'react';
import Layout from '../core/Layout';
import {Link}  from 'react-router-dom';
import {getProductsList,deleteProduct} from './apiAdmin';


const ManageProduct =()=>{

    const [products, setProducts] = useState([]);

    

    const loadProducts = () => {
        getProductsList().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const destroy = productId => {
        var x =window.confirm("are you sure ?");
       
        console.log(x);
        if(x==true) {
        deleteProduct(productId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {

                loadProducts();
            }
        });

    }else{
        loadProducts();
    }

    };

    useEffect(() => {
        loadProducts();
    }, []);
return(
    <Layout title="Manage Product"
    description="Manage Crud Product" className="container-fluid">

        <div className="row">
            
            <div className="col-12">
                <h2 className="text-center">Total {products.length}</h2>
               <hr/>
                <ul className="list-group">
                    {products.map((p,i)=>(
                        
                        <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>{p.name}</strong>
                        <Link to={`UpdateProduct/${p._id}`}>
                            <span className="badge badge-warning">Update</span>
                        </Link>
                        
                        <Link>
                        <span onClick={()=>destroy(p._id)} className="badge badge-danger badge=pill">Delete</span>
                        </Link>
                        </li> 
                    ))}


                </ul>
            </div>


            </div>
        




    </Layout>
)


}

export default ManageProduct;