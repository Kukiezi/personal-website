import { Card, CardContent, CardMedia, Grid, makeStyles} from "@material-ui/core";
import '../css/Line.css'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#212529",
    },
    media: {
        height: 200,
    },
    large: {
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(9),
            height: theme.spacing(9),
        },
        
        objectFit: 'contain'
    },
}));

export default function GraphItem(props) {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={1}>
                <Card elevation={12} style={{backgroundColor: "#212529"}}>
                    <CardContent>
                    <CardMedia
                        className={classes.large}
                        image={props.data.logo}
                        title={props.data.company + " logo"}
                        component="img"
                    />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 614 200" >
                    {/* <polyline class="st0" points="0.5,53 0.5,20.7 613.5,20.7 613.5,53 " /> */}
                    <line class="st1" x1="0" y1="200" x2="614" y2="200" />
                </svg>
            </Grid>
        </>
    );
}