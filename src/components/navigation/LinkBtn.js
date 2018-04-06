import React from 'react'
import { withRouter } from 'react-router'
import isMobile from '../../is/mobile'

let Link

if(isMobile) {
    class LinkBtn extends React.Component{
        constructor(props){
            super(props)
            let normal = Object.assign({},this.props.style)
            let activeCss = {
                color: 'green',
                borderBottom:'.01rem green solid',
            }
            const active = Object.assign(normal,activeCss)
            this.state={
                normal:this.props.style,
                active
            }
        }
        handleTouchEnd(event){
             event.preventDefault()
             event.stopPropagation()
             this.props.history.push( this.props.to )
        }
        render(){
            return(
                <div style={ window.location.pathname===this.props.to ? this.state.active : this.state.normal } onTouchEnd={this.handleTouchEnd.bind(this)}>{this.props.children}</div>
            )
        }
     }
     Link = LinkBtn
}else{
    class LinkBtn extends React.Component{
        constructor(props){
            super(props)
            let normal = Object.assign({},this.props.style)
            let activeCss = {
                color: 'green',
                borderBottom:'.01rem green solid',
            }
            const active = Object.assign(normal,activeCss)
            this.state={
                normal:this.props.style,
                active
            }
        }
        handleClick(event){
            event.preventDefault()
            event.stopPropagation()
            this.props.history.push( this.props.to )
        }
        render(){
            return(
                <div style={ window.location.pathname===this.props.to ? this.state.active : this.state.normal }  onClick={this.handleClick.bind(this)}>{this.props.children}</div>
            )
        }
     }
     Link = LinkBtn
}


export default withRouter(Link)