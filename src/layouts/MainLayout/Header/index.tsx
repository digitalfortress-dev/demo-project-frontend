import { Link, useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { useStyles } from "./styles";

const items = [] as any;
interface IHeader {
  logOut: () => void,
}

// Header component
const Header = (props: IHeader) => {
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
    navigate("/login");
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
