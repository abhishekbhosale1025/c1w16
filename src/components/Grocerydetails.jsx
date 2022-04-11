import React from "react"
import data from '../data.json'
import CartButton from './CartButton'


let divStyle = {display:'flex',gap:'50px',width:'100%',height:'auto',flexWrap:'wrap',marginLeft:'50px'}

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container" style={divStyle}>
            {/* map through the data and display the cards */}
            {data.map(item=>
            {
                return (
                <>  
                        <div style={{border:'1px solid black',height:'480px',width:'300px'}}>
                            <h4>{item.discount}</h4> 
                            <img src={item.imgURL}></img>
                            <h4>{item.title}</h4>
                            <h5>{item.mrp}</h5> 
                            <h4>{item.sellingPrice}</h4>  
                            <CartButton></CartButton>
                        </div>
                               
                </>
            )})
            }
        </div>
        </>
    )
}
export default GroceryDetails