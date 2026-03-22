import { reasons } from '../data/reasons';

function ReasonsSection() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(78,28,62,0.38),rgba(31,12,26,0.86))] px-6 py-8 shadow-[0_24px_70px_rgba(6,2,7,0.32)] ring-1 ring-pink-100/10 backdrop-blur-md sm:px-10 sm:py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-pink-100/62">Reasons Why I Love You</p>
      <h2 className="mt-4 font-script text-4xl text-[#ffc4d6] sm:text-5xl">Every line is another reason</h2>
      <div className="mt-8 space-y-4">
        {reasons.map((reason) => (
          <div
            key={reason}
            className="rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-5 shadow-[0_16px_36px_rgba(7,2,6,0.2)]"
          >
            <p className="text-lg leading-8 text-stone-100/84">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReasonsSection;
