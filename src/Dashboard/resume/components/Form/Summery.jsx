import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "@/../service/GlobalApi";
import { toast } from "sonner";
import { AIchatSession } from "@/../service/AIModel";

// const prompt =
// //   "Job Title: {jobTitle}, Depends on job title give me summery for my resume within 4-5 lines";

const Summery = ({ resumeInfo, setResumeInfo, enableNext }) => {
  const [summery, setSummery] = useState();
  const [loading, setloading] = useState(false);
  const params = useParams();

  useEffect(() => {
    summery &&
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
  }, [summery]);

  const onSave = (e) => {
    e.preventDefault();
    setloading(true);

    const data = {
      data: {
        summery: summery,
      },
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

  const generateSummeryFromAI = async () => {
    setloading(true);
    const prompt = `Job Title: ${resumeInfo?.jobTitle}, Depends on job title give me summery for my resume within 4-5 lines in JSON format with field experience Level and Summery with Experience level for Freshers, Junior, Mid, Senior, Expert`;
    const result = await AIchatSession.sendMessage(prompt);
    console.log(result.response.text());
    setloading(false);
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-violet-500 border-t-4 mt-5">
        <h2 className="font-bold text-lg">Summery</h2>
        <p>Add Summery for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-center">
            <label>Add Summery</label>
            <Button
              className="border-violet-500 text-primary flex gap-2"
              variant="outline"
              size="sm"
              type="button"
              onClick={generateSummeryFromAI}
            >
              <Brain className="h-5 w-5" />
              Generate From AI
            </Button>
          </div>
          <Textarea
            required
            className="mt-2"
            onChange={(e) => setSummery(e.target.value)}
          />
          <div className="mt-4 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Summery;
