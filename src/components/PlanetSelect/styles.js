import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  formControl: {
    width: "500px",
  },
  select: {
    color: "black",
    backgroundColor: "white",
    cursor: "pointer",
  },
  option: {
    cursor: "pointer",
  },
  [theme.breakpoints.down("md")]: {
    formControl: {
      width: "80vw",
    },
  },
}));
