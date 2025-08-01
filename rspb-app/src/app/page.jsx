'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import { HeroImageRight } from '../components/HeroImageRight';
import { HeaderTabs } from '../components/Navbar';
import { FooterLinks } from '../components/Footer';
import { CardsCarousel } from '../components/Cards';

export default function HomePage() {
  return (
    <>
      <HeaderTabs />
      <HeroImageRight />
      <FooterLinks />
    </>
  );
}