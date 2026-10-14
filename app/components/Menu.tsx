import Category from "./Category";

export default function Menu() {
  return (
    <section
      className="flex min-h-28 items-start justify-between gap-4 desk:min-h-39 mobile:block"
      aria-labelledby="menu-heading"
    >
      <div className="flex-none basis-1/3 mobile:mb-4">
        <h2
          className="mb-1 text-3xl leading-none font-black text-brand desk:text-4xl"
          id="menu-heading"
        >
          Menu
        </h2>
        <p className="text-xs font-bold text-[#96363a] desk:text-base">
          What will you wish for?
        </p>
        <div className="mt-3 flex gap-2 text-5xl" aria-hidden="true">
          {["♙", "♨", "▣"].map((i) => (
            <span
              key={i}
              className="grid size-14 text-4xl mx-1 place-items-center rounded-full bg-[#fbebea] text-brand"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
      <div className="grid flex-1 grid-cols-4 gap-3 mobile:gap-2 tiny:gap-1 ">
        <Category label="CLASSIC">
          <path d="M8 22h32l-3 18H11L8 22Zm3-6h26v6H11zM15 16V9m9 7V9m9 7V9M12 29c4-5 8 5 12 0s8 5 12 0" />
          <path d="M14 7h3m6 0h3m6 0h3" />
        </Category>
        <Category label="GOURMET">
          <rect x="7" y="6" width="34" height="36" rx="5" />
          <rect x="12" y="13" width="24" height="22" rx="3" />
          <path d="M15 18h18M15 22h18M15 27h11M19 9h10" />
        </Category>
        <Category label="DESSERTS">
          <path d="M7 20h34l-4 19H11L7 20Zm2-5c4-11 25-11 30 0v5H9v-5Zm5 13h20M14 33h20M16 11v7m8-9v9m8-7v7" />
        </Category>
        <Category label="COOKIES">
          <rect x="8" y="5" width="23" height="38" rx="2" />
          <path d="M13 12h13m-13 7h13m-13 7h13m-13 7h13M36 12l6 5-6 5M36 29l6 5-6 5" />
          <circle cx="17" cy="12" r="1" />
          <circle cx="17" cy="26" r="1" />
        </Category>
      </div>
    </section>
  );
}
