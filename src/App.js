import "./App.css";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AuthLayout from "./Components/Layout/AuthLayout";

import Contact from "./Components/Contact/Contact";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import BookingPage from "./Pages/BookingPage";
import Error404 from "./Components/Error404/Error404";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />,
          <Route path="/home" element={<Home />} />,
          <Route path="/contact" element={<Contact />} />,
          <Route path="/booking" element={<BookingPage />} />,
          <Route path="/*" element={<Error404 />} />,
        </Route>
        <Route key="auth" path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
