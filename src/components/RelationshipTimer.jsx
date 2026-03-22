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
        <h2 className="mt-4 text-center font-script text-4xl text-[#ffc09a] sm:text-5xl">
          I treasure every second, minute, hour, day, week, month, and hopefully year I get to spend with you my love.
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {labels.map(({ key, label }) => (
            <TimerBlock key={key} label={label} value={duration[key]} />
          ))}
        </div>
      </header>

    </section>
  );
}

export default RelationshipTimer;
