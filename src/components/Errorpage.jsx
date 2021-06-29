import React from 'react'
import {NavLink} from 'react-router-dom';
const Errorpage = () => {
    return (
        <>
         <div id="error_page">
            <h1 className="dev">Error <span class="badge rounded-pill bg-info text-dark">404</span>, Page not found</h1>
            <button type="button" class="btn btn-primary" style={{borderRadius:"30px"}}><NavLink style={{color:"black"}} to="/"> Go to Home Page</NavLink></button>
        </div>   
        </>
    )
}

export default Errorpage
