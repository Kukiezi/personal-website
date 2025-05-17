import { Avatar, Grid, Grow, Hidden, Link as MaterialLink, makeStyles, Paper, Typography } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import { useCallback, useContext, useEffect, useState } from "react";
import MeDatabase from "../Data/MeDatabase";
import SkillsDatabase from "../Data/SkillsDatabase";
import SimpleCard from "./SimpleCard";
import SimpleCardNoImg from "./SimpleCardNoImg";
import LoadedContext from './LoadedContext';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { Link } from 'react-router-dom';
import WorkGraph from "./WorkGraph";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
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
    welcomeText: {
        fontWeight: "400",
        fontFamily: "Montserrat, sans-serif",
        textAlign: "center",
        [theme.breakpoints.up('sm')]: {
            fontSize: "3rem",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.5rem",
        },
    },
    linkText: {
        color: theme.palette.secondary.main,
    }
}));

export default function Landing() {
    const classes = useStyles();
    const [skeleton, setSkeleton] = useState(false);
    const data = MeDatabase();
    const skills = SkillsDatabase();
    const text = "Hi, I am Dawid";
    const context = useContext(LoadedContext);
    let count = -1;
    const autoType = useCallback((text) => {
        const welcomeText = document.querySelector("#welcomeText");
        let timeout = 100;
        if (context.loaded === true) {
            welcomeText.innerHTML = text;
            return;
        }
        for (let i = 0; i < text.length; i++) {
            if (welcomeText.innerHTML === text) {
                return;
            }
            setTimeout(() => {
                welcomeText.innerHTML += text[i];
            }, timeout);
            timeout += 100;
        }
        context.loaded = true;
    }, [context])

    useEffect(() => {
        if (context.loaded === true) {
            autoType(text);
            setSkeleton(true);
            return;
        }
        localStorage.setItem('loaded', true);
        autoType(text);
        setTimeout(() => {
            setSkeleton(true);
        }, 150 * text.length + 100)
    }, [text, context, autoType])



    return (
        <Grid container xs={12} direction="column" justify="center" alignContent="center">
            <Grid item xs={12}>
                <div id="welcomeText" className={classes.welcomeText}></div>
            </Grid>
            <Grid item xs={12}>
                <Grid container xs={12} direction="row" justify="center" alignContent="center">
                    <Hidden smDown><Grid item xs={0} md={2} /></Hidden>
                    <Grow in={true} timeout={1000}>
                        <Grid item xs={12} md={8}>
                            <Grid container xs justify='center'>
                                <Paper elevation={12} style={{ backgroundColor: "#212529" }}>
                                    <Grid item xs={12}>
                                        <Grid container xs spacing={3} style={{ padding: "10px", margin: "0px" }}>
                                            <Grid item xs>
                                                <Avatar
                                                    alt="Dawid Weltrowski-Knopik"
                                                    src="https://i.ibb.co/PMsm7wV/IMG-20210324-233002-531.jpg"
                                                    className={classes.large}
                                                />
                                                <Typography gutterBottom variant="body1" component="h3" style={{ fontFamily: "Montserrat, sans-serif", textAlign: "justify" }}>My name is Dawid Weltrowski-Knopik. I live in Gdynia, Poland, where I was born and raised. I have been programming for over 6 years now, and I enojy the process of self improvement very much.</Typography>
                                                <Typography gutterBottom variant="body1" component="h3" style={{ fontFamily: "Montserrat, sans-serif", textAlign: "justify" }}>My goal is to become the best version of myself. I am constantly self-improving, and since there is always a room for improvement... I hope to keep growing, while also doing great, impactful things and enjoying the life 😁</Typography>
                                                <Typography variant="body1" component="h3" className={classes.linkText} style={{ fontFamily: "Montserrat, sans-serif", textAlign: "justify", fontStyle: "italic" }}>"Live a life without regrets."</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grow>
                    <Hidden smDown><Grid item xs={0} md={2} /></Hidden>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container xs justify='center'>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h2" style={{ fontWeight: "400", fontFamily: "Montserrat, sans-serif", textAlign: "left", padding: "10px", marginTop: "2rem" }}>
                            {skeleton ? 'My Skills' : <Skeleton />}

                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="left" spacing={3} style={{ padding: "10px" }}>
                            {skills.map(x => {
                                count += 1;
                                return <SimpleCardNoImg count={count} data={x} skeleton={skeleton} />
                            })}
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container xs justify='center'>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h2" style={{ fontWeight: "400", fontFamily: "Montserrat, sans-serif", textAlign: "left", padding: "10px", marginTop: "2rem" }}>
                            {skeleton ? <><span className={classes.linkText}>Work</span> Experience</> : <Skeleton />}
                        </Typography>
                    </Grid>
                    <Grid container justify="left" spacing={3} style={{ padding: "10px", position: 'relative' }}>
                        <WorkGraph skeleton={skeleton} />
                    </Grid>

                    <Grid item xs={12}>
                        <MaterialLink component={Link} to="/experience">
                            <Typography variant="body3" component="body" style={{ fontWeight: "400", fontFamily: "Montserrat, sans-serif", textAlign: "left", padding: "10px", display: 'inline' }}>
                                {skeleton ? <><span className={classes.linkText}>Check out my full experience</span>
                                    <TouchAppIcon /></> : <Skeleton />}
                            </Typography>
                        </MaterialLink>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container xs justify='center'>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h2" style={{ fontWeight: "400", fontFamily: "Montserrat, sans-serif", textAlign: "left", padding: "10px", marginTop: "2rem" }}>
                            {skeleton ? <>Learn <span className={classes.linkText}>About</span> Me</> : <Skeleton />}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="left" spacing={3} style={{ padding: "10px" }}>
                            {data.map(x => {
                                return <SimpleCard data={x} skeleton={skeleton} />
                            })}
                            <SimpleCard data={{
                                "title": "Real Estate",
                                "text": <>I have been interested in real estate for a long time. I have been investing in it for a few years now and I am planning to do more in the future. I also built website <a style={{ color: "#007bff" }} href="https://skup123.pl">skup123.pl</a>.</>,
                                "image": "https://unblast.com/wp-content/uploads/2021/09/Real-Estate-Vector-Illustration.jpg",
                            }} skeleton={skeleton} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}