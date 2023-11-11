import React from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import airConditioner from "../assests/air-conditioner.png";
import lightBulb from "../assests/light-bulb.png";

const Details = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Succesfully sent!",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Place enter valid values!",
    });
  };
  const getTotalSum = (power, time, count) => {
    return (power / 1000) * time * count * 295;
  };
  const getProfit = (power, count) => {
    return (power / 1000) * 2 * count * 295;
  };

  const onFinish = (values) => {
    navigate("/results");
    // fetch("your_backend_url", {
    //   method: "POST",
    //   body: JSON.stringify(values),
    // });
    // .then((response) => response.json())
    // .then((data) => {
    //   // Handle the response from the backend
    //   console.log(data);
    // })
    // .catch((error) => {
    //   // Handle errors
    //   console.error("Error:", error);
    // });
    console.log(
      `${getTotalSum(
        values.power_bulb,
        values.time_bulb,
        values.count_bulb
      )} so'm kuniga ishlatiladi`
    );
    console.log(
      `${getProfit(values.power_bulb, values.count_bulb)} so'm kuniga tejaladi`
    );
  };
  const onFinishFailed = (errorInfo) => {
    error();
  };
  return (
    <Form
      labelCol={{
        flex: "110px",
      }}
      labelAlign="left"
      labelWrap
      wrapperCol={{
        flex: 1,
      }}
      colon={false}
      autoComplete="on"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {contextHolder}
      <div>
        <h1 className="text-center font-bold text-3xl mb-4">
          Enter your data:
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-y-5 md:justify-between">
          <div className="w-full md:w-1/2 flex flex-col gap-y-5">
            <img
              src={lightBulb}
              style={{ width: "100px", height: "100px", margin: "0 auto" }}
              alt=""
            />
            <h1 className="font-bold text-3xl text-center">Light bulb</h1>
            <div className="w-1/2 m-auto">
              <Form.Item
                name="power_bulb"
                rules={[
                  {
                    required: true,
                  },
                ]}
                labelCol={{
                  flex: "60px",
                }}
              >
                <Input
                  className="custom-input"
                  placeholder="Power (W)"
                  type="number"
                  min={0}
                />
              </Form.Item>
              <Form.Item
                name="count_bulb"
                rules={[
                  {
                    required: true,
                  },
                ]}
                labelCol={{
                  flex: "60px",
                }}
              >
                <Input
                  className="custom-input"
                  placeholder="Count"
                  type="number"
                  min={0}
                />
              </Form.Item>
              <Form.Item
                name="time_bulb"
                rules={[
                  {
                    required: true,
                  },
                ]}
                labelCol={{
                  flex: "60px",
                }}
              >
                <Input
                  className="custom-input"
                  placeholder="Time (in hours)"
                  type="number"
                  min={0}
                  max={24}
                />
              </Form.Item>
            </div>
          </div>
          <div className="h-0.5 w-1/2 md:w-0.5 md:h-0 bg-slate-500"></div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-5">
            <img
              src={airConditioner}
              style={{ width: "100px", height: "100px", margin: "0 auto" }}
              alt=""
            />
            <h1 className="font-bold text-3xl text-center">Air conditioner</h1>
            <div className="w-1/2 m-auto">
              <Form.Item
                name="power_air"
                rules={[
                  {
                    required: true,
                  },
                ]}
                labelCol={{
                  flex: "60px",
                }}
              >
                <Input
                  className="custom-input"
                  placeholder="Power (W)"
                  type="number"
                  min={0}
                />
              </Form.Item>
              <Form.Item
                name="count_air"
                rules={[
                  {
                    required: true,
                  },
                ]}
                labelCol={{
                  flex: "60px",
                }}
              >
                <Input
                  className="custom-input"
                  placeholder="Count"
                  type="number"
                  min={0}
                />
              </Form.Item>
              <Form.Item
                name="time_air"
                rules={[
                  {
                    required: true,
                  },
                ]}
                labelCol={{
                  flex: "60px",
                }}
              >
                <Input
                  className="custom-input"
                  placeholder="Time (in hours)"
                  type="number"
                  min={0}
                  max={24}
                />
              </Form.Item>
            </div>
          </div>
        </div>
        <Form.Item label=" " className="flex justify-center">
          <Button htmlType="submit" size="large">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};
export default Details;
