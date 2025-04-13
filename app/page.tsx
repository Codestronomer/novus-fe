import Partners from "@/components/sections/partners";
import Roadmap from "@/components/sections/roadmap";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import AboutUs from "@/components/sections/about-us";
import WhatSetsUsApart from "@/components/sections/what-sets-us-apart";

export default function Home() {
  return (
    <div className="w-screen max-w-screen overflow-x-hidden min-h-screen font-[family-name:var(--font-space-grotesk)]">
      <main className="w-full">
        <h1 className="text-5xl text-center m-8">Novus Academy+</h1>
        <Header />
        <Partners />
        <div className="gradient-background">
          <AboutUs />
          <WhatSetsUsApart />
        </div>
        <Roadmap />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
