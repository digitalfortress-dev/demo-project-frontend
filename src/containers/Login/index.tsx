import { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axiosClient from "../../utils/axiosClient";

import { useStyles } from "./styles";

interface ILogin {
  logIn: () => void;
}

export default function Login(props: ILogin) {
  const navigate = useNavigate();
  const classes = useStyles();
  const { logIn } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSetEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onSetPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onLogin = async () => {
    const payload = { username, password };
    setIsLoading(true);
    try {
      const res = await axiosClient.post("/login", payload);
      localStorage.setItem(
        "user-patient",
        JSON.stringify({ "accessToken": res.data.token })
      );
      axiosClient.setHeader(res.data.token);
      logIn();
      setIsLoading(false);
      navigate("/home");
    } catch (error: any) {
      const err = { ...error };
      const payload = { ...err.response };
      setIsLoading(false);
      setError(payload.data.error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.canvas}>
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL} images/locations_bg.jpeg)`,
            backgroundSize: "cover",
            height: "100%",
          }}
        ></div>
      </div>
      <div className={classes.content}>
        <form className={classes.form}>
          <h3 className={clsx(classes.textCenter, classes.fs32, classes.mrb10)}>
            Log Into Dashboard
          </h3>
          <p className={clsx(classes.textCenter, classes.mrb50)}>
            Enter your login details below
          </p>
          <TextField
            label="Username"
            size="small"
            value={username}
            className={clsx(classes.w100, classes.mrb15, classes.input)}
            onChange={onSetEmail}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            size="small"
            onChange={onSetPassword}
            className={clsx(classes.w100, classes.mrb15, classes.input)}
          />
          {error && <p className={classes.errText}>{error}</p>}
          <Button
            variant="contained"
            color="primary"
            onClick={onLogin}
            disabled={isLoading}
            className={clsx(classes.w100, classes.mrb15, classes.btn)}
          >
            {isLoading ? "Logging In" : "Log In"}
          </Button>
          <Link to="/patient-registration" className={classes.link}>
            <span>Go to Booking </span>
            <ArrowForwardIosIcon className={classes.arrowIcon} />{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}
