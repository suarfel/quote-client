import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Main from "./components/Layout/Main";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import { useSelector } from "react-redux";
import UserPage from "./pages/UserPage";
import LandingPage from "./pages/LandingPage";
import NotificationsPage from "./pages/NotificationsPage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userEmail= useSelector((state) => state.user.email);
  const userId = userEmail.split('@')[0];


  return (
    <Router>
      <Main>
        <Routes>
          {!isLoggedIn && <Route path="/login" element={<SignInPage />} />}
          {!isLoggedIn && <Route path="/register" element={<SignUpPage />} />}
          {!isLoggedIn && <Route path="home" element={<LandingPage />} />}
          {isLoggedIn && <Route path={`user/${userId}`} element={<UserPage />} />}
          {isLoggedIn && (
            <Route path="/notifications" element={<NotificationsPage />} />
          )}
          {!isLoggedIn && <Route path="/" element={<LandingPage />} />}
          {!isLoggedIn && (
            <Route path="*" element={<Navigate replace to="home" />} />
          )}
          {isLoggedIn && (
            <Route path="*" element={<Navigate replace to={`user/${userId}`} />} />
          )}
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
