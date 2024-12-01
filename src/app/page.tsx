'use client'

import { useState, useEffect } from 'react';

// Components
import Overview from '@/components/Overview';
import Holdings from '@/components/Holdings';
import Values from '@/components/Values';
import List from '@/components/List';

// Snapshot Data
import marketSnapshot from '@/app/snapshots/markets.json'
import tokensSnapshot from '@/app/snapshots/tokens.json'
import pricesSnapshot from '@/app/snapshots/prices.json'

export default function Home() {
  const [trackedAssets, setTrackedAssets] = useState([])
  const [markets, setMarkets] = useState(null)
  const [assets, setAssets] = useState([])

  // TODO: Make API call to fetch market data
  const getMarkets = async () => {
    setMarkets(marketSnapshot)
  }

  const getAsset = async () => {
    // Fetch id
    const id = trackedAssets[trackedAssets.length - 1]
    console.log('Asset ID and balance:', id.asset, id.balance)

    // Market data
    const market = markets.find((market) => market.id === id.asset)
    console.log('Market', market)

    // Prices
    const prices = pricesSnapshot[id.asset]

    // Balance
    const balance = id.balance

    // Asset object
    const asset = {
      id: id.asset,
      market: market,
      prices: prices,
      balance: id.balance,
      value: market.current_price * balance
    }

    setAssets([...assets, asset])
  }

useEffect(() => {
  if(!markets) {
    getMarkets()
  }
  if(trackedAssets.length !== 0) {
    getAsset()
  }
}, [trackedAssets])

  return (
    <main className="flex flex-col justify-center text-center text-black max-w-7xl mx-auto h-full">
      <div className="flex flex-col gap-6 p-12 rounded-xl bg-secondary-light w-4/5 mt-2 mx-auto sm:text-2xl">
        <h2>Portfolio Overview</h2>

        <Overview 
          markets={markets}
          trackedAssets={trackedAssets}
          setTrackedAssets={setTrackedAssets}
          assets={assets}
          setAssets={setAssets}
        />

        <Holdings 
          assets={assets}
        />

        <Values 
          assets={assets}
        />

        <List 
          assets={assets}
          setAssets={setAssets}
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
