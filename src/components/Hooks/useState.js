import React from 'react'
import './style.css';

const useState = () => {
  const  initialData = 0;
  const [myNum , setMyNum] = React.useState(initialData);


  return (
    <>
      <div className='center_div'>
        <p>{myNum}</p>
        <div className='button2' onClick={() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREMENT
        </div>
        <div className='button2' onClick={() => setMyNum(myNum - 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECREMENT
        </div>
      </div>
      
    </>
  )
}

export default useState
