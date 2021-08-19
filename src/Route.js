import React  from 'react';

import{BrowserRouter,Switch,Route} from 'react-router-dom';

import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Menu from './core/Menu';
import AddProduct from './product/AddProduct';
import ManageProduct from './admin/manageProduct';
import UpdateProduct from './product/UpdateProduct';


const Routes =()=>{
    return (
        <BrowserRouter>

            <Menu/>
            <Switch>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/" exact component={Home}/>
                <Route path="/addProduct" exact component={AddProduct}/>
                <Route path="/manageProduct" exact component={ManageProduct}/>
                <Route path="/updateProduct/:productId" exact component={UpdateProduct}/>


            </Switch>
        </BrowserRouter>
    );
}

export default Routes;