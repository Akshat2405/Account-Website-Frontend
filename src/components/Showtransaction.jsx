import React from 'react'
import {Card} from 'react-bootstrap';

function Showtransaction(props) {
    return (
        <>
            <h2 id="trans" style={{margin:'20px'}}>Transaction List</h2>
            <div className="content">
            {
                props.transactiondetails.map((ele,idx)=>{return(
                    <Card  className='card'    border="success" style={{ width: '18rem', margin:'10px' ,boxShadow: 'rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px',
                    transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
                    }}>
                        <Card.Header>Transaction #{idx+1}</Card.Header>
                        <Card.Body>
                        <Card.Title>Account Details:- {ele.sender_Id}</Card.Title>
                        <Card.Text>
                            {ele.deposited? 'Depiste  +'+ele.amount: 'Credit  -'+ele.amount}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                )})
            }
            </div>
            
        </>
    )
}

export default Showtransaction
