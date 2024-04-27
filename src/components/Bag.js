import React from 'react'
import Bagsummary from './Bagsummary'
import Bagitems from './Bagitems'
import { useSelector } from 'react-redux'
const Bag = () => {
  const bagitem=useSelector((state)=>state.bag)
  const items=useSelector((state)=>state.items)
  const item=items.filter((ele)=>{
    const find=bagitem.indexOf(ele.id);
    return find>=0;
  })
  return (
    <main >
        <div className="bag-page" >
<div className="bag-items-container">
 {item.map((ele,i)=>(
  <Bagitems key={i} item={ele}/>
 )) }
</div>
  <Bagsummary/>
 </div>
    </main>
  
  )
}

export default Bag
