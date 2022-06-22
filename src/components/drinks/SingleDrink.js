import React from 'react'
import { useSelector } from "react-redux";
import "./ListDrinks.css"

import { useParams } from 'react-router-dom'


const SingleDrink = () => {

  const Coffee = useSelector((state) => state.Drinks.Drinks.slice(0, 19));
  const {id} = useParams();
  const singleCoffe = Coffee.filter(item=>item.id ==id)
  console.log(singleCoffe)
  

  return (
    <div className='DrinksContainer mt-5' style={{border : "1px solid white"}}>  
      {
      
      singleCoffe.map(item=>{
        return  <div
          data-aos={"fade-in"}
          
          key={item.id}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <img
            class="card-img-left rounded Card_image"
            src={item.image}
            alt="Card  cap"
          />
  
          <div className="card-body text-center">
            <h5 class="card-title ">{item.title}</h5>
            <p class="card-text text-black">{item.description}</p>
          </div>
        </div>
        })
      }</div>
  )
}

export default SingleDrink