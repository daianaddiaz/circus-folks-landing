import React from 'react';
import gameplayCircus from '../assets/gameplay-circus.png';
import allCircus from '../assets/all-circus.png';

export default function GameplayFeatures() {
  return (
    <section id="cooperativo" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Juega con tus amigos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border-2 border-yellow-400/50 bg-[#121433] aspect-[16/10] shadow-2xl group">
              <img
                src={gameplayCircus}
                alt="Circus Folks - Coordinación de habilidades en el escenario"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="text-yellow-400 font-display-circus text-base tracking-widest uppercase">
              Cooperación en Tiempo Real
            </span>
            <h2 className="font-display-circus text-3xl sm:text-5xl text-white leading-tight">
              JUEGA CON <span className="text-yellow-400">TUS AMIGOS</span>
            </h2>
            <p className="text-lg text-white/95 font-semibold">
              Coordinación de habilidades de los jugadores al momento de atravesar obstáculos.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              Sincroniza saltos, impulsos, iluminación y maniobras junto a tu equipo para superar peligros y ejecutar actos en conjunto cuando la precisión marca la diferencia.
            </p>
          </div>
        </div>

        {/* 8. Viví la experiencia */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-5 text-left lg:text-right">
            <span className="text-yellow-400 font-display-circus text-base tracking-widest uppercase">
              Táctica y Roles de la Troupe
            </span>
            <h2 className="font-display-circus text-3xl sm:text-5xl text-white leading-tight">
              VIVÍ LA <span className="text-yellow-400">EXPERIENCIA</span>
            </h2>
            <p className="text-lg text-white/95 font-semibold">
              Planificación del equipo de jugadores para ver quién cumple cada rol y cuáles se complementan mejor entre sí.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              Define la estrategia antes de cada función o travesía: asigna roles, equilibra fortalezas y descubre qué combinaciones de artistas potencian mejor el espectáculo.
            </p>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden border-2 border-yellow-400/50 bg-[#121433] aspect-[16/10] shadow-2xl group">
              <img
                src={allCircus}
                alt="Circus Folks - Planificación de roles y complementariedad del equipo"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}