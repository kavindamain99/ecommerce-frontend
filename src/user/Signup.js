import React,{useState} from 'react';
import Layout from '../core/Layout';
import {signup} from "../auth";



const Signup =()=>{


    //for the grab values 

    const [values,setValues] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        contactNumber:'',
        error:"",
        success:false
    });

    //after the submit values
const {firstName,lastName,email,password,contactNumber,success,error} = values;


    const handleChange = name => event=>{

        //set the state 

        setValues({...values,error:false,[name]:event.target.value});

    };

const clickSubmit=event =>{

    //set previous errors as false
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({firstName,lastName,email,password,contactNumber}).then(data=>{
        if(data.error){
            setValues({...values,error:data.error,success:false});
        }
        
        else{
            setValues({
                ...values,
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                contactNumber:'',
                error:"",
                success:true
                
            });
        }
    });

};



const signupForm=()=>(
    <form>

        <div className="form-group">
            <label className="text-muted">First Name </label>
            <input onChange={handleChange('firstName')} type="text" className="form-control" value={firstName} />
        </div>
        <div className="form-group">
            <label className="text-muted">Last Name </label>
            <input onChange={handleChange('lastName')} type="text" className="form-control" value={lastName}/>
        </div>
        
        
        <div className="form-group">
            <label className="text-muted">Email </label>
            <input onChange={handleChange('email')} type="email" className="form-control" value={email}/>
        </div>
        <div className="form-group">
            <label className="text-muted">Password </label>
            <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
        </div>
        <div className="form-group">
            <label className="text-muted">Contact Number </label>
            <input onChange={handleChange('contactNumber')} type="text" className="form-control" value={contactNumber} />
        </div>
        <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
    </form>
);

//show success or failure
const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
);
const showSuccess =()=>(
        <div className="alert alert-info" style={{display: success ? "" :'none'}}>
            New Account is Created Please Sign in
            
        </div>
            
);


return (
<Layout title="Sign Up Page" description="Sign Up Here" className="container col-md-8 offset-md-2">

{showSuccess()}
{showError()}
{/*pass the signup form here*/ }
{signupForm()}


</Layout>


);

};




export default Signup;