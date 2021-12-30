import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  layoutContainer: {
    overflowY: "auto",
    borderRadius: 0,
  },
  layoutContent: {
    height: '100vh',
  },
})) as any;

export { useStyles };
