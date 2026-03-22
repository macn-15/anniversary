const letterParagraphs = [
  'My love, I will never be able to truly express in words how much I love you and how much you mean to me. My life has changed so much for the better since I said yes to being your dance partner.',
  'My life feels brighter, and more meaningful with you in it. I am so greatful for the love that you give me and that is why I truly just want to make you as happy as you make me. I see my future with you because I cannot imagine a world without you. I will do anything to make you happy my love, I truly hope you know I mean that.',
  'I hope to fill this website with many of our memories together and that you can look at this if you ever need rassurance. You never have to doubt my love for you because my heart, mind, and soul belong to you. I only see you and I only want to see you. I cannot wait for our future together and it is my mission to show you just how much I love you',
  'I hope this is just the first year of many baby. I have never felt like this about anything or anyone. Happy Anniversary my love, I hope you know how amazing you are.',
];

function LoveLetterSection() {
  return (
    <section className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(74,34,56,0.22),rgba(20,10,17,0.82))] px-5 py-6 shadow-[0_28px_80px_rgba(6,2,7,0.34)] ring-1 ring-pink-100/10 backdrop-blur-md sm:px-8 sm:py-8">
      <div className="rounded-[1.8rem] border border-[#cfa9b7]/35 bg-[linear-gradient(180deg,#f6e9ea_0%,#f0dfe3_100%)] px-6 py-8 text-left text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_20px_45px_rgba(16,4,11,0.18)] sm:px-10 sm:py-12">
        <h2 className="mt-4 text-center font-script text-5xl text-[#8d4965] sm:text-6xl">
          To the love of my life,
        </h2>
        <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-[#8f1f46] to-transparent" />
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
        <p className="mt-10 text-right font-script text-4xl text-[#a55e79]">Ratoncito</p>
      </div>
    </section>
  );
}

export default LoveLetterSection;
