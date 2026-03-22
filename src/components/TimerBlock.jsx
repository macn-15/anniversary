function TimerBlock({ label, value }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-5 py-6 text-center shadow-[0_18px_50px_rgba(9,4,8,0.3)] backdrop-blur-xl">
      <div className="text-3xl font-semibold text-amber-50 sm:text-4xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.35em] text-rose-100/68">{label}</div>
    </div>
  );
}

export default TimerBlock;
