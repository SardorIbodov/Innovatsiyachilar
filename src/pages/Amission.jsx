import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import Content1 from "../components/step_contents/Content1";
import Content2 from "../components/step_contents/Content2";
import Content3 from "../components/step_contents/Content3";
import "./custom.css";
import Content4 from "../components/step_contents/Content4";

const steps = [
  {
    title: "Ariza formasi",
    content: <Content1 />,
  },
  {
    title: "Arizalar",
    content: <Content2 />,
  },
  {
    title: "Imtixon",
    content: <Content3 />,
  },
  {
    title: "Qabul",
    content: <Content4 />,
  },
];
const Admission = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [current, setCurrent] = useState(0);

  const { token } = theme.useToken();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const customButtonStyle = {
    backgroundColor: token.orange5,
    borderColor: token.orange5,
  };

  return (
    <>
      <Steps className="mt-5" current={current} items={items} />
      <div>{steps[current].content}</div>
      <div className="mt-5">
        {isButtonClicked && (
          <Button
            type="primary"
            className="custom-button"
            style={customButtonStyle}
            onClick={() => next()}
          >
            Keyingisi
          </Button>
        )}
        {current === 0 && (
          <Button
            type="primary"
            className="bg-green-500 custom-button2"
            disabled={isButtonClicked}
            onClick={() => {
              setIsButtonClicked(true);
              message.success("Muvaffaqiyatli Yuborildi!");
            }}
          >
            Arizani Yuborish
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
            className="border-orange-400 border-2 custom-button3"
          >
            Oldingisi
          </Button>
        )}
      </div>
    </>
  );
};
export default Admission;
