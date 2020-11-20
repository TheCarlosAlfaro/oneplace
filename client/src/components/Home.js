import React from "react";

import VideoPlayer from "./VideoPlayer";

const videoJsOptions = {
	autoplay: true,
	controls: true,
	sources: [
		{
			src:
				"https://2435a7b9bc4b.us-east-1.playback.live-video.net/api/video/v1/us-east-1.729800231433.channel.IswryxhtAliK.m3u8",
			type: "application/x-mpegURL",
		},
	],
};

function Home() {
	return (
		<>
			<h1 className="text-6xl font-mono tracking-wide text-purple-600">
				Welcome to <span className="font-black">ONEPLACE</span>
			</h1>
			<VideoPlayer {...videoJsOptions} />
		</>
	);
}

export default Home;
