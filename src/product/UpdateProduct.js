import React,{useState,useEffect} from 'react';
import Layout from '../core/Layout';
import {getProduct,updateProducts} from '../admin/apiAdmin'
import { Redirect } from 'react-router-dom';





const UpdateProduct =({match})=>{

const[values,setValues] = useState({
    name:'',
    description:'',
    price:'',
    quantity:'',
    photo:'',
    shipping:'',
    loading:false,
    error:'',
    createdProduct:'',
    redirectToHome:false,
    formData:new FormData()

});

const{name,description,price,quantity,shipping,loading,error,createdProduct,redirectToHome,formData} =values;


useEffect(() => {
    init(match.params.productId);
},[]);


const init = (productId) => {
    getProduct(productId).then((product) => {
        if(product.error) {
            setValues({...values,error:product.error})
        }else {
            //populate the state 
            setValues({...values,name:product.name,description:product.description,
                price:product,shipping:product.shipping,quantity:product.quantity});


        }
    })
}



const handleChange = name => event=>{
    const value= name==='photo' ? event.target.files[0] : event.target.value;
    formData.set(name,value);
    setValues({...values,[name]:value});

};




const clickSubmit = event =>{
    
    event.preventDefault();
    setValues({...values,error:'',loading:true});

    
    updateProducts(match.params.productId,formData).then(data =>{
        if(data.error){
            
            setValues({...values,error:data.error});
        }else{
            
            setValues({
                ...values,
                name:'',
                description:'',
                photo:'',
                price:'',
                quantity:'',
                loading:false,
                error:false,
                success:true,
                redirectToHome:true,
                createdProduct:data.name
            });
        }
    });


};

const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
        <h4>Post Photo</h4>
        <div className="form-group">
            <label className="btn btn-secondary">
                <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
            </label>
        </div>

        <div className="form-group">
            <label className="text-muted">Name</label>
            <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
        </div>

        <div className="form-group">
            <label className="text-muted">Description</label>
            <textarea onChange={handleChange('description')} className="form-control" value={description} />
        </div>

        <div className="form-group">
            <label className="text-muted">Price</label>
            <input onChange={handleChange('price')} type="number" className="form-control" value={price} />
        </div>

        
        
                    <div className="form-group">
                        <label className="text-muted">Shipping</label>
                        <select onChange={handleChange('shipping')} className="form-control">
                            <option>Please select</option>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
        
                    <div className="form-group">
                        <label className="text-muted">Quantity</label>
                        <input onChange={handleChange('quantity')} type="number" className="form-control" value={quantity} />
                    </div>
        
                    <button className="btn btn-outline-primary">Update Product</button>
                </form>
            );

//show success or failure
const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
);

const showSuccess = () => (
    <div className="alert alert-info" style={{ display: createdProduct ? '' : 'none' }}>
        <h2>{`${createdProduct}`} is updated!</h2>
    </div>
);

const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

const redirectUser =()=>{
    if(redirectToHome){
        if(!error){
            return <Redirect to="/" />
        }
    }
}

return (
    <Layout title="Sign Up Page" description="Add a New product" className="container col-md-8 offset-md-2">

{showSuccess()}
{showError()}
{showLoading()}
{newPostForm()}
{redirectUser()}
{/*pass the signup form here*/ }



</Layout>


);




};

export default UpdateProduct;