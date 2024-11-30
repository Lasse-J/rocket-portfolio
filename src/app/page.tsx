'use client'

import { useState } from 'react';

// Components
import Overview from '@/components/Overview';

// Snapshot Data
import marketSnapshot from '@/app/snapshots/markets.json'

export default function Home() {
  const [trackedAssets, setTrackedAssets] = useState([])
  const [markets, setMarkets] = useState(marketSnapshot)


  return (
    <main className="flex flex-col justify-center text-center text-black max-w-7xl mx-auto h-dvh">
      <div className="flex flex-col gap-6 p-12 rounded-xl bg-secondary-light w-4/5 mx-auto sm:text-2xl">
        <h2>Portfolio Overview</h2>

        {console.log(trackedAssets)}

        <Overview 
          markets={markets}
          trackedAssets={trackedAssets}
          setTrackedAssets={setTrackedAssets}
        />
      </div>
      <div className="details">
        <div className="divider absolute top-[100px] -left-1/2 -z-50 w-[200%] h-[50px] bg-blue-500">
        </div>
      </div>
    </main>
  );
}
