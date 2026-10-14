const images = [
  ["gallery-wedding", "Elegant celebration cake"],
  ["gallery-woman", "Customer holding a chocolate cake"],
  ["gallery-celebration", "Smiling customer with a birthday cake"],
  ["gallery-friends", "Friends celebrating with cake"],
  ["gallery-party", "Friends presenting a tiered cake"],
  ["gallery-tier", "Beautiful decorated celebration cake"],
];

export default function Gallery() {
  return (
    <div
      className="grid grid-cols-2 auto-rows-28 gap-2.5 desk:auto-rows-41 desk:gap-3 mobile:auto-rows-30"
      aria-label="Dakingo celebration gallery"
    >
      {images.map(([src, alt]) => (
        <img
          key={src}
          className="size-full rounded-2xl object-cover"
          src={`/assets/${src}.webp`}
          alt={alt}
        />
      ))}
    </div>
  );
}
