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

  // const { mutate } = useMutation(async (payload) => {
  //   return await API.login(payload)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         <Navigate replace={true} to="/admission" />;
  //       //   window.location.reload();
  //       }
  //       localStorage.setItem("token", `${res.data?.token}`);
  //       // dispatch.auth.login(res.data);
  //     })
  //     .catch((error) => {
  //       console.log("Auth dispatch  error", error);
  //     });
  // });

  const { mutate } = useMutation(async (payload) => {
    try {
      const res = await API.login(payload);
      if (res.status === 200) {
        navigate("/admission", { replace: true });
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
    <Form
      className="flex flex-col text-md"
      onFinish={onSubmit}
      autoComplete="on"
    >
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
          className="md:p-2 border-orange-300 hover:border-orange-400 border-2 focus:border-orange-500"
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
          className="md:p-2  border-orange-300 hover:border-orange-400 border-2 focus:border-orange-500"
        />
      </Form.Item>
      <span
        style={{ cursor: "pointer", color: "dodgerblue" }}
        onClick={() => setLogin("kirish")}
      >
        Ro'yhatdan o'tish
      </span>
      <Form.Item>
        <Button
          htmlType="submit"
          className="w-full active:border-none bg-orange-400 hover:border-none hover:bg-orange-500 mt-3"
          style={{
            color: "#fff",
            outlineColor: "orange", 
          }}
        >
          Kirish
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
