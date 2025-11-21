import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignUpUser } from "../features/userSlice";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { loading, message, isAuthenticated, error } = useSelector(
    (state) => state.userDetail
  );
  const onSubmit = (data) => {
    const response = dispatch(SignUpUser(data));
    const result = response.payload;

    if (result?.user) {
      reset();
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(message);
      navigate("/");
    }
    if (error) {
      toast.error(error);
    }
  }, [isAuthenticated, message, error, navigate]);
  
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
          <h3 className="d-flex justify-center mb-3 fw-bolder">Sign Up</h3>
          <div className="card p-4 shadow">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="form-control"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="number">Phone No:</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="form-control"
                  {...register("number", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be  exactly 10 digits",
                    },
                  })}
                />
                {errors.number && (
                  <span className="text-danger">{errors.number.message}</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="form-control"
                  {...register("email", { required: "email is required" })}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="image">Profile Photo:</label>
                <input type="file" id="image" className="form-control" />
              </div>
              {/* <div className="mb-2">
                <label htmlFor="role">Role:</label>
                <select id="role" name="role" className="form-control">
                  <option value="user">User</option>
                  <option value="saller">Saller</option>
                  <option value="admin">Admin</option>
                </select>
              </div> */}
              <Link to="/signIn" className="text-primary">
                Already have an account?
              </Link>
              <div className="mt-4">
                <button
                  className="btn btn-primary w-25"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
