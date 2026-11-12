import {html,React,useState} from '../lib/h.js';
import {BookLink} from './BookLink.js';
import {Panel} from './ui.js';
import {IcoGear} from './icons.js';
import {zones} from './Sections.js';
import {SITE} from '../config/site.js';

/* ---------- Find-your-price + benefits (interactive) ---------- */
const IcoAir=({className=''})=>html`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className=${className} aria-hidden="true"><path d="M5 18h25a6 6 0 1 0-6-6"/><path d="M5 27h33a6 6 0 1 1-6 6"/><path d="M5 36h15"/></svg>`;
const IcoHouse=({className=''})=>html`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className=${className} aria-hidden="true"><path d="M5 23 24 8l19 15"/><path d="M11 20v21h26V20"/><path d="M20 41V29h8v12"/></svg>`;
const CITIES=zones.flatMap((z,i)=>z.inc.split(',').map(s=>({city:s.trim(),zi:i}))).sort((a,b)=>a.city.localeCompare(b.city));
const ZCOL=[{t:'text-gold',b:'border-gold/70'},{t:'text-zb',b:'border-zb/70'},{t:'text-zg',b:'border-zg/70'},{t:'text-zp',b:'border-zp/70'}];
export const PriceFinder=({onBook})=>{
 const [city,setCity]=useState('');
 const hit=CITIES.find(c=>c.city===city);const z=hit?zones[hit.zi]:null;
 const btn='flex items-center justify-center bg-[linear-gradient(180deg,#c99a4a,#b98b43)] text-[#120800] font-head font-bold uppercase text-xl tracking-[.02em] rounded-[4px] min-h-[52px] px-6 w-full text-center';
 return html`<${Panel} id="price-finder" className="p-4 sm:p-6 scroll-mt-4">
  <h2 className="font-head font-semibold uppercase text-2xl sm:text-3xl text-center leading-none">SEE YOUR PRICE <span className="text-gold">UPFRONT</span></h2>
  <p className="text-center text-sm sm:text-base mt-2 text-white/90">No surprises. Choose your city and see exactly what your diagnostic costs before you book.</p>
  <div className="mt-4 grid gap-4 items-start">
   <div className="space-y-4">
    <div><label htmlFor="pf-city" className="block font-head font-semibold uppercase tracking-[.03em] text-gold text-lg mb-1">Choose your city</label>
     <select id="pf-city" value=${city} onChange=${e=>setCity(e.target.value)} className="w-full min-h-[48px] rounded bg-black border border-gold/60 px-3 text-[16px] text-white focus:outline-none focus:border-gold"><option value="">Select your city…</option>${CITIES.map(c=>html`<option key=${c.city} value=${c.city}>${c.city}</option>`)}</select></div>
    <p className="text-sm text-white/80">Don't see your city? Call <a href=${SITE.phoneHref} className="text-gold underline">${SITE.phoneDisplay}</a> and we'll quickly confirm your price.</p>
   </div>
   <div aria-live="polite">${z?html`<div className=${'rounded-xl border-2 bg-black p-4 text-center '+ZCOL[hit.zi].b}>
     <div className="text-sm text-white/85">${hit.city} diagnostic · ${z.n}</div>
     <div className=${'font-head font-semibold uppercase text-2xl leading-tight '+ZCOL[hit.zi].t}>${z.t}</div>
     <div className="font-head font-bold text-7xl leading-none mt-2">${z.p}</div>
     <div className=${'font-head font-semibold text-xl tracking-[.04em] '+ZCOL[hit.zi].t}>UPFRONT DIAGNOSTIC PRICE</div>
     <div className="text-sm font-medium mt-1 tracking-[.02em]">${z.w}</div>
     <div className="mt-4"><${BookLink} onBook=${onBook} className=${btn}/></div>
     ${SITE.depositNotice?html`<p className="mt-2 text-sm text-gold">${SITE.depositNotice}</p>`:null}
    </div>`:html`<div className="rounded-xl border-2 border-dashed border-gold/40 p-6 text-center text-white/80 min-h-[160px] flex items-center justify-center">Choose your city and your price appears here.</div>`}</div>
  </div><//>`;
};
const BENEFITS=[
 {id:'air',tab:'Indoor Air Quality',Ic:IcoAir,head:'Healthier homes start with cleaner air',body:'The air you breathe at home matters. A well-maintained system keeps fresh, comfortable air moving through every room.',pts:['Cleaner, fresher air through your home','A healthier place for your family to live','Equipment that stays clean and working properly']},
 {id:'eff',tab:'System Efficiency',Ic:IcoGear,head:'A system that works smarter, not harder',body:'When every part of your system does its job, you get the comfort you expect without the guesswork. Precise diagnostics fix the real problem the first time.',pts:['The real problem found and fixed the first time','A system that runs the way it was built to','Fewer surprises when the seasons change']},
 {id:'cmf',tab:'Lasting Comfort',Ic:IcoHouse,head:'Comfort that is an investment in your home',body:'Quality parts and expert workmanship protect the comfort of your home for the long run. Your comfort is our priority.',pts:['Steady comfort, season after season','Built to last and backed by warranty','Licensed & insured — Lic# 1039013']},
];
export const Benefits=({onBook})=>{
 const [id,setId]=useState('air');const b=BENEFITS.find(x=>x.id===id);
 const btn='flex items-center justify-center bg-[linear-gradient(180deg,#c99a4a,#b98b43)] text-[#120800] font-head font-bold uppercase text-xl tracking-[.02em] rounded-[4px] min-h-[52px] px-6 w-full sm:w-auto text-center';
 return html`<${Panel} id="comfort" className="p-4 sm:p-6 scroll-mt-4">
  <h2 className="font-head font-semibold uppercase text-2xl sm:text-3xl text-center leading-none">COMFORT THAT'S <span className="text-gold">AN INVESTMENT</span></h2>
  <p className="text-center text-sm sm:text-base mt-2 text-white/90">Quality service for cleaner air, an efficient system and a more comfortable home.</p>
  <div role="tablist" aria-label="Benefits" className="mt-4 grid grid-cols-3 gap-2">${BENEFITS.map(x=>html`<button key=${x.id} type="button" role="tab" id=${'bt-'+x.id} aria-selected=${id===x.id} aria-controls="bt-panel" onClick=${()=>setId(x.id)} className=${'min-h-[72px] rounded-lg border px-1 py-2 flex flex-col items-center justify-center gap-1 font-head font-semibold uppercase leading-tight text-[13px] min-[400px]:text-sm sm:text-lg tracking-[.02em] '+(id===x.id?'border-gold bg-gold/15 text-gold':'border-gold/40 text-white bg-black')}><${x.Ic} className="w-8 h-8 text-gold"/><span>${x.tab}</span></button>`)}</div>
  <div id="bt-panel" role="tabpanel" aria-labelledby=${'bt-'+id} className="mt-4 rounded-xl border border-gold/45 bg-black p-4 sm:p-6">
   <h3 className="font-head font-semibold uppercase text-2xl sm:text-3xl text-gold leading-tight">${b.head}</h3>
   <p className="mt-2 text-base text-white/90">${b.body}</p>
   <ul className="mt-3 space-y-2">${b.pts.map(p=>html`<li key=${p} className="flex gap-2 items-start"><span className="text-gold mt-0.5" aria-hidden="true">✔</span><span>${p}</span></li>`)}</ul>
   <div className="mt-4"><${BookLink} onBook=${onBook} className=${btn}/></div>
  </div><//>`;
};

export const InviteBanner=({onBook})=>html`<section aria-label="Book your visit" className="rounded-[10px] border-2 border-gold/60 bg-black px-4 py-5 sm:px-8 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
  <p className="font-head font-semibold uppercase text-2xl sm:text-3xl leading-tight tracking-[.01em]">Cooler summers, cozier winters, <span className="text-gold">and a system you can trust.</span> Let’s get started.</p>
  <${BookLink} onBook=${onBook} className="shrink-0 flex items-center justify-center bg-[linear-gradient(180deg,#c99a4a,#b98b43)] text-[#120800] font-head font-bold uppercase text-xl tracking-[.02em] rounded-[4px] min-h-[52px] px-8 w-full md:w-auto text-center"/>
</section>`;

