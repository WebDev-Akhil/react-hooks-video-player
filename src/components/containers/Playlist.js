import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';


const PlayList = ({ videos, active, nightModeCallback, nightMode}) => {
    return (
        <StyledPlaylist>
         <NightMode nightModeCalback={nightModeCallback} nightMode={NightMode}/>
         <PlaylistHeader active={active} total={videos.length} />
         <PlaylistItems video={videos} active={active} /> 
         </StyledPlaylist>
        
    )
}

export default PlayList;