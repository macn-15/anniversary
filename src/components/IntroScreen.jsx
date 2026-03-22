function IntroScreen({ onEnter }) {
  return (
    <section className="relative z-20 flex min-h-screen items-center justify-center px-6 py-10">
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(29,12,25,0.68),rgba(13,7,15,0.48))] px-6 py-10 shadow-[0_24px_110px_rgba(3,1,5,0.78)] ring-1 ring-pink-100/10 backdrop-blur-xl sm:px-10 sm:py-14">
          <p className="font-script text-4xl leading-tight text-[#ff9ab1] drop-shadow-[0_12px_34px_rgba(16,3,9,0.92)] sm:text-6xl lg:text-7xl">
            ❤️❤️❤️❤️❤️❤️❤️❤️❤️
          </p>
          <p className="font-script text-4xl leading-tight text-[#ff9ab1] drop-shadow-[0_12px_34px_rgba(16,3,9,0.92)] sm:text-6xl lg:text-7xl">
             Happy anniversary my love. Thank you for making this the best year of my life 
          </p>
                    <p className="font-script text-4xl leading-tight text-[#ff9ab1] drop-shadow-[0_12px_34px_rgba(16,3,9,0.92)] sm:text-6xl lg:text-7xl">
            ❤️❤️❤️❤️❤️❤️❤️❤️❤️
          </p>
          <button
            type="button"
            onClick={onEnter}
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-pink-100/18 bg-[linear-gradient(135deg,_#8b1f53,_#d44d75)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-rose-50 shadow-[0_14px_36px_rgba(39,6,21,0.66)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(39,6,21,0.8)] focus:outline-none focus:ring-2 focus:ring-pink-200/70"
          >
            Continue
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default IntroScreen;
