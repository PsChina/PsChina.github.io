import React from 'react'

class Home extends React.Component{
   constructor(props){
       super(props)
   }
   render(){
       return(
           <div style={{flex:9,overflowY:'scroll'}}>
                <h1>Home</h1>
                <a href="http://www.feieyun.com/open/index.html">飞蛾打印机开放平台</a>
                <div>fullter swift kotlin react</div>
           </div>
       )
   }
}

export default Home