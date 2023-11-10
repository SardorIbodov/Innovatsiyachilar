import React from "react";
import { Spin } from "antd";

const AppLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}>
      <Spin />
    </div>
  );
};

export default AppLoader;
