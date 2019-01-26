import React from 'react'
import './Heart.css'
const Heart = ()=>{
    return (
    <div class="heart-demo-page">
      <div>第一步:</div>
      <div class="setp1"></div>
      <div class="gaps"></div>
      <div>第二步:</div>
      <div class="setp2"></div>
      <div class="gaps"></div>
      <div>第三步:</div>
      <div class="setp3">
        <div class="setp2"></div>
      </div>
      <div class="gaps"></div>
      <div>第四步:</div>
      <div class="setp4">
        <div class="setp2 left"></div>
        <div class="setp2 right"></div>
      </div>
      <div>最终:</div>
      <div class="heart">
      </div>

    </div>
    )
}

export default Heart