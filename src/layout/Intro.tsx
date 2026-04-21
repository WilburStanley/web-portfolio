import { BadgeCheck, Check, MapPin, Mail } from "lucide-react";
import { credentials } from "../data/credentials";
import profilePic from '../assets/profilePic.jpg';

export const Intro = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-35 h-35 md:w-40 md:h-40">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-start gap-1">
        {/* Name */}
        <div className="flex items-center justify-center gap-1">
          <h1 className="text-white text-xl md:text-2xl font-sans font-medium">{credentials.name}</h1>
          <div className="relative w-4 h-4">
            <BadgeCheck className="w-4 h-4 fill-blue-500 stroke-0" />
            <Check className="absolute inset-0 m-auto w-2 h-2 text-black stroke-3" />
          </div>
        </div>
        {/* Location */}
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <MapPin size={15} />
          {credentials.location}
        </div>
        {/* Profession */}
        <div className="text-xs md:text-lg text-gray-400 text-left">
          {credentials.profession.join(" · ")}
        </div>
        {/* Contact */}
        <a
          href={`mailto:${credentials.email}`}
          className="inline-flex items-center justify-center gap-2 px-2 py-1 md:px-3 md:py-1 bg-gray-200 text-black text-xs md:text-sm font-sans hover:bg-gray-200 active:scale-[0.98] transition-all duration-200 shadow-sm font-medium mt-1.5"
        >
          <Mail size={16} className="shrink-0" strokeWidth={2}/>
          Send Email
        </a>
      </div>
    </div>
  );
};