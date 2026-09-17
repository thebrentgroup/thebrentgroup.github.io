import { useId } from "react";
import type { Person } from "../content.generated";

interface PersonCardProps extends Person {
  expanded: boolean;
  onToggle: () => void;
}

export default function PersonCard({
  name,
  role,
  bioHtml,
  cvUrl,
  expanded,
  onToggle,
}: PersonCardProps) {
  const bioId = useId();

  return (
    <div className="group relative border border-black flex flex-col items-center justify-center gap-8 px-[46px] py-[43px] flex-1 min-w-0">
      <div className="person-card-ring pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      <div className="relative w-full max-w-[380px]">
        {cvUrl && (
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name}'s CV (PDF)`}
            className="absolute right-0 top-0 z-10 flex h-12 w-11 justify-end font-charon leading-none text-black transition-opacity hover:opacity-60"
          >
            <span className="mt-[3px] flex h-[42px] flex-col items-end justify-between">
              <svg
                viewBox="0 0 24 28"
                aria-hidden="true"
                className="h-7 w-6 translate-x-[4.5px]"
              >
                <path
                  d="M4.5 1.5h10l5 5v20h-15z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M14.5 1.5v5h5M8 12h8M8 16h8M8 20h5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="text-[12px]">CV</span>
            </span>
          </a>
        )}
        <p className="font-charon text-[20px] leading-[24px] uppercase text-black">
          <span className="block">{name} —</span>
          <span className="block">{role}</span>
        </p>
      </div>
      <div className="w-full max-w-[380px]">
        <div
          id={bioId}
          className={`md-content font-space text-[16px] leading-[normal] text-[#393939] ${expanded ? "" : "line-clamp-3"}`}
          dangerouslySetInnerHTML={{ __html: bioHtml }}
        />
        <button
          type="button"
          aria-controls={bioId}
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${name}'s biography`}
          onClick={onToggle}
          className="relative z-10 mx-auto mt-2 flex h-11 w-11 cursor-pointer items-center justify-center text-black"
        >
          <svg
            viewBox="0 0 24 20"
            aria-hidden="true"
            className={`h-5 w-6 transition-transform duration-150 ${expanded ? "rotate-180" : ""}`}
          >
            <path
              d="m3 5 9 9 9-9"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
