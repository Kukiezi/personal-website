import { CardMedia, Fade, Grid, Grow, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import ExpCard from './ExpCard';
import ExpCardDetails from './ExpCardDetails';
import ExperienceDatabase from './ExperienceDatabase';
import MessageBox from './MessageBox';
import TypingIndicator from './TypingIndicator';

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
    let messageTimeout = 5000;
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
        <Grid container direction="row">
            <Grid item xs={2}>
            </Grid>
            <Grid container xs>
                <Grid xs={4} container spacing={3} style={{ padding: "10px" }}>
                    {experiences.map(experience => {
                        timeout += 500;
                        drawEmpty = !drawEmpty;
                        return (
                            <Grow in={true} timeout={timeout} xs>
                                <Grid item sm={12} xs>
                                    <ExpCard props={experience} updateJob={updateJob} highlight={experience.company === job.company} />
                                </Grid>
                            </Grow>
                        );
                    })}
                </Grid>
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
            <Grid item xs={2}>
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
        </Grid>
    );
}

export default Experience;
