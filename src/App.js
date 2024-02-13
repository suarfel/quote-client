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

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Router>
      <Main>
        <Routes>
          {!isLoggedIn && <Route path="/" element={<LandingPage />} />}
          {isLoggedIn && <Route path="/user" element={<UserPage />} />}
          {!isLoggedIn && <Route path="/register" element={<SignUpPage />} />}
          {!isLoggedIn && <Route path="home" element={<LandingPage />} />}
          {!isLoggedIn && <Route path="/login" element={<SignInPage />} />}
          {isLoggedIn && <Route path="/user" element={<UserPage />} />}
          {!isLoggedIn && (
            <Route path="*" element={<Navigate replace to="home" />} />
          )}
          {isLoggedIn && (
            <Route path="*" element={<Navigate replace to="user" />} />
          )}
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
