import { CardMedia, Fade, Grid, Grow, Hidden, makeStyles, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import '../css/App.css';
import ProjectsDatabase from '../Data/ProjectsDatabase';
import MessageBox from '../Experience/MessageBox';
import TypingIndicator from '../TypingIndicator';
import ProjectCard from './ProjectCard';
import ProjectCardDetails from './ProjectCardDetails';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 200,
        objectFit: 'contain'
    },
}));

function Project() {
    const classes = useStyles();
    const projects = ProjectsDatabase();
    const [job, setJob] = useState(projects[0])
    const [showMessage, setShowMessage] = useState(false)

    let timeout = 0;
    let drawEmpty = false;

    const updateJob = (project) => {
        setJob(project);
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
                    Side Projects
                            </Typography>
                <Grid container xs={12}>
                    <Hidden smDown>
                        <Grid item xs={12} sm={11} md={2} lg={4}>
                            <Grid container direction="column" justify="center" spacing={1} style={{ padding: "10px" }}>
                                {projects.map(project => {
                                    timeout += 500;
                                    drawEmpty = !drawEmpty;
                                    return (
                                        <Grow in={true} timeout={timeout} xs>
                                            <Grid item xs={12}>
                                                <ProjectCard props={project} updateJob={updateJob} highlight={project.name === job.name} />
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
                                {projects.map(project => {
                                    timeout += 500;
                                    drawEmpty = !drawEmpty;
                                    return (
                                        <Grow in={true} timeout={timeout} xs>
                                            <Grid item xs={12}>
                                                <ProjectCard props={project} updateJob={updateJob} highlight={project.name === job.name} />
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
                                <Grow in={true} timeout={1000}>
                                    <Grid item xs>
                                        <div style={{ height: "100%" }}>
                                            <ProjectCardDetails props={job} />
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

export default Project;
