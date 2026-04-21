export type CertificateCardProps = {
  certificate: string;
  description: string;
  file: string;
}
export const CertificateCard = ({
  certificate = "Certificate Name",
  description = "description",
  file,
}: CertificateCardProps) => {
  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-surface-900 border border-white/10 px-4 py-2 mb-3 hover:opacity-80 transition"
    >
      <h2 className="text-base sm:text-lg font-bold">
        {certificate}
      </h2>

      <p className="text-sm sm:text-base text-gray-300">
        {description}
      </p>
    </a>
  );
};