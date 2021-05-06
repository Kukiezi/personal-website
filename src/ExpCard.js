import './App.css';
import { Typography, Card, CardContent, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExperienceParagraph from './ExperienceParagraph';
import { useEffect } from 'react';

const useStyles = makeStyles({
    root: {
        "&:hover": {
            transform: "scale(1)"
        },
        height: "300px"
    },
    media: {
        height: 80,
    },
});

function ExpCard(props) {
    const classes = useStyles();

    return (
        <Card elevation={10} className={classes.root} style={{ backgroundColor: "#212529" }} >
            <CardActionArea>
                <CardContent>
                    {/* <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" /> */}
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item>
                            <CardMedia
                                className={classes.media}
                                image={props.props.logo}
                                title="Facebook logo"
                            />
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h5" component="h2">{props.props.company}</Typography>
                            <Typography gutterBottom variant="subtitle1" color="textSecondary" component="h2">{props.props.position}</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography gutterBottom variant="body1" component="h2">
                                {props.props.team}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" component="p">
                                {props.props.summary}
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* {props.props.paragraphs.map(paragraph => {
                        return <ExperienceParagraph props={paragraph} />
                    })} */}
                </CardContent>
            </CardActionArea>
        </Card >
    );
}

export default ExpCard;
