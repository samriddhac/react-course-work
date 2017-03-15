import React, {Component} from 'react';

export default class SearchBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}
	render() {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={e=>this.setState({term:e.target.value})}
				/>
			</div>
		);
	}
}