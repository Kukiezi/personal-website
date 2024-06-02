import '../css/App.css';
import { Typography, Card, CardContent, CardActionArea, CardMedia, Grid, Hidden, Grow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TechnologyParagraph from './TechnologyParagraph';
import ExperienceParagraph from './ExperienceParagraph';

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            transform: "scale(1)"
        },
        backgroundColor: "#212529"
    },
    rootHighlight: {
        transform: "scale(1)",
        backgroundColor: "rgba(25,118,210, 0.2)",
    },
    media: {
        height: 95,
        objectFit: 'contain'
    },
    media2: {
        height: 60,
        objectFit: 'contain'
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },

}));


function ExpCard(props) {
    const classes = useStyles();

    return (
        <Card onClick={() => props.updateJob(props.props)} elevation={10} className={props.highlight ? classes.rootHighlight : classes.root}>
            <CardActionArea >
                <CardContent>
                    <Hidden only={['xs', 'sm', 'lg', 'xl']}>
                        <CardMedia
                            className={classes.media2}
                            image={props.props.logo}
                            title={props.props.company + " logo"}
                            component="img"
                        />
                    </Hidden>
                    <Hidden only={['md']}>
                        <Grid item xs container spacing={2} alignItems='center'>
                            <Grid item xs={3} md={12} lg={3}>
                                <CardMedia
                                    className={classes.media}
                                    image={props.props.logo}
                                    title={props.props.company + " logo"}
                                    component="img"
                                />
                            </Grid>

                            <Grid item xs={8}>
                                <Typography variant="h5" component="h2" style={{ lineHeight: "22px" }}>{props.props.company}</Typography>
                                <Typography variant="h6" component="p" style={{ opacity: ".7" }}>{props.props.position}</Typography>
                                <Typography variant="subtitle2" component="p" style={{ opacity: ".6" }}>{props.props.dates}</Typography>
                            </Grid>
                        </Grid>
                    </Hidden>

                    <Hidden only={['md']}>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="body1" component="h2">
                                    {props.props.team}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Hidden>

                    <Hidden only={['sm', 'md', 'lg', 'xl']}>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs={12}>
                                {props.props.paragraphs.map(paragraph => {
                                    return <ExperienceParagraph props={paragraph} color={props.props.textColor} smallText={true} />
                                })}
                            </Grid>
                            <Grid container direction="column" spacing={2} alignItems="center">
                                <Grid item xs={11}>
                                    <Grow in={true} timeout={5000}>
                                        <Grid spacing={2} container direction="row" alignItems="center" alignContent="center">
                                            {props.props.technologies.map(technology => {
                                                return <TechnologyParagraph props={technology} color={props.props.color} smallText={true} />
                                            })}
                                        </Grid>
                                    </Grow>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}

export default ExpCard;
