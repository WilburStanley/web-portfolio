import { type TechStackProps } from "../data/techstacklist";

export const TechStackCard = ({
  category = "N/A",
  stacklist = [],
}: TechStackProps) => {
  return (
    <div className="text-white mt-5">
      <div className="font-semibold text-lg text-start mb-1">{category}</div>
      <div className="flex flex-wrap gap-2">
        {stacklist.map((item, index) => (
          <span
            key={index}
            className="text-base text-gray-300 px-2 bg-surface-900 border border-white/10 hover:bg-gray-300 hover:text-black transition-all duration-300 ease-out cursor-default">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};