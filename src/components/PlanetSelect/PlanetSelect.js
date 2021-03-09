import React from "react";
import { FormControl, Select } from "@material-ui/core";
import useStyles from "./styles";

export default function PlanetSelect(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          variant="outlined"
          className={classes.select}
          // eslint-disable-next-line react/destructuring-assignment
          onChange={props.onPlanethChange}
        >
          {
            // eslint-disable-next-line react/destructuring-assignment
            props.options.map((planet) => (
              <option
                className={classes.option}
                key={planet.name}
                value={planet.name}
              >
                {planet.name}
              </option>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}
