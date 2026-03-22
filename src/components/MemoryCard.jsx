function MemoryCard({ memory, index, total }) {
  return (
    <article className="rounded-[2rem] transition duration-500 ease-out animate-[fadeCard_500ms_ease-out]">
      <div className="film-strip rounded-[2rem] bg-[linear-gradient(180deg,#0f0b13,#23131e)] p-4 text-stone-100 shadow-[0_28px_64px_rgba(5,2,8,0.6)] md:p-5">
        <div
          className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4 md:p-6"
          style={{ rotate: `${memory.rotation}deg` }}
        >
          <div className="flex overflow-hidden rounded-[1.15rem] border border-white/8 bg-black/35 shadow-inner">
            <img
              src={memory.image}
              alt={memory.title}
              className="block aspect-[21/9] w-full object-contain object-center"
            />
          </div>
          <div className="mx-auto max-w-4xl px-2 pb-2 pt-6 md:px-4">
            <p className="text-xs uppercase tracking-[0.35em] text-pink-200/62">{memory.date}</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#fff4f7] md:text-4xl">{memory.title}</h3>
            <p className="mt-3 max-w-3xl text-base leading-8 text-stone-200/82 md:text-lg lg:text-xl">{memory.caption}</p>
          </div>
        </div>
      </div>

    </article>
  );
}

export default MemoryCard;
