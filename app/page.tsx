import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Bestsellers from "./components/Bestsellers";
import PromiseSection from "./components/Promise";
import Certification from "./components/Certification";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-300 overflow-hidden bg-cream">
      <Header />
      <main>
        <Hero />
        <div className="relative z-2 mx-[2.25%] -mt-18 rounded-t-4xl bg-[linear-gradient(180deg,#fffaf7_0%,#fffefd_55%,#fff6f4_100%)] px-[3.6%] pt-7 pb-4 desk:-mt-22 desk:pt-10 mobile:mx-0 mobile:-mt-16 mobile:rounded-t-3xl mobile:px-[5%] mobile:py-6">
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
