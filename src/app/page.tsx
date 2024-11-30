'use client'

// Components
import Overview from '@/components/Overview';

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center text-black max-w-7xl mx-auto h-dvh">
      <div className="flex flex-col gap-6 p-12 rounded-xl bg-secondary-light w-4/5 mx-auto sm:text-2xl">
        <h2>Portfolio Overview</h2>

        <Overview />
      </div>
      <div className="details">
        <div className="divider absolute top-[100px] -left-1/2 -z-50 w-[200%] h-[50px] bg-blue-500">
        </div>
      </div>
    </main>
  );
}
