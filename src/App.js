import './App.css';
import Theme from './Theme';
import { CssBaseline, Fade, Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Experience from './Experience'
import Sidebar from './Sidebar'
import Landing from './Landing';
import LoadedContext from './LoadedContext';

function App() {
  return (
    <div className="App">
      <Theme>
        <CssBaseline />
        <BrowserRouter>
          <LoadedContext.Provider value={{loaded: false}} >
            <Grid container justify="center" spacing={0}>
              <Fade in={true} timeout={2000}>
                <Grid item>
                  <Sidebar />
                </Grid>
              </Fade>
              <Switch>
                <Route path="/" exact>
                  <Grid item xl={10} lg={9} md={8} sm={6} xs={11}>
                    <Landing />
                  </Grid>
                </Route>
                <Route path="/experience">
                  <Grid item xl={10} lg={9} md={8} sm={6} xs={11}>
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
