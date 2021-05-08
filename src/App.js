import './App.css';
import Navbar from './Navbar';
import Theme from './Theme';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Experience from './Experience'

function App() {

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
