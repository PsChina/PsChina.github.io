import React from 'react'


class KonwledgePointTitle extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={ {fontWeight:'bold',fontSize:this.props.size} }> { this.props.title } </div>
        )
    }
}

export default KonwledgePointTitle