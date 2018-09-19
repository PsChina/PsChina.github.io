import React from 'react'
import DataStructure from '../DataStructure'

class List extends React.Component{
   constructor(props){
       super(props)
       this.state = {
           startY:0,
           distansY:0,
           top:0,
           shuoldChange:0
       }
       this.myRef = React.createRef();
   }
   handleStart(event){
       clearInterval( this.state.interval )
        this.setState({
            startY:event.touches[0].pageY
        })
   }
   handleMove(event){
        let shuoldChange = (this.state.startY-event.touches[0].pageY)*1.2
        this.setState({
            distansY:event.touches[0].pageY-this.state.startY,
            shuoldChange:Math.abs(shuoldChange) >= 6 ? shuoldChange : 0,
        })

        this.refs.content.scrollTop = this.state.top + this.state.shuoldChange
   }
   handleEnd(event){
        this.setState({
            top:this.myRef.current.scrollTop,
        })
   }
   render(){
       return(
           <div ref={this.myRef}
                onTouchStart={this.handleStart.bind(this)}
                onTouchMove={this.handleMove.bind(this)} 
                onTouchEnd={this.handleEnd.bind(this)}
                style={{flex:9,overflowY:'scroll'}}
           >    
               <DataStructure/>
           </div>
       )
   }
}

export default List
