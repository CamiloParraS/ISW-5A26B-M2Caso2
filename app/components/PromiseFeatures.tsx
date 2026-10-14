const features = [
  ["♧", "ON TIME", "DELIVERY"],
  ["♧", "500+", "DESIGNS"],
  ["2♕", "2 CR+", "ORDERS"],
  ["♨", "BAKED", "FRESH"],
];

export default function PromiseFeatures() {
  return (
    <div className="rounded-2xl bg-[#fff0ef] px-4 py-4 text-[#9c3036] desk:p-6">
      <h3 className="mb-4 text-center text-sm font-black desk:text-lg">
        A glimpse no secret spell – only social world!
      </h3>
      <div className="grid grid-cols-4 gap-1">
        {features.map(([icon, a, b]) => (
          <div className="text-center" key={a}>
            <div
              className="mx-auto mb-2 grid size-11 place-items-center rounded-full border border-[#a7353b] text-2xl leading-none desk:size-15 desk:text-3xl"
              aria-hidden="true"
            >
              {icon}
            </div>
            <strong className="block text-xs leading-tight font-black desk:text-sm">
              {a}
              <br />
              {b}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}
