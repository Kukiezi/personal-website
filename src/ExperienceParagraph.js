import { Typography } from '@material-ui/core';

function ExperienceParagraph(props) {

    return (
        <Typography variant="body1" component="p">
            {props.props}
        </Typography>
    );
}

export default ExperienceParagraph;
