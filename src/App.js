import './App.css';
import Theme from './Theme';
import { CssBaseline, Fade, Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Experience from './Experience'
import Sidebar from './Sidebar'
import Landing from './Landing';

function App() {
  return (
    <div className="App">
      <Theme>
        <CssBaseline />
        <BrowserRouter>
          <Grid container direction="row">
            <Fade in={true} timeout={2000}>
              <Grid item>
              <Sidebar />
              </Grid>
            </Fade>
            <Switch>
              <Route path="/" exact>
                <Landing/>
              </Route>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/projects">
              </Route>
              <Route path="/about">
              </Route>
            </Switch>
          </Grid>
        </BrowserRouter>
      </Theme>
    </div>
  );
}

export default App;
