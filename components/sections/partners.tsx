import Image from "next/image";
import React from "react";
import BaseBridge from "@/public/Landing/basebridge.svg";
import Marquee from "react-fast-marquee";

const partners = [
  { id: 1, src: BaseBridge, alt: "Base Bridge partner" },
  { id: 2, src: BaseBridge, alt: "Base Bridge partner" },
  { id: 3, src: BaseBridge, alt: "Base Bridge partner" },
  { id: 4, src: BaseBridge, alt: "Base Bridge partner" },
];

const Partners = () => {
  return (
    <section className="flex flex-col gap-8 w-full gradient-background py-8">
      <div className="mx-auto text-center">
        <h2 className="text-2xl font-semibold text-white">
          Trusted by Other Web3 Industry Leaders
        </h2>
      </div>
<<<<<<< HEAD
      <div className="flex flex-wrap lg:w-full gap-8 justify-center items-center">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="w-1/3 sm:w-1/4 md:w-1/3 lg:w-auto flex justify-center">
            <Image
              src={partner.src}
              alt={partner.alt}
              className='object-contain'
            />
          </div>
        ))}
=======
      <div className="flex flex-col gap-2 justify-center items-center">
        <Marquee pauseOnHover={true} pauseOnClick={false} speed={100}>
          {[...partners, ...partners].map((partner) => (
            <Image
              key={partner.id}
              src={partner.src}
              alt={partner.alt}
              className="object-contain"
            />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover={true}
          pauseOnClick={false}
          speed={100}
          direction="right"
        >
          {[...partners, ...partners].map((partner) => (
            <Image
              key={partner.id}
              src={partner.src}
              alt={partner.alt}
              className="object-contain"
            />
          ))}
        </Marquee>
>>>>>>> obito
      </div>
    </section>
  );
};

export default Partners;
