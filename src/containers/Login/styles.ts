import { blue, grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    color: "#fff",
    maxWidth: 300,
    padding: "30px 25px",
    borderRadius: 8,
    background: "rgba(255, 255, 255, 0.12)",
    position: "relative",
    border: "1px solid rgba(255, 255, 255, 0.39)",
    boxShadow: " -1px 6px 37px 0px rgba(34,25,77,0.2) inset",
  },
  w100: {
    width: "100%",
  },
  mrb15: {
    marginBottom: "15px !important",
  },
  title: {
    textAlign: "center",
  },
  arrowIcon: {
    fontSize: "13px !important",
    marginLeft: 5,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: "none",
    color: "#fff",
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
  },
  btn: {
    backgroundColor: '#85D5EF !important',
    boxShadow: 'none !important',
  }
}));
