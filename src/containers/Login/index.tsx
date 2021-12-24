import { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useStyles } from "./styles";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSetEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onSetPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onLogin = () => {
    localStorage.setItem('user-patient', JSON.stringify({username, password}))
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h3 className={classes.title}>Login</h3>
        <TextField
          label="Username"
          value={username}
          className={clsx(classes.w100, classes.mrb15, classes.input)}
          onChange={onSetEmail}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
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
          Go to Booking <ArrowForwardIosIcon className={classes.arrowIcon} />{" "}
        </Link>
      </form>
    </div>
  );
}
