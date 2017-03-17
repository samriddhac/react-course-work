import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
const API_KEY='AIzaSyB2H-vM6KQGQ9gj1ukhL6E4GaU2G1Codtc';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos:[],
			selectedVideo: null
		};
		this.videoSearch('React');
	}

	videoSearch(term) {
		YTSearch({key:API_KEY, term: term}, (videos) => {
			//this.setState({videos});
			//in es5 syntax {videos:videos}
			this.setState({
				videos:videos,
				selectedVideo: videos[0]
			});
		});
	}

	render(){
		const videoSearh = _.debounce(term => this.videoSearch(term), 300);

		return (
			<div>
				<SearchBar onInputChange={videoSearh}/>
				<VideoDetails video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
				videos={this.state.videos}/>
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