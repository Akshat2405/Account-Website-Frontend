import React from 'react';
import {useState,useEffect} from 'react';
import Messageimg from '../images/message.svg';
const Contact = () => {
    const [userData, setuserData] = useState({name:"",email:"",message:""});
    const callContactPage= async ()=>{
        try{
            const res=await fetch('/getdata',{
                method: "GET",
                headers:new Headers({
                    "Content-Type": "application/json",
                })
            });
            const data=await res.json();
            // console.log(data);
            setuserData({...userData,name:data.name,email:data.email});
            if(res.status !==200){
                const error=new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        callContactPage();
    },[]);
    let name,value;
    const handleInupts = (e)=>{
        name=e.target.name;
        value=e.target.value;
        setuserData({...userData,[name]:value});

        // console.log(userData);
    }

    //send the data o the user
    const submitContactForm =async (e)=>{
        console.log(userData);
        e.preventDefault();
        const {name,email,message}=userData;
        
        const res =await fetch('/contact',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,message
            })
        });
        const data =await res.json();
        if(!data){
            console.log("message not send");
        }
        else{
            alert("Message Send");
            setuserData({...userData,message:""});
        }

    }
    
    return (
        <>
        <div className="container mt-5 contact_info">
            <div className="info" >
            <i class="zmdi zmdi-linkedin"></i>  <a href="https://www.linkedin.com/in/akshat-jain-44aa80155/" target="_blank">Linked in</a>
            </div>
            <div className="info">
            <i class="zmdi zmdi-twitter"></i>  <a href="https://twitter.com/AkshatJ71088287" target="_blank">Twitter</a>
            </div>
            <div className="info">
            <i class="zmdi zmdi-github"></i>  <a href="https://github.com/Akshat2405" target="_blank">Github</a>
            </div>
        </div>
        <div className="container" id="contact_form" style={{backgroundColor:"#e3f2fd"}}>
        <img id="Messageimg" src={Messageimg} alt="no logo"/>
        <form method="POST" className="container" >
            <h1 className="container mt-5" id="tagline">Message for us</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label"><i className="zmdi zmdi-account-add"></i> Name</label>
                <input type="text" value={userData.name} onChange={handleInupts} className="form-control" name="name" id="name" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"><i className="zmdi zmdi-email"></i> Email address</label>
                <input type="email" className="form-control"  value={userData.email} name="email" onChange={handleInupts} id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"><i className="zmdi zmdi-file-text"></i> Message</label>
                <textarea className="form-control" id="message" rows="3" value={userData.message} onChange={handleInupts} name="message" />
            </div>
            <button type="submit"  name="contactform"  className="btn btn-primary mb-4" onClick={submitContactForm}>Submit</button>
        </form>
        </div>
        
        </>
    )
}

export default Contact
