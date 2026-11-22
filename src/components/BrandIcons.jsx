import React from 'react';
import {
  FaYoutube,
  FaDiscord,
  FaTiktok,
  FaInstagram,
  FaSteam,
} from 'react-icons/fa6';

export function YouTubeIcon({ className = 'w-5 h-5' }) {
  return <FaYoutube className={className} aria-hidden="true" />;
}

export function DiscordIcon({ className = 'w-5 h-5' }) {
  return <FaDiscord className={className} aria-hidden="true" />;
}

export function TikTokIcon({ className = 'w-5 h-5' }) {
  return <FaTiktok className={className} aria-hidden="true" />;
}

export function InstagramIcon({ className = 'w-5 h-5' }) {
  return <FaInstagram className={className} aria-hidden="true" />;
}

export function SteamIcon({ className = 'w-5 h-5' }) {
  return <FaSteam className={className} aria-hidden="true" />;
}