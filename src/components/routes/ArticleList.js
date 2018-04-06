import React from 'react'
import DataStructure from '../DataStructure'

class List extends React.Component{
   constructor(props){
       super(props)
       this.state = {
           startTime:0,
           startY:0,
           distansY:0,
           top:0,
           shuoldChange:0,
           lastTime:0,
           duration:0
       }

   }
   handleStart(event){
       clearInterval( this.state.interval )
        this.setState({
            startY:event.touches[0].pageY,
            startTime:new Date().getTime()
        })
   }
   handleMove(event){
        let shuoldChange = (this.state.startY-event.touches[0].pageY)*1.2
        const currentTime = new Date().getTime()
        this.setState({
            distansY:event.touches[0].pageY-this.state.startY,
            shuoldChange:Math.abs(shuoldChange) >= 6 ? shuoldChange : 0,
            duration:currentTime-this.state.lastTime
        })
        this.setState({
            lastTime:currentTime
        })

        this.refs.content.scrollTop = this.state.top + this.state.shuoldChange
   }
   handleEnd(event){
        this.setState({
            top:this.refs.content.scrollTop,
        })

        if( this.state.duration<100&& this.state.lastTime-this.state.startTime>50){
            const interval = setInterval( ()=>{
                if(this.state.shuoldChange>6){
                    this.refs.content.scrollTop += 5+this.state.shuoldChange/this.state.duration;
                }else if(this.state.shuoldChange<6){
                    this.refs.content.scrollTop += -5+this.state.shuoldChange/this.state.duration;
                }
                this.setState({
                    top:this.refs.content.scrollTop,
                })
            } , this.state.duration/10)
            this.setState({
                interval
            })
            setTimeout( ()=>{
                clearInterval(interval)
            },160+ this.state.shuoldChange*10/this.state.duration)
        }  
        

   }
   render(){
       return(
           <div ref="content" 
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
