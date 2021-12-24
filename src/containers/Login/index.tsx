import { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useStyles } from "./styles";

export default function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSetEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onSetPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onLogin = () => {
    localStorage.setItem(
      "user-patient",
      JSON.stringify({ username, password })
    );
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h3 className={classes.title}>Login</h3>
        <TextField
          label="Username"
          size='small'
          value={username}
          className={clsx(classes.w100, classes.mrb15, classes.input)}
          onChange={onSetEmail}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          size='small'
          onChange={onSetPassword}
          className={clsx(classes.w100, classes.mrb15, classes.input)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
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
  );
}
