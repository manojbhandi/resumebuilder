import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Builder from "./Pages/Builder";
import Congratulations from "./Pages/Congratulations";
import { isLoggedIn } from "./Utils/CommonFn";
import ProtectedRoute from "./ProtectedRoutes";
import { ROUTES } from "./Utils/SiteConfig";
import Register from "./Pages/Register";

function App() {
  let USER: { user: string | null, message: string | null } = { user: null, message: null }
  useEffect(() => {
    USER = JSON.parse(localStorage.getItem("user")!);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.register} element={<Register />} />
          <Route path={ROUTES.builder} element={<Builder />} />

          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn()} />}>
            <Route path={ROUTES.protected.congratulations} element={<Congratulations />} />
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
