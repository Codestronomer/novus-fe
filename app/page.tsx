import Image from "next/image";
import Partners from "@/components/sections/partners";
import Roadmap from "@/components/sections/roadmap";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="w-screen min-h-screen font-[family-name:var(--font-space-grotesk)]">
      <main className="w-full">
        <h1 className="text-5xl">Novus Academy+</h1>
        <Partners />
        <Roadmap />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  );
}
