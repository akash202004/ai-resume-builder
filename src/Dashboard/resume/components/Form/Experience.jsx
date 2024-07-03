import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { LoaderCircle } from "lucide-react";
import GlobalApi from "@/../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const Experience = ({ resumeInfo, setResumeInfo, enableNext }) => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [experienceList, setExperienceList] = useState([
    {
      title: "",
      companyName: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      workSummery: "",
    },
  ]);

  const handleChange = (index, event) => {
    const newEntries = experienceList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  const AddNewExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        title: "",
        companyName: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        workSummery: "",
      },
    ]);
  };

  const RemoveExperinece = () => {
    setExperienceList(experienceList.slice(0, -1));
  };

  const handleRichTextEditor = (event, name, index) => {
    const newEntries = experienceList.slice();
    newEntries[index][name] = event.target.value;
    setExperienceList(newEntries);
  };

  useEffect(() => {
    console.log(experienceList);
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        experience: experienceList,
      },
    };
    GlobalApi.updateResumeDetails(params.resumeId, data).then(
      (res) => {
        setLoading(false);
        toast.success("Experience Details Updated Successfully");
      },
      (error) => {
        console.log(error);
        setLoading(true);
        toast.error("Error Occured");
      }
    );
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-violet-500  border-t-4 mt-5">
      <h2 className="font-bold text-lg">Professional Experience</h2>
      <p>Add Your Previous Job Experience</p>
      <div>
        {experienceList.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 p-3 my-5 rounded-lg">
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
                  name="companyName"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">City</label>
                <Input
                  name="city"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">State</label>
                <Input
                  name="state"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">Start Date</label>
                <Input
                  type="date"
                  name="startDate"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">End Date</label>
                <Input
                  type="date"
                  name="endDate"
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div className="col-span-2">
                <RichTextEditor
                  index={index}
                  defaultValue={item?.workSummery}
                  onRichTextEditorChange={(event) =>
                    handleRichTextEditor(event, "workSummery", index)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            onClick={AddNewExperience}
            variant="outline"
            className="text-primary"
          >
            + Add More Experience
          </Button>
          <Button
            onClick={RemoveExperinece}
            variant="outline"
            className="text-primary"
          >
            Remove
          </Button>
        </div>

        <Button disabled={loading} onClick={() => onSave()}>
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default Experience;
