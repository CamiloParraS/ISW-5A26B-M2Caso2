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
    <footer className="relative grid grid-cols-[25%_1fr] gap-x-6 pb-1 mobile:grid-cols-1 mobile:gap-y-4">
      {/* Left Section: Logo + Story Links */}
      <div>
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

      {/* Right Section: Navigation Columns + Subscribe Bar */}
      <div className="flex flex-col justify-between gap-y-4">
        {/* Navigation Columns */}
        <div className="grid grid-cols-4 gap-x-3 mobile:grid-cols-2 mobile:gap-y-4">
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
        </div>

        <div className="flex items-center gap-4 mobile:flex-col mobile:items-start">
          <div className="flex flex-1 items-center gap-1.5 w-full">
            <span className="flex h-8 min-w-0 flex-1 items-center rounded-2xl border border-[#c98a8b] px-3 text-xl text-[#a08a88]">
              Enter Email Address
            </span>
            <Pill className="h-8 px-4 text leading-8">SUBSCRIBE</Pill>
          </div>

          <div className="text-right text-xs text-[#963239] shrink-0 mobile:text-left items-center">
            <strong className="m-auto block size-10 rounded-full border-2 border-current text-center text-3xl leading-4 mobile:mr-1 mobile:mb-0 mobile:ml-0 mobile:inline-block mobile:align-middle">
              ↓
            </strong>{" "}
            Hey, need any help?
          </div>
        </div>
      </div>
    </footer>
  );
}
