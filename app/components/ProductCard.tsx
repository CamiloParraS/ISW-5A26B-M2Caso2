export type Product = {
  name: [string, string];
  img: string;
  alt: string;
  price: number;
  reviews: number;
};

export default function ProductCard({
  name,
  img,
  alt,
  price,
  reviews,
}: Product) {
  return (
    <article className="relative min-w-0 overflow-hidden rounded-2xl bg-white px-2.5 pt-2 pb-3 shadow-card desk:px-4 desk:pt-3 desk:pb-4">
      <img
        className="h-18 w-full object-contain object-center desk:h-34 mobile:h-24"
        src={`/assets/${img}.webp`}
        alt={alt}
      />
      <span
        className="absolute top-16 left-2.5 text-base leading-none text-[#b5252e] desk:top-33 desk:left-4 mobile:top-23"
        aria-hidden="true"
      >
        ♥
      </span>
      <h3 className="mt-1 mb-1 min-h-7 text-xs leading-tight font-black text-[#922a2e] desk:min-h-10 desk:text-lg mobile:text-sm">
        {name[0]}
        <br />
        {name[1]}
      </h3>
      <div className="text-xs font-black text-[#a02d33] desk:text-base">
        ₹{price}{" "}
        <span className="ml-1 text-xs font-normal text-[#a6a09b]">
          ✦ Star Inched
        </span>
      </div>
      <div
        className="text-xs tracking-tighter whitespace-nowrap text-[#e9ab24] desk:text-sm"
        aria-label="Rated 4.5 out of 5 stars"
      >
        ★★★★★{" "}
        <small className="ml-1 text-xs tracking-normal text-[#aaa]">
          {reviews}
        </small>
      </div>
      <span
        className="absolute right-2 bottom-2 grid size-4 place-items-center rounded-full bg-brand text-xs text-white desk:size-6 desk:text-base"
        aria-hidden="true"
      >
        +
      </span>
    </article>
  );
}
