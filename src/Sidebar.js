import { Divider, List, makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import ListItemLink from './ListItemLink';

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
                <ListItemLink primary={"WELCOME"} icon="flare" to="/" exact/>
            </List>
            <Divider />
            <List component="nav">
                <ListItemLink primary={"EXPERIENCE"} icon="code" to="/experience"/>
                <ListItemLink primary={"PROJECTS"} icon="work" to="/projects"/>
                <ListItemLink primary={"ABOUT ME"} icon="info" to="/about"/>
            </List>
            <Divider />
           
        </Drawer>
    );
}