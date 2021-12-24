import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  paper: {
    position: "relative",
    height: '100vh',
    overflow: 'hidden',
  },
  canvas1: {
    background:
      "linear-gradient(108.63deg,#110652 12%,#29077c 30.91%,#2a149b 96.7%,#5d3ff5 109.02%)",
    backgroundSize: "400% 400%",
    animation: "gradient 8s ease infinite alternate",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
  },
  canvas2: {
    position: "absolute",
    top: "10%",
    width: "80%",
    height: "40%",
    background:
      "linear-gradient(108.63deg,#090979 17%,#0c0840 50%,#1a0864 50%,#2a149b)",
    backgroundRepeat: "repeat",
    filter: "blur(6rem)",
    transform: "rotate(0deg) scaleY(2)",
    transformOrigin: "center",
    animation: "AnimationDesk 10s ease-in-out infinite",
  },
}));

export { useStyles };
