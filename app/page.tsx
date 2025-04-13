import Partners from "@/components/sections/partners";
import Roadmap from "@/components/sections/roadmap";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="w-screen min-h-screen font-[family-name:var(--font-space-grotesk)]">
      <main className="w-full">
        <h1 className="text-5xl text-center m-8">Novus Academy+</h1>
        <Partners />
        <Roadmap />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
