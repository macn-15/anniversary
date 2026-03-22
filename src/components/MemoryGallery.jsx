import { useState } from 'react';
import { memories } from '../data/memories';
import MemoryCard from './MemoryCard';

function MemoryGallery({ onContinue }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMemory = memories[currentIndex];

  const showPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? memories.length - 1 : index - 1));
  };

  const showNext = () => {
    setCurrentIndex((index) => (index === memories.length - 1 ? 0 : index + 1));
  };

  return (
    <section className="space-y-10">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-pink-100/62">
          Memory Reel
        </p>
        <h2 className="mt-4 font-script text-4xl text-[#ffb3c8] sm:text-5xl md:text-6xl lg:text-7xl">
          A wider frame for the moments that deserve it
        </h2>
        <p className="mt-4 text-base leading-8 text-stone-200/76">
          This page is meant to feel cinematic. One memory at a time, stretched wider and given room
          to feel like an old movie you want to stay inside.
        </p>
      </div>

      <div className="rounded-[2.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,7,16,0.92),rgba(29,11,26,0.82))] px-4 py-8 shadow-[0_36px_120px_rgba(4,1,7,0.66)] ring-1 ring-pink-100/8 sm:px-8 sm:py-12">
        <div className="grid min-h-[78vh] items-center gap-8 lg:grid-cols-[auto,minmax(0,1fr),auto]">
          <div className="flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={showPrevious}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-pink-100/15 bg-white/5 text-2xl text-pink-100/88 transition hover:-translate-y-1 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-pink-200/60"
              aria-label="Show previous memory"
            >
              ←
            </button>
          </div>

          <div className="mx-auto w-full max-w-6xl">
            <MemoryCard memory={currentMemory} index={currentIndex} total={memories.length} />
          </div>

          <div className="flex justify-center lg:justify-end">
            <button
              type="button"
              onClick={showNext}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-pink-100/15 bg-white/5 text-2xl text-pink-100/88 transition hover:-translate-y-1 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-pink-200/60"
              aria-label="Show next memory"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-rose-100/62">
            Memory {currentIndex + 1} of {memories.length}
          </p>
        </div>
      </div>

      <div className="pt-4 text-center">
        <button
          type="button"
          onClick={onContinue}
          className="group inline-flex items-center gap-3 rounded-full border border-pink-100/18 bg-[linear-gradient(135deg,_#902759,_#d95a89)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-rose-50 shadow-[0_16px_38px_rgba(48,7,26,0.48)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(48,7,26,0.6)] focus:outline-none focus:ring-2 focus:ring-pink-200/60"
        >
          Read the letter
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </section>
  );
}

export default MemoryGallery;
