import React, { Component } from 'react';
import './App.css';
import Post from './Post';

class Posts extends Component {
  showPost(key) {
  	return (
  		<Post post={this.props.posts[key]} />
  	)
  }

  render() {
    return (
      <div className="Posts">
      	<h1>{Object.keys(this.props.posts).length}</h1>
      	{Object.keys(this.props.posts).map(this.showPost.bind(this))}
      </div>
    );
  }
}

export default Posts;
