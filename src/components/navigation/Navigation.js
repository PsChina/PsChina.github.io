import React from 'react'
import LinkBtn from './LinkBtn'
import isMobile from '../../is/mobile'
const css = {
    navBox:{
        display:'flex',
        width:'100%',
        flex:1,
        boxSizing:'border-box',
        color:'#CCC'
    },
    link:{
        flex:1,
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textDecoration:'none',
        fontSize: isMobile ? '.16rem':'.25rem',
        fontWeight:'bold',
        cursor:'pointer',
        boxSizing:'border-box',
        borderBottom:'.01rem #CCC solid',
    }
}


class appNav extends React.Component{
    constructor(props){
        super(props)
        this.state={
            navBox:css.navBox,
            link:css.link
        }
    }
    render(){
        return (
            <div style={this.state.navBox}>
                 <LinkBtn style={this.state.link} to="/home">主页</LinkBtn> 
                 <LinkBtn style={this.state.link} to="/list">列表</LinkBtn>
            </div>
        )
    }
}
export default appNav