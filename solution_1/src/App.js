import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Posts from './Posts';
import Sidebar from './Sidebar';
import samplePosts from './sample-posts';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts : {},
    };
  }

  loadSamplePosts() {
    this.setState({ posts: samplePosts });
  }

  render() {
    return (
      <div className="App">
          <Header />
          <h1>{Object.keys(this.state.posts).length}</h1>
          <button onClick={this.loadSamplePosts.bind(this)}>Load Sample Posts</button>
          <Posts posts={this.state.posts} />
          <Sidebar />
      </div>
    );
  }
}

export default App;
