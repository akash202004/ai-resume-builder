import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        style={{
          color: resumeInfo?.themeColor,
        }}
        className="text-center font-bold text-sm mb-2"
      >
        Professional Experience
      </h2>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.experience.map((exp, index) => (
        <div key={index} className="my-4">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {exp?.title}
          </h2>
          <h2 className="text-xs flex justify-between">
            {exp?.companyName}, {exp?.city}, {exp?.state}
            <span>
              {exp?.startDate} -{" "}
              {exp?.currentlyWorking ? "Present" : exp?.endDate}
            </span>
          </h2>
          {/* <p className="text-xs my-2">{exp?.workSummery}</p> */}
          <div dangerouslySetInnerHTML={{ __html: exp?.workSummery }} />
        </div>
      ))}
    </div>
  );
};

export default ExperiencePreview;
