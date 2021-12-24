import { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import clsx from "clsx";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import DatePicker from "../../components/DatePicker";
import UploadFile from "../../components/UploadFile";

import { useStyles } from "./styles";
import { validateEmail } from "../../utils";

function PatientRegistration() {
  const classes = useStyles();
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    birthday: new Date("01/01/2000"),
    address: "",
    booking_time: new Date(),
    file: {} as any,
  });
  const [errEmail, setErrEmail] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      validateEmail(value) ? setErrEmail("") : setErrEmail("Email is invalid");
    }
    setInput((pre) => ({ ...pre, [name]: value }));
  };

  const onSelectBirthDay = (value: Date) => {
    setInput((pre) => ({ ...pre, birthday: value }));
  };
  const onSelectBookingTime = (value: Date) => {
    setInput((pre) => ({ ...pre, booking_time: value }));
  };

  const onSelectFile = (file: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setInput((pre) => ({
        ...pre,
        file: { result: reader.result, file: file[0] },
      }));
    };
    if (file) {
      reader.readAsDataURL(file[0]);
    }
  };

  const onRemoveFile = () => {
    setInput((pre) => ({
      ...pre,
      file: {},
    }));
  };

  const disableButton = () => {
    const { first_name, last_name, email, file } = input;
    return !first_name || !last_name || !email || !!errEmail || !file.result;
  };
  const onSubmitForm = () => {
    console.log(
      "🚀 ~ file: index.tsx ~ line 12 ~ PatientRegistration ~ input",
      input
    );
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h3 className={classes.title}>Booking</h3>
        <div className={clsx(classes.flex)}>
          <TextField
            size="small"
            name="first_name"
            label="First Name"
            value={input.first_name}
            onChange={handleChangeInput}
            className={clsx(classes.w100, classes.mrb15, classes.mrr15, classes.input)}
          />
          <TextField
            size="small"
            name="last_name"
            value={input.last_name}
            label="Last Name"
            onChange={handleChangeInput}
            className={clsx(classes.w100, classes.mrb15,classes.input)}
          />
        </div>
        <TextField
          size="small"
          name="email"
          value={input.email}
          label="Email"
          helperText={errEmail}
          error={!!errEmail}
          onChange={handleChangeInput}
          className={clsx(classes.w100, classes.mrb15, classes.input)}
        />
        <TextField
          size="small"
          name="phone"
          value={input.phone}
          label="Phone"
          onChange={handleChangeInput}
          className={clsx(classes.w100, classes.mrb15, classes.input)}
        />
        <DatePicker
          name="birthday"
          value={input.birthday}
          label="Birthday"
          onChange={onSelectBirthDay}
          className={clsx(classes.w100, classes.mrb15, classes.input)}
        />
        <TextField
          size="small"
          name="address"
          value={input.address}
          label="Address"
          onChange={handleChangeInput}
          className={clsx(classes.w100, classes.mrb15, classes.input)}
        />
        <DatePicker
          name="booking_time"
          value={input.booking_time}
          label="Appointment time"
          onChange={onSelectBookingTime}
          className={clsx(classes.w100, classes.mrb15, classes.input)}
        />

        <div className={classes.mrb15}>
          {input.file.result ? (
            <div className={classes.imageBox}>
              <div
                style={{
                  backgroundImage: `url(${input.file.result})`,
                }}
                className={clsx(classes.image)}
              >
                <span className="remove-image" onClick={onRemoveFile}>
                  <DeleteForeverIcon style={{ color: "#fff" }} />
                </span>
              </div>
            </div>
          ) : (
            <UploadFile onSelectFile={onSelectFile} />
          )}
          <p className={classes.subtitle}>Add a driver license picture </p>
        </div>

        <Button
          variant="contained"
          className={clsx(classes.w100, classes.btn)}
          onClick={onSubmitForm}
          disabled={disableButton()}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
export default PatientRegistration;
