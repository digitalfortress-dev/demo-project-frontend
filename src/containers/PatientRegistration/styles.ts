import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  flex: {
    display: "flex",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  form: {
    padding: "30px 65px",
    borderRadius: 4,
    maxWidth: 350,
    // background: "rgba(255, 255, 255, 0.12)",
    border: "1px solid rgba(255, 255, 255, 0.39)",
    // boxShadow: " -1px 6px 37px 0px rgba(34,25,77,0.1) inset",
  },
  w100: {
    width: "100%",
  },
  mrb15: {
    marginBottom: "15px !important",
  },
  mrr15: {
    marginRight: "15px !important",
  },
  imageBox: {
    padding: 5,
    border: "dashed 2px #cbcbcb",
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundSize: "cover",
    position: "relative",
    "& .remove-image": {
      display: "none",
    },
    "&:hover .remove-image": {
      display: "flex",
      position: "absolute",
      right: 0,
      height: "100%",
      background: red["500"],
      width: 30,
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.9,
    },
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    position: 'absolute',
    zIndex: 2,
    top: '40%',
    left: '40%',
  },
  white: {
    // color: "#fff",
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
    "& .MuiSvgIcon-root": {
      // color: "#fff",
    },
  },
  submitBtn: {
    backgroundColor: "#85D5EF !important",
  },
  btn: {
    boxShadow: "none !important",
    width: 200,
    textTransform: "capitalize !important" as any,
  },
  content: {
    width: '50%',
    height: '100%',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvas: {
    position: 'relative',
    width: '50%',
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
    height: "40%",
    background:
      "linear-gradient(108.63deg,#090979 17%,#0c0840 50%,#1a0864 50%,#2a149b)",
    backgroundRepeat: "repeat",
    filter: "blur(6rem)",
    transform: "rotate(0deg) scaleY(2)",
    transformOrigin: "center",
    animation: "AnimationDesk 10s ease-in-out infinite",
  },
  link: {
    marginTop: 20,
  },
  titleAuth: {
    marginTop: 0,
  }, 
  textCenter: {
    textAlign: 'center',
  }
}));
