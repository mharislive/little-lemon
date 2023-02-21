import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/Order";
import BookingPage from "./pages/BookingPage";
import Error from "./pages/Error";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      <Route path="/order-online" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
      <Route path="/404" element={<Error />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
