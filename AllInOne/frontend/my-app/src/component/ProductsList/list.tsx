import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "./CartContext";
import './list.css'

function ListOfProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function List() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    }

    List();
  }, []);
  return (
    <div>
      <div className="row">
        {products.map((item: any, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card
              className="root-card"
              style={{
                height: "470px",
                overflow: "scroll",
                width: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Card.Img
                style={{ height: "240px", width: "200px" }}
                src={item.image}></Card.Img>
              <Card.Body>
                <Card.Title style={{ fontSize: 20 }}>{item.title}</Card.Title>
                <Card.Text style={{ fontSize: 15 }}>
                  <div>Price: {item.price}</div>
                  <div>Category: {item.category}</div>
                  <div>Rating: {item.rating.rate}</div>
                </Card.Text>
              </Card.Body>

              <Button
                className="add-cart-button"
                variant="primary"
                onClick={() => {
                  addToCart(item);
                }}>
                Add to Cart
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfProducts;
