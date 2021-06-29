import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import Logo from '../images/logo2.png';
import {UserContext} from '../App';
const Navbar = () => {
    
    const {state,dispatch}= useContext(UserContext)
    const UserLogin=()=>{
        if(state){
            return (
                <>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/transaction">Transaction</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">LogOut</NavLink>
                    </li>
                </>
            );
        }
        else{
            return(
                <>
                
                <li className="nav-item">
                <NavLink className="nav-link" to="/signin">Signin</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                </li>
                </>
            );
        }
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor:"#e3f2fd"}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img id="logo" src={Logo} alt="no logo"/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <UserLogin/>
                </ul>
                
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar
