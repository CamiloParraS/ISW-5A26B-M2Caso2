export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-black leading-none tracking-tighter text-brand ${className}`}
    >
      Dakingo
    </span>
  );
}
