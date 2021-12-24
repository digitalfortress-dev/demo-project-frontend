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
    maxWidth: 450,
    background: "rgba(255, 255, 255, 0.12)",
    border: "1px solid rgba(255, 255, 255, 0.39)",
    boxShadow: " -1px 6px 37px 0px rgba(34,25,77,0.1) inset",
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
    textAlign: "center",
  },
  white: {
    color: "#fff",
  },
  input: {
    "input:-internal-autofill-selected": {
      backgroundColor: "red !important",
    },
    "& .MuiOutlinedInput-root": {
      borderColor: "#fff",
      color: "#fff",
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        border: `2px solid #fff`,
      },
    },
    "& .MuiInputLabel-outlined": {
      color: "#fff",
      "&.MuiInputLabel-shrink": {
        color: "#fff",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff",
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
}));
