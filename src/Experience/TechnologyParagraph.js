import { Grid, Paper, Typography } from '@material-ui/core';

function TechnologyParagraph(props) {
    return (
            <Grid item>
                <Paper elevation={3} style={{ backgroundColor: props.color, padding:'10px'}}>
                        <Typography gutterBottom variant={props.smallText ? "subtitle2" : "h6"} component="p" style={{ opacity: '0.8', fontFamily: "Montserrat, sans-serif", lineHeight: '22px' }}>
                            {props.props}
                        </Typography>
                </Paper>
            </Grid>

    );
}

export default TechnologyParagraph;
