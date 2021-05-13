import { Divider, Grid, Link, List, ListItem, makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import ListItemLink from './ListItemLink';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#212529",
    },
    // necessary for content to be below app bar
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Sidebar() {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left">

            <div className={classes.toolbar} />
            <List>
                <ListItemLink primary={"WELCOME"} icon="flare" to="/" exact />
            </List>
            <Divider />
            <List component="nav">
                <ListItemLink primary={"EXPERIENCE"} icon="code" to="/experience" />
                <ListItemLink primary={"PROJECTS"} icon="work" to="/projects" />
                <ListItemLink primary={"ABOUT ME"} icon="info" to="/about" />
            </List>
            <Divider />
            <List>
                <ListItem>
                    <Grid container xd>
                        <Grid item xs>
                            <Link href="https://www.linkedin.com/in/dawid-weltrowski-knopik-069020100/" target="_blank">
                                <LinkedInIcon style={{ color: "#0077B5" }} />
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Link href="https://github.com/Kukiezi" target="_blank">
                                <GitHubIcon style={{ color: "white" }} />
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Link href="https://www.instagram.com/dawidweltrowski/" target="_blank">
                                <InstagramIcon style={{ color: "#e4405f" }} />
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Link href="https://www.facebook.com/dawid.weltrowski" target="_blank">
                                <FacebookIcon style={{ color: "#0084ff" }} />
                            </Link>
                        </Grid>
                        </Grid>
                </ListItem>
                   
            </List>

        </Drawer>
    );
}