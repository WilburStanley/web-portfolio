import { TechStackCard } from "../components/TechStackCard";
import { techstacklist } from "../data/techstacklist";
import { CodeXml } from "lucide-react";

export const TechStack = () => {
  return(
    <div className="bg-surface-900 p-5 mt-5 text-white">
      <div className="flex items-center gap-2">
        <CodeXml />
        <h2 className="font-bold text-lg md:text-xl font-mono">
          Tech Stack
        </h2>
      </div>
      {techstacklist.map((stack, index) => (
        <TechStackCard
          key={index}
          category={stack.category}
          stacklist={stack.stacklist}
        />
      ))}
    </div>
  )
}