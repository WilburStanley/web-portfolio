import { Send, Mail } from "lucide-react";
import { credentials } from "../data/credentials";
import { SOCIAL_ICONS } from "../components/CustomIcons.tsx";
import { socials } from "../data/socials.ts";

export const Connect = () => {
  return(
    <div className="w-full text-white text-left bg-surface-900 p-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center mb-2 gap-2">
          <Send />
          <h2 className="font-bold text-lg md:text-xl font-mono">
            Connect
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <a
          href={`mailto:${credentials.email}?subject=Portfolio%20Inquiry&body=Hi%20Wilbur%2C%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.`}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-sans font-medium mt-1.5 opacity-80 hover:opacity-100 transition-opacity duration-200"
        >
          <Mail className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
          {credentials.email}
        </a>
        {socials.map((social) => {
          const Icon = SOCIAL_ICONS[social.platform];

          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs md:text-sm text-white/70 hover:text-white transition-colors"
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              {social.handle}
            </a>
          );
        })}
      </div>
    </div>
  )
}