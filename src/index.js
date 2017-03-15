import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY='AIzaSyB2H-vM6KQGQ9gj1ukhL6E4GaU2G1Codtc';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos:[]
		};
		YTSearch({key:API_KEY, term: 'fakira'}, (videos) => {
			this.setState({videos});
			//in es5 syntax {videos:videos}
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

/*const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}*/
ReactDOM.render(<App />, document.querySelector('.container'));