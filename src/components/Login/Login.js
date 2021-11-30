import React from "react";
import "./Login.css";
import Video from "../Videos/login.mp4";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../Schema/Schema";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../Redux/todoSlice";
import { logout } from "../Redux/todoSlice";

const Login = () => {
  // const login=useSelector((state)=>state.login);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    dispatch(loginAsync(data));
  };
  const Logout = () => {
    dispatch(logout());
  };
  return (
    <div className="body">
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="box">
          <h2>Login</h2>
          <div className="inputbox">
            <input type="text" {...register("email")} />
            <label>Email</label>
            <p>{errors.email?.message}</p>
          </div>

          <div className="inputbox">
            <input type="password" {...register("password")} />
            <label>Password</label>
            <p>{errors.password?.message}</p>
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
