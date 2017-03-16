import React from 'react';

const VideoDetails = ({video}) => {
	if(!video) {
		return <div>Loading..</div>;
	}
	let url = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div className="video-details col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoDetails;