import Logo from "./Logo";
import Pill from "./Pill";

const columns = [
  ["KNOW US", "Contact Us", "Blog"],
  ["NEED HELP", "Cancellation And Refund", "Privacy Policy"],
  ["MORE INFO", "Terms And Policy", "Customer Grievance"],
  ["MORE INFO", "Coupons & Offers", "Download App"],
];

const link = "my-1 block text-xs leading-tight text-[#786763] desk:text-sm";

export default function Footer() {
  return (
    <footer className="relative grid grid-cols-[27%_repeat(4,1fr)] gap-x-3 gap-y-2.5 pb-1 desk:gap-x-6 mobile:grid-cols-4 mobile:gap-3.5">
      <div className="mobile:col-span-4">
        <Logo className="text-2xl desk:text-4xl" />
        <p className={`${link} mt-1.5`}>
          Our Story
          <br />
          Contact Us
          <br />
          Locate Stores
          <br />
          Media
          <br />
          Careers
        </p>
      </div>
      {columns.map(([title, ...items], i) => (
        <div key={i}>
          <h3 className="mt-1 mb-1 text-xs font-black text-[#963239]">
            {title}
          </h3>
          {items.map((t) => (
            <span className={link} key={t}>
              {t}
            </span>
          ))}
        </div>
      ))}
      <div className="col-[3/6] flex items-center gap-1.5 mobile:col-[1/5]">
        <span className="flex h-7 min-w-0 flex-1 items-center rounded-2xl border border-[#c98a8b] px-3 text-xs text-[#a08a88]">
          Enter Email Address
        </span>
        <Pill className="h-7 px-4 text-xs leading-7">
          SUBSCRIBE
        </Pill>
      </div>
      <div className="-mt-px col-[5/6] text-right text-xs text-[#963239] mobile:col-[1/5] mobile:text-left">
        <strong className="mb-1 ml-auto block size-5 rounded-full border-2 border-current text-center text-base leading-4 mobile:mr-1 mobile:mb-0 mobile:ml-0 mobile:inline-block mobile:align-middle">
          ?
        </strong>{" "}
        Hey, need any help?
      </div>
    </footer>
  );
}
