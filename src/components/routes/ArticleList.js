import React from 'react'
import DataStructure from '../DataStructure'

class List extends React.Component{
   constructor(props){
       super(props)
   }
   render(){
       return(
           <div style={{flex:9,overflowY:'scroll'}}>
               <DataStructure/>
           </div>
       )
   }
}

export default List
