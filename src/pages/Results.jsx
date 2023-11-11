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
    <div className="py-4">
      <h2 className="text-center font-bold text-4xl">Your devices</h2>
      <div className="my-12 flex flex-col gap-y-5">
        <h3 className="text-center">Count of lamps: {data?.count} </h3>
        <h3 className="text-center">Power of lamps: {data?.power} Watt</h3>
        <h3 className="text-center">Time: {data?.time} hours</h3>
      </div>
      <hr />
      <h2 className="text-center font-bold text-4xl my-4">Your spendings:</h2>
      <div className="my-12 flex justify-center gap-x-32">
        <div>
          <h3 className="font-semibold">
            Daily you spend{" "}
            <span className="font-bold">
              {parseInt(data?.your?.one_day)} sum
            </span>{" "}
            on light bulps
          </h3>
          <h3 className="font-semibold">
            In a week you spend{" "}
            <span className="font-bold">
              {parseInt(data?.your?.one_week)} sum
            </span>{" "}
            on light bulps
          </h3>
          <h3 className="font-semibold">
            In a month you spend{" "}
            <span className="font-bold">
              {parseInt(data?.your?.one_month)} sum
            </span>{" "}
            on light bulps
          </h3>
          <h3 className="font-semibold">
            In a year you spend{" "}
            <span className="font-bold">
              {parseInt(data?.your?.one_year)} sum
            </span>{" "}
            on light bulps
          </h3>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <h2 className="text-center font-bold text-3xl">
          If you use our technology you will save:
        </h2>
        <h3 className="my-4 text-center font-semibold text-2xl">
          <span className="font-bold text-4xl">
            {data?.your?.ten_year - data?.we_calculate?.ten_year} sum
          </span>{" "}
          in 10 years
        </h3>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => navigate("/details")}>Back to details</Button>
      </div>
    </div>
  );
};

export default Results;
