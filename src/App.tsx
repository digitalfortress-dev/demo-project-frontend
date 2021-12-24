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
  return (
    <Router>
      {userLoggedIn ? (
        <MainLayout logOut={logOut}>{AuthRoutes()}</MainLayout>
      ) : (
        <AuthLayout>{UnAuthRoutes()}</AuthLayout>
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

function UnAuthRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/patient-registration" element={<PatientRegister />} />
    </Routes>
  );
}

export default App;
