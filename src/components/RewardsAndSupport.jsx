import React from 'react';
import { Gift, Ticket, Crown, Check, Coffee } from 'lucide-react';
import { SteamIcon } from './BrandIcons';

export default function RewardsAndSupport({ onOpenWishlist }) {
  return (
    <>
      {/*Cosméticos de bienvenida */}
      <section id="cosmeticos" className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="ticket-card rounded-3xl p-8 sm:p-12 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                  <Gift className="w-4 h-4" />
                  <span>Recompensa Exclusiva de Lanzamiento</span>
                </div>

                <h2 className="font-display-circus text-3xl sm:text-5xl text-white">
                  COSMÉTICOS DE <span className="text-yellow-400">BIENVENIDA</span>
                </h2>

                <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                  Si agregas <strong className="text-yellow-400">Circus Folks</strong> a tu Wishlist de Steam, podrás obtener un{' '}
                  <strong className="underline decoration-yellow-400">código promocional</strong> para obtener cosméticos de bienvenida de forma gratuita.
                </p>

                <div className="pt-2">
                  <button
                        type="button"
                        onClick={onOpenWishlist}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-[#1f2252] font-display-circus text-xl px-8 py-4 rounded-xl hover:scale-105 transition-all cursor-pointer"
                        >
                        <SteamIcon className="w-6 h-6" />
                        <span>SOLICITAR EN WISHLIST</span>
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-xs rounded-2xl bg-gradient-to-b from-[#ee2a27]/30 to-[#1f2252] border border-yellow-400/50 p-6 text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-yellow-400/20 border-2 border-yellow-400 flex items-center justify-center">
                    <Crown className="w-10 h-10 text-yellow-400" />
                  </div>
                  <h3 className="font-display-circus text-xl text-yellow-400">
                    PACK FUNDADOR DE LA CARPA
                  </h3>
                  <ul className="text-xs text-white/85 space-y-1.5 text-left bg-black/30 p-3.5 rounded-xl">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                      Sombrero de Maestro de Ceremonias
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                      Capa Estrellada del Apagón
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                      Estandarte Luminoso para tu Carpa
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Ayudanos a crecer (CafecitoApp) */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 p-8 sm:p-10 space-y-5">
            <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center">
              <Coffee className="w-7 h-7 text-amber-300" />
            </div>

            <h2 className="font-display-circus text-3xl sm:text-4xl text-white">
              AYUDANOS A CRECER
            </h2>

            <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Somos una empresa indie apasionada por construir mundos originales con identidad propia. Tu apoyo nos ayuda a financiar producción, arte y programación para hacer crecer este proyecto independiente.
            </p>

            <div className="pt-2">
              <a
                href="https://cafecito.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#29abe0] hover:bg-[#1f96c7] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all"
              >
                <Coffee className="w-5 h-5" />
                <span>Apoyanos en CafecitoApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}