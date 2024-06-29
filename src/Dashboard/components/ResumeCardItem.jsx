import React from "react";
import { Link } from "react-router-dom";

const ResumeCardItem = ({ resume }) => {
  return (
    <Link to={"/dashboard/resume/" + resume.documentId + "/edit"}>
      <div className="p-14 bg-secondary flex items-center justify-center h-[280px]">
        <h1>Resume Card Item</h1>
      </div>
    </Link>
  );
};

export default ResumeCardItem;
