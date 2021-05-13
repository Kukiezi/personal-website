import { Card, CardContent, CardMedia, Grid, Grow, makeStyles, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#212529",
    },
    media: {
        height: 200,
    },
}));

export default function SimpleCard(props) {
    const classes = useStyles();

    return (
        <>
            {props.skeleton ? <Grow in={true} timeout={2000}><Grid item xs>
                <Card elevation={10} className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={props.data.image}
                        title={"travel"}
                        component="img" />
                    <CardContent>
                        <Typography variant="h6" component="h3">{props.data.title}</Typography>
                        <Typography variant="body2" component="h3">{props.data.text}</Typography>
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