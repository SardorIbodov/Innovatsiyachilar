import React from "react";
import { Button, Form, Input } from "antd";

const Admission = () => {
  return (
    <Form
      name="wrap"
      labelCol={{
        flex: "110px",
      }}
      labelAlign="left"
      labelWrap
      wrapperCol={{
        flex: 1,
      }}
      colon={false}
    >
      <div>
        <div className="flex justify-between gap-2 mb-5">
          <div className="w-1/2 flex flex-col gap-y-5">
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
                <Input placeholder="Power" />
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
                <Input placeholder="Count" />
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
                <Input placeholder="Time" />
              </Form.Item>
            </div>
          </div>
          <div className="w-0.5 bg-slate-500"></div>
          <div className="w-1/2 flex flex-col gap-y-5">
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
                <Input placeholder="Power" />
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
                <Input placeholder="Count" />
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
                <Input placeholder="Time" />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
      <Form.Item label=" ">
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default Admission;
