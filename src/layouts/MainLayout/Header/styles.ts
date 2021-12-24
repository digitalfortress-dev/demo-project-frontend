import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 12,
    borderRadius: "0 !important",
    backgroundRepeat: "repeat",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "4px 16px",
    margin: "0 auto",
  },
  text: {
    marginLeft: 10,
    fontWeight: 500,
  },

  link: {
    display: "flex",
    alignItems: "center",
    marginRight: 15,
    textDecoration: "none",
    color: "#fff",
  },
  title: {
    fontSize: "14px",
    margin: "10px",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
  list: {
    display: "flex",
    color: "#d8dcf0",
    marginLeft: 30,
  },
  right: {
    position: "absolute",
    right: 20,
  },
  btn: {
    textTransform: ("capitalize" + "!important") as any,
  },
  transparentBackground: {
    backgroundColor: "transparent",
    color: "#1a1a1a",
  },
  linearBackground: {
    background:
      "linear-gradient(108.63deg,#110652 12%,#29077c 30.91%,#2a149b 96.7%,#5d3ff5 109.02%)",
    color: "#fff !important",
    "& button": {
      color: "#fff !important",
    },
    boxShadow: "none !important",
    transition: 'transform 0.4s !important',
  },
}));

export { useStyles };
