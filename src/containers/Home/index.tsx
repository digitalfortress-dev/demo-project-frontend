import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, TableFooter, TextField } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ContactsIcon from "@mui/icons-material/Contacts";

import { useStyles, PaginationStyle } from "./styles";
import axiosClient from "../../utils/axiosClient";
import { handleError } from "../../utils";
import Row from "./components/Row";

export default function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [patient, setPatient] = useState("");
  const [patients, setPatients] = useState([]);

  const getPatients = useCallback(async () => {
    try {
      const { data } = await axiosClient.get("/admin/patients");
      setPatients(data);
    } catch (error: any) {
      const err = { ...error };
      handleError(err);
    }
  }, []);

  useEffect(() => {
    getPatients();
  }, [getPatients]);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setPatient(e.target.value);
  };

  const onAddPatient = () => {
    navigate("/patient-registration");
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

  return (
    <div className={classes.homeContainer}>
      <div className={classes.header}>
        <div className={classes.flexCenter}>
          <ContactsIcon className={classes.contactIcon} />
          <h1>Patients List</h1>
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
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Booking time</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((row: any) => (
              <Row row={row} />
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
