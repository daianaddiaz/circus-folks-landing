import React, { useState } from 'react';
import { X, Film, Sparkles } from 'lucide-react';
import { SteamIcon } from './BrandIcons';


export default function Modals({ activeModal, onClose }) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [sponsorForm, setSponsorForm] = useState({
    organization: '',
    email: '',
    message: '',
  });
  const [sponsorMessage, setSponsorMessage] = useState('');

  if (!activeModal) return null;

  const promoCode = 'CIRCUS-LIGHT-26';

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(promoCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 3000);
    } catch {
      setCopiedCode(false);
    }
  };

  const handleSponsorSubmit = (e) => {
    e.preventDefault();
    setSponsorMessage('¡Mensaje recibido! El equipo de Circus Folks te responderá a la brevedad.');
    setTimeout(() => {
      setSponsorMessage('');
      setSponsorForm({ organization: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      {activeModal === 'trailer' && (
        <div className="relative w-full max-w-4xl bg-[#121433] border-2 border-yellow-400 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/15">
            <span className="font-display-circus text-xl text-yellow-400">
              CIRCUS FOLKS — TRAILER
            </span>
            <button type="button" onClick={onClose} className="text-white/70 hover:text-white cursor-pointer">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="aspect-video bg-black flex flex-col items-center justify-center p-8 text-center">
            <Film className="w-16 h-16 text-yellow-400 mb-4 animate-pulse" />
            <p className="font-display-circus text-2xl text-white">PRÓXIMAMENTE</p>
            <p className="text-sm text-white/70 mt-2 max-w-md">
              Aquí puedes embeber el video oficial de YouTube o Vimeo cuando esté listo.
            </p>
          </div>
        </div>
      )}

      {activeModal === 'wishlist' && (
        <div className="relative w-full max-w-md bg-[#121433] border-2 border-yellow-400 rounded-2xl p-6 sm:p-8 text-center space-y-5">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400/20 border border-yellow-400 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="font-display-circus text-3xl text-white">COSMÉTICO GRATIS</h3>
          <p className="text-sm text-white/85 leading-relaxed">
            Agrega <strong>Circus Folks</strong> a tu Wishlist de Steam y usa este código para canjear tu cosmético de bienvenida:
          </p>
          <div className="bg-black/50 border border-dashed border-yellow-400 rounded-xl py-3 px-4 flex items-center justify-between">
            <code className="font-mono text-lg text-yellow-400 font-bold tracking-widest">
              {promoCode}
            </code>
            <button
              type="button"
              onClick={handleCopyCode}
              className="text-xs bg-yellow-400 text-[#1f2252] font-bold px-3 py-1.5 rounded-lg hover:bg-yellow-500 cursor-pointer"
            >
              {copiedCode ? 'Copiado' : 'Copiar'}
            </button>
          </div>
                    <a
                href="https://store.steampowered.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-[#1f2252] font-display-circus text-xl py-3.5 rounded-xl transition-all"
                >
                <SteamIcon className="w-6 h-6" />
                <span>IR A STEAM WISHLIST</span>
            </a>
        </div>
      )}

      {activeModal === 'contact' && (
        <div className="relative w-full max-w-lg bg-[#121433] border-2 border-yellow-400 rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display-circus text-2xl sm:text-3xl text-yellow-400">
              CONTACTANOS — SPONSORSHIP
            </h3>
            <button type="button" onClick={onClose} className="text-white/70 hover:text-white cursor-pointer">
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-sm text-white/80">
            Cuéntanos sobre tu marca, fondo o propuesta de inversión para recibir el Pitch Deck de Circus Folks.
          </p>
          <form onSubmit={handleSponsorSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                Nombre / Marca / Inversor
              </label>
              <input
                type="text"
                required
                value={sponsorForm.organization}
                onChange={(e) => setSponsorForm({ ...sponsorForm, organization: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                value={sponsorForm.email}
                onChange={(e) => setSponsorForm({ ...sponsorForm, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                Mensaje
              </label>
              <textarea
                rows={3}
                required
                value={sponsorForm.message}
                onChange={(e) => setSponsorForm({ ...sponsorForm, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#1f2252] font-display-circus text-xl py-3.5 rounded-xl transition-all cursor-pointer"
            >
              ENVIAR PROPUESTA
            </button>
          </form>
          {sponsorMessage && (
            <p className="text-center text-sm text-emerald-400 font-semibold">{sponsorMessage}</p>
          )}
        </div>
      )}
    </div>
  );
}