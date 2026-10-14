import Pill from "./Pill";

export default function TicketCard() {
  return (
    <div className="flex min-h-34 items-center gap-2.5 rounded-2xl bg-[#fff0ef] px-4 py-4 text-[#9c3036] desk:min-h-48 desk:p-6">
      <div
        className="relative grid h-23 flex-none basis-1/3 place-items-center before:absolute before:top-px before:-rotate-10 before:text-2xl before:text-[#eabc37] before:content-['✦_✧_✧']"
        aria-hidden="true"
      >
        <span className="block -rotate-27 rounded-md border-4 border-dotted border-[#ba8740] bg-[#ecc66f] px-2 py-3 text-center text-xs leading-none font-black text-[#a4692e]">
          MAGICAL
          <br />
          TICKET
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="mb-2.5 text-lg font-black whitespace-nowrap text-brand desk:text-3xl tiny:text-base">
          THE MAGICAL TICKET
        </h3>
        <p className="mb-2.5 text-xs leading-tight desk:text-base">
          Add 3 reminders in your account.
          <br />
          Win offers worth Rs. 750
        </p>
        <Pill className="px-5 py-2 text-xs">UNLOCK NOW</Pill>
      </div>
    </div>
  );
}
