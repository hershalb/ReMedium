import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      	<div className="Post">
			<div className="Post-info">
	          <div className="Post-img">
	            <img className="Post-author-img" src={logo}/>
	          </div>
	          <div className="Post-text">
	            <p className="Post-author">{this.props.post.author}</p>
	            <p className="Post-date">{this.props.post.date}</p>
	          </div>
	        </div>
	        <p className="Post-title">{this.props.post.title}</p>
	        <div className="Post-text-preview">
	        	{this.props.post.text}
	        </div>
	        <div className="Post-bottom">
	          <div className="Post-left">
	            💚
	          </div>
	          <div className="Post-right">
	            <span className="Post-resp">0 repsonses</span>
	            🔖
	          </div>
	        </div>
	    </div>
    );
  }
}

export default Post;
