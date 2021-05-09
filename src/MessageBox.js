import { Paper, Typography } from "@material-ui/core";

function MessageBox(props) {
    return (
               <Paper style={{backgroundColor: "#0099FF", padding: "10px", borderRadius: "8px"}}>
                    <Typography variant="body2" component="p" style={{fontSize: "1rem"}}>
                        {props.props}
                    </Typography>
               </Paper>
    );
}

export default MessageBox;
