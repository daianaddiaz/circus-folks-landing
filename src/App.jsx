import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoreAndCommunity from './components/LoreAndCommunity';
import RewardsAndSupport from './components/RewardsAndSupport';
import GameplayFeatures from './components/GameplayFeatures';
import ConversionSections from './components/ConversionSections';
import Footer from './components/Footer';
import Modals from './components/Modals';

export default function App() {
  const [activeModal, setActiveModal] = useState(null); // 'trailer' | 'wishlist' | 'contact' | null

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 circus-stripes">
        <HeroSection
          onOpenTrailer={() => setActiveModal('trailer')}
          onOpenWishlist={() => setActiveModal('wishlist')}
        />
        <LoreAndCommunity />
        <RewardsAndSupport onOpenWishlist={() => setActiveModal('wishlist')} />
        <GameplayFeatures />
        <ConversionSections
          onOpenWishlist={() => setActiveModal('wishlist')}
          onOpenContact={() => setActiveModal('contact')}
        />
      </main>

      <Footer />

      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}