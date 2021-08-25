import React, {Component} from 'react';
import "./status.css";

export default class Status extends Component{
    constructor(){
      super();
      this.state = {
        likeCount : 0
      };
      this.likedNow = this.likedNow.bind(this)
      this.delete = this.delete.bind(this)
    }
  
    likedNow(){
      this.setState({
        likeCount : this.state.likeCount+1
      });
    }

    delete(){
      console.log(this.props.index);
      this.props.delete(this.props.index);
      
    }
  
    render(){
      return(
        <div className = "Status">
          <div className = "close" onClick = {this.delete}>X</div>
          <h3>{this.props.text}</h3>
          <p><button onClick = {this.likedNow}>{this.state.likeCount} Likes</button></p>
        </div>
      );
    }
  }
  
  