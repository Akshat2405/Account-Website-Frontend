import React from 'react'; 
import {NavLink,useHistory} from 'react-router-dom';
import {useState} from 'react';
import Signupimg from '../images/signup.svg';
const Signup = () => {
    const history=useHistory();
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    });
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    const PostData= async(e)=>{
        e.preventDefault();
        const{name,email,work,phone,password,cpassword}=user;
        const res=await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                work,
                password,
                cpassword
            })
        })
        const data=await res.json();
        if(res.status===422 || (!data)){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else{
            window.alert("Registration Succesful");
            console.log("Registration Succesful");
            history.push("/signin");
        }

    }
    return (
        <>
        <div id="centering">
        <div className="container" id="signup_form" style={{backgroundColor:"#e3f2fd"}}>
        <img id="Signupimg" src={Signupimg} alt="no logo"/>
        <form method="POST"  className="container"  >
            <h1 className="container mt-5" id="tagline">Sign Up</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label"><i className="zmdi zmdi-account-add"></i> Name</label>
                <input type="text" className="form-control" value={user.name}  onChange={handleInputs} name="name" id="name" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"><i className="zmdi zmdi-email"></i> Email address</label>
                <input type="email" className="form-control" value={user.email}  onChange={handleInputs} name="email" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label"><i className="zmdi zmdi-smartphone-android"></i> Phone Number</label>
                <input type="text" className="form-control" value={user.phone}  onChange={handleInputs} name="phone" id="phone" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"><i className="zmdi zmdi-label-alt-outline"></i> work</label>
                <input type="text" className="form-control" value={user.work}  onChange={handleInputs} name="work" id="work" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label"><i className="zmdi zmdi-lock-outline"></i> Password</label>
                <input type="password" className="form-control" value={user.password}  onChange={handleInputs} name="password" id="password"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label"><i className="zmdi zmdi-lock-outline"></i> Cpassword</label>
                <input type="password" className="form-control" value={user.cpassword}  onChange={handleInputs} name="cpassword" id="cpassword"/>
            </div>
            
            <button type="submit"  name="signup" id="signup" onClick={PostData} className="btn btn-primary mb-3">Submit</button>
        </form>
        </div>
        <div className="container mt-5 mb-4"><NavLink  to="/signin">Sign in</NavLink></div>
        </div>
        </>

    )
}

export default Signup
