import React from 'react';
import {
  PlayCircle,
  Monitor,
  Star,
} from 'lucide-react';
import { DiscordIcon, SteamIcon } from './BrandIcons';
import heroImg from '../assets/logo-completo-circus.png';

export default function HeroSection({
  onOpenTrailer,
  onOpenWishlist,
}) {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121433]/80 border border-yellow-400/50 text-yellow-400 text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              <span>Estrategia, Supervivencia y Espectáculo en Primera Persona</span>
            </div>

            <h1 className="font-display-circus text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.08]">
              ENCIENDE LA FUNCIÓN EN UN MUNDO{' '}
              <span className="text-yellow-400">A OSCURAS</span>
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Lidera una troupe de artistas itinerantes para PC. Viaja por un páramo sin pantallas, levanta tu carpa-refugio y combina habilidades en vivo para devolverle la magia a una humanidad apagada.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenTrailer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-[#1f2252] font-display-circus text-xl px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <PlayCircle className="w-6 h-6" />
                <span>VER TRAILER</span>
              </button>

              <a
                href="#join-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#121433]/85 hover:bg-[#121433] text-white border-2 border-white/30 hover:border-yellow-400 font-display-circus text-xl px-8 py-4 rounded-xl transition-all"
              >
                <DiscordIcon className="w-6 h-6 text-yellow-400" />
                <span>DISCORD</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="lg:col-span-6">
            <div className="mx-auto max-w-xl flex flex-col items-center space-y-4">
              <img
                src={heroImg}
                alt="Circus Folks"
                className="w-full h-auto object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.72)] transition-transform duration-500 hover:scale-[1.02]"
              />

              <span className="inline-flex items-center justify-center gap-2 bg-[#121433]/90 border border-yellow-400/60 text-yellow-400 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
                <Monitor className="w-4 h-4" />
                <span>PC • Estrategia & Simulación</span>
              </span>
            </div>
          </div>
        </div>

        {/* Sub-sección destacada Steam Wishlist */}
        <div className="mt-14 lg:mt-20">
          <div className="marquee-border rounded-2xl bg-gradient-to-r from-[#121433] via-[#261a47] to-[#121433] border-2 border-yellow-400 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left flex-col sm:flex-row">
              <div className="w-14 h-14 rounded-xl bg-yellow-400/15 border border-yellow-400 flex items-center justify-center shrink-0">
                <SteamIcon className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-yellow-400 font-bold block mb-1">
                  ★ Reserva tu lugar en primera fila ★
                </span>
                <h2 className="font-display-circus text-2xl sm:text-3xl text-white tracking-wide">
                  YA DISPONIBLE EN WISHLIST DE STEAM
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenWishlist}
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-[#1f2252] font-display-circus text-xl px-9 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Star className="w-5 h-5 fill-[#1f2252]" />
              <span>SOLICITAR</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}