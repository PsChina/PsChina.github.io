import React from 'react'

const css = {
  box: {
    height: '400px',
    with: '100%',
    border: '1px solid pink',
    overflowY: 'scroll',
  },
  imageBox: {
    width: '500px',
    height: '312px',
    background: 'orange',
    margin: '20px auto',
  },
}
const images = []

for (let i=0; i<10; i++) {
  images.push(
      <div style={css.imageBox} key={i}>
        <img src-data={`https://pschina.github.io/src/assets${i}.jpg`} />
      </div>
  )
}

const io = new IntersectionObserver(()=>{ // 观察者

}, {});

const LaztLoadPage = ()=>(
  <div style={css.box}>
    {images}
  </div>
)


export default LaztLoadPage
