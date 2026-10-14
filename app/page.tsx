import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Bestsellers from "./components/Bestsellers";
import PromiseSection from "./components/Promise";
import Certification from "./components/Certification";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="mx-auto w-full  overflow-hidden bg-[#f7e5e1]">
      <Header />
      <main>
        <Hero />
        <div className="max-w-300 mx-auto relative z-2  -mt-18 rounded-t-4xl bg-[linear-gradient(180deg,#fffaf7_0%,#fffefd_55%,#fff6f4_100%)] px-[3.6%] pt-7 pb-4 desk:-mt-22 desk:pt-10 mobile:mx-0 mobile:-mt-16 mobile:rounded-t-3xl mobile:px-[5%] mobile:py-6">
          <Menu />
          <Bestsellers />
          <PromiseSection />
          <Certification />
          <Footer />
        </div>
      </main>
    </div>
  );
}
