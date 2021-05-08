import { Paper, Typography } from "@material-ui/core";
import TypingIndicator from "./TypingIndicator";

function MessageBox(props) {
    return (
               <Paper style={{backgroundColor: "#0099FF", padding: "10px", borderRadius: "8px"}}>
                    <Typography variant="body2" component="p" style={{fontSize: "1.1rem"}}>
                        {props.props}
                    </Typography>
               </Paper>
    );
}

export default MessageBox;
