import { Paper } from "@mui/material";
import { useStyles } from "./styles";

interface ILayout {
  children: JSX.Element;
}

function Layout(props: ILayout) {
  const classes = useStyles();
  const { children } = props;

  return (
    <Paper square className={classes.paper}>
      {children}
    </Paper>
  );
}

export default Layout;
