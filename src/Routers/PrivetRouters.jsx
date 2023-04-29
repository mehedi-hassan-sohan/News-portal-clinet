import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRouters = ({children}) => {
    const { user, loading} =useContext(AuthContext)
    
     if(loading){ 
        return   <Spinner animation="border" variant="primary" />

     }    

    if(user){
        return children 
   
    } 
     
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivetRouters;