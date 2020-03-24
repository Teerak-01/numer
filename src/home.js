import React, { useState } from "react";
import './App.css';
function Test() {

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(number1 + number2);

  function calculateTotal() {
      setTotal(number1 + number2);
        }
        return(
      <div className="BG"> <br/>
            <center>
            <input value={number1} onChange={e => setNumber1(+e.target.value)} placeholder="A"/>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</h2>
            <input  value={number2} onChange={e => setNumber2(+e.target.value)} placeholder="B"/> 
            
            <br/><br/>
            
         <button onClick={calculateTotal}>
              Add Them!
           </button>
             
              <h2>{total}</h2>
              </center>
       </div>

        )

}
export default Test;
