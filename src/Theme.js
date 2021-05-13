import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                main: '#212529',
            },
            secondary: {
                main: '#01579b',
            },
            background: {
                default: '#121212',
            },
            text: {
                primary: "#ffffff",
                secondary: "#BDBDBD",
            },
        },
    }
);

export default function Theme(props) {
    let { children } = props;
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}