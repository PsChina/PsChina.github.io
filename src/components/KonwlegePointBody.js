import React from 'react'


class KonwledgePointBody extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={ {fontSize:this.props.size} }> { this.props.body } </div>
        )
    }
}

export default KonwledgePointBody