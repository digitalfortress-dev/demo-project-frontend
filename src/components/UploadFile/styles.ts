import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  flex: {
    display: "flex",
  },
  alignCenter: {
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  fontSize: {
    fontSize: 15,
  },
  pointer: {
    cursor: "pointer",
  },
  mrr10: {
    marginRight: 10,
  },
  drop: {
    "& .MuiTypography-root MuiTypography-body1": {
      color: "red",
    },
  },
  loading: {
    position: "absolute",
    color: "#fff",
    top: 22,
    left: 22,
  },
  iconCamera: {
    fontSize: 16,
    marginRight: 5,
  },
  uploadImage: {
    height: 174,
    borderRadius: 4,
    border: "dashed 2px #cbcbcb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.5,
    },
  },
  box: {
    border: "1px solid #cbcbcb",
    padding: '5px 10px',
    borderRadius: 4,
    fontSize: 14,
  },
}));

export { useStyles };
