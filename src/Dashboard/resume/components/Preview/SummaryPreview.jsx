import React from "react";

const SummaryPreview = ({ resumeInfo }) => {
  return <p className="text-xs my-4">{resumeInfo?.summery}</p>;
};

export default SummaryPreview;
