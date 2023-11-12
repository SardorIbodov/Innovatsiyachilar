import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../react-query/query";

const Results = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}/user/technical/view?id=${params.id}`, {
      headers: { Authorization: ` Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    // index
    fetch(`${BASE_URL}/user/technical/index`, {
      headers: { Authorization: ` Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.result[0]);
      });
  }, [params.id]);

  return (
    <div className="">
      <div className="p-4 shadow-lg w-1/2 mx-auto bg-orange-200">
        <h2 className="text-center font-bold text-4xl">Devices in your home</h2>
        <h3 className="font-bold text-2xl text-center my-3">
          {data?.category_id == 1 ? "Lights" : "Air Conditioner"}
        </h3>
        <div className="flex flex-col	text-[25px] text-center">
          <h3>
            Count: <span className="font-bold">{data?.count}</span>
          </h3>
          <h3>
            Power: <span className="font-bold">{data?.power} Watts</span>
          </h3>
          <h3>
            Time per day: <span className="font-bold">{data?.time} hours</span>
          </h3>
        </div>
      </div>
      <div className="p-4 mt-3 shadow-lg w-1/2 mx-auto bg-red-200">
        <h2 className="text-center font-bold text-4xl ">Your Expenses:</h2>
        <div className="mt-3 flex justify-center gap-x-32">
          <div>
            <h3 className="font-semibold">
              Daily you spend:
              <span className="font-bold">
                {parseInt(data?.your?.one_day)} sum
              </span>{" "}
              on light bulbs
            </h3>
            <h3 className="font-semibold">
              In a week you spend:
              <span className="font-bold">
                {parseInt(data?.your?.one_week)} sum
              </span>{" "}
              on light bulbs
            </h3>
            <h3 className="font-semibold">
              In a month you spend:
              <span className="font-bold">
                {parseInt(data?.your?.one_month)} sum
              </span>{" "}
              on light bulbs
            </h3>
            <h3 className="font-semibold">
              In a year you spend:
              <span className="font-bold">
                {parseInt(data?.your?.one_year)} sum
              </span>{" "}
              on light bulbs
            </h3>
          </div>
        </div>
      </div>
      <div className="p-4  mt-3 shadow-lg w-1/2 mx-auto bg-green-200">
        <h2 className="text-center font-bold text-2xl">
          If you use our technology you will save:
        </h2>
        <h3 className="my-4 text-center font-semibold text-xl">
          <span className="font-bold text-2xl">
            {parseInt(data?.your?.one_month - data?.we_calculate?.one_month)}{" "}
            sum
          </span>{" "}
          in a month
        </h3>
        <h3 className="my-4 text-center font-semibold text-xl">
          <span className="font-bold text-2xl">
            {parseInt(data?.your?.one_year - data?.we_calculate?.one_year)} sum
          </span>{" "}
          in a year
        </h3>
        <h3 className="my-4 text-center font-semibold text-xl">
          <span className="font-bold text-2xl">
            {parseInt(data?.your?.ten_year - data?.we_calculate?.ten_year)} sum
          </span>{" "}
          in 10 years
        </h3>
      </div>
      <div className="flex justify-center mt-3 absolute left-4">
        <Button
          onClick={() => navigate("/details")}
          className="bg-blue-600 text-white"
        >
          Back to details
        </Button>
      </div>
    </div>
  );
};

export default Results;
