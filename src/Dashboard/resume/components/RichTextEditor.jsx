import { ResumeInfoContext } from "@/Context/ResumeInfoContext";
import { Button } from "@/components/ui/button";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { AIchatSession } from "@/../service/AIModel";
import { toast } from "sonner";

const PROMPT =
  "position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags";

const RichTextEditor = ({ onRichTextEditorChange, index }) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);
  //   const generateSummaryFromAI = async () => {
  //     setLoading(true);
  //     if (resumeInfo.experience[index].title) {
  //       const prompt = PROMPT.replace(
  //         "{positionTitle}",
  //         resumeInfo.experience[index]?.title
  //       );
  //       const result = await AIchatSession.sendMessage(prompt);
  //       const response = JSON.parse(result.response.text());
  //       setValue(response[0]);
  //       setLoading(false);
  //     } else {
  //       toast.error("Please enter position title first");
  //     }
  //   };

  const generateSummaryFromAI = async () => {
    if (!resumeInfo?.experience[index]?.title) {
      toast("Please Add Position Title");
      return;
    }
    setLoading(true);
    const prompt = PROMPT.replace(
      "{positionTitle}",
      resumeInfo.experience[index].title
    );

    const result = await AIchatSession.sendMessage(prompt);
    // console.log(result.response.text());
    const resp = JSON.parse(result.response.text());
    console.log(resp);
    setValue(resp.bullet_points[0]);
    setLoading(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        <label className="text-xs">Summary</label>
        <Button
          variant="outline"
          size="sm"
          className="flex mt-2 mb-4 justify-start gap-2 text-primary border-violet-600"
          onClick={generateSummaryFromAI}
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4 " />
              Generate From AI{" "}
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor;
