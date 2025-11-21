import { Route, Routes } from "react-router-dom";
// import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPassword from "./Authentication/ResetPassword";
import Logout from "./Authentication/Logout";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/category/:category"
          element={
            <>
              <Navbar />
              <Product />
              <Footer />
            </>
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <ProtectedRoute>
              <Navbar />
              <Cart />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Navbar />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <Navbar />
              <ProductDetails />
              <Footer />
            </>
          }
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
