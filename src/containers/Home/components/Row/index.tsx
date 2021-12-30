import moment from "moment";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Fragment, useState } from "react";
import { Box, Collapse, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import clsx from "clsx";

import { useStyles } from "../../styles";

export default function Row({ row }: any) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.first_name}
        </TableCell>
        <TableCell align="left">{row.last_name}</TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.phone_number}</TableCell>
        <TableCell align="left">
          {moment(row.appointment_time * 1000).format("LLL")}
        </TableCell>
        <TableCell align="left">{row.address}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Patient Details
              </Typography>
              <div className={clsx(classes.flex)}>
                <div className={classes.w50}>
                  <p className={classes.mr0}>
                    Name:{" "}
                    <strong>
                      {row.first_name} {row.last_name}
                    </strong>
                  </p>
                  <p className={classes.mr0}>
                    Date of Birth:{" "}
                    <strong>
                      {row.date_of_birth
                        ? moment(row.date_of_birth).format("ll")
                        : "[N/A]"}
                    </strong>
                  </p>
                  <p className={classes.mr0}>
                    Email: <strong>{row.email}</strong>
                  </p>
                  <p className={classes.mr0}>
                    Address: <strong>{row.address}</strong>{" "}
                  </p>
                </div>
                <div className={classes.w50}>
                  <p className={classes.mr0}>
                    Driver license: {!row.src_picture && "[N/A]"}
                  </p>
                  {row.src_picture && (
                    <div
                      style={{
                        backgroundImage: `url('${row.src_picture}')`,
                        backgroundSize: "cover",
                        width: "72%",
                        height: 200,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}
