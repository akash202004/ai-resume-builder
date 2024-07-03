import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/styles.css";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import GlobalApi from "@/../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const Skills = ({ resumeInfo, setResumeInfo, enableNext }) => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [skills, setSkills] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);

  const AddNewSkills = () => {
    setSkills([...skills, { name: "", rating: 0 }]);
  };

  const RemoveSkills = () => {
    setSkills(skills.slice(0, -1));
  };

  const handleChange = (index, name, value) => {
    const newEntries = skills.slice();
    newEntries[index][name] = value;
    setSkills(newEntries);
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skills,
    });
  }, [skills]);

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        skills: skills,
      },
    };
    GlobalApi.updateResumeDetails(params.resumeId, data).then(
      (res) => {
        setLoading(false);
        toast.success("Skills Updated Successfully");
        console.log(res);
      },
      (error) => {
        setLoading(false);
        toast.error("Skills Update Failed");
        console.log(error);
      }
    );
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-violet-500  border-t-4 mt-5">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add Your Professional Skills</p>
      <div>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-between items-center mt-4 p-4 border rounded-lg "
          >
            <div>
              <label className="text-xs">Name</label>
              <Input
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
            </div>
            <Rating
              style={{ maxWidth: 120 }}
              value={skill.rating}
              onChange={(v) => handleChange(index, "rating", v)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <Button
            onClick={AddNewSkills}
            variant="outline"
            className="text-primary"
          >
            + Add More Skills
          </Button>
          <Button
            onClick={RemoveSkills}
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

export default Skills;
