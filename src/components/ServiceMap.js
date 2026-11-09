import {html,React,useState} from '../lib/h.js';

export const MAP_SRC='/images/service-map.jpg';
export const MapImage=({onZoom})=>html`<button type="button" onClick=${onZoom} aria-label="Enlarge service area map" className="relative block w-full cursor-zoom-in"><img src=${MAP_SRC} width="534" height="555" alt="Service area map: Zone 1 (gold) around Fontana, Zone 2 (blue) Extended Inland Empire, Zone 3 (green) Outer Service Area, Zone 4 (purple) Premium Travel Area including Orange County, Temecula and Murrieta" className="block w-full h-auto"/><span className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-black/80 border border-gold/70 px-3 py-1.5 text-sm font-semibold text-gold md:hidden"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M16 16l5 5M10.5 8v5M8 10.5h5"/></svg>Tap to enlarge</span></button>`;



