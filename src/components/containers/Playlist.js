import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';



const PlayList = props => {
    return (
        <div>
         <NightMode />
         <PlaylistHeader />
         <PlaylistItems /> 
        </div>
    )
}

export default PlayList;