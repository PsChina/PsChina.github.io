import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './css/style.css' 
import AppHeader from './components/navigation/Navigation'
import Home from './components/routes/Home'
import ArticleList from './components/routes/ArticleList'
import rem from './rem/rem'
import isMobile from './is/mobile'
import ReactAppDemo from './ReactAppDemo/app.js'
import TanChiShe from './games/tanChiShe/app.jsx'

if(isMobile){
    rem(3.2);
    document.ontouchmove = function(e){ // 阻止向下翻页时 网页向下滑
        e.preventDefault()
        e.stopPropagation()
    }
}else{
    rem(13.66);
}

// <DataStructure/>

const css = {
    box:{
        display:'flex',
        flexDirection:'column',
        height:'100%'
    }
}

class App extends React.Component {
    constructor(){
        super()
        this.state={
            showHeader:true
        }
    }
    render(){
        return (
            <div style={css.box}>
                <AppHeader/>
                <Switch>
                    <Redirect path="/" component={Home} to="/home" exact></Redirect>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={ArticleList} />
                    <Route path="/react/homework" component={ReactAppDemo} />
                    <Route path="/games/tcs" component={TanChiShe} />
                </Switch>
            </div>
        )
    }
}

ReactDom.render(
    <Router>
        <Route path="/" component={App}></Route>  
    </Router>
    ,
    document.getElementById('app')
)