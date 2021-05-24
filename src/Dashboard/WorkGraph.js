import { Grid, Grow, Hidden, makeStyles} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ExperienceDatabase from "../Data/ExperienceDatabase";
import '../css/Line.css'
import LandingExpCard from "./LandingExpCard";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#212529",
    },
    media: {
        height: 200,
    },
    large: {
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(15),
            height: theme.spacing(15),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(9),
            height: theme.spacing(9),
        },
        float: "left",
        margin: "8px",
    },
    svg: {
        position: 'absolute',
        zIndex: "-1",
    },

}));

export default function WorkGraph(props) {
    const classes = useStyles();
    const workData = ExperienceDatabase();
    
    return (
        <> {props.skeleton ? <>
            <Hidden lgDown>
            <svg className={classes.svg + " st0"} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 69 C 126 22 302 6 378 66 C 507 15 833 -2 888 40 C 973 37 1167 135 1241 128 C 1370 8 1514 43 1614 7" stroke="white" fill="transparent" />
            </svg>
            </Hidden>
            {workData.map(data => {
                return (
                    <Grow in={true} timeout={1000}>
                        <Grid item xl={3} xs={12} md={6} sm={12} lg={4} style={{ backgroundColor: "transparent" }}>
                            <LandingExpCard props={data} updateJob={() => { }} />
                        </Grid>
                    </Grow>
                );
            })}</>
         :
            <Grid item xs>
                <Skeleton height="100%" />
            </Grid>
        }  
        </>     
    );
}