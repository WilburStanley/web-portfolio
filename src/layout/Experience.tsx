import { experiencelist } from "../data/experience.ts";
import { Briefcase } from "lucide-react";
import ExperienceItem from "../components/ExperienceItem.tsx";

const Experience = () => {
  return (
    <div className="flex flex-col gap-6 bg-surface-900 p-5 h-full">
      <div className="flex items-center gap-2">
        <Briefcase color="#FFFFFF" />
        <h2 className="font-mono font-bold text-surface-100 text-xl text-start">
          Experience
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {experiencelist.map((item, index) => (
          <ExperienceItem key={index} {...item} isLatest={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default Experience;