import { ResumeInfoContext } from "@/Context/ResumeInfoContext";
import React, { useContext, useState } from "react";
import PersonalDetail from "./Form/PersonalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

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
      <PersonalDetail
        enableNext={(v) => setEnableNext(v)}
        resumeInfo={resumeInfo}
        setResumeInfo={setResumeInfo}
      />
      {/* Summary */}
      {/* Personal Experience */}
      {/* Educational */}
      {/* Skills */}
    </div>
  );
};

export default FormSection;
