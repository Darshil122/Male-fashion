import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
// import { ResetPass } from "../features/userSlice";
const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated, message } = useSelector(
    (state) => state.userDetail
  );

  const onSubmit = (data) => {
    const resultAction = dispatch(ResetPass(data));
    const result = resultAction.payload;

    if (result?.user) {
      reset();
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(message);
      navigate("/signIn");
    }
    if (error) {
      toast.error(error);
    }
  }, [isAuthenticated, error, message, navigate]);
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
          <h3 className="d-flex justify-center mb-3 fw-bolder">Reset Password</h3>
          <div className="card p-4 shadow">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="form-control"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="password">New Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </div>
              <Link to="/signIn" className="text-primary">
                Sign In Account?
              </Link>
              <div className="mt-3 mb-2">
                <button
                  type="submit"
                  className="btn btn-primary w-35"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Reset Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

