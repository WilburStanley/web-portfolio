export type ProjectCardProps = {
  app: string;
  description: string;
  tags: string[];
  url: string;
  urlLabel: string;
  featured?: boolean;
  sourceCodeUrl?: string;
  imageUrl?: string;
  gallery?: string[];
}

export const ProjectCard = ({
  app = "App",
  description = "Description",
  tags = [],
  url,
  urlLabel = "Visit Github",
}: ProjectCardProps) => {
  return(
    <div className="bg-surface-900 border border-white/10 p-4 sm:p-5 text-start">
      <h2 className="text-lg sm:text-xl font-bold text-white">
        {app}
      </h2>
      <p className="text-xs sm:text-sm text-gray-300 mb-2">
        {description}
      </p>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs sm:text-sm text-gray-400">
          Tags:
        </span>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="text-xs sm:text-sm text-gray-200 px-3 py-1 bg-surface-950">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-surface-200 text-black py-1 px-2 sm:px-3 text-xs sm:text-sm hover:opacity-80 transition font-medium"
      >
        {urlLabel}
      </a>
    </div>
  )
}