import { Intro } from "../layout/Intro.tsx";
import { ProfileBioCard } from "../components/ProfileBioCard.tsx";
import { TechStack } from "../layout/TechStack.tsx";
import DevCard from "../components/DevCard.tsx";
import Experience from "../layout/Experience.tsx";
import { Project } from "../layout/Project.tsx";
import { Certificates } from "../layout/Certificates.tsx";
import { Connect } from "../layout/Connect.tsx";
import { socials } from "../data/socials.ts";

export const HomePage = () => {
  return (
    <>
      <Intro />
      <div className="flex flex-col md:flex-row gap-5 w-full items-stretch mt-5">
        <div className="w-full md:flex-2 flex flex-col">
          <ProfileBioCard />
          <TechStack />
        </div>
        <div className="w-full md:flex-1 flex flex-col items-stretch gap-4">
          <div className="w-full">
            <DevCard
              name="WilburStanley"
              role="SOFTWARE ENGINEER"
              stack={["AI Integration · Automation", "Web & Mobile Development"]}
              socials={socials}
              qrUrl="https://yourwebsite.com"
              cardId="#001"
            />
          </div>
          <div className="w-full flex-1">
            <Experience />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 w-full md:items-stretch mt-5">
        <div className="w-full md:flex-2 flex flex-col">
          <Project />
        </div>
        <div className="w-full md:flex-1 flex flex-col gap-4 md:items-stretch">
          <div className="flex-1 flex">
            <Certificates />
          </div>
          <div className="flex-1 flex">
            <Connect />
          </div>
        </div>
      </div>
    </>
  );
};