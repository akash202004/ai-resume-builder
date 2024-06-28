import { ResumeInfoContext } from "@/Context/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetailPreview from "./Preview/PersonalDetailPreview";
import SummaryPreview from "./Preview/SummaryPreview";
import ExperiencePreview from "./Preview/ExperiencePreview";
import EducationalPreview from "./Preview/EducationalPreview";
import SkillsPreview from "./Preview/SkillsPreview";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Personal Details */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summary */}
      <SummaryPreview resumeInfo={resumeInfo} />
      {/* Personal Experience */}
      <ExperiencePreview resumeInfo={resumeInfo} />
      {/* Educational */}
      <EducationalPreview resumeInfo={resumeInfo} />
      {/* Skills */}
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
