import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                main: '#212529',
            },
            secondary: {
                main: '#f06961',
            },
            background: {
                default: '#121212',
            },
            text: {
                primary: "#ffffff",
                secondary: "#BDBDBD",
            },
        },
        breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 960,
              lg: 1280,
              xl: 1578,
            },
          },
    }
);

export default function Theme(props) {
    let { children } = props;
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}