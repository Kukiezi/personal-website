import './App.css';
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid xs={6}>
                        <Typography variant="h3" >
                            Dawid Weltrowski-Knopik
                        </Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Button style={{ "color": "white" }} component={Link} to="/experience">Experience</Button>
                    </Grid>
                    <Grid xs={2}>
                        <Button style={{ "color": "white" }} component={Link} to="/projects">Projects</Button>
                    </Grid>
                    <Grid xs={2}>
                        <Button style={{ "color": "white" }} component={Link} to="/about">About</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
