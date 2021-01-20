import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import Twitter from "@material-ui/icons/Twitter";
import { LinkedIn } from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  function linkedin() {
    window.location.href="https://www.linkedin.com/in/riya438/"
    }

    function twitter() {
      window.location.href="https://twitter.com/RiyaAgr02106010"
      }

        function github() {
          window.location.href="https://github.com/RiyaAgrawal17"
          }
    

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedIn onClick={linkedin} />} className={classes.root} />
      <BottomNavigationAction icon={<Twitter onClick={twitter} />} className={classes.root} />
      <BottomNavigationAction icon={<GitHubIcon onClick={github} />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
