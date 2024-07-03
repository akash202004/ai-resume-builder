import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "@/../service/GlobalApi";
import { toast } from "sonner";

const Education = ({ resumeInfo, setResumeInfo, enableNext }) => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [educationalList, setEducationalList] = useState([
    {
      univerSityName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleChange = (event, index) => {
    const newEntries = educationalList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setEducationalList(newEntries);
  };

  const AddNewEducation = () => {
    setEducationalList([
      ...educationalList,
      {
        universityName: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const RemoveEducation = () => {
    setEducationalList(educationalList.slice(0, -1));
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationalList,
    });
  }, [educationalList]);

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        education: educationalList,
      },
    };
    GlobalApi.updateResumeDetails(params.resumeId, data).then(
      (res) => {
        setLoading(false);
        toast.success("Education Details Updated Successfully");
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
      <h2 className="font-bold text-lg">Education</h2>
      <p>Add Your Educational Details</p>
      <div>
        {educationalList.map((item, index) => (
          <div key={index} className="border p-3 my-5 rounded-lg">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label>University Name</label>
                <Input
                  name="universityName"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label>Degree</label>
                <Input name="degree" onChange={(e) => handleChange(e, index)} />
              </div>
              <div>
                <label>Major</label>
                <Input name="major" onChange={(e) => handleChange(e, index)} />
              </div>

              <div>
                <label>Start Date</label>
                <Input
                  name="startDate"
                  type="date"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label>End Date</label>
                <Input
                  name="endDate"
                  type="date"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="col-span-2">
                <label>Description</label>
                <Textarea
                  name="description"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <Button
            onClick={AddNewEducation}
            variant="outline"
            className="text-primary"
          >
            + Add More Education
          </Button>
          <Button
            onClick={RemoveEducation}
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

export default Education;
