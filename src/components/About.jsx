import React,{useEffect,useState} from 'react'
import Aboutimg from '../images/about.svg';
import {useHistory} from 'react-router-dom';
const About = () => {
    const history=useHistory();
    const[userData,setUserData]=useState({});
    const callAboutPage= async ()=>{
        try{
            const res=await fetch('/about',{
                method: "GET",
                headers:new Headers({
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                }),
                credentials: "include"
            });
            const data=await res.json();
            // console.log(data);
            setUserData(data);
            if(res.status !=200){
                const error=new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
            history.push('/signin');
        }

    }
    useEffect(()=>{
        callAboutPage();
    },[]);
    return (
        <>
        <div className="container" id="about_page">
            <div id="about_form" style={{backgroundColor:"#e3f2fd"}}>
                
                <form  method="GET" id="tables">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Details of User</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td> <b>Name:</b> {userData.name}</td>
                        </tr>
                        <tr>
                        <td> <b>Email:</b> {userData.email}</td>
                        </tr>
                        <tr>
                        <td> <b>Phone Number:</b> {userData.phone}</td>
                        </tr>
                        <tr>
                        <td> <b>Profession:</b> {userData.work}</td>
                        </tr>
                        <tr>
                        <td> <b>Balance:</b> {userData.balance}</td>
                        </tr>
                    </tbody>
                    </table>
                    </form>
                    <div>
                    <img id="aboutimg" src={Aboutimg} alt="no logo"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
