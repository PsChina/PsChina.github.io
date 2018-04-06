import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './css/style.css' 
import AppHeader from './components/navigation/Navigation'
import Home from './components/routes/Home'
import ArticleList from './components/routes/ArticleList'
import rem from './rem/rem'
import isMobile from './is/mobile'
if(isMobile){
    rem(3.2);
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
    }
    render(){
        return (
            <div style={css.box}>
                <AppHeader/>
                <Switch>
                <Redirect path="/" component={Home} to="/home" exact></Redirect>
                <Route path="/home" component={Home}></Route>
                <Route path="/list" component={ArticleList}></Route>
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