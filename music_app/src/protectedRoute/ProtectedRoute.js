import React from 'react'
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoute({isAdmin,render:Component}) {
    return (
       <Route
       render={ 
           
         (props)=>{

           if (isAdmin){
               return<Component />;
           }else{
               return(
                   <Redirect to={{pathname:"/", state:{from:props.location}}}/>
               );
           }
       }}
       />
    );
}

export default ProtectedRoute
