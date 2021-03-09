import { makeStyles } from "@material-ui/core";
import background from "../../../img/background2.jpg";

export default makeStyles(() => ({
  homeContainer: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    alignContent: "center",
  },
  starWarsLogo: {
    width: "250px",
  },
  homeActionsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  header: {
    color: "white",
    marginTop: "30px !important",
  },
  audio: {
    "& :focus": {
      outline: "none",
    },
  },
}));
