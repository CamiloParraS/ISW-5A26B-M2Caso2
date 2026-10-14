const avatars = ["👩🏽", "👨🏽", "👩🏻", "👨🏻", "👩🏽"];

export default function SocialCard() {
  return (
    <div className="flex items-center justify-around gap-2 rounded-xl bg-[#fff0ef] px-2 py-3 desk:p-4">
      <div className="flex pl-2" aria-hidden="true">
        {avatars.map((a, i) => (
          <span
            key={i}
            className="-ml-2 size-6 rounded-full border-2 border-white bg-[linear-gradient(140deg,#9c5c53,#e1bfb3)] text-center text-base leading-5"
          >
            {a}
          </span>
        ))}
      </div>
      <b className="text-xs whitespace-nowrap text-brand">
        Follow us on social!
      </b>
    </div>
  );
}
