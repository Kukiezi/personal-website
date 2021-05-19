import { CardMedia, Fade, Grid, Grow, Hidden, makeStyles, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import '../css/App.css';
import ExpCard from './ExpCard';
import ExpCardDetails from './ExpCardDetails';
import ExperienceDatabase from '../Data/ExperienceDatabase';
import MessageBox from './MessageBox';
import TypingIndicator from '../TypingIndicator';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 200,
        objectFit: 'contain'
    },
}));

function Experience() {
    const classes = useStyles();
    const experiences = ExperienceDatabase();
    const [job, setJob] = useState(experiences[0])
    const [showMessage, setShowMessage] = useState(false)

    let timeout = 0;
    let drawEmpty = false;

    const updateJob = (experience) => {
        setJob(experience);
        setShowMessage(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(true);
        }, 1700)
    })

    return (
        <Grid container xs>
            <Grid item xs={12} xl={10}>
                <Typography gutterBottom variant="h4" component="h1" style={{ fontFamily: "Montserrat, sans-serif", marginTop: '10px', paddingLeft: "10px" }}>
                    Experience
                            </Typography>
                <Grid container xs={12}>
                    <Hidden smDown>
                        <Grid item xs={12} sm={11} md={2} lg={4}>
                            <Grid container direction="column" justify="center" spacing={1} style={{ padding: "10px" }}>
                                {experiences.map(experience => {
                                    timeout += 500;
                                    drawEmpty = !drawEmpty;
                                    return (
                                        <Grow in={true} timeout={timeout} xs>
                                            <Grid item xs={12}>
                                                <ExpCard props={experience} updateJob={updateJob} highlight={experience.company === job.company} />
                                            </Grid>
                                        </Grow>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid item xs={12} sm={11} md={2} lg={4}>
                            <Grid container direction="column" justify="center" spacing={4} style={{ padding: "10px" }}>
                                {experiences.map(experience => {
                                    timeout += 500;
                                    drawEmpty = !drawEmpty;
                                    return (
                                        <Grow in={true} timeout={timeout} xs>
                                            <Grid item xs={12}>
                                                <ExpCard props={experience} updateJob={updateJob} highlight={experience.company === job.company} />
                                            </Grid>
                                        </Grow>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden only={['xs', 'sm']}>
                        <Grid item xs>
                            <Grid xs container spacing={3} style={{ padding: "10px" }} >
                                <Grow in={true} timeout={timeout}>
                                    <Grid item xs>
                                        <div style={{ height: "100%" }}>
                                            <ExpCardDetails props={job} />
                                        </div>
                                    </Grid>
                                </Grow>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            <Hidden only={['xs', 'sm', 'md', 'lg']}>
                <Grid item xl={2}>
                    <Grid container direction="column" >
                        <Grid item xs={12}>
                            <CardMedia
                                className={classes.media}
                                image="https://i.ibb.co/wJFFzsD/53509-removebg-preview-1.png"
                                title={"developer talking"}
                                component="img" />

                        </Grid>
                        <Grid item xs={12}>
                            <Grid xs container direction="column" spacing={1} style={{ padding: "10px" }}>
                                {showMessage ? job.messeges.map(message => {
                                    return (
                                        <Grow in={true} timeout={1000} xs>
                                            <Grid item xs>
                                                <MessageBox props={message} />
                                            </Grid>
                                        </Grow>
                                    )
                                }) : <Fade in={true} xs><Grid item xs><TypingIndicator /></Grid></Fade>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    );
}

export default Experience;
