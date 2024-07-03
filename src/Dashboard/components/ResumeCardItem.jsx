import React from "react";
import { Link } from "react-router-dom";

const ResumeCardItem = ({ resume, refreshData }) => {
  console.log(resume);
  return (
    <div>
      <Link to={"/dashboard/resume/" + resume.id + "/edit"}>
        <div
          className="p-14 bg-secondary flex items-center justify-center h-[280px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg border-t-4"
          style={{ borderColor: resume?.themeColor }}
        >
          <div className="flex justify-center items-center h-[180px]">
            <img src="/cv-back.png" alt="cv" height={200} width={200} />
          </div>
        </div>
        <div
          className="border p-3 flex justify-between  text-white rounded-b-lg shadow-lg"
          style={{
            background: resume?.themeColor,
          }}
        >
          <h2 className="text-sm">{resume?.attributes.jobTitle}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ResumeCardItem;
