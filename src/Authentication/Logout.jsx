import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/userSlice";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutUser());
    toast.success("User Logout Successfully");
    localStorage.clear();
    // localStorage.removeItem("user");
    navigate("/");
}, [dispatch, navigate]);
  return null;
};

export default Logout;
