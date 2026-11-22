import React from 'react';
import { Tent } from 'lucide-react';
import {
  YouTubeIcon,
  TikTokIcon,
  DiscordIcon,
  InstagramIcon,
} from './BrandIcons';

const TEAM_MEMBERS = [
  'Kevin Alemanno',
  'Alejandro Decurgez',
  'Alejandro Riobo',
  'Daiana Diaz',
  'Nahuel Montero',
];

const FOOTER_SOCIALS = [
  { name: 'YouTube', href: '#join-us', Icon: YouTubeIcon },
  { name: 'TikTok', href: '#join-us', Icon: TikTokIcon },
  { name: 'Discord', href: '#join-us', Icon: DiscordIcon },
  { name: 'Instagram', href: '#join-us', Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0f26] border-t border-yellow-400/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ee2a27] border border-yellow-400 flex items-center justify-center">
              <Tent className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="font-display-circus text-2xl tracking-wider text-white">
              CIRCUS FOLKS
            </span>
          </div>
            <div className="flex items-center gap-3">
            {FOOTER_SOCIALS.map(({ name, href, Icon }) => (
                <a
                key={name}
                href={href}
                aria-label={name}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-[#1f2252] flex items-center justify-center transition-colors"
                >
                <Icon className="w-5 h-5" />
                </a>
            ))}
            </div>
        </div>

        <hr className="border-white/10" />

        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-yellow-400 font-semibold">
            Equipo Circus Folks:
          </p>
          <p className="text-sm sm:text-base text-white/95 font-medium">
            {TEAM_MEMBERS.join(' • ')}
          </p>
          <p className="text-xs text-white/50 pt-2">
            © 2026 Circus Folks. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}