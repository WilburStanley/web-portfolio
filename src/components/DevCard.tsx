import { useRef, useState, useEffect, type MouseEvent } from "react";
import { SOCIAL_ICONS } from "../components/CustomIcons.tsx";
import { type Social } from "../data/socials.ts";
import QRCode from "qrcode";

interface DevCardProps {
  name: string;
  role?: string;
  stack?: string[];
  socials?: Social[];
  qrUrl: string;
  cardId?: string;
  accent?: string;
}

export const DevCard = ({
  name,
  role = "ROLE",
  stack = [],
  socials = [],
  qrUrl,
  cardId = "#001",
  accent = "#FFFFFF",
}: DevCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const qrRef = useRef<HTMLCanvasElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!qrRef.current) return;
    QRCode.toCanvas(qrRef.current, qrUrl, {
      width: 88,
      margin: 0,
      color: { dark: "#a3a3a3", light: "#131313" },
    });
  }, [qrUrl]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ x: (0.5 - py) * 8, y: (px - 0.5) * 8 });
    setHovered(true);
  };

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const shadowX = (6 + tilt.y * 0.5).toFixed(1);
  const shadowY = (8 - tilt.x * 0.5).toFixed(1);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex flex-col font-mono select-none cursor-default overflow-hidden w-full max-w-sm aspect-380/520"
      style={{
        borderRadius: 16,
        padding: "32px 32px 28px",
        background: "#131313",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: `${shadowX}px ${shadowY}px 0px #000`,
        transform: hovered
          ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.01)`
          : "perspective(900px) rotateX(0) rotateY(0) scale(1)",
        transition: hovered
          ? "transform 0.08s ease-out, box-shadow 0.08s ease-out"
          : "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease",
      }}
    >
      {/* Top row */}
      <div className="flex justify-between items-start">
        <div className="shrink-0 opacity-90 w-9 h-9 border-2 border-surface-400 rounded-sm rotate-12" />
        <span className="text-[9px] tracking-[0.18em] text-white/20">{cardId}</span>
      </div>

      {/* Series row */}
      <div className="flex items-center gap-3 mt-5">
        <div className="flex-1 h-px bg-white/[0.07]" />
        <span className="text-[8px] tracking-[0.25em] text-white/20 whitespace-nowrap">ACCESS CARD</span>
        <div className="flex-1 h-px bg-white/[0.07]" />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Name block */}
      <p className="text-[8px] tracking-[0.22em] text-white/20 mb-2">PORTFOLIO</p>
      <p className="text-xl font-bold tracking-[0.03em] leading-none" style={{ color: accent }}>
        {name}
      </p>

      {/* Divider */}
      <div className="h-px bg-white/[0.07] my-4.5" />

      {/* Bottom area */}
      <div className="flex gap-5 items-center text-start">

        {/* Left — role, stack, socials */}
        <div className="flex-1 flex flex-col">
          <p className="text-[8px] tracking-[0.2em] text-white/25 mb-1">{role}</p>
          <div className="text-[9px] tracking-[0.03em] text-white/50 leading-relaxed">
            {stack.map((line, i) => <p key={i} className="m-0">{line}</p>)}
          </div>
          {socials.length > 0 && (
            <div className="flex flex-col gap-1.75 mt-3">
              {socials
                .filter(
                  (social) =>
                    social.platform === "linkedin" ||
                    social.platform === "facebook"
                )
                .map((social) => {
                  const Icon = SOCIAL_ICONS[social.platform];
                  return (
                    <div key={social.platform} className="flex items-center gap-2">
                      <span className="flex text-white/50">
                        <Icon />
                      </span>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[9px] tracking-[0.03em] text-white/40 no-underline hover:text-white/75 transition-colors"
                      >
                        {social.handle}
                      </a>
                    </div>
                  );
                })}
            </div>
          )}
        </div>

        {/* Right — QR */}
        <div className="shrink-0 flex flex-col items-center gap-1.5">
          <canvas ref={qrRef} width={88} height={88} />
          <span className="text-[7px] tracking-[0.15em] text-white/20">SCAN ME</span>
        </div>

      </div>
    </div>
  );
};

export default DevCard;