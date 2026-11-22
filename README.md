# Circus Folks — Landing Page

Landing page oficial promocional para **Circus Folks**, un videojuego indie de estrategia, simulación y supervivencia en primera persona ambientado tras *El Gran Apagón*. El proyecto está orientado a impulsar **wishlists en Steam**, el crecimiento de la comunidad y el contacto con sponsors o inversores.

## Stack Tecnológico

* **Framework / Bundler:** React + Vite (`base: '/circus-folks-landing/'` en `vite.config.js`)
* **Estilos:** Tailwind CSS + estilos personalizados en `src/styles/circus.css`
* **Iconografía:** `lucide-react` y `react-icons`
* **Tipografías:** `Sancreek` (títulos y display circense) y `Domine` (cuerpo de texto), cargadas desde Google Fonts en `index.html`
* **Despliegue:** GitHub Pages automatizado mediante GitHub Actions

## Identidad Visual

* **Paleta principal:** `#ee2a27` (rojo carpa), `#1f2252` (azul profundo) y `#facc15` (amarillo / dorado)
* **Estilo:** Estética de circo itinerante con franjas sutiles, bordes tipo marquesina y tarjetas con efecto entrada/boleto

## Estructura del Proyecto

circus-folks/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de build y despliegue a GitHub Pages
├── index.html
├── vite.config.js
└── src/
    ├── assets/                 # Imágenes y recursos gráficos importados por Vite
    ├── components/
    │   ├── BrandIcons.jsx      # Íconos de redes y plataformas (Steam, Discord, etc.)
    │   ├── Navbar.jsx          # Navegación superior y acceso rápido a Wishlist
    │   ├── HeroSection.jsx     # Portada, CTA principal, logo y destaque de Steam Wishlist
    │   ├── LoreAndCommunity.jsx# Historia ("El Gran Apagón") y canales de comunidad ("Join Us")
    │   ├── RewardsAndSupport.jsx# Cosméticos de bienvenida y apoyo en CafecitoApp
    │   ├── GameplayFeatures.jsx# Mecánicas cooperativas y planificación de roles
    │   ├── ConversionSections.jsx# Llamados a Wishlist, newsletter y contacto para sponsorship
    │   ├── Footer.jsx          # Créditos del equipo, enlaces y cierre
    │   └── Modals.jsx          # Modales interactivos (tráiler, código promo, contacto)
    ├── styles/
    │   └── circus.css
    ├── App.jsx
    └── main.jsx
