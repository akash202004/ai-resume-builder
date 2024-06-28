import React from "react";

const SkillsPreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        style={{
          color: resumeInfo?.themeColor,
        }}
        className="text-center font-bold text-sm mb-2"
      >
        Skills
      </h2>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo?.skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-xs font-bold">{skill?.name}</h2>
            <div className="bg-gray-200 w-[120px]">
              <div
                className="h-2"
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: skill?.rating + "%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPreview;
