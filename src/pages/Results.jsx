import React, { useEffect } from "react";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../react-query/query";

const Results = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const params = useParams();
  console.log(params);
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
        console.log(res.result[0]);
    
      });
  }, [params.id]);

  return (
    <div className="py-4">
      <h2 className="text-center font-bold text-4xl">Your spendings:</h2>
      <div className="my-12 flex justify-center gap-x-32">
        <div>
          <h3 className="font-semibold">
            Daily you spend <span className="font-bold">...sum</span> on light
            bulps
          </h3>
          <h3 className="font-semibold">
            In a week you spend <span className="font-bold">...sum</span> on
            light bulps
          </h3>
          <h3 className="font-semibold">
            In a month you spend <span className="font-bold">...sum</span> on
            light bulps
          </h3>
          <h3 className="font-semibold">
            In a year you spend <span className="font-bold">...sum</span> on
            light bulps
          </h3>
        </div>
        <div>
          <h3 className="font-semibold">
            Daily you spend <span className="font-bold">...sum</span> on air
            conditioner
          </h3>
          <h3 className="font-semibold">
            In a week year you spend <span className="font-bold">...sum</span>{" "}
            on air conditioner
          </h3>
          <h3 className="font-semibold">
            In a month you spend <span className="font-bold">...sum</span> on
            air conditioner
          </h3>
          <h3 className="font-semibold">
            In a year you spend <span className="font-bold">...sum</span> on air
            conditioner
          </h3>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <h2 className="text-center font-bold text-3xl">
          If you use our technology you will save:
        </h2>
        <h3 className="my-4 text-center font-semibold text-2xl">
          <span className="font-bold text-4xl">...sum</span> in 10 years
        </h3>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => navigate("/details")}>Back to details</Button>
      </div>
    </div>
  );
};

export default Results;
