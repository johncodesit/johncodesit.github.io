import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  dialogHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "row",
  },
  planetImage: {
    maxWidth: "300px",
    marginLeft: "65px",
  },
  [theme.breakpoints.down("md")]: {
    dialogContent: {
      flexDirection: "column",
    },
    planetImage: {
      maxWidth: "230px",
      marginLeft: "0px",
    },
  },
}));
