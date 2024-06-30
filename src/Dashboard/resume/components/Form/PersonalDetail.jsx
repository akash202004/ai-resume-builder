import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "@/../service/GlobalApi";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

const PersonalDetail = ({ resumeInfo, setResumeInfo, enableNext }) => {
  const params = useParams();
  const [formData, setFormData] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    console.log(params);
  }, []);

  const handleInputChange = (e) => {
    enableNext(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    setloading(true);

    const data = {
      data: formData,
    };

    GlobalApi.updateResumeDetails(params?.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setloading(false);
        toast.success("Personal Details Saved Successfully");
      },
      (error) => {
        console.log(error);
        setloading(false);
      }
    );
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-violet-500  border-t-4 mt-5">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get Started with the basic information</p>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              defaultValue={resumeInfo?.lastName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              defaultValue={resumeInfo?.jobTitle}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Asdress</label>
            <Input
              name="address"
              defaultValue={resumeInfo?.address}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              defaultValue={resumeInfo?.phone}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              defaultValue={resumeInfo?.email}
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;
