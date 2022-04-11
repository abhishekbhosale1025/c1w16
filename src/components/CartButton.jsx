import React from "react";
import {useState} from "react";


// keep the add to cart component here
const CartButton = () => {

  const [count,setCount] = React.useState(0)
    //manage state of the count 

    const handleIncrement = (value)=>
    {
        setCount(count+value)
    }

    const handleDecrement = (value)=>
    {
        setCount(count-value)
    }


  return <>
  {/* add to cart button */}
    {count===0
      ?  <button>Add to Cart</button>
      :  <p className="count-item">{count}</p>
          
    }


     
       




 
  {/* count with - and  + button */}

  <div>
    <button onClick={()=>handleDecrement(1)}>-</button>
      {/* <p className="count-item">{count}</p> */}
    <button onClick={()=>handleIncrement(1)}>+</button>
  </div>

  </>;
};
export default CartButton
