import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../components/FormSection";
import ResumePreview from "../../components/ResumePreview";
import { ResumeInfoContext } from "@/Context/ResumeInfoContext";
import Dummy from "@/Data/Dummy";
import GlobalApi from "@/../service/GlobalApi";

const EditResume = () => {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    console.log(resumeId);
    setResumeInfo(Dummy);
  }, []);

  const getResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then(
      (res) => {
        console.log(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10 b">
        {/* Form Section */}
        <FormSection />
        {/* Resume Preview */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
