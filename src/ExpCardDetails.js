import './App.css';
import { Typography, Card, CardContent, CardActionArea, CardMedia, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExperienceParagraph from './ExperienceParagraph';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            transform: "scale(1)"
        },
        height: "300px"
    },
    media: {
        height: 80,
    },
}));

function ExpCardDetails(props) {
    const classes = useStyles();

    return (
        <Card elevation={10} className={classes.root} style={{ backgroundColor: "#212529" }} >
            <CardContent>
                {props.props.paragraphs.map(paragraph => {
                    return <ExperienceParagraph props={paragraph} />
                })}
            </CardContent>
        </Card >
    );
}

export default ExpCardDetails;
