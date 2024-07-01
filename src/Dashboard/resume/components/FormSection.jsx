import { ResumeInfoContext } from "@/Context/ResumeInfoContext";
import React, { useContext, useState } from "react";
import PersonalDetail from "./Form/PersonalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summery from "./Form/Summery";
import Experience from "./Form/Experience";

const FormSection = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <Button className="flex gap-2" variant="outline" size="sm">
          <LayoutGrid />
          Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!enableNext}
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Details */}
      {/* Summary */}
      {/* Personal Experience */}
      {/* Educational */}
      {/* Skills */}
      {activeFormIndex == 1 ? (
        <PersonalDetail
          enableNext={(v) => setEnableNext(v)}
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
        />
      ) : activeFormIndex == 2 ? (
        <Summery
          enableNext={(v) => setEnableNext(v)}
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
        />
      ) : activeFormIndex == 3 ? (
        <Experience
          enableNext={(v) => setEnableNext(v)}
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
        />
      ) : null}
    </div>
  );
};

export default FormSection;
