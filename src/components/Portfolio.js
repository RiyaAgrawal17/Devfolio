import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Realtime chat-app",
    description: `Web application to send and receive messages from connected browsers to others`,
    image: project4,
    link: "https://frozen-castle-70414.herokuapp.com/",
  },
  {
    name: "Notes App",
    description: `Web application to add and delete notes.`,
    image: project6,
    link: "https://uxpjb.csb.app/",
  },
  {
    name: "Realtime comment system",
    description: `Web application to comment and store them comments in the database.`,
    image: project3,
    link: "https://immense-oasis-92614.herokuapp.com/",
  },
  
  {
    name: "Image generator",
    description: `React application for composing blogs`,
    image: project6,
    link: " https://vs7oq.csb.app/",
  },
  {
    name: "React Blog",
    description: `React application for composing blogs`,
    image: project4,
    link: "https://u30yq.csb.app/",
  },
  {
    name: "E-commerce",
    description: `E-commerce website for electronics.`,
    image: project5,
    link: " https://rbi8s.csb.app/",
  },
  {
    name: "StopWatch",
    description: `Stopwatch having start, stop and reset feature.`,
    image: project2,
    link: " https://gx6g3.csb.app/",
  },
  {
    name: "Typing Speed",
    description: `Web application for measuring typing speed`,
    image: project1,
    link: "https://riyaagrawal17.github.io/Typing_speed/",
  },
  {
    name: "File Sharing app",
    description: `Web application to share a file by uploading it and then sharing the link. Direct e-mail sending option is also there.`,
    image: project4,
    link: "https://github.com/RiyaAgrawal17/share",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                <a href={project.link} style={{textDecoration:"none"}}>Live Demo</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
