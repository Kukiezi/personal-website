import { Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function ExperienceParagraph(props) {
    
    return (
        <Grid spacing={2} container direction="row" alignItems="center" xs>
            <Grid item xs={1}>
                <ArrowForwardIcon style={{color: props.color}}/>
            </Grid>
            <Grid item xs>
                <Typography gutterBottom variant={props.smallText ? "subtitle1" : "h6"} component="p" style={{ opacity: '0.8', fontFamily: "Montserrat, sans-serif", lineHeight: '22px'}}>
                    {props.props}
                </Typography>
            </Grid>
        </Grid>

    );
}

export default ExperienceParagraph;
