import { Award } from "lucide-react";
import { CertificateCard } from "../components/CertificateCard";
import { certificates } from "../data/certificates";

export const Certificates = () => {
  return(
    <div className="w-full text-white text-left bg-surface-900 p-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center mb-2 gap-2">
          <Award />
          <h2 className="font-bold text-lg md:text-xl font-mono">
            Certificates
          </h2>
        </div>
      </div>
      {certificates.map((data, index) => (
        <CertificateCard
          key={index}
          {...data} />
      ))}
    </div>
  )
}