import React from "react";
import { Button, Form, Input } from "antd";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { API } from "../react-query/query";
import { dispatch } from "../redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login({ setLogin }) {
  const {
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { mutate } = useMutation(async (payload) => {
    try {
      const res = await API.login(payload);
      if (res.status === 200) {
      
        navigate("/details", { replace: true });
        window.location.reload();
        localStorage.setItem("token", res.data?.token);
        dispatch.auth.login(res.data);
        toast.success("Wow so easy!");
      } else {
        console.log("xatolik");
      }
    } catch (error) {
      toast.error(error.response.data[0]?.message);
      console.log("Auth dispatch error", error.response.data[0]?.message);
    }
  });

  const onSubmit = (data) => {
    mutate({ ...data });
  };

  return (
    <Form className="flex flex-col" onFinish={onSubmit} autoComplete="on">
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
        className="mb-1 bg-none"
        name="password"
        rules={[
          {
            required: true,
            message: "Iltimos 'parol'ni kiriting!",
          },
        ]}
      >
        <Input.Password
          placeholder="Password"
          {...register("password")}
          className="md:p-2 bg-transparent  custom-bg"
        />
      </Form.Item>
      <span
        style={{ cursor: "pointer", color: "orange" }}
        onClick={() => setLogin("kirish")}
      >
        Sign Up
      </span>
      <Form.Item>
        <Button htmlType="submit" className="w-full text-white mt-3">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
