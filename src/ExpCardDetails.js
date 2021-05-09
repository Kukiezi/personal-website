import './App.css';
import { Card, CardContent, CardMedia, Grid, Grow, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExperienceParagraph from './ExperienceParagraph';
import TechnologyParagraph from './TechnologyParagraph';

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            transform: "scale(1)"
        },
        height: "78vh"
    },
    media: {
        height: 60,
        objectFit: 'contain'
    },
    fullHeight: {
        
    }
}));

function ExpCardDetails(props) {
    const classes = useStyles();

    return (
        <div className={classes.fullHeight}>
            <Card elevation={10} className={classes.root} style={{ backgroundColor: "#212529", padding: '10px' }} >
                <CardContent>
                    <Grid container direction="column" justify="space-between" alignItems="center" spacing={8}>
                        <Grid item xs={12}>
                            <Paper elevation={3} style={{ backgroundColor: props.props.color, padding: '10px' }}>
                                <Grid container xs spacing={2}>
                                    <Grid item xs={2}>
                                        <CardMedia
                                            className={classes.media}
                                            image={props.props.logo}
                                            title={props.props.company + " logo"}
                                            component="img"
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6" component="h2" style={{ fontFamily: "Montserrat, sans-serif", lineHeight: '30px' }}>
                                            My experience from working as {props.props.position} at <span style={{ color: "white", fontWeight: '800' }}>{props.props.company}</span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography gutterBottom variant="h6" component="h2" style={{ fontFamily: "Montserrat, sans-serif", textAlign: 'center' }}>
                                What I worked on
                        </Typography>
                            {props.props.paragraphs.map(paragraph => {
                                return <ExperienceParagraph props={paragraph} color={props.props.textColor} />
                            })}
                        </Grid>
                        <Grid container direction="column" spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h6" component="h2" style={{ fontFamily: "Montserrat, sans-serif", textAlign: 'center', marginTop: '10px' }}>
                                    Technologies I used
                            </Typography>
                            </Grid>
                            <Grid item xs>
                                <Grow in={true} timeout={5000}>
                                    <Grid spacing={2} container direction="row" alignItems="center" alignContent="center">
                                        {props.props.technologies.map(technology => {
                                            return <TechnologyParagraph props={technology} color={props.props.color} />
                                        })}
                                    </Grid>
                                </Grow>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        </div>

    );
}

export default ExpCardDetails;
