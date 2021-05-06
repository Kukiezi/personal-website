import { Grid, Grow, Typography } from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import ExpCard from './ExpCard';
import ExpCardDetails from './ExpCardDetails';
import ExperienceDatabase from './ExperienceDatabase';


function Experience() {
    const experiences = ExperienceDatabase();
    let timeout = 0;
    let drawEmpty = false;

    return (
        <>
            <Grid container >
                <Grid xs={12} container spacing={4} style={{ padding: "10px" }}>
                    {experiences.map(experience => {
                        timeout += 1000;
                        drawEmpty = !drawEmpty;
                        return (
                            <>
                                <Grow in={true} timeout={timeout}>
                                    <Grid item sm={4}>
                                        <ExpCard props={experience} />
                                    </Grid>
                                </Grow>
                                <Grow in={true} timeout={timeout}>
                                    <Grid item sm={8}>
                                        <ExpCardDetails props={experiences[0]} />
                                    </Grid>
                                </Grow>
                            </>
                        );
                    })}
                </Grid>
            </Grid>
        </>
    );
}

export default Experience;
