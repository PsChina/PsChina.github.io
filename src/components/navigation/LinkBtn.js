import React from 'react'
import { withRouter } from 'react-router'
import isMobile from '../../is/mobile'

let Link

if(isMobile) {
    class LinkBtn extends React.Component{
        constructor(props){
            super(props)
        }
        handleTouchEnd(event){
             event.preventDefault()
             event.stopPropagation()
             this.props.history.push( this.props.to )
        }
        render(){
            return(
                <div className={ window.location.pathname===this.props.to ? 'app-active' : '' } style={this.props.style} onTouchEnd={this.handleTouchEnd.bind(this)}>{this.props.children}</div>
            )
        }
     }
     Link = LinkBtn
}else{
    class LinkBtn extends React.Component{
        constructor(props){
            super(props)
        }
        handleClick(event){
            event.preventDefault()
            event.stopPropagation()
            this.props.history.push( this.props.to )
        }
        render(){
            return(
                <div className={ window.location.pathname===this.props.to ? 'app-active' : '' } style={this.props.style} onClick={this.handleClick.bind(this)}>{this.props.children}</div>
            )
        }
     }
     Link = LinkBtn
}


export default withRouter(Link)