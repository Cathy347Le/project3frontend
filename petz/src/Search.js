import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "*",
			petList: []
		};
		this.updateName = this.updateName.bind(this);
	}

	componentDidMount() {
		axios
			.get("http://localhost:3001/api/pets")
			.then(res => this.setState({ petList: res.data }))
			.catch(err => console.log(err));
	}

	updateName(event) {
		this.setState({ input: event.target.value }, () => {
			if (this.state.input === "") {
				this.setState({ input: "*" });
			} else {
				this.setState({ input: this.state.input });
			}
		});
	}

	updateResults() {}

	render() {
		let results = [];

		this.state.petList
			.filter(pet =>
				pet.name.toUpperCase().includes(this.state.input.toUpperCase())
			)
			.map(pet => {
				results.push(pet);
			});

		return (
			<div>
				<h1>Search for a pet</h1>
				<form>
					<input
						type="text"
						onChange={this.updateName}
						placeholder="Search pets by name..."
					/>
				</form>
				{this.state.input}
				{/* {this.state.petList} */}
			</div>
		);
	}
}

export default Search;
