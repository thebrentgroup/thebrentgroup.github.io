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
  expanded,
  onToggle,
}: PersonCardProps) {
  const bioId = useId();

  return (
    <div className="group relative border border-black flex flex-col items-center justify-center gap-8 px-[46px] py-[43px] flex-1 min-w-0">
      <div className="person-card-ring pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      <p className="font-charon text-[20px] leading-[24px] uppercase text-black w-full max-w-[380px]">
        <span className="block">{name} —</span>
        <span className="block">{role}</span>
      </p>
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
