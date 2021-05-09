import { Grid, Typography } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import { useEffect, useState } from "react";
import { init } from 'ityped'
import "./Typing.css"
import MeDatabase from "./MeDatabase";
import SimpleCard from "./SimpleCard";

export default function Landing() {
    const [skeleton, setSkeleton] = useState(false)
    const data = MeDatabase();
    useEffect(() => {
        const welcomeText = document.querySelector("#welcomeText");
        init(welcomeText, { typeSpeed: 200, loop: false, showCursor: false, strings: ["Hi I am Dawid."] })
        setTimeout(() => {
            setSkeleton(true);
        }, 1700)
    })

    return (
        <Grid item xs>
            <div id="welcomeText" style={{ fontFamily: "Montserrat, sans-serif", textAlign: "center", fontSize: "3rem" }}></div>
            <Typography variant="h4" component="h1" style={{ fontWeight: "700", fontFamily: "Montserrat, sans-serif", textAlign: "center", marginTop: "2rem" }}>
                {skeleton ? 'Who Am I?' : <Skeleton />}
                </Typography>
            <Grid container xs spacing={3} style={{ padding: "10px", margin: "0px" }}>
                {data.map(x => {
                    return <SimpleCard data={x} skeleton={skeleton}/>
                })}
            </Grid>
        </Grid>
    );
}