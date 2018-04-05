import React from 'react'
import { NavLink } from 'react-router-dom'

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
        fontSize:'.3rem'
    }
}


class appNav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={css.navBox}>
                 <NavLink style={css.link} activeClassName="app-active" to="/home">主页</NavLink> 
                 <NavLink style={css.link} activeClassName="app-active" to="/list">列表</NavLink>
            </div>
        )
    }
}
export default appNav