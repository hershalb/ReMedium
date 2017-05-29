import React, { Component } from 'react';
import './App.css';

class Sidebar extends Component {
	constructor() {
		super();

		this.state = {
			fixed : false,
			tags : [
		        "Advice", "Business", "Creativity", "Design", "Economics", "Entrepreneurship", "Fiction", "Finance", "Humor", "Ideas", "Innovation", "Investing", "Leadership", "Movies", "Music", "NBA", "Productivity", "Psychology", "Relationships", "Self Improvement", "Social Media", "Startup", "Technology", "This Happened To Me", "Venture Capital", "Writing"
		    ],
		}
		this.displayTags = this.displayTags.bind(this);
		this.checkScroll = this.checkScroll.bind(this);
	}

	componentWillMount() {
		document.addEventListener("scroll", this.checkScroll);
	}

	checkScroll() {
		var header = document.getElementsByClassName("Header")[0];
		var check = false;
		if (header !== undefined) {
			if (window.scrollY > header.clientHeight + 50) {
				check = true;
			}
		}
		if (check !== this.state.fixed) {
			this.setState({fixed: check});
		}
	}

	displayTags(key) {
		return (
			<li key={key} className="Sidebar-tag">{key}</li>
		);
	}

	render() {
		var date = new Date();
		return (
			<div className="Sidebar">
				<div className={this.state.fixed ? "Sidebar-fixed" : ""}>
					<p>{date.toDateString()}</p>
					<p>Tags you follow</p>
					<hr />
					<ul>
						{this.state.tags.map(this.displayTags)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Sidebar;