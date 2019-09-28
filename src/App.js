import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './App.css';

import Header from "./components/heading";
import data from './data';
import Card from './components/card';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  }
}))



function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <h1>Hello</h1>
      <Grid container spacing={3}>
        {
          data.map((item, index) => (
            <Grid item xs={12} sm={4} md={3}>
              <Paper className={classes.paper}>
                <Card key={index} title={item.title} author={item.author.name} />
              </Paper>
            </Grid>
          ))
        }


      </Grid>

    </div>
  );
}

export default App;
