import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const ShowCounter = () => {
  const [input, setInput] = useState("");
  const [countChar, setCountChar] = useState(0);

  const handleInput = (e: any) => {
    const value = e.target.value;
    setCountChar(value.length);
    setInput(value);
  };
  return (
    <Card className="Card">
      <Card.Body>
        <div>
          <input
            className="input-field"
            type="text"
            value={input}
            onChange={handleInput}
          />
          <h6 className="count">{countChar}</h6>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShowCounter;
