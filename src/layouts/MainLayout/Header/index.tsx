import { Link, useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";

import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import clsx from "clsx";

const items = [] as any;

// Header component
const Header = (props: any) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { logOut } = props;
  const [backgroudColor, setBackgroundColor] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 44) {
        setBackgroundColor(classes.linearBackground);
      } else {
        setBackgroundColor(classes.transparentBackground);
      }
    });
  }, []);

  const onLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <Paper className={clsx(classes.wrapper, backgroudColor)}>
      <div className={classes.container}>
        <div className={classes.title}>Management</div>
        <div className={classes.list}>
          {items.map((item: any, index: number) => (
            <NavItem
              key={index}
              label={item.label}
              link={item.link}
              className={classes.link}
            />
          ))}
        </div>
        <div className={classes.right}>
          <Button className={classes.btn} onClick={onLogout}>
            Log out
          </Button>
        </div>
      </div>
    </Paper>
  );
};

function NavItem(props: any) {
  const classes = useStyles();

  const { label, link, className } = props;
  return (
    <Link className={className} to={link}>
      <div className={classes.label}>{label}</div>
    </Link>
  );
}

export default Header;
