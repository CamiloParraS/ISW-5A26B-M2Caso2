import type { ReactNode } from "react";

export default function Pill({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-3xl bg-brand font-black text-white ${className}`}
    >
      {children}
    </span>
  );
}
