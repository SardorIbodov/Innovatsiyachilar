import React from "react";

const Results = () => {
  return (
    <div className="py-4">
      <h2 className="text-center font-bold text-4xl">You spendings:</h2>
      <div className="my-12 flex justify-center gap-x-32">
        <div>
          <h3 className="font-semibold">
            Daily you spend <span className="font-bold">...$</span> on light
            bulps
          </h3>
          <h3 className="font-semibold">
            In a week you spend <span className="font-bold">...$</span> on light
            bulps
          </h3>
          <h3 className="font-semibold">
            In a month you spend <span className="font-bold">...$</span> on
            light bulps
          </h3>
          <h3 className="font-semibold">
            In a year you spend <span className="font-bold">...$</span> on light
            bulps
          </h3>
        </div>
        <div>
          <h3 className="font-semibold">
            Daily you spend <span className="font-bold">...$</span> on air
            conditioner
          </h3>
          <h3 className="font-semibold">
            In a week year you spend <span className="font-bold">...$</span> on
            air conditioner
          </h3>
          <h3 className="font-semibold">
            In a month you spend <span className="font-bold">...$</span> on air
            conditioner
          </h3>
          <h3 className="font-semibold">
            In a year you spend <span className="font-bold">...$</span> on air
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
          <span className="font-bold text-4xl">...$</span> in 10 years
        </h3>
      </div>
    </div>
  );
};

export default Results;
