import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
import Theme from './Theme';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Experience from './Experience'

function App() {
  return (
    <Theme>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/projects">
            </Route>
            <Route path="/about">
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
