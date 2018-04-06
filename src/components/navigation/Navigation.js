import React from 'react'
import { NavLink } from 'react-router-dom'
import LinkBtn from './LinkBtn'
import isMobile from '../../is/mobile'
const css = {
    navBox:{
        display:'flex',
        width:'100%',
        flex:1,
        borderBottom:'.01rem #CCC solid',
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
        fontSize: isMobile ? '.5rem':'.25rem',
        cursor:'pointer',
        boxSizing:'border-box',
    }
}


class appNav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={css.navBox}>
                 <LinkBtn style={css.link} to="/home">主页</LinkBtn> 
                 <LinkBtn style={css.link} to="/list">列表</LinkBtn>
            </div>
        )
    }
}
export default appNav