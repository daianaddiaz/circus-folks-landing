import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  Ticket,
  MailOpen,
  Handshake,
  Briefcase,
} from 'lucide-react';

import { SteamIcon } from './BrandIcons';

export default function ConversionSections({ onOpenWishlist, onOpenContact }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterMessage(
      `¡Bienvenido a la caravana, ${newsletterEmail}! Revisa tu correo pronto.`
    );
    setNewsletterEmail('');
  };

  return (
    <>
      {/*Sección Wishlist */}
      <section
        id="wishlist-cta"
        className="py-16 lg:py-24 bg-gradient-to-r from-[#ee2a27]/90 via-[#9e2238] to-[#1f2252] border-y-2 border-yellow-400/60"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121433]/80 border border-yellow-400 text-yellow-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Beneficio de Wishlist</span>
          </div>

          <h2 className="font-display-circus text-4xl sm:text-6xl text-white leading-tight">
            SUMA A CIRCUS FOLKS A TU WISHLIST
          </h2>

          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            Agrega el juego a tu lista de deseados en Steam y obtén un{' '}
            <strong className="text-yellow-400 underline">cosmético gratis</strong> de bienvenida para tu estreno en la carpa.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
                href="https://store.steampowered.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-[#1f2252] font-display-circus text-2xl px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all"
                >
                <SteamIcon className="w-7 h-7" />
                <span>IR A STEAM WISHLIST</span>
            </a>

            <button
              type="button"
              onClick={onOpenWishlist}
              className="inline-flex items-center justify-center gap-2 bg-[#121433]/80 hover:bg-[#121433] text-yellow-400 border border-yellow-400 font-display-circus text-xl px-7 py-5 rounded-2xl transition-all cursor-pointer"
            >
              <Ticket className="w-5 h-5" />
              <span>VER CÓDIGO GRATIS</span>
            </button>
          </div>
        </div>
      </section>

      {/*Sección Suscripción */}
      <section id="comunidad" className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="rounded-3xl bg-[#121433]/85 border border-white/15 p-8 sm:p-12 space-y-5">
            <MailOpen className="w-12 h-12 text-yellow-400 mx-auto" />
            <h2 className="font-display-circus text-3xl sm:text-4xl text-white">
              SUSCRÍBETE Y OBTÉN TODAS LAS NOTICIAS
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto">
              Recibe novedades del desarrollo, fechas de pruebas y anuncios importantes directamente en tu correo.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="tu.correo@ejemplo.com"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/25 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#1f2252] font-display-circus text-lg px-7 py-3.5 rounded-xl hover:scale-105 transition-all cursor-pointer"
              >
                SUSCRIBIRME
              </button>
            </form>

            {newsletterMessage && (
              <p className="text-sm text-emerald-400 font-semibold pt-2">{newsletterMessage}</p>
            )}
          </div>
        </div>
      </section>

      {/* Sección Sponsorship */}
      <section id="sponsors" className="py-16 lg:py-24 bg-[#121433]/60 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-yellow-400/40 bg-gradient-to-br from-[#1f2252] to-[#121433] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <span className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-[0.25em]">
                <Handshake className="w-4 h-4" />
                Alianzas Estratégicas & Inversión
              </span>
              <h2 className="font-display-circus text-3xl sm:text-5xl text-white">
                SPONSORSHIP E INVERSORES
              </h2>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed">
                Estamos buscando <strong className="text-yellow-400">sponsors, inversores y marcas</strong> que quieran acompañarnos en el crecimiento y lanzamiento de <em>Circus Folks</em>.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent hover:bg-yellow-400 text-yellow-400 hover:text-[#1f2252] border-2 border-yellow-400 font-display-circus text-xl px-9 py-4 rounded-xl transition-all cursor-pointer"
              >
                <Briefcase className="w-5 h-5" />
                <span>CONTACTANOS</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}