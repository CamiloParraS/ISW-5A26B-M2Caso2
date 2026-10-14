import type { ReactNode } from "react";

export default function Category({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-2xl bg-white text-brand shadow-card desk:min-h-29 mobile:min-h-19">
      <svg
        className="size-8 fill-none stroke-brand stroke-[1.65] desk:size-10"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        {children}
      </svg>
      <span className="text-xs font-black desk:text-sm">
        {label}
      </span>
    </div>
  );
}
