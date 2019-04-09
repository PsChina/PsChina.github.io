import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './css/style.css'
import Home from './components/routes/Home'
import ArticleList from './components/routes/ArticleList'
import rem from './rem/rem'
import isMobile from './is/mobile'
import ReactAppDemo from './ReactAppDemo/app.js'
import TanChiShe from './games/tanChiShe/app.jsx'
import PingTu from './games/pingTu/app.jsx'
import Heart from './pages/Heart.jsx'
import LazyLoad from './components/routes/LazyLoad.js'
import WebEditor from './editor/index.jsx'

if (isMobile) {
  rem(3.2);
  document.ontouchmove = function(e) { // 阻止向下翻页时 网页向下滑
    e.preventDefault()
    e.stopPropagation()
  }
} else {
  rem(13.66);
}

// <DataStructure/>

const css = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}

/**
 * @class { App } 网站入口
 */
class App extends React.Component {
/**
 * @constructor {构造器}
 */
  constructor() {
    super()
    this.state={
      showHeader: true,
    }
  }
  /**
   * @return {jsx}
   */
  render() {
    return (
      <div style={css.box}>
        <Switch>
          <Redirect path="/" component={Home} to="/home" exact></Redirect>
          <Route path="/home" component={Home} />
          <Route path="/list" component={ArticleList} />
          <Route path="/react/homework" component={ReactAppDemo} />
          <Route path="/games/tcs" component={TanChiShe} />
          <Route path="/games/pt" component={PingTu} />
          <Route path="/css/heart" component={Heart}/>
          <Route path="/js/lazyload" component={LazyLoad}/>
          <Route path="/web/editor" component={WebEditor}/>
        </Switch>
      </div>)
  }
}

ReactDom.render(
    <Router>
      <Route path="/" component={App}></Route>
    </Router>
    ,
    document.getElementById('app')
)
