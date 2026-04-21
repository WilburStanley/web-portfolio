import type { ExperienceProps } from "../data/experience.ts";

interface ExperienceItemProps extends ExperienceProps {
  isLatest?: boolean;
}

const ExperienceItem = ({ role, description, year, isLatest = false }: ExperienceItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className={`flex flex-col text-start border-l-5 px-5 ${isLatest ? "border-l-gray-300" : "border-l-surface-700"}`}>
        <span className="font-sans font-bold text-surface-100 text-sm">
          {role}
        </span>
        <span className="font-sans text-surface-400 text-xs">
          {description}
        </span>
      </div>
      <span className="font-mono text-surface-500 text-sm shrink-0">
        {year}
      </span>
    </div>
  );
};

export default ExperienceItem;