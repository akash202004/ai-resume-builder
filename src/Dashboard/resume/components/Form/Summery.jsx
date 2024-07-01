import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "@/../service/GlobalApi";
import { toast } from "sonner";
import { AIchatSession } from "@/../service/AIModel";

const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

const Summery = ({ resumeInfo, setResumeInfo, enableNext }) => {
  const [summery, setSummery] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [aiGeneratedSummery, setAiGeneratedSummery] = useState();

  useEffect(() => {
    summery &&
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
  }, [summery]);

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: {
        summery: summery,
      },
    };

    GlobalApi.updateResumeDetails(params?.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoading(false);
        toast.success("Personal Details Saved Successfully");
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
  };

  const generateSummeryFromAI = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
    try {
      // const result = await AIchatSession.sendMessage(PROMPT);
      console.log(JSON.parse(result.data));
      // setAiGeneratedSummery(finalResult);
    } catch (error) {
      console.error("Failed to generate summary from AI:", error);
    } finally {
      setLoading(false);
    }
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

{
  /* {Object.keys(aiGeneratedSummery).map((key) => (
        <div key={key} className="p-5 shadow-lg my-4 rounded-lg cursor-pointer">
          <h2 className="font-bold my-1">Job Title: {key}</h2>
          {Object.keys(aiGeneratedSummery[key]).map((level) => (
            <div key={level} className="my-2">
              <h3 className="font-semibold">Experience Level: {level}</h3>
              <p>{aiGeneratedSummery[key][level]}</p>
            </div>
          ))}
        </div>
      ))} */
}
