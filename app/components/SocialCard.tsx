const avatars = ["👩🏽", "👨🏽", "👩🏻", "👨🏻", "👩🏽"];

export default function SocialCard() {
  return (
    <div className="flex items-center justify-around gap-2 rounded-xl bg-[#fff0ef] px-2 h-25">
      <div className="flex pl-2" aria-hidden="true">
        {avatars.map((a, i) => (
          <span
            key={i}
            className=" size-10 rounded-full border-2 border-white bg-[#e1bfb3)] text-center text-3xl"
          >
            {a}
          </span>
        ))}
      </div>
      <b className="text-xl whitespace-nowrap text-brand">
        Follow us on social!
      </b>
    </div>
  );
}
