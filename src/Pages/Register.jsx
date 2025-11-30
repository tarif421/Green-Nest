import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password);

    if (password.length < 6) {
      setError("password must be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        setError(error.massage);
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
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              {error && <p className="text-red-600">{error}</p>}
              <div className="text-center">
                <a className="link link-hover r">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
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
