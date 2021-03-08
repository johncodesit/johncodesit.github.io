import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./Modal.css";

export default function PlanetModal(props) {
  const { open, onClose, planetData, planetImage } = props;

  // this is not a reusable component, but it was done this way since it's a small demo.

  return (
    <>
      <Dialog open={open}>
        <div className="dialog-header">
          <DialogTitle id="max-width-dialog-title">
            Planet: {planetData.name}
          </DialogTitle>
          <Button onClick={onClose} color="primary">
            <CloseIcon />
          </Button>
        </div>
        <DialogContent className="dialog-content">
          <div>
            <p>Climate: {planetData.climate}</p>
            <p>Diameter: {planetData.diameter}</p>
            <p>Gravity: {planetData.gravity}</p>
            <p>Population: {planetData.population}</p>
            <p>Terrain: {planetData.terrain}</p>
            <p>Rotation period: {planetData.rotation_period}</p>
            <p>Terrain: {planetData.terrain}</p>
            <p>Surface Water: {planetData.surface_water}</p>
          </div>
          <div>
            <img
              src={planetImage.image}
              alt="planet"
              className="planet-image"
            />
          </div>
        </DialogContent>
        <DialogActions />
      </Dialog>
    </>
  );
}
