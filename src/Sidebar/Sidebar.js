import { AppBar, Divider, Grid, Hidden, IconButton, Link, List, ListItem, makeStyles, Toolbar } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import ListItemLink from './ListItemLink';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useState } from 'react';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
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
    toolbar: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

export default function Sidebar(props) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [open, setOpen] = useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const drawer = (
        <div>
            <div className={classes.drawerHeader}>
                <Hidden smUp>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon style={{ color: 'white' }} />
                    </IconButton>
                </Hidden>
            </div>
            <List onClick={handleDrawerClose}>
                <ListItemLink primary={"WELCOME"} icon="flare" to="/" exact />
            </List>
            <Divider />
            <List component="nav" onClick={handleDrawerClose}>
                <ListItemLink primary={"EXPERIENCE"}  icon="code" to="/experience" />
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
        </div>
    );

    return (
        <>
            <Hidden smUp>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </Hidden>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        className={classes.drawer}
                        variant="persistant"
                        anchor={'left'}
                        open={open}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </>
    );
}