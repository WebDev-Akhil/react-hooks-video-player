import React from 'react';
import StyledNightmode from './styles/StyledNightmode';




const NightMode = ({nightModeCalback, nightMode}) => ( 
    <StyledNightmode>
        <span>Nightmode: </span>
        <label className="switch">
            <input type="checkbox" checked={nightMode} onChange={nightModeCalback} />
        <span className="slider round" />
        </label>
    </StyledNightmode>
)

export default NightMode;