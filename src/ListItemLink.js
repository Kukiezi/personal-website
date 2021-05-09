import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import FlareIcon from '@material-ui/icons/Flare';
import { Link } from 'react-router-dom';
import React from 'react';

export default function ListItemLink(props) {
  const { icon, primary, to } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  const iconFactory = (icon) => {
    if (icon === "info") {
        return <InfoIcon style={{color: "white"}}/>
    }
    if (icon === "code") {
        return <CodeIcon style={{color: "white"}}/>
    }
    if (icon === "work") {
        return <KeyboardIcon style={{color: "white"}}/>
    }
    if (icon === "flare") {
        return <FlareIcon style={{color: "white"}}/>
    }
}

  return (
      <ListItem button component={CustomLink}>
        <ListItemIcon>{iconFactory(icon)}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
  );
}