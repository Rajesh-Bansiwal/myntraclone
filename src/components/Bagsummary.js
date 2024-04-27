import React from 'react'
import { useSelector } from 'react-redux'

const Bagsummary = () => {
    const bag=useSelector((state)=>state.bag) 
  const items=useSelector((state)=>state.items)
  const item=items.filter((ele)=>{
    const find=bag.indexOf(ele.id);
    return find>=0;
  })
    const conv=99;
    let totalmrp=0
    let totaldis=0
    item.forEach((ele)=>{
totalmrp+=ele.original_price;
totaldis+=ele.original_price-ele.current_price
    })
     let final=totalmrp-totaldis+conv
  return (
   <>
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS {bag.length} Items </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalmrp}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totaldis}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr/>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${final}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
   </>
  )
}

export default Bagsummary
