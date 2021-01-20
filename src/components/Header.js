import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  function resume() {
    window.location.href="https://drive.google.com/file/d/1bqsAFbUAB89LVSX6l8uMVRhFe7REJ7Ho/view?usp=sharing"
    }

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Riya Agrawal" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Riya Agrawal"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "FullStack Developer",
            "FreeLancer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        
      </Typography>
      <Button
            variant="outlined"
            fullWidth={false}
            className={classes.button}
            onClick={resume}
          >
            Resume
          </Button>
    </Box>
  );
};

export default Header;
