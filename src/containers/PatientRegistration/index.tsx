import { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import clsx from "clsx";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import DatePicker from "../../components/DatePicker";
import UploadFile from "../../components/UploadFile";

import { useStyles } from "./styles";
import { validateEmail } from "../../utils";
import axiosClient from "../../utils/axiosClient";

interface IProps {
  userLoggedIn: boolean;
}

function PatientRegistration(props: IProps) {
  const { userLoggedIn = true } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    birthday: null as Date | null,
    address: "",
    booking_time: new Date(),
    file: {} as any,
    photo: "",
  });
  const [errEmail, setErrEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [isRequestSuccess, setIsRequestSuccess] = useState(false);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      validateEmail(value) ? setErrEmail("") : setErrEmail("Email is invalid");
    }
    setInput((pre) => ({ ...pre, [name]: value }));
  };

  const onSelectBirthDay = (value: Date | null) => {
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
        file: { result: reader.result, file },
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
    const { first_name, last_name, email } = input;
    return !first_name || !last_name || !email || !!errEmail;
  };

  const onCancel = () => {
    navigate("/");
  };

  const onSubmitForm = async () => {
    setErrMessage("");
    const {
      first_name,
      last_name,
      email,
      phone,
      birthday,
      address,
      booking_time,
      file,
    } = input;
    const payload = {
      first_name,
      last_name,
      email,
      address,
      phone_number: phone,
      appointment_time: moment(booking_time).unix(),
      date_of_birth: moment(birthday).unix(),
    };
    try {
      const formData = new FormData();
      formData.append("image", file.file[0]);
      const res = await axiosClient.post("/upload-photo", formData);
      await axiosClient.post("/patient", { ...payload, src_picture: res.data });
      setIsRequestSuccess(true);
    } catch (error: any) {
      const err = { ...error };
      const payload = { ...err.response };
      setErrMessage(payload.data.error);
    }
  };

  return (
    <div
      className={clsx(classes.container, { [classes.bgGray]: userLoggedIn })}
    >
      {!userLoggedIn && (
        <div className={classes.canvas}>
          <h3 className={classes.title}>Booking</h3>
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}images/bg-service.jpeg)`,
              backgroundSize: "cover",
              height: "100%",
            }}
          ></div>
        </div>
      )}
      <div className={clsx(classes.content, { [classes.flex]: !userLoggedIn })}>
        {isRequestSuccess && (
          <div className={classes.center}>
            <CheckCircleRoundedIcon className={classes.checkIcon} />
            <h3 className={clsx(classes.mrb15, classes.mrt15, classes.fs32)}>
              Congratulations!
            </h3>
            <p className={classes.mr0}>
              Hi <strong>{input.first_name}!</strong> Your request has been
              registered successfully!
            </p>
            <Link to="/" className={classes.link}>
              Go Back <ArrowBackIcon className={classes.iconBack} />
            </Link>
          </div>
        )}
        {!isRequestSuccess && (
          <form
            className={clsx(classes.form, {
              [classes.border]: userLoggedIn,
            })}
          >
            <h3 className={classes.textCenter}>Patient Registration Online</h3>
            <div className={clsx(classes.flex)}>
              <TextField
                size="small"
                name="first_name"
                label="First Name"
                value={input.first_name}
                onChange={handleChangeInput}
                className={clsx(classes.w100, classes.mrb15, classes.mrr15, {
                  [classes.input]: !userLoggedIn,
                })}
              />
              <TextField
                size="small"
                name="last_name"
                value={input.last_name}
                label="Last Name"
                onChange={handleChangeInput}
                className={clsx(classes.w100, classes.mrb15, {
                  [classes.input]: !userLoggedIn,
                })}
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
              className={clsx(classes.w100, classes.mrb15, {
                [classes.input]: !userLoggedIn,
              })}
            />
            <TextField
              size="small"
              name="phone"
              value={input.phone}
              label="Phone"
              onChange={handleChangeInput}
              className={clsx(classes.w100, classes.mrb15, {
                [classes.input]: !userLoggedIn,
              })}
            />
            <DatePicker
              name="birthday"
              value={input.birthday}
              inputFormat="MM/dd/yyyy"
              ampmInClock={false}
              label="Date of Birth"
              type='date'
              onChange={onSelectBirthDay}
              className={clsx(classes.w100, classes.mrb15, {
                [classes.input]: !userLoggedIn,
              })}
              maxDate={new Date()}
            />
            <TextField
              size="small"
              name="address"
              value={input.address}
              label="Address"
              onChange={handleChangeInput}
              className={clsx(classes.w100, classes.mrb15, {
                [classes.input]: !userLoggedIn,
              })}
            />
            <DatePicker
              name="booking_time"
              value={input.booking_time}
              label="Appointment time"
              onChange={onSelectBookingTime}
              className={clsx(classes.w100, classes.mrb15, {
                [classes.input]: !userLoggedIn,
              })}
              minDate={new Date()}
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
            {errMessage && <p className={classes.errText}>{errMessage}</p>}
            <div className={clsx(classes.flex, classes.spaceBetween)}>
              <Button
                variant="contained"
                color="error"
                className={clsx(classes.btn, classes.mrr15)}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                className={clsx(classes.btn, classes.submitBtn)}
                onClick={onSubmitForm}
                disabled={disableButton()}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
export default PatientRegistration;
