import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';


const PlayList = ({ videos, active, nightModeCallback, nightMode}) => {
    return (
        <StyledPlaylist>
         <NightMode nightModeCallback={nightModeCallback} nightMode={NightMode}/>
         <PlaylistHeader active={active} total={videos.length} />
         <PlaylistItems videos={videos} active={active} /> 
         </StyledPlaylist>
        
    )
}

export default PlayList;