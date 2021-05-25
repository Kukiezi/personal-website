import './css/App.css';
import Theme from './Theme';
import { CssBaseline, Fade, Grid, Hidden, makeStyles } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Experience from './Experience/Experience'
import Sidebar from './Sidebar/Sidebar'
import Landing from './Dashboard/Landing';
import LoadedContext from './Dashboard/LoadedContext';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Theme>
        <CssBaseline />
        <BrowserRouter>
          <LoadedContext.Provider value={{ loaded: false }} >
            <Grid container xs={12} sm={12} spacing={0} alignItems="center" justify="center">
              <Fade in={true} timeout={2000}>
                <Grid item>
                  <Sidebar />
                </Grid>
              </Fade>
              <Switch>
                <Route path="/" exact>
                  <Grid item xl={10} lg={9} md={8} sm={6} xs={11} justify="center" alignItems="center" alignContent="center">
                    <Hidden smUp>
                      <div className={classes.toolbar} />
                    </Hidden>
                    <Landing />
                  </Grid>
                </Route>
                <Route path="/experience">
                  <Grid item xl={10} lg={9} md={8} sm={6} xs={11}>
                    <Hidden smUp>
                      <div className={classes.toolbar} />
                    </Hidden>
                    <Experience />
                  </Grid>
                </Route>
                <Route path="/projects">
                </Route>
                <Route path="/about">
                </Route>
              </Switch>
            </Grid>
          </LoadedContext.Provider>
        </BrowserRouter>
      </Theme>
    </div>
  );
}

export default App;
