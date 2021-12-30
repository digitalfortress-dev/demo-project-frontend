import { blue, grey, red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  form: {
    maxWidth: 300,
    padding: "30px 25px",
    borderRadius: 8,
    background: "rgba(255, 255, 255, 0.12)",
    position: "relative",
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
    "&:hover": {
      textDecoration: "underline",
      color: blue[400],
    },
  },
  input: {
    "input:-internal-autofill-selected": {
      backgroundColor: "red !important",
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
  errText: {
    color: red[500],
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 0,
  },
}));
