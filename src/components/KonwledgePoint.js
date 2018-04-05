import React from 'react';
import KonwledgePointTitle from './KonwledgePointTitle'
import KonwledgePointBody from './KonwlegePointBody'

class KonwledgePoint extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div>
            <KonwledgePointTitle title={this.props.title} size={this.props.titleSize} />
            <KonwledgePointBody body={this.props.body} size={this.props.bodySize} />
        </div>
        )
    }
}