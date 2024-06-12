import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [item,setitem]=useState('')
  const [list,setlist]=useState([])
  const [check,setcheck]=useState(false)
  

  function add()
  {
    setlist([...list,item])
    setitem('')

  }

  function delet(index)
  {
    const l=[...list]
    l.splice(index,1)
    setlist(l)
    alert("item is deleted")
  }
  
  return (<>
  <h1>Grocery Bud</h1>
    <div className='input'>
      <input  type="text" placeholder='enter your item' value={item} onChange={(e)=> setitem(e.target.value)}/>
      <button onClick={add}>Add Item</button>
      {
        list.map((lis,index)=>{
          return <div key={index} className="list">
            <input type='checkbox'  style={{display:'inline-block'}}  onChange={(e)=> setcheck(e.target.checked)}></input>
            <p style={{display:'inline-block'}}>{lis}</p>
            <button style={{display:'inline-block'}} onClick={()=>{delet(index)}}>delete</button>
          </div>
          
        }
        )}
    
    </div>
    </>

  )
}

export default App