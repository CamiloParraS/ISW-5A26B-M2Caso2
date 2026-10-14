import Logo from "./Logo";
import Pill from "./Pill";

const links = [
  "Cakes",
  "Theme Cakes",
  "Desserts",
  "Birthday",
  "Hampers",
  "Anniversary",
  "Occasions",
  "Occasions",
];

export default function Header() {
  return (
    <header className="relative z-5 bg-[#fff4f3]">
      <div className="flex min-h-12 items-center justify-between gap-4 px-[6%] py-2 desk:min-h-18 mobile:px-[4%] mobile:py-3">
        <Logo className="text-3xl desk:text-4xl mobile:text-2xl" />
        <div className="flex items-center gap-3 mobile:gap-2 tiny:gap-1">
          <div className="flex h-6 overflow-hidden rounded-3xl border border-[#ab4c4e] bg-white desk:h-9">
            <svg
              className="ml-2 self-center text-brand"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 5 5" />
            </svg>
            <span className="w-36 self-center px-2 font-nunito text-xs text-[#999] desk:w-55 desk:text-sm mobile:w-24 tiny:w-18">
              Search
            </span>
            <span
              className="grid w-7 place-items-center bg-brand text-white desk:w-10"
              aria-hidden="true"
            >
              ⌕
            </span>
          </div>
          <span className="flex text-brand">
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-label="Cart"
            >
              <path d="M7 4H3v2h2l2.5 11h11l2.2-9H8L7 4zm2 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
          </span>
          <span className="whitespace-nowrap text-xs desk:text-sm">
            Login/Signup
          </span>
        </div>
      </div>
      <nav
        className="flex items-center justify-between gap-3 border-t border-[rgba(131,41,45,.06)] px-[6%] py-2 desk:py-3.5 mobile:justify-start mobile:gap-3.5 mobile:overflow-x-auto mobile:px-[4%] mobile:py-2.5 mobile:[scrollbar-width:none] mobile:[&::-webkit-scrollbar]:hidden"
        aria-label="Main navigation"
      >
        {links.map((l, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-xs font-extrabold text-[#792328] desk:text-sm"
          >
            {l}
          </span>
        ))}
        <Pill className="px-4 py-2 text-xs desk:text-sm">
          ORDER NOW
        </Pill>
      </nav>
    </header>
  );
}
