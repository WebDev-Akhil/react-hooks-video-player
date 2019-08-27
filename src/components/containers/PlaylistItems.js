import React from 'react';
import PlaylistItem from '../PlaylistItem';
import StyledPlaylistitems from '../styles/StyledPlaylistitems';




const PlayListItems = props => {
    return (
        <div>
            <StyledPlaylistitems>
            <PlaylistItem /> 
            </StyledPlaylistitems>
         
        </div>
    )
}

export default PlayListItems;