import React from 'react'
import {useState,useEffect} from 'react';
import Transimg from '../images/Transe.png';
function Transaction() {
    const [userData, setuserData] = useState({accountNo:"",email:"",senderAccountNo:"",amount:""});
    const callTransactionPage= async ()=>{
        try{
            const res=await fetch('/getdata',{
                method: "GET",
                headers:new Headers({
                    "Content-Type": "application/json",
                })
            });
            const data=await res.json();
            // console.log(data);
            setuserData({...userData,accountNo:data._id,email:data.email});
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
        callTransactionPage();
    },[]);
    let name,value;
    const handleInupts = (e)=>{
        name=e.target.name;
        value=e.target.value;
        setuserData({...userData,[name]:value});

        // console.log(userData);
    }

    //send the data o the user

    const submitTransactionForm =async (e)=>{
        console.log(userData);
        console.log("This is running");
        e.preventDefault();
        const {accountNo,email,senderAccountNo,amount}=userData;
        
        const res =await fetch('/transaction',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                accountNo,email,senderAccountNo,amount
            })
        });
        const data =await res.json();
        if(!data || res.status===400){
            alert("INVALID details");
            console.log("Not done");
        }
        else{
            alert("Transaction done");
            setuserData({...userData,senderAccountNo:"",ammount:""});
        }

    }
    return (
        <div id="centerTransaction">
        <div className="container" id="contact_form" style={{backgroundColor:"#e3f2fd"}}>
            <img id="Transimg" src={Transimg} alt="no logo"/>
            <form method="POST" className="container" >
                <h1 className="container mt-5" id="tagline">Start Transaction</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label"><i class="zmdi zmdi-account-box-o"></i> Account No</label>
                    <input type="text" value={userData.accountNo} onChange={handleInupts} className="form-control" name="accountNo" id="accountNo" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="zmdi zmdi-email"></i> Email address</label>
                    <input type="email" className="form-control"  value={userData.email} name="email" onChange={handleInupts} id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label"><i class="zmdi zmdi-account-box-o"></i> Sender Account No</label>
                    <input type="text" value={userData.senderAccountNo} onChange={handleInupts} className="form-control" name="senderAccountNo" id="senderAccountNo" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label"><i class="zmdi zmdi-money"></i> Amount</label>
                    <input type="number" value={userData.ammount} onChange={handleInupts} className="form-control" name="amount" id="amount" aria-describedby="emailHelp"/>
                </div>
                <button type="submit"  name="contactform"  className="btn btn-primary mb-4" onClick={submitTransactionForm}>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Transaction
