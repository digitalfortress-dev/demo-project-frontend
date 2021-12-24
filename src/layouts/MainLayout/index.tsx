import { useState, useEffect } from "react";

import Header from "./Header";
import { Paper } from "@mui/material";
import { useStyles } from "./styles";

interface ILayout {
  children: JSX.Element,
  logOut: () => void,
}

function Layout(props: ILayout) {
  const { children, logOut } = props;
  const classes = useStyles();

  return (
    <div>
      <Header logOut={logOut} />
      <Paper className={classes.layoutContainer}>
        <div className={classes.layoutContent}>{children}</div>
      </Paper>
    </div>
  );
}

export default Layout;
