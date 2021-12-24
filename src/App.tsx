import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import PatientRegister from "./pages/patientRegister";
import { AuthLayout, MainLayout } from "./layouts";
import { userIsLoggedIn } from "./utils";

function App() {
  const initialUserLoggedIn = userIsLoggedIn();

  const [userLoggedIn, setUserLoggedIn] = useState(initialUserLoggedIn);

  const logOut = () => {
    localStorage.removeItem("user-patient");
    setUserLoggedIn(false);
  };

  const logIn = () => {
    setUserLoggedIn(true);
  };

  return (
    <Router>
      {userLoggedIn ? (
        <MainLayout logOut={logOut}>{AuthRoutes({ userLoggedIn })}</MainLayout>
      ) : (
        <AuthLayout>{UnAuthRoutes({ logIn, userLoggedIn })}</AuthLayout>
      )}
    </Router>
  );
}

interface IAuthProps {
  userLoggedIn: boolean;
}

function AuthRoutes(props: IAuthProps) {
  const { userLoggedIn } = props;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />}></Route>
      <Route
        path="/patient-registration"
        element={<PatientRegister userLoggedIn={userLoggedIn} />}
      />
    </Routes>
  );
}

interface IUnAuthProps {
  userLoggedIn: boolean,
  logIn: () => void;
}

function UnAuthRoutes(props: IUnAuthProps) {
  const { logIn, userLoggedIn } = props;
  return (
    <Routes>
      <Route path="/login" element={<LoginPage logIn={logIn} />} />
      <Route
        path="/patient-registration"
        element={<PatientRegister userLoggedIn={userLoggedIn} />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
