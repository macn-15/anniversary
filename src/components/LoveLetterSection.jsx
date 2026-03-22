const letterParagraphs = [
  'My love, this is where your final letter will live. I wanted this part of the website to feel quieter, softer, and more personal, like the moment after the lanterns drift upward and everything else falls away.',
  'You can replace these words with your own story, your gratitude, your favorite memories, and everything you want her to hold onto after she reads it. Keep it honest, specific, and completely yours.',
  'This section is already styled to carry a heartfelt note, so when you are ready, you can simply edit the text and make it the emotional ending of the experience.',
];

function LoveLetterSection() {
  return (
    <section className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(74,34,56,0.22),rgba(20,10,17,0.82))] px-5 py-6 shadow-[0_28px_80px_rgba(6,2,7,0.34)] ring-1 ring-pink-100/10 backdrop-blur-md sm:px-8 sm:py-8">
      <div className="rounded-[1.8rem] border border-[#cfa9b7]/35 bg-[linear-gradient(180deg,#f6e9ea_0%,#f0dfe3_100%)] px-6 py-8 text-left text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_20px_45px_rgba(16,4,11,0.18)] sm:px-10 sm:py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.45em] text-[#9b6076]">Love Letter</p>
        <h2 className="mt-4 text-center font-script text-5xl text-[#8d4965] sm:text-6xl">
          For the heart of my world
        </h2>
        <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-[#d5aab9] to-transparent" />
        {letterParagraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={[
              'text-[1.08rem] leading-9 text-[#5d3445] sm:text-[1.16rem]',
              index > 0 ? 'mt-6' : 'mt-8',
            ].join(' ')}
          >
            {paragraph}
          </p>
        ))}
        <p className="mt-10 text-right font-script text-4xl text-[#a55e79]">Forever yours</p>
      </div>
    </section>
  );
}

export default LoveLetterSection;
