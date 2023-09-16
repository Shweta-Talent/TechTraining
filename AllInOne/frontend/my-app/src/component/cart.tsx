import React from "react"
import { useCart } from "./CartContext"
import Card from "react-bootstrap/Card";
import './list.css'
export function ProductCart(){
    const {cart} =useCart()
    return (
        <div>
        <div className="row">
        {cart.length === 0 ? (
        <h1>Cart is empty 😓</h1>
      ) :
          cart.map((item: any, index:any) => (
            <div key={index} className="col-md-4 mb-4">
              <Card className="root-card" style={{ height: '470px' , overflow:"scroll"  ,width:'400px', display:"flex" , alignItems:"center", justifyContent:'space-between'}}>
               <Card.Img style={{height:"240px", width:"200px" }}src={item.image}></Card.Img>
                <Card.Body>
                  <Card.Title style={{fontSize:20}}>{item.title}</Card.Title>
                  <Card.Text style={{fontSize:15}}>
                    <div>Price: {item.price}</div>
                    <div>Category: {item.category}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </div>
            
          ))}
        </div>
      </div>)
}

