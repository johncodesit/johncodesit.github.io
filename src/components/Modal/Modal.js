import React from 'react';
import { Dialog, DialogActions, DialogContent, Button, DialogTitle } from '@material-ui/core';

export default function PlanetModal(props) {
    const { open, onClose, planetData } = props; 

    console.log(planetData);

    return (
        <>
        <Dialog
        open={open}
        >
        <DialogTitle id="max-width-dialog-title">Planet: {planetData.name}</DialogTitle>
        <DialogContent>
          <p>Climate: {planetData.climate}</p>
          <p>Diameter: {planetData.diameter}</p>
          <p>Gravity: {planetData.gravity}</p>
          <p>Population: {planetData.population}</p>
          <p>Terrain: {planetData.terrain}</p>
          <p>Rotation period: {planetData.rotation}</p>
          <p>Terrain: {planetData.terrain}</p>
        </DialogContent>
        <DialogActions>
        <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
        </Dialog>
        </>
    )
}