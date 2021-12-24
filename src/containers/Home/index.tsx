import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import { Button, TableFooter, TablePagination, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";

import { useStyles, PaginationStyle } from "./styles";

export default function Home() {
  const classes = useStyles();
  const nanigate = useNavigate();

  const [patient, setPatient] = useState("");

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setPatient(e.target.value);
  };

  const onAddPatient = () => {
    nanigate("/patient-registration");
  };
  function createData(
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    booking_time: Date,
    address: string
  ) {
    return { first_name, last_name, email, phone, booking_time, address };
  }

  const rows = [
    createData(
      "Frozen ",
      "yoghurt",
      "Cupcake@gmail.com",
      "52452452421",
      new Date(),
      "VietNam"
    ),
    createData(
      "Frozen ",
      "yoghurt",
      "Cupcake@gmail.com",
      "52452452421",
      new Date(),
      "VietNam"
    ),
    createData(
      "Frozen ",
      "yoghurt",
      "Cupcake@gmail.com",
      "52452452421",
      new Date(),
      "VietNam"
    ),
    createData(
      "Frozen ",
      "yoghurt",
      "Cupcake@gmail.com",
      "52452452421",
      new Date(),
      "VietNam"
    ),
  ];

  return (
    <div className={classes.homeContainer}>
      <div className={classes.header}>
        <div className={classes.flexCenter}>
          <ContactsIcon className={classes.contactIcon} />
          <h1>Patients Registered</h1>
        </div>
        <div className={classes.flexCenter}>
          <TextField
            size="small"
            placeholder="Search Patient"
            value={patient}
            onChange={handleChangeSearch}
            className={classes.input}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={onAddPatient}
            startIcon={<AddIcon />}
          >
            Add patient
          </Button>
        </div>
      </div>
      <TableContainer className={classes.tableContainer}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <td className={classes.titleTable}>Patients</td>
            </TableRow>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="left">Last name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Booking time</TableCell>
              <TableCell align="left">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.first_name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.first_name}
                </TableCell>
                <TableCell align="left">{row.last_name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">
                  {moment(row.booking_time).format("LLL")}
                </TableCell>
                <TableCell align="left">{row.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className={classes.footer}>
            <tr>
              <PaginationStyle
                rowsPerPageOptions={[10, 20, 30]}
                count={100}
                rowsPerPage={10}
                page={0}
                // onChangePage={handleChangePage}
                // onChangeRowsPerPage={handleChangeRowsPerPage}
                labelRowsPerPage="Row per page"
              />
            </tr>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
