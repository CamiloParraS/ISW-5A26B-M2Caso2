import PromiseFeatures from "./PromiseFeatures";
import TicketCard from "./TicketCard";
import SocialCard from "./SocialCard";
import Gallery from "./Gallery";

export default function PromiseSection() {
  return (
    <section className="mt-1.5" aria-labelledby="promise-heading">
      <h2
        className="mb-1 text-3xl leading-none font-black text-brand desk:text-4xl"
        id="promise-heading"
      >
        Our Promise
      </h2>
      <p className="text-xs font-bold text-[#96363a] desk:text-base">
        There&apos;s no secret spell – only honest hard work!
      </p>
      <div className="mt-6 grid grid-cols-[46%_1fr] gap-6 desk:gap-9 mobile:grid-cols-1 mobile:gap-4">
        <div className="flex flex-col gap-4 mobile:gap-3">
          <PromiseFeatures />
          <TicketCard />
          <SocialCard />
        </div>
        <Gallery />
      </div>
    </section>
  );
}
