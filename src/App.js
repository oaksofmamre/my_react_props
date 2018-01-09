import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContactCards from "./ContactCards";

const people = [
	{
		name: "Sven",
		phone: "504-555-1212",
		favorite: true
	},
	{
		name: "Olga",
		phone: "713-555-1212",
		favorite: false
	},
	{
		name: "Erik",
		phone: "985-555-1212",
		favorite: false
	}
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>My Contact Cards React App</h2>
				</div>
				<ContactCards people={people} />
			</div>
		);
	}
}

export default App;
