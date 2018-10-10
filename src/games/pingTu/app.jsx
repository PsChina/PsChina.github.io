import React, {Component} from 'react'
import main from './js/luoji.js'
import './css/style.css'


class App extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        main()
    }
    render(){
        return (
            <div className="mainGameBox">
                <div className="mainGame">
                    <ul>
                        <li id="box1"><img src={require("./img/ruiwen_01.png")}/></li>
                        <li id="box2"><img src={require("./img/ruiwen_02.png")}/></li>
                        <li id="box3"><img src={require("./img/ruiwen_03.png")}/></li>
                        <li id="box4"><img src={require("./img/ruiwen_04.png")}/></li>
                        <li id="box5"><img src={require("./img/ruiwen_05.png")}/></li>
                        <li id="box6"><img src={require("./img/ruiwen_06.png")}/></li>
                        <li id="box7"><img src={require("./img/ruiwen_07.png")}/></li>
                        <li id="box8"><img src={require("./img/ruiwen_08.png")}/></li>
                        <li id="box9"><img src={require("./img/ruiwen_09.png")}/></li>
                    </ul>
                    <div className="boostLine1"></div>
                    <div className="boostLine2"></div>
                    <div className="boostLineA"></div>
                    <div className="boostLineB"></div>
                    <div className="step"></div>
                    <div className="reset"><a href="index.html">重玩</a></div>
                </div>                
            </div>
        )
    }
}

export default App