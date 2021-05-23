import { Card, CardContent, Grid, Grow, makeStyles, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#212529",
    },
    media: {
        height: 200,
    },
    counter: {
        color: theme.palette.secondary.main,
        fontWeight: "400",
        fontFamily: "Montserrat, sans-serif",
    },
    text: {
        fontWeight: "400",
        fontFamily: "Montserrat, sans-serif",
    }
}));

export default function SimpleCardNoImg(props) {
    const classes = useStyles();

    return (
        <>
            {props.skeleton ? <Grow in={true} timeout={2000}><Grid item xl={3} xs={12} md={6} sm={12} lg={4}>
                <Card elevation={10} className={classes.root}>
                    <CardContent>
                        <Typography variant="h7" component="h3" className={classes.counter}>{props.count}.</Typography>
                        <Typography variant="h6" component="h3" className={classes.text}>{props.data.title}</Typography>
                        <Typography variant="body2" component="h3" className={classes.text}>{props.data.text}</Typography>
                    </CardContent>
                </Card>
            </Grid></Grow> :
                <Grid item xs>
                    <Skeleton height="100%" />
                </Grid>
            }
        </>
    );
}