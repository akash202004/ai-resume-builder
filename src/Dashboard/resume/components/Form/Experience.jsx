import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  workSummery: "",
};

const Experience = () => {
  const [experienceList, setExperienceList] = useState([formField]);

  const handleChange = (index, event) => {};

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-violet-500  border-t-4 mt-5">
      <h2 className="font-bold text-lg">Professional Experience</h2>
      <p>Add Your Previous Job Experience</p>
      <div>
        {experienceList.map((item, index) => (
          <div>
            <div className="grid grid-col-2 gap-3 p-3 my-5 rounded-lg">
              <div>
                <label className="text-xs">Position Title</label>
                <Input
                  name="title"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">Company Name</label>
                <Input
                  name="title"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">City</label>
                <Input
                  name="title"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">State</label>
                <Input
                  name="title"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">Start Date</label>
                <Input
                  type="date"
                  name="title"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">End Date</label>
                <Input
                  type="date"
                  name="title"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>{/* {Work Summary} */}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
