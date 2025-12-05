import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../features/userSlice";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userDetail);

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(LoginUser(data)).unwrap();

      toast.success(result.message);
      reset();
      navigate("/");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
          <h3 className="d-flex justify-center mb-3 fw-bolder">Sign In</h3>
          <div className="card p-4 shadow">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </div>

              <div className="mb-2">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="*****"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </div>

              <Link to="/signUp" className="text-primary">
                Create a new account?
              </Link>

              <div className="mt-3 mb-2">
                <button
                  type="submit"
                  className="btn btn-primary w-25"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </div>

              <Link to="/resetPassword" className="text-primary">
                Forgot Password?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
