import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../components/FormSection";
import ResumePreview from "../../components/ResumePreview";
import { ResumeInfoContext } from "@/Context/ResumeInfoContext";
import Dummy from "@/Data/Dummy";

const EditResume = () => {
  const parmas = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    console.log(parmas.resumeId);
    setResumeInfo(Dummy);
  }, []);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form Section */}
        <FormSection />
        {/* Resume Preview */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
