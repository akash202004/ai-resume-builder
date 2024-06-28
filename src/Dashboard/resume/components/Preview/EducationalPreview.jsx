import React from "react";

const EducationalPreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        style={{
          color: resumeInfo?.themeColor,
        }}
        className="text-center font-bold text-sm mb-2"
      >
        Education
      </h2>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.education.map((edu, index) => (
        <div key={index} className="my-4">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {edu?.universityName}
          </h2>
          <h2 className="text-xs flex justify-between">
            {edu?.degree} in {edu?.major}
            <span>
              {edu?.startDate} - {edu?.endDate}
            </span>
          </h2>
          <p className="text-xs my-2">{edu?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationalPreview;
