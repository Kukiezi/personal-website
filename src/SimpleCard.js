import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
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
        {props.skeleton ? <Grid item xs>
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
        </Grid> :
            <Grid item xs>
                <Skeleton height="100%" />
            </Grid>
        }
        </>
    );
}