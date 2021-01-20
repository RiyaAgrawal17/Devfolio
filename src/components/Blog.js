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


import blog from "../images/blog.jpg";

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
    name: "Back to start again",
    description: `My first blog - starting of my journey with frontbench. Brushed up the basics of HTML, CSS and JavaScript. Also learnt about the unit testing in JavaScript.`,
    image: blog,
    link: "https://dev.to/riyaagrawal17/back-to-start-again-2gja",
  },
  {
    name: "Back to start again - Week 2",
    description: `Studied the concepts of Vanilla JavaScript and unit testing with Jest and thus written few testcases.
    And finally made 3 simple projects using Vanilla Javascript.`,
    image: blog,
    link: "https://dev.to/riyaagrawal17/weekly-update-of-my-learnings-400j",
  },
  {
    name: "Back to start again - Week 3",
    description: `Learnt about the react basics such as props, components, state, routers etc`,
    image: blog,
    link: "https://dev.to/riyaagrawal17/back-to-start-again-week-3-41da",
  },
  
  {
    name: "Back to start again - Week 4",
    description: `Learnt about the props, functional component, creating multiple component and use to build single application, usage of Import, export and other ES6 features `,
     image: blog,
    link: "https://dev.to/riyaagrawal17/back-to-start-again-week-4-51d3",
  },
  {
    name:"Back to start again - Week 5",
    description: `Learnt about the sync vs async, callbacks, promises, routing in React`,
    image: blog,
    link: "https://dev.to/riyaagrawal17/back-to-start-again-week-5-c6l",
  },   
];

const Blog = () => {
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
                <a href={project.link} style={{textDecoration:"none"}}>Read more...</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
