import './App.css';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
import Theme from './Theme';
import { CardMedia, CssBaseline, Grid, makeStyles } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Experience from './Experience'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
    objectFit: 'contain'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Theme>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/projects">
            </Route>
            <Route path="/about">
            </Route>
          </Switch>

        </BrowserRouter>
      </Theme>
    </div>
  );
}

export default App;
