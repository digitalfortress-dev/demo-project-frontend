import { Paper } from "@mui/material";
import { useStyles } from './styles';

function Layout(props: any) {
  const classes = useStyles();
  const { children } = props;

  return (
    <Paper square className={classes.paper}>
      <div>
        <canvas className={classes.canvas1}></canvas>
        <canvas className={classes.canvas2}></canvas>
      </div>
      {children}
    </Paper>
  );
}

export default Layout;
