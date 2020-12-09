import React from 'react';
import ReactDOM from 'react-dom';

import {
	Container,
	Button,
	Overlay,
	Inner,
	Iframe
} from './styles/videoPlayerStyles';

const defaultVideoPlayerState = {
	showplayer: null,
	setShowPlayer: () => {}
};

const VideoPlayerContext = React.createContext(defaultVideoPlayerState);

export default function VideoPlayer({ children, ...restProps }) {
	const [ showPlayer, setShowPlayer ] = React.useState(false);

	return (
		<VideoPlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
			<Container {...restProps}>{children}</Container>
		</VideoPlayerContext.Provider>
	);
}

VideoPlayer.Iframe = function VideoPlayerIframe({ ...restProps }) {
	return <Iframe {...restProps} />;
};

const YouTube = ({ video, autoplay, rel, modest }) => {
	const videoSrc = `https://www.youtube.com/embed/${video}?autoplay=${autoplay}&rel=${rel}&modestbranding=${modest}&showinfo=0`;
	return (
		<Iframe
			title="YTplayer"
			type="text/html"
			width="100%"
			height="100%"
			src={videoSrc}
			frameborder="0"
		/>
	);
};

VideoPlayer.Video = function VideoPlayerVideo({ trailer }) {
	const { showPlayer, setShowPlayer } = React.useContext(VideoPlayerContext);

	return showPlayer
		? ReactDOM.createPortal(
				<Overlay onClick={() => setShowPlayer(false)}>
					<Inner>
						<YouTube video={trailer} autoplay="1" rel="0" showInfo="0" modest="1" />
					</Inner>
				</Overlay>,
				document.body
			)
		: null;
};

VideoPlayer.Button = function VideoPlayerButton({ ...restProps }) {
	const { setShowPlayer } = React.useContext(VideoPlayerContext);

	return (
		<Button onClick={() => setShowPlayer(true)} {...restProps}>
			Play now
		</Button>
	);
};
