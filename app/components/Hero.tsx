export default function Hero() {
  return (
    <section
      className="relative min-h-76 overflow-hidden bg-[image:radial-gradient(circle_at_0%_70%,#df7385,transparent_40%),linear-gradient(112deg,#ca5767_0%,#b82e3a_42%,#9c1f26_100%)] px-[6%] pt-7 pb-18 text-white before:pointer-events-none before:absolute before:inset-0 before:bg-[image:radial-gradient(circle_at_42%_0%,#fff2_0_30px,transparent_31px),radial-gradient(circle_at_91%_10%,#fff2_0_12px,transparent_13px),radial-gradient(circle_at_2%_57%,#fff1_0_14px,transparent_15px),radial-gradient(circle_at_98%_84%,#fff2_0_42px,transparent_43px)] before:opacity-80 before:content-[''] desk:min-h-104 desk:pt-10 mobile:min-h-74 mobile:px-[5%] mobile:pt-8 mobile:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto flex max-w-260 items-center gap-8 desk:gap-11 mobile:gap-3">
        <img
          className="aspect-square flex-none basis-1/3 rounded-full border-8 border-white object-cover shadow-[0_9px_15px_#55101836] desk:max-w-80 mobile:basis-2/5 mobile:border-4 tiny:basis-5/12"
          src="/assets/hero-cake.webp"
          alt="Rich chocolate cake topped with fresh berries"
        />
        <div className="relative z-1 pb-0.5">
          <h1
            className="font-nunito text-[clamp(28px,4vw,52px)] leading-none font-black tracking-tighter mobile:text-[clamp(21px,5.2vw,30px)] tiny:text-2xl"
            id="hero-heading"
          >
            DECADENT
            <br />
            CHOCOLATE
            <br />
            BLISS!
          </h1>
          <p className="mt-0.5 mb-5 text-[clamp(18px,2.6vw,29px)] font-normal mobile:mb-3 mobile:text-[clamp(13px,3.3vw,19px)]">
            Satisfy Your Sweet Cravings
          </p>
          <span className="inline-block rounded-4xl bg-[#b02a32] px-6 pt-1 pb-2 text-xl leading-none font-black shadow-[0_5px_11px_#76242a33] mobile:px-3.5 mobile:pb-1 mobile:text-base">
            <small className="block text-left text-xs font-semibold">
              Special Offer
            </small>
            SAVE 20%
          </span>
        </div>
        <div
          className="ml-auto grid gap-4 mobile:gap-2 tiny:hidden"
          aria-hidden="true"
        >
          <img
            className="size-23 rounded-full border-4 border-white object-cover shadow-[0_7px_12px_#68171d35] desk:size-31 mobile:size-15 mobile:border-4"
            src="/assets/hero-mini-1.webp"
            alt=""
          />
          <img
            className="size-23 rounded-full border-4 border-white object-cover shadow-[0_7px_12px_#68171d35] desk:size-31 mobile:size-15 mobile:border-4"
            src="/assets/hero-mini-2.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
