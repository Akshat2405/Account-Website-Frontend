import React,{useContext} from 'react'
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../App';
function Logout() {
    const {state,dispatch}= useContext(UserContext)
    const history=useHistory();
    useEffect(() => {
        fetch('/logout',{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>{
            dispatch({type:"USER",payload:false})
            history.push('/signin',{replace:true});
            if(!res.status===200){
                const err=new Error(res.error);
                throw err;
            }
        }).catch((err)=>{
            console.log(err);
        })
    })
    return (
        <>
          <h1>In logout Page</h1>  
        </>
    )
}

export default Logout
