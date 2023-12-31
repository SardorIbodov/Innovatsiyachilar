import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { API } from "../react-query/query";
import { dispatch } from "../redux";
import { useState } from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import { toast } from "react-toastify";
import "./custom.css";

function SignIn({ setLogin }) {
  const navigate = useNavigate();
  const [smsCode, setSmsCode] = useState(true);
  const [code, setCode] = useState();
  const {
    register,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation(async (payload) => {
    return await API.regiserUser(payload)
      .then((res) => {
        setSmsCode(false);
        dispatch.auth.login(res.data);
      })
      .catch((error) => {
        toast.error(error.response.data[0]?.message);
        console.log("Auth dispatch  error", error);
      });
  });
  const onSubmit = (data) => {
    mutate({ ...data });
  };

  const { mutate: smsCodeVerfiy } = useMutation(async (payload) => {
    return await API.smsCodeVerify(payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", `${res.data?.token}`);
        navigate("/details");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Auth dispatch  error", error);
      });
  });
  const onSubmitSms = () => {
    smsCodeVerfiy(code);
  };
  return (
    <>
      {smsCode === true ? (
        <Form
          className="flex flex-col text-md"
          onFinish={onSubmit}
          autoComplete="on"
        >
          <Form.Item
            className="text-black"
            name="full_name"
            rules={[
              {
                required: true,
                message: "Iltimos 'username'-ni kiriting!",
              },
            ]}
          >
            <Input
              placeholder="Username"
              {...register("full_name")}
              className="md:p-2  bg-transparent"
              style={{ color: "white" }}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Iltimos to'gi email kiriting!",
              },
              {
                required: true,
                message: "Iltimos 'email'ni kiriting!",
              },
            ]}
          >
            <Input
              placeholder="E-mail"
              {...register("email")}
              className="md:p-2 bg-transparent"
              style={{ color: "white" }}
            />
          </Form.Item>
          <Form.Item
            className="mb-1 "
            name="password"
            rules={[
              {
                required: true,
                message: "Iltimos 'parol'ni kiriting!",
              },
            ]}
          >
            <Input.Password
              placeholder="Parol"
              {...register("password")}
              className="md:p-2 bg-transparent  custom-bg"
            />
          </Form.Item>
          <span
            style={{ cursor: "pointer", color: "orange" }}
            onClick={() => setLogin("login")}
          >
           Sign In 
          </span>
          <Form.Item>
            <Button htmlType="submit" className="w-full text-white mt-3">
             Sign Up
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Form
          autoComplete="on"
          className="flex flex-col  text-md"
          onFinish={onSubmitSms}
        >
          <ReactInputVerificationCode length={6} onChange={setCode} />
          <Form.Item>
            <Button htmlType="submit" className=" text-white mt-4 mx-auto">
              Confirm
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
}

export default SignIn;
