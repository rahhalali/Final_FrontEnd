import React, {useEffect} from "react";
import "./Login.css";
import Video from "./Videos/login.mp4";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../Schema/Schema";
import {useDispatch, useSelector} from "react-redux";
import { loginAsync } from "../Redux/todoSlice";
import {useNavigate} from "react-router";




const Login = () => {
  const navigate=useNavigate();
  const login=useSelector((state)=>state.login);
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
  useEffect(()=>{
    if(login.logged_in === true){
      navigate('/');
    }
  },[login])

  return (
      <div className="body">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4"/>
        </video>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="box">
            <h2>Login</h2>
            <div className="inputbox">
              <label>Email</label>
              <input type="text" {...register("email")} />
              <p >{errors.email?.message}</p>
            </div>

            <div className="inputbox"><label>Password</label>
              <input type="password" {...register("password")} />

              <p>{errors.password?.message}</p>
            </div>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
  );
};

export default Login;
