import React from 'react';
import{Link,withRouter} from 'react-router-dom';



//show active nav
const isActive = (history,path) =>{
    if(history.location.pathname===path){
        return {color: 'white'};
    }else{
        return {color: 'green'};
    }
}


//history=> This history object lets us manually control the history of the browse

const Menu =({history})=>(

    <div>
        <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">

            <Link className="nav-link" style={isActive(history,'/')} to="/">Home</Link>
            
        </li>
        <li className="nav-item">
            
            <Link className="nav-link" style={isActive(history,'/signin')} to="/signin">SignIn</Link>

        </li>
        <li className="nav-item">
            
            <Link className="nav-link" style={isActive(history,'/signup')} to="/signup">SignUp</Link>

        </li>

        <li className="nav-item">
            
            <Link className="nav-link" style={isActive(history,'/addProduct')} to="/addProduct">Add Product</Link>

        </li>

        <li className="nav-item">
            
            <Link className="nav-link" style={isActive(history,'/manageProduct')} to="/manageProduct">Manage Product</Link>

        </li>
        
        <li className="nav-item">
            
            <Link className="nav-link" style={isActive(history,'/updateProduct')} to="/updateProduct">Update Product</Link>

        </li>
        



        </ul>
    </div>
)

export default withRouter(Menu);