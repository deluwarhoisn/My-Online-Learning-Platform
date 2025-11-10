import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    // console.log(user)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
         return children;
    }
    return <Navigate to="/login"></Navigate>
   
};

export default PrivateRoute;