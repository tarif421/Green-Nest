import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password);

    if (password.length < 6) {
      setError(
        "password must be at least 6 characters , one uppercase and one lowercase"
      );
      toast.error("Registration Failed");

      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError(
        "password must be at least 6 characters , one uppercase and one lowercase"
      );
      toast.error("Registration Failed");

      return;
    }

    if (!/[a-z]/.test(password)) {
      setError(
        "password must be at least 6 characters , one uppercase and one lowercase"
      );
      toast.error("Registration Failed");

      return;
    }

    createUser(email, password)
      .then((result) => {
        toast.success("Registration Successful");
        const user = result.user;

        setUser(user);
        navigate("/");
      })
      .catch((err) => {
        setError("Email-already used");

        if (err.code === "auth/email-already-in-use") {
          toast.error("This email is already registered!");
        }
      });
  };
  return (
    <>
      <div className=" flex justify-center min-h-screen  items-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input type="text" name="name" className="input" required />
              {/* photo url */}
              <label className="label">Photo url</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="photo url"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                autoComplete="new-email"
                required
              />
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  name="password"
                  autoComplete="new-password"
                  required
                />
                <span
                  className="absolute right-5 top-[31px] cursor-pointer text-xl text-gray-500"
                  onClick={() => setShowPass(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
              {error && <p className="text-red-600">{error}</p>}
              <div className="text-center">
                <a className="link link-hover r">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-success text-white mt-4">
                Register
              </button>
              <p className="font-semibold text-center pt-5">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-blue-500 underline text-media "
                >
                  Login
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
