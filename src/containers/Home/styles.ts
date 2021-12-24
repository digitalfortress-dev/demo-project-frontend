import { TablePagination } from "@mui/material";
import { grey } from "@mui/material/colors";
import { makeStyles, withStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  homeContainer: {
    height: "100%",
    marginTop: "30px",
    padding: "0 15px",
  },
  tableContainer: {
    border: `1px solid  ${grey[300]} !important`,
  },
  titleTable: {
    padding: 10,
    fontSize: 18,
    fontWeight: 500,
    margin: 0,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    height: "94px",
  },
}));

export const PaginationStyle = withStyles(() => ({
  root: {
    paddingRight: 30,
    "&:last-child": {
      height: "100%",
      border: 0,
    },
  },
  caption: {
    fontSize: 17,
    fontWeight: 300,
  },
  selectRoot: {
    borderBottom: "1px solid",
  },
  select: {
    padding: 0,
    paddingRight: 35,
  },
  selectIcon: {
    right: "-5px",
    color: "#1a1a1a",
  },
}))(TablePagination) as any;
