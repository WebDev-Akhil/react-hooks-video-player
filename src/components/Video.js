import React from 'react';
import ReactPlayer from 'react-player';
import StyledVideoWrapper from './styles/StyledVideoWrapper';
import StyledVideo from './styles/StyledVideo';
import { isAbsolute } from 'path';


const Video = ({active, autoplay, endcallback, progresscallback}) => (
    <StyledVideo>
        <StyledVideoWrapper>
            <ReactPlayer
            width="100%"
            height="100%"
            style={{position: "absolute", top: "0"}}
            playing={true}
            controls={true}
            url={active.video}
            onEnded={endcallback}
            onProgress={progresscallback}
            />
        </StyledVideoWrapper>
    </StyledVideo>
);

export default Video;