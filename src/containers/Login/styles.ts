import { blue, grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
  form: {
    // color: "#fff",
    maxWidth: 300,
    padding: "30px 25px",
    borderRadius: 8,
    background: "rgba(255, 255, 255, 0.12)",
    position: "relative",
    // border: "1px solid rgba(255, 255, 255, 0.39)",
    // boxShadow: " -1px 6px 37px 0px rgba(34,25,77,0.2) inset",
  },
  w100: {
    width: "100%",
  },
  mrb15: {
    marginBottom: "15px !important",
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    color: "#fff",
    position: 'absolute',
    zIndex: 2,
    top: '40%',
    left: '40%',
  },
  arrowIcon: {
    fontSize: "13px !important",
    marginLeft: 5,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: "none",
    // color: "#fff",
    "&:hover": {
      textDecoration: "underline",
      color: blue[400],
    },
  },
  input: {
    "input:-internal-autofill-selected": {
      backgroundColor: "red !important",
    },
    "& .MuiOutlinedInput-root": {
      // borderColor: "#fff",
      // color: "#fff",
      "&:hover fieldset": {
        // borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        // border: `2px solid #fff`,
      },
    },
    "& .MuiInputLabel-outlined": {
      // color: "#fff",
      "&.MuiInputLabel-shrink": {
        // color: "#fff",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      // borderColor: "#fff",
    },
  },
  btn: {
    backgroundColor: '#85D5EF !important',
    boxShadow: 'none !important',
  },
  content: {
    width: '45%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvas: {
    position: 'relative',
    width: '55%',
    height: '100%',
  },
  canvas1: {
    background:
      "linear-gradient(108.63deg,#110652 12%,#29077c 30.91%,#2a149b 96.7%,#5d3ff5 109.02%)",
    backgroundSize: "400% 400%",
    animation: "gradient 8s ease infinite alternate",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
  },
  canvas2: {
    position: "absolute",
    top: "10%",
    width: "80%",
    height: "50%",
    background:
      "linear-gradient(108.63deg,#090979 17%,#0c0840 50%,#0c0840 50%,#2a149b)",
    backgroundRepeat: "repeat",
    filter: "blur(6rem)",
    transform: "rotate(0deg) scaleY(2)",
    transformOrigin: "center",
    animation: "AnimationDesk 10s ease-in-out infinite",
  },
  textCenter: {
    textAlign: 'center',
  },
  fs32: {
    fontSize: 32,
  },
  mrb10: {
    marginBottom: 10,
  },
  mrb50: {
    marginBottom: 50,
  },
}));
