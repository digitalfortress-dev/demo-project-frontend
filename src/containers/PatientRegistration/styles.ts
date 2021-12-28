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
    border: "1px solid rgba(255, 255, 255, 0.39)",
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
  input: {
    "input:-internal-autofill-selected": {
      backgroundColor: "red !important",
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
  link: {
    marginTop: 20,
  },
  titleAuth: {
    marginTop: 0,
  }, 
  textCenter: {
    textAlign: 'center',
  },
  bgGray: {
    backgroundColor: 'rgb(250, 250, 250)',
  },
  border: {
    boxShadow: 'rgb(0 0 0 / 12%) 0px 8px 14px 0px',
    borderRadius: 4,
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgb(224, 224, 224)',
  }
}));
