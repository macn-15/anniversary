import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import LoveLetterSection from './components/LoveLetterSection';
import MemoryGallery from './components/MemoryGallery';
import ReasonsSection from './components/ReasonsSection';
import RelationshipTimer from './components/RelationshipTimer';

function App() {
  const [currentPage, setCurrentPage] = useState('intro');

  const handleEnter = () => {
    setCurrentPage('main');
  };

  const handleOpenLetter = () => {
    setCurrentPage('letter');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(214,122,169,0.12),_transparent_20%),radial-gradient(circle_at_50%_120%,_rgba(146,59,112,0.2),_transparent_32%),linear-gradient(180deg,_#07040b_0%,_#110814_20%,_#1a0d1f_42%,_#2d1230_68%,_#42162f_84%,_#581d37_100%)] text-stone-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,_rgba(255,196,211,0.1),_transparent_16%),radial-gradient(circle_at_82%_14%,_rgba(255,170,196,0.1),_transparent_18%),radial-gradient(circle_at_50%_70%,_rgba(255,214,168,0.05),_transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 star-field opacity-65" />
      <div className="pointer-events-none absolute inset-0 lantern-grid opacity-10" />

      {currentPage === 'intro' ? <IntroScreen onEnter={handleEnter} /> : null}

      {currentPage === 'main' ? (
        <main className="relative z-10 min-h-screen px-4 pb-24 pt-8 sm:px-6 lg:px-10">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 pb-10 pt-10 sm:gap-18 sm:pt-14">
            <RelationshipTimer />
            <div className="text-center">
              <button
                type="button"
                onClick={() => setCurrentPage('memory')}
                className="group inline-flex items-center gap-3 rounded-full border border-pink-100/18 bg-[linear-gradient(135deg,_#902759,_#d95a89)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-rose-50 shadow-[0_16px_38px_rgba(48,7,26,0.48)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(48,7,26,0.6)] focus:outline-none focus:ring-2 focus:ring-pink-200/60"
              >
                Our time together
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>
        </main>
      ) : null}

      {currentPage === 'memory' ? (
        <main className="relative z-10 min-h-screen px-4 py-8 sm:px-6 lg:px-10">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setCurrentPage('main')}
                className="inline-flex items-center gap-2 rounded-full border border-pink-100/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-pink-100/82 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-pink-200/60"
              >
                <span aria-hidden="true">←</span>
                Back to timer
              </button>
            </div>
            <MemoryGallery onContinue={handleOpenLetter} />
          </div>
        </main>
      ) : null}

      {currentPage === 'letter' ? (
        <main className="relative z-10 min-h-screen px-4 py-10 sm:px-6 lg:px-10">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 sm:gap-12">
            <div className="text-center">
              <button
                type="button"
                onClick={() => setCurrentPage('memory')}
                className="inline-flex items-center gap-2 rounded-full border border-amber-100/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-amber-100/80 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
              >
                <span aria-hidden="true">←</span>
                Back to memories
              </button>
            </div>
            <LoveLetterSection />
            <ReasonsSection />
          </div>
        </main>
      ) : null}
    </div>
  );
}

export default App;
