import React from 'react'
import ReactDom from 'react-dom'

import DataStructure from './components/data_structure'

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <DataStructure/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>
    ,
    document.getElementById('app')
)