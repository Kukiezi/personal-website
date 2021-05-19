import { Avatar, Grid, Grow, makeStyles, Paper, Typography } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import { useCallback, useContext, useEffect, useState } from "react";
import MeDatabase from "../Data/MeDatabase";
import SimpleCard from "./SimpleCard";
import LoadedContext from './LoadedContext';

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
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

export default function Landing() {
    const classes = useStyles();
    const [skeleton, setSkeleton] = useState(false);
    const data = MeDatabase();
    const text = "Hi, I am Dawid";
    const context = useContext(LoadedContext);
    
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
        <Grid container  direction="row" spacing={4}>
            <Grid item xs={12}>
                <div id="welcomeText" style={{ fontWeight: "400", fontFamily: "Montserrat, sans-serif", textAlign: "center", fontSize: "3rem" }}></div>
            </Grid>
            <Grid item xs={0} md={2} />
            <Grow in={true} timeout={1000}><Grid item xs alignContent="center">
                <Grid container xs spacing={0}>
                    <Paper elevation={12} style={{ backgroundColor: "#212529" }}>
                        <Grid item xs={12}>
                            <Grid container xs spacing={3} style={{ padding: "10px", margin: "0px" }}>
                                <Grid item xs={4} lg={2}><Avatar alt="Dawid Weltrowski-Knopik" src="https://i.ibb.co/PMsm7wV/IMG-20210324-233002-531.jpg" className={classes.large} /></Grid>
                                <Grid item xs>
                                    <Typography gutterBottom variant="body1" component="h3" style={{ fontFamily: "Montserrat, sans-serif" }}>My name is Dawid Weltrowski-Knopik. I live in Gdynia, Poland, where I was born and raised. I have been programming for over 6 years now, and I enojy the process of self improvement very much.</Typography>
                                    <Typography variant="body1" component="h3" style={{ fontFamily: "Montserrat, sans-serif" }}>My goal is to become the best I can be. And since, there is always a room for improvement... I hope to keep growing, while also doing great, impactful things and enjoying the life 😁</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            </Grow>
            <Grid item xs={0} md={2} />
            <Grid item xs={12}>
                <Grid container xs justify='center'>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h2" style={{ fontWeight: "400", fontFamily: "Montserrat, sans-serif", textAlign: "left", padding: "10px", marginTop: "2rem" }}>
                            {skeleton ? 'Learn About Me' : <Skeleton />}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify="left" spacing={3} style={{padding: "10px"}}>
                            {data.map(x => {
                                return <SimpleCard data={x} skeleton={skeleton} />
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}