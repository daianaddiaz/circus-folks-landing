import React from 'react';
import { MoonStar, Compass, Hammer, Sparkles } from 'lucide-react';
import {
  YouTubeIcon,
  TikTokIcon,
  DiscordIcon,
  InstagramIcon,
} from './BrandIcons';

const SOCIAL_CHANNELS = [
  { name: 'YouTube', href: '', Icon: YouTubeIcon },
  { name: 'TikTok', href: '', Icon: TikTokIcon },
  { name: 'Discord', href: '', Icon: DiscordIcon },
  { name: 'Instagram', href: '', Icon: InstagramIcon },
];

export default function LoreAndCommunity() {
  return (
    <>
      {/* 3. Te damos la bienvenida a Circus Folks */}
      <section id="bienvenida" className="py-16 lg:py-24 bg-[#121433]/40 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-yellow-400/40 bg-[#1f2252]">
                <div className="aspect-[4/3] bg-gradient-to-b from-[#2b2d42] to-[#121433] flex flex-col items-center justify-center p-8 text-center">
                  <MoonStar className="w-16 h-16 text-yellow-400/80 mb-4" />
                  <span className="font-display-circus text-2xl text-white tracking-wider">
                    EL GRAN APAGÓN
                  </span>
                  <span className="text-xs text-white/60 mt-2">
                    [Ilustración narrativa: Ciudades grises iluminadas por la llegada de la caravana]
                  </span>
                </div>
                <div className="bg-yellow-400 text-[#1f2252] py-2.5 px-4 text-center font-display-circus text-lg tracking-wider">
                  UNA LUZ EN MEDIO DE LA APATÍA
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-yellow-400 font-display-circus text-lg tracking-widest uppercase">
                El Origen de la Función
              </span>
              <h2 className="font-display-circus text-3xl sm:text-5xl text-white leading-tight">
                TE DAMOS LA BIENVENIDA A <span className="text-yellow-400">CIRCUS FOLKS</span>
              </h2>

              <blockquote className="border-l-4 border-yellow-400 pl-5 py-2 bg-white/5 rounded-r-xl text-base sm:text-lg text-white/95 leading-relaxed">
                “Tras “El Gran Apagón”, la humanidad se quedó a oscuras y sin pantallas: las ciudades cayeron en la apatía de perder toda forma de entretenimiento moderno. En medio de ésta masa gris y aburrida, surge una luz itinerante: un grupo de artistas que redescubren la magia de la actuación en vivo para llenar ese enorme vacío existencial”
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#121433]/70 border border-white/10">
                  <Compass className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-display-circus text-lg text-white">Viaje Itinerante</h3>
                  <p className="text-xs text-white/75 mt-1">
                    Explora rutas olvidadas llevando esperanza de ciudad en ciudad.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#121433]/70 border border-white/10">
                  <Hammer className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-display-circus text-lg text-white">Carpa-Refugio</h3>
                  <p className="text-xs text-white/75 mt-1">
                    Construye, repara y expande tu hogar móvil contra la oscuridad.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#121433]/70 border border-white/10">
                  <Sparkles className="w-6 h-6 text-yellow-400 mb-2" />
                  <h3 className="font-display-circus text-lg text-white">Show en Vivo</h3>
                  <p className="text-xs text-white/75 mt-1">
                    Combina acrobacias y trucos en tiempo real para cautivar al público.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sección JOIN US */}
      <section id="join-us" className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-yellow-400 font-bold">
            Sé parte de la troupe
          </span>
          <h2 className="font-display-circus text-4xl sm:text-6xl text-white mt-2 mb-4 tracking-wider">
            JOIN US
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-10">
            Sigue el desarrollo detrás de escena, participa en votaciones de arte y únete a nuestra comunidad oficial antes del estreno.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {SOCIAL_CHANNELS.map((social) => (
            <a
                key={social.name}
                href={social.href || '#join-us'}
                aria-label={social.name}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#121433]/80 border-2 border-white/15 hover:border-yellow-400 hover:-translate-y-1.5 transition-all"
            >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:bg-yellow-400 group-hover:text-[#1f2252] transition-colors">
                <social.Icon className="w-6 h-6" />
            </div>
            <span className="font-display-circus text-lg tracking-wide group-hover:text-yellow-400">
                {social.name}
            </span>
            </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}