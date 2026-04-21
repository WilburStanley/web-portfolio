import { Info } from "lucide-react";
import profilebio from "../data/profilebio";

export const ProfileBioCard = () => {
  return (
    <div className="w-full text-white text-left bg-surface-900 p-5">
      <div className="flex items-center mb-2 gap-2">
        <Info />
        <h2 className="font-bold text-lg md:text-xl font-mono">
          About
        </h2>
      </div>
      {profilebio.map((text, index) => (
        <p
          key={index}
          className={`text-md md:text-base text-gray-300 leading-relaxed ${
            index === profilebio.length - 1 ? "" : "mb-5"
          }`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};