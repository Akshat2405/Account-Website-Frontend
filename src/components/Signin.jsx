import React,{useContext} from 'react'
import {NavLink,useHistory} from 'react-router-dom';
import {useState} from 'react';
import {UserContext} from '../App';
import Signinimg from '../images/signin.svg';
const Signin = () => {
    const {state,dispatch}= useContext(UserContext)
    const history=useHistory();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const loginUser= async (e)=>{
        e.preventDefault();
        const res= await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });
        const data= await res.json();
        if(res.status===400 || !data){
            window.alert("Invalid Credentials");
        }
        else{
            dispatch({type:"USER",payload:true})
            window.alert("Login Succesfully");
            history.push("/");
        }

    }
    return (
        <>
        <div className="forcenter">
        <div className="container" id="sigin_form" style={{backgroundColor:"#e3f2fd"}}>
        <img id="Signimg" src={Signinimg} alt="no logo"/>
            <form method="POST" className="container " >
                <h1 className="container mt-5" id="tagline">Sign In <i className="zmdi zmdi-sign-in"></i></h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="zmdi zmdi-email"></i> Email address</label>
                    <input type="email" className="form-control" name="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"><i className="zmdi zmdi-lock-outline"></i> Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                
                <button type="submit"  name="signup" id="signup" className="btn btn-primary mb-3" onClick={loginUser}>Submit</button>
            </form>
            </div>
        <div className="container mt-5"><NavLink  to="/signup">New user</NavLink></div>
        </div>
        </>
    )
}

export default Signin
