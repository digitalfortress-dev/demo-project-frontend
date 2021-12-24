import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

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
        <MainLayout logOut={logOut}>{AuthRoutes()}</MainLayout>
      ) : (
        <AuthLayout>{UnAuthRoutes(logIn)}</AuthLayout>
      )}
    </Router>
  );
}

function AuthRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}

function UnAuthRoutes(logIn: any) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage logIn={logIn} />} />
      <Route path="/patient-registration" element={<PatientRegister />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
