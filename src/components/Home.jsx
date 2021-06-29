import React from 'react'
import {useState,useEffect} from 'react';
import Homeimg from '../images/home.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';
const Home = () => {
    const [userName, setuserName] = useState("");
    const [transactiondetails,settransactiondetails]=useState();
    const [userId,setuserId]=useState("");
    const callHomePage= async ()=>{
        try{
            const res=await fetch('/getdata',{
                method: "GET",
                headers:new Headers({
                    "Content-Type": "application/json",
                })
            });
            const data=await res.json();
            // console.log(data.transactions);
            setuserName(data.name);
            setuserId(data._id);
            settransactiondetails(data.transactions);
            console.log(transactiondetails);
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
        callHomePage();
    },[]);
    return (
        <>
        <div id="home">
            <img id="Homeimg" src={Homeimg} alt="no logo"/>
            <h2 className="welcome">Welcome {userName}</h2>
            <h1 className="dev">Your account number is <span class="badge rounded-pill bg-info text-dark">{userId}</span></h1>
            <h2 id="trans" >All Transaction</h2>
            {transactiondetails && transactiondetails.map((ele,idx)=>{return(
                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Header>Transaction #{idx+1}</Card.Header>
                    <Card.Body>
                    <Card.Title>Account Details:- {ele.sender_Id}</Card.Title>
                    <Card.Text>
                        {ele.deposited? 'Depiste  +'+ele.amount: 'Credit  -'+ele.amount}
                    </Card.Text>
                    </Card.Body>
                </Card>
            )
        })}
        </div>
        
        </>
    )
}

export default Home
