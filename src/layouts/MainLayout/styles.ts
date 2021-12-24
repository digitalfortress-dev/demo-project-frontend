import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  layoutContainer: {
    // height: "calc(100vh - 46px)",
    overflowY: "auto",
    borderRadius: 0,
  },
  layoutContent: {
    // height: "calc(100% - 46px)",
    height: '100vh',
    // margin: "15px 7%",
  },
})) as any;

export { useStyles };
