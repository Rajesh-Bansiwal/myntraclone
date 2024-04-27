import React, { useState } from 'react'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from './store/bag'
const Homeitems = ({item}) => {
const data=useSelector((state)=>state.bag)
const dispath=useDispatch()
    // console.log(item[0].id)
    const elefound=data.indexOf(item.id)>=0
    // console.log(elefound)
  return (
<>
<div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {/* {item.rating.stars} ⭐ | {item.rating.count} */}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">{item.discount_percentage}% OFF</span>
      </div>
      {/* <button onClick={()=>dispath(bagActions.addtobag(item))} className="btn-add-bag">Add to Bag</button> */}
      {elefound?<button onClick={()=>dispath(bagActions.remove(item.id))} type="button" class="btn btn-danger btn-add-bag">Remove</button>:<button onClick={()=>dispath(bagActions.addtobag(item.id))} type="button" class="btn btn-success btn-add-bag">Add to Bag</button>
}
    </div>  
</>

  )
}

export default Homeitems
