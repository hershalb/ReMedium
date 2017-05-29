import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
    	<div className="Header-top">
	      <div className="Header">
	        <div className="Header-title">
		      	<div className="Header-left">
		      		ReMedium
		      	</div>
		      	<div className="Header-right">
		      		<div>
		          		{' '}Write a story{' '}
		          	</div>
		          	<div>{' '}Drafts{' '}</div>
		      	</div>
		      </div>
		      <div className="Header-bottom">
		      	<p>For you</p>
		      </div>
	      </div>
	    </div>
    );
  }
}

export default Header;
