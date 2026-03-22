import { useEffect, useState } from 'react';
import TimerBlock from './TimerBlock';
import { getRelationshipDuration, relationshipStart } from '../utils/date';

const labels = [
  { key: 'years', label: 'Years' },
  { key: 'months', label: 'Months' },
  { key: 'weeks', label: 'Weeks' },
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
];

function RelationshipTimer() {
  const [duration, setDuration] = useState(() => getRelationshipDuration());

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setDuration(getRelationshipDuration());
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,11,20,0.88),rgba(67,21,23,0.62))] px-5 py-8 shadow-[0_28px_90px_rgba(6,2,7,0.42)] ring-1 ring-amber-100/8 backdrop-blur-xl sm:px-8 sm:py-10">
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-amber-100/40 to-transparent" />
      <header className="relative">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.45em] text-amber-100/65">
          A Year Lit By Us
        </p>
        <h2 className="mt-4 text-center font-script text-4xl text-[#ffc09a] sm:text-5xl">
          Every second still feels golden
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-stone-200/75 sm:text-base">
          Since the night everything changed, time has only made this story warmer, deeper, and more beautiful.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {labels.map(({ key, label }) => (
            <TimerBlock key={key} label={label} value={duration[key]} />
          ))}
        </div>
      </header>

      <p className="relative mt-8 text-center text-sm uppercase tracking-[0.32em] text-rose-100/55">
        Started on {relationshipStart.toLocaleString()}
      </p>
      <p className="relative mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-stone-200/72">
        This page is only the beginning. Next comes the memory reel, where the moments themselves get to take over.
      </p>
    </section>
  );
}

export default RelationshipTimer;
