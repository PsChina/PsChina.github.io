/* eslint-disable require-jsdoc */
import React, {Component} from 'react'
import './css/snakeStyle.css'
import main from './js/snake.js'
class App extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        main()
    }
    render() {
        return (
            <div className="gameBox">
                <div className="snake">
                    <div className="snakeHead"></div>
                </div>
            </div>
        )
    }
}

export default App
