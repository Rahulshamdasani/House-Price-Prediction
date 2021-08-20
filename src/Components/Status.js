import React, {Component} from 'react';

export default class Status extends Component{
    constructor(){
      super();
      this.state = {
        likeCount : 0
      };
      this.likedNow = this.likedNow.bind(this)
    }
  
    likedNow(){
      this.setState({
        likeCount : this.state.likeCount+1
      });
    }
  
    render(){
      return(
        <div className = "Status">
          <h3>{this.props.text}</h3>
          <p><button onClick = {this.likedNow}>{this.state.likeCount} Likes</button></p>
        </div>
      );
    }
  }
  
  