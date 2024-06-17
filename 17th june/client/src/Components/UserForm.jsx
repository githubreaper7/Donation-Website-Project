import React, { useState } from "react";
import "./Css/UserForm.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formStep, setFormStep] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const {
    watch,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const title = ["Sign Up", "Additional Info"];

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const goToPreviousStep = () => {
    setFormStep((cur) => cur - 1);
  };

  const renderButton = () => {
    if (formStep === 1) {
      return (
        <button disabled={!isValid} type="submit" className="userFormButton">
          Sign Up
        </button>
      );
    } else {
      return (
        <button disabled={!isValid} type="button" onClick={completeFormStep} className="userFormButton">
          Next
        </button>
      );
    }
  };

  const renderBackButton = () => {
    if (formStep === 1) {
      return (
        <button type="button" onClick={goToPreviousStep} className="userFormButton">
          Prev
        </button>
      );
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/signup", {
        username,
        email,
        password
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>{title[formStep]}</h2>
        {formStep === 0 && (
          <section>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              {...register("username", {
                required: {
                  value: true,
                  message: "Please type a username!",
                },
              })}
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              autoComplete="off"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              {...register("email", {
                required: {
                  value: true,
                  message: "Please type an email!",
                },
              })}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
              {...register("password", {
                required: {
                  value: true,
                  message: "Please type a password",
                },
              })}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </section>
        )}
        {formStep === 1 && (
          <section>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              {...register("address", {
                required: {
                  value: true,
                  message: "Please type an address",
                },
              })}
            />
            {errors.address && (
              <p className="error-message">{errors.address.message}</p>
            )}

            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              placeholder="Contact Number"
              onChange={(e) => setContactNumber(e.target.value)}
              {...register("contactNumber", {
                required: {
                  value: true,
                  message: "Please type a contact number!",
                },
              })}
            />
            {errors.contactNumber && (
              <p className="error-message">{errors.contactNumber.message}</p>
            )}
          </section>
        )}
        <div className="userForm-button-container">
          {renderBackButton()}
          {renderButton()}
        </div>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
