import React from 'react'
import HeroBaner from './Scection/HeroBaner'

import Trending from './Scection/teriding/Trending'
import Popular from './Scection/popular/Popular';
import TopRated from './Scection/TopRated/TopRated';

export default function Home() {
  return (
    <div>
      <HeroBaner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
}
