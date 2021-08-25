import React, {Component} from 'react';
import StatusList from './StatusList.js';

export default class statusAll extends Component{

    constructor(){
        super();

        this.state = {
            currStatus:"",
            statuses:[
                "I am Rahul",
                "My girlfriends name is Naveksha",
                "We love each other a lot",
                "Naveksha is playing pubg"
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitStatus = this.submitStatus.bind(this);
        this.delete = this.delete.bind(this);
    }

    handleChange(ev){
        this.setState({currStatus:ev.target.value});
    }
    submitStatus(ev){
        ev.preventDefault();
        let newList = [this.state.currStatus, ...this.state.statuses]
        this.setState({statuses:newList, currStatus:""})
        
    }

    delete(index){
        let copy = [...this.state.statuses]
        copy.splice(index,1)
        this.setState({statuses:copy})
    }

    render(){
        return(
            <div>
                
                <div className = "formCss">
                    <form onSubmit={this.submitStatus}>
                        <input className = "formField" type = "text" placeholder = "Add Anything" value = {this.state.currStatus} onChange = {this.handleChange}/>
                        <button className = "formField" type = "submit">Add status</button>
                    </form>
                </div>


                <StatusList statuses = {this.state.statuses} delete = {this.delete}/>
            </div>
        )    
    }


}   