import {html,React,useState} from '../lib/h.js';
import {BookLink} from './BookLink.js';
import {Logo} from './ui.js';
import {IcoCal,IcoClock} from './icons.js';
import {LiveMap,MAP_ALT,MAP_SRC} from './ServiceMap.js';
import {SITE} from '../config/site.js';

export const rateRows=[{t:'MONDAY – FRIDAY',s:'After 5:00 PM',Ic:IcoClock,a:'$249',b:'$279',c:'$299'},{t:'WEEKENDS & HOLIDAYS',s:'All Day',Ic:IcoCal,a:'$289',b:'$319',c:'$349'}];
export const RateCard=({r})=>html`<div className="rounded-xl border border-gold/45 p-3"><div className="flex items-center gap-3"><${r.Ic} className="w-9 h-9 shrink-0"/><div><div className="font-semibold tracking-[.03em] text-[15px] leading-tight">${r.t}</div><div className="text-sm text-white/85">${r.s}</div></div></div><div className="grid grid-cols-3 gap-2 mt-3 text-center">${[['ZONE 1','(LOCAL)',r.a,'text-gold'],['ZONE 2','(EXTENDED)',r.b,'text-zb'],['ALL OTHER','ZONES',r.c,'text-zg']].map(([l,sl,p,c])=>html`<div key=${l} className="rounded-lg border border-gold/30 py-2 px-0.5"><div className=${'text-xs font-semibold leading-tight '+(l==='ZONE 2'?'text-zb':'')}>${l}</div><div className=${'text-[10px] leading-tight '+(l==='ZONE 2'?'text-zb':'text-white/85')}>${sl}</div><div className=${'font-head text-3xl font-semibold leading-none mt-1 '+c}>${p}</div></div>`)}</div></div>`;

export const Burger=({onClick,className=''})=>html`<button type="button" onClick=${onClick} aria-label="Open menu" aria-haspopup="dialog" className=${'md:hidden w-11 h-11 flex items-center justify-center rounded border border-gold/60 text-gold bg-black/60 '+className}><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>`;

export const useLock=(onClose)=>{React.useEffect(()=>{const k=e=>{if(e.key==='Escape')onClose()};document.addEventListener('keydown',k);const prev=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.removeEventListener('keydown',k);document.body.style.overflow=prev}},[])};

export function MobileMenu({onClose,onBook}){
 useLock(onClose);
 const links=[['Services','#services'],['Repair','#repair'],['Installation','#installation'],['Maintenance','#maintenance'],['Indoor Air Quality','#indoor-air-quality'],['About Us','#about-us'],['Reviews','#reviews'],['Financing','#financing'],['Contact Us','#contact-us']];
 return html`<div role="dialog" aria-modal="true" aria-label="Site menu" className="fixed inset-0 z-[55] bg-[#030303] overflow-y-auto md:hidden pb-sticky">
  <div className="flex items-center justify-between p-3"><${Logo} small=${true}/><button type="button" onClick=${onClose} aria-label="Close menu" className="w-11 h-11 rounded border border-gold/60 text-gold text-2xl">✕</button></div>
  <nav aria-label="Main" className="mx-3 border-y border-gold/45 divide-y divide-gold/25">${links.map(([t,h])=>html`<a key=${t} href=${h} onClick=${onClose} className="block py-4 font-head font-semibold uppercase text-2xl tracking-[.03em]">${t}</a>`)}</nav>
  <div className="p-3 grid gap-3"><a href=${SITE.phoneHref} className="flex items-center justify-center gap-2 min-h-[52px] rounded border-[1.5px] border-gold text-gold font-head font-bold uppercase text-xl">Call Now · 909-582-0902</a><${BookLink} onBook=${()=>{onClose();onBook()}} className="flex items-center justify-center min-h-[52px] rounded bg-[linear-gradient(180deg,#c99a4a,#b98b43)] text-[#120800] font-head font-bold uppercase text-xl"/>${SITE.depositNotice?html`<p className="text-center text-sm text-gold">${SITE.depositNotice}</p>`:null}</div></div>`;
}

export const StickyBar=({onBook})=>html`<div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-black border-t-2 border-gold/60 px-3 pt-2 grid grid-cols-2 gap-3" style=${{paddingBottom:'calc(8px + env(safe-area-inset-bottom, 0px))'}}>
 <a href=${SITE.phoneHref} className="flex flex-col items-center justify-center min-h-[56px] rounded border-[1.5px] border-gold text-gold leading-none"><span className="font-head font-bold uppercase text-xl tracking-[.03em]">Call Now</span><span className="text-sm mt-1 text-white">909-582-0902</span></a>
 <${BookLink} onBook=${onBook} className="flex items-center justify-center min-h-[56px] rounded bg-[linear-gradient(180deg,#c99a4a,#b98b43)] text-[#120800] font-head font-bold uppercase text-xl tracking-[.02em] text-center leading-none px-2"/></div>`;

export function MapLightbox({onClose}){
 useLock(onClose);
 const [live,setLive]=useState('load');
 return html`<div role="dialog" aria-modal="true" aria-label="Service area map, enlarged" className="fixed inset-0 z-[60] bg-black/95 flex flex-col">
  <div className="flex items-center justify-between px-4 py-2 border-b border-gold/45"><span className="font-head text-xl text-gold uppercase tracking-[.03em]">Our Service Areas</span><button type="button" onClick=${onClose} aria-label="Close map" className="w-11 h-11 text-2xl text-gold">✕</button></div>
  <div className="flex-1 relative min-h-0">
   ${live!=='fail'?html`<${LiveMap} interactive=${true} onReady=${()=>setLive('ready')} onFail=${()=>setLive('fail')} className="absolute inset-0"/>`:null}
   ${live!=='ready'?html`<div className="absolute inset-0 overflow-auto bg-black" style=${{touchAction:'pan-x pan-y pinch-zoom',WebkitOverflowScrolling:'touch'}}><img src=${MAP_SRC} alt=${MAP_ALT} className="block max-w-none w-[900px] md:w-full md:max-w-[900px] mx-auto"/></div>`:null}
  </div>
  <p className="text-center text-sm py-2 text-white/80">${live==='ready'?'Drag to move · pinch or use + / − to zoom · tap a dot for the city':'Pinch or drag to explore the map'}</p></div>`;
}

