import React, { useEffect, useRef } from "react";

function IvsPlayer(options) {
	const divEl = useRef(null);
	const videoEl = useRef(null);

	useEffect(() => {
		const script = document.createElement("script");

		script.src = "https://player.live-video.net/1.1.2/amazon-ivs-player.min.js";
		script.async = true;

		document.body.appendChild(script);

		script.onload = () => {
			// eslint-disable-next-line no-undef
			if (IVSPlayer.isPlayerSupported) {
				// eslint-disable-next-line no-undef
				const player = IVSPlayer.create();
				player.attachHTMLVideoElement(document.getElementById("video-player"));
				player.load(
					"https://2435a7b9bc4b.us-east-1.playback.live-video.net/api/video/v1/us-east-1.729800231433.channel.JjX5QoqOavMn.m3u8"
				);
				player.play();
			}
		};

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div ref={divEl}>
			<video
				id="video-player"
				ref={videoEl}
				playsInline
				autoPlay
				height={600}
				controls
			/>
		</div>
	);
}

export default IvsPlayer;
