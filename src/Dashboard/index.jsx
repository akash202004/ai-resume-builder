import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "../../service/GlobalApi";
import ResumeCardItem from "./components/ResumeCardItem";

const index = () => {
  const [resumeList, setResumeList] = useState([]);
  const user = useUser();
  const getResumeList = () => {
    GlobalApi.getUserResumes(user?.primaryEmailAddress?.emailAddress).then(
      (res) => {
        setResumeList(res.data.data);
        console.log(res.data.data);
      }
    );
  };
  useEffect(() => {
    user && getResumeList();
  }, []);

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI Resume to your next job role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-6">
        <AddResume />
        {resumeList.length > 0 &&
          resumeList.map((resume, index) => (
            <ResumeCardItem key={index} resume={resume} />
          ))}
      </div>
    </div>
  );
};

export default index;
