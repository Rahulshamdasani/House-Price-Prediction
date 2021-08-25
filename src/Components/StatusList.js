import React, {cloneElement, Component} from 'react';
import Status from './Status.js';

export default class statusList extends Component{


    render(){
        console.log("Inside list")
        console.log(this.props  )
        return(
            
                this.props.statuses.map((statusText, index)=>{
                    return <Status key = {index} text = {statusText} delete = {this.props.delete} index = {index} />
                })
            
        )
    }


}