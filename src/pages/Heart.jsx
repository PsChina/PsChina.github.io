import React from 'react'
import './Heart.css'
const Heart = ()=>{
  return (
    <div className="heart-demo-page">
      <div>第一步:</div>
      <div className="setp1"></div>
      <div className="gaps"></div>
      <div>第二步:</div>
      <div className="setp2"></div>
      <div className="gaps"></div>
      <div>第三步:</div>
      <div className="setp3">
        <div className="setp2"></div>
      </div>
      <div className="gaps"></div>
      <div>第四步:</div>
      <div className="setp4">
        <div className="setp2 left"></div>
        <div className="setp2 right"></div>
      </div>
      <div>最终:</div>
      <div className="heart">
      </div>

    </div>
  )
}

export default Heart