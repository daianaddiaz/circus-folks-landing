import React, { useState } from 'react';
import { Tent, Sparkles, Menu, X } from 'lucide-react';
import {SteamIcon} from "./BrandIcons";

const NAV_LINKS = [
  { href: '#bienvenida', label: 'El Mundo' },
  { href: '#cosmeticos', label: 'Recompensas' },
  { href: '#cooperativo', label: 'Jugabilidad' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#sponsors', label: 'Inversores' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121433]/90 backdrop-blur-md border-b border-yellow-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ee2a27] to-amber-600 border-2 border-yellow-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Tent className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-display-circus text-2xl sm:text-3xl tracking-wider text-white leading-none group-hover:text-yellow-400 transition-colors">
                CIRCUS FOLKS
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-yellow-400/90 font-semibold">
                Indie Strategy Sim
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-yellow-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
                href="#wishlist-cta"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-[#1f2252] font-display-circus text-base sm:text-lg px-4 sm:px-5 py-2.5 rounded-lg hover:scale-105 active:scale-95 transition-all"
                >
                <SteamIcon className="w-5 h-5" />
                <span>Wishlist Steam</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Abrir o cerrar menú"
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121433] border-b border-yellow-400/30 px-4 pt-2 pb-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base text-white hover:text-yellow-400 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}