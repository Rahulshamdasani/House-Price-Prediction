import React, {Component} from 'react';
import Status from './Status.js';

export default class statusList extends Component{

    constructor(){
        super();
        this.state = {
            statuses:[
                "I am Rahul",
                "My girlfriends name is Naveksha",
                "We love each other a lot",
                "Naveksha is playing pubg"
            ]
        };
    }

    render(){
        return(
            
                this.state.statuses.map(statusText=>{
                    return <Status text = {statusText}/>
                })
            
        )
    }


}