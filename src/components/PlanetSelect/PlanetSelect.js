import React from 'react'
import { Select } from '@material-ui/core';

export default function PlanetSelect(props) { 

    return (
        
        <div>
            <Select placeholder="Select a Planet!" onChange={props.onPlanethChange}>
            {props.options.map((planet) => (
                <option key={planet.name} value={planet.name}>{planet.name}</option>
            ))}
            </Select>
        </div>
        
    )
}