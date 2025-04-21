import Partners from "@/components/sections/partners";
import Roadmap from "@/components/sections/roadmap";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import AboutUs from "@/components/sections/about-us";
import WhatSetsUsApart from "@/components/sections/what-sets-us-apart";
import Navbar from "@/components/sections/navbar";

export default function Home() {
  return (
    <div className="w-full overflow-hidden min-h-screen font-[family-name:var(--font-space-grotesk)] gradient-background">
      <main className="w-full">
        <Navbar />
        <Header />
        <Partners />
        <div className="gradient-background">
          <AboutUs />
          <WhatSetsUsApart />
          <Roadmap />
        </div>
        <Contact />
      </main>
      <footer className="bg-[rgba(173,170,252,0.18)]">
        <Footer />
      </footer>
    </div>
  );
}
