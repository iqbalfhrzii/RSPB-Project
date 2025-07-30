'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import { HeroImageRight } from '../components/HeroImageRight';
import { HeaderTabs } from '../components/Navbar';

export default function HomePage() {
  return (
    <>
      <HeaderTabs />
      <HeroImageRight />
    </>
  );
}