import { useState } from "react";
import { testimonials } from "../constants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const next = () => {
    setDirection("next");
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection("prev");
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full text-center content bg-white py-12"
      aria-roledescription="carousel"
      aria-label="Zákaznícke recenzie"
    >
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-center justify-center ">
          <div className="w-24 h-px bg-darker"></div>
          <span className="font-serif text-sm uppercase">Naše recenzie</span>
          <div className="w-24 h-px bg-darker"></div>
        </div>
        <h2 className="text-2xl lg:text-3xl uppercase ">Čo o nás povedali</h2>
      </div>
      <span className="absolute left-4 top-0 text-[260px] text-left opacity-20  font-serif pointer-events-none select-none">
        "
      </span>

      <p
        className="relative h-[20dvh] items-center overflow-hidden text-lg mt-8"
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          key={index}
          className={`absolute w-[95%] left-8 top-8 text text-2xl lg:text-4xl text-left font-serif italic ${direction}`}
        >
          <span className="block">"{testimonials[index].text}"</span>

          <span className="block mt-4 text-base lg:text-xl not-italic font-sans font-normal uppercase">
            — {testimonials[index].name}
          </span>
        </span>
      </p>

      <div className="mt-4 flex justify-center lg:justify-start gap-4">
        <button
          onClick={prev}
          className="btn btn-ghost"
          aria-label="Predchádzajúca recenzia"
        >
          ⬅
        </button>
        <button
          onClick={next}
          className="btn btn-ghost"
          aria-label="Ďalšia recenzia"
        >
          ➡
        </button>
      </div>
    </section>
  );
}
