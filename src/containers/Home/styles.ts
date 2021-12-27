import { TablePagination } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { makeStyles, withStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  homeContainer: {
    height: "100%",
    marginTop: "30px",
    padding: "0 20px",
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginRight: '15px !important',
  },
  btn: {
    boxShadow: 'none !important',
    textTransform: 'capitalize !important' as any,
    backgroundColor: '#85D5EF !important',
  },
  contactIcon: {
    fontSize: '30px !important',
    color: '#85D5EF',
    marginRight: 15,
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
