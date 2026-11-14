import {html,React,useState} from '../lib/h.js';
import {BookLink} from './BookLink.js';
import {Panel} from './ui.js';
import {zones} from './Sections.js';
import {SITE} from '../config/site.js';
const CITIES=zones.flatMap((z,i)=>z.inc.split(',').map(s=>({city:s.trim(),zi:i}))).sort((a,b)=>a.city.localeCompare(b.city));
const ZCOL=[{t:'text-gold',b:'border-gold/70'},{t:'text-zb',b:'border-zb/70'},{t:'text-zg',b:'border-zg/70'},{t:'text-zp',b:'border-zp/70'}];
const IA_BTN='flex items-center justify-center bg-[linear-gradient(180deg,#c99a4a,#b98b43)] text-[#120800] font-head font-bold uppercase text-xl tracking-[.02em] rounded-[4px] min-h-[52px] px-6 w-full text-center';
const IA_H2='font-head font-semibold uppercase text-2xl sm:text-3xl text-center leading-none';

/* ---------- 1. Instant service-area check (replaces the price finder) ---------- */
export const ServiceAreaCheck=({onBook})=>{
 const [q,setQ]=useState('');
 const s=q.trim().toLowerCase();
 const exact=CITIES.find(c=>c.city.toLowerCase()===s);
 const matches=s&&!exact?CITIES.filter(c=>c.city.toLowerCase().includes(s)).slice(0,6):[];
 const isZip=/^\d{5}$/.test(s);
 const z=exact?zones[exact.zi]:null;
 return html`<${Panel} id="service-check" className="p-4 sm:p-6 scroll-mt-4">
  <h2 className=${IA_H2}>DO WE SERVE <span className="text-gold">YOUR AREA?</span></h2>
  <p className="text-center text-sm sm:text-base mt-2 text-white/90">Type your city and find out instantly.</p>
  <div className="mt-4">
   <label htmlFor="sa-q" className="block font-head font-semibold uppercase tracking-[.03em] text-gold text-lg mb-1">Your city</label>
   <input id="sa-q" type="text" inputMode="text" autoComplete="off" value=${q} onInput=${e=>setQ(e.target.value)} placeholder="e.g. Fontana" className="w-full min-h-[48px] rounded bg-black border border-gold/60 px-3 text-[16px] text-white placeholder:text-white/40 focus:outline-none focus:border-gold"/>
   ${matches.length?html`<ul className="mt-2 flex flex-wrap gap-2">${matches.map(m=>html`<li key=${m.city}><button type="button" onClick=${()=>setQ(m.city)} className="min-h-[44px] px-4 rounded-full border border-gold/60 text-white hover:bg-gold/15">${m.city}</button></li>`)}</ul>`:null}
  </div>
  <div className="mt-4" aria-live="polite">${z?html`<div className=${'rounded-xl border-2 bg-black p-4 text-center '+ZCOL[exact.zi].b}>
    <div className="font-head font-semibold uppercase text-2xl leading-tight text-white"><span aria-hidden="true">✔ </span>Yes, we serve ${exact.city}</div>
    <div className=${'font-head font-semibold uppercase text-lg tracking-[.03em] mt-1 '+ZCOL[exact.zi].t}>${z.n} · ${z.t}</div>
    <div className="mt-4"><${BookLink} onBook=${onBook} className=${IA_BTN}/></div>
   </div>`:isZip?html`<div className="rounded-xl border-2 border-gold/50 bg-black p-4 text-center"><p>We confirm ZIP codes by phone. Call <a href=${SITE.phoneHref} className="text-gold underline">${SITE.phoneDisplay}</a> and we will let you know right away.</p></div>`
   :s&&!matches.length?html`<div className="rounded-xl border-2 border-gold/50 bg-black p-4 text-center"><p>We don’t see that city on our list yet, but we may still be able to help. Call <a href=${SITE.phoneHref} className="text-gold underline">${SITE.phoneDisplay}</a> to confirm.</p></div>`
   :html`<div className="rounded-xl border-2 border-dashed border-gold/40 p-5 text-center text-white/80 min-h-[120px] flex items-center justify-center">Your answer appears here.</div>`}</div>
 <//>`;
};

/* ---------- 2. "What's wrong with my system?" quick checker ---------- */
const SYMPTOMS=[
 {id:'cool',label:'Not cooling',causes:['Dirty air filter or restricted airflow','Outdoor unit issue such as a failing capacitor or contactor','Low refrigerant or a frozen evaporator coil'],tip:'Make sure the thermostat is set to Cool and replace a dirty filter. If you see ice on the lines, turn the system off and let it thaw.'},
 {id:'heat',label:'Not heating',causes:['Thermostat settings or a dirty air filter','Ignition or flame sensor problem','Blower motor or control board issue'],tip:'Check that the thermostat is set to Heat and the filter is clean. If you ever smell gas, leave the home and call your gas company or 911.'},
 {id:'noise',label:'Strange noise',causes:['Squealing: a worn belt or motor bearing','Banging or rattling: a loose or broken part','Clicking: an electrical relay or ignition issue'],tip:'Note when the noise happens (startup, running, shutdown). Turn the system off if the noise is loud or getting worse.'},
 {id:'bill',label:'High energy bill',causes:['Dirty filter or coils making the system work harder','Duct leaks or low airflow','Aging or poorly maintained equipment'],tip:'Replace the filter and keep vents open. A tune-up can spot what is making the system run longer than it should.'},
 {id:'air',label:'Weak airflow',causes:['Clogged air filter','Blocked or closed vents and returns','Blower motor or ductwork problem'],tip:'Check the filter and make sure vents are open and unblocked by furniture.'},
 {id:'leak',label:'Water leak',causes:['Clogged condensate drain line','Frozen evaporator coil that is melting','Drain pan issue'],tip:'Turn the system off to prevent water damage and wipe up standing water.'},
];
export const SymptomChecker=({onBook})=>{
 const [id,setId]=useState('');
 const sy=SYMPTOMS.find(x=>x.id===id);
 return html`<${Panel} id="symptom-check" className="p-4 sm:p-6 scroll-mt-4">
  <h2 className=${IA_H2}>WHAT’S WRONG WITH <span className="text-gold">MY SYSTEM?</span></h2>
  <p className="text-center text-sm sm:text-base mt-2 text-white/90">Tap what you’re noticing.</p>
  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2" role="group" aria-label="Symptoms">${SYMPTOMS.map(x=>html`<button key=${x.id} type="button" aria-pressed=${id===x.id} onClick=${()=>setId(x.id)} className=${'min-h-[56px] rounded-lg border px-2 py-2 font-head font-semibold uppercase text-base sm:text-lg leading-tight tracking-[.02em] '+(id===x.id?'border-gold bg-gold/15 text-gold':'border-gold/40 text-white bg-black')}>${x.label}</button>`)}</div>
  <div className="mt-4" aria-live="polite">${sy?html`<div className="rounded-xl border-2 border-gold/60 bg-black p-4">
    <h3 className="font-head font-semibold uppercase text-xl text-gold">Common causes</h3>
    <ul className="mt-2 space-y-1.5">${sy.causes.map(c=>html`<li key=${c} className="flex gap-2 items-start"><span className="text-gold" aria-hidden="true">•</span><span>${c}</span></li>`)}</ul>
    <h3 className="font-head font-semibold uppercase text-xl text-gold mt-3">Safe first step</h3>
    <p className="mt-1 text-white/90">${sy.tip}</p>
    <p className="mt-3 text-sm text-white/70">These are common causes only. A technician has to confirm what is actually wrong.</p>
    <div className="mt-4"><${BookLink} onBook=${onBook} className=${IA_BTN}/></div>
   </div>`:html`<div className="rounded-xl border-2 border-dashed border-gold/40 p-5 text-center text-white/80 min-h-[120px] flex items-center justify-center">Pick a symptom to see what it could mean.</div>`}</div>
 <//>`;
};

/* ---------- 3. Before / after comparison slider ---------- */
export const BeforeAfter=()=>{
 const cfg=SITE.beforeAfter||{};
 const P=SITE.installPhotos||[];
 const b=cfg.beforeSrc||P[cfg.beforeIdx],a=cfg.afterSrc||P[cfg.afterIdx];
 const [v,setV]=useState(50);
 if(!b||!a) return null;
 const bs=typeof b==='string'?b:b.src, as=typeof a==='string'?a:a.src;
 return html`<${Panel} id="before-after" className="p-4 sm:p-6 scroll-mt-4">
  <h2 className=${IA_H2}>SEE THE <span className="text-gold">DIFFERENCE</span></h2>
  <p className="text-center text-sm sm:text-base mt-2 text-white/90">Drag the slider to compare.</p>
  <div className="relative mt-4 mx-auto w-full max-w-[360px] overflow-hidden rounded-lg border border-gold/50 bg-black select-none" style=${{aspectRatio:cfg.aspect||'3 / 4'}}>
   <img src=${as} alt=${cfg.afterLabel||'After'} className="absolute inset-0 w-full h-full object-cover" style=${{objectPosition:cfg.afterPos||'50% 50%'}}/>
   <img src=${bs} alt=${cfg.beforeLabel||'Before'} className="absolute inset-0 w-full h-full object-cover" style=${{clipPath:'inset(0 '+(100-v)+'% 0 0)',objectPosition:cfg.beforePos||'50% 50%'}}/>
   <div className="absolute top-0 bottom-0 w-[3px] bg-gold pointer-events-none" style=${{left:'calc('+v+'% - 1.5px)'}}><span className="absolute top-1/2 -translate-y-1/2 -left-4 w-[35px] h-[35px] rounded-full bg-gold text-black font-bold flex items-center justify-center" aria-hidden="true">↔</span></div>
   <span className="absolute top-2 left-2 bg-black/75 text-gold font-head uppercase tracking-[.04em] px-2 py-0.5 rounded text-sm">${cfg.beforeLabel||'Before'}</span>
   <span className="absolute top-2 right-2 bg-black/75 text-gold font-head uppercase tracking-[.04em] px-2 py-0.5 rounded text-sm">${cfg.afterLabel||'After'}</span>
   <input type="range" min="0" max="100" value=${v} onInput=${e=>setV(+e.target.value)} aria-label="Compare before and after" className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize" style=${{touchAction:'pan-y'}}/>
  </div><//>`;
};

/* ---------- 4. Time-of-day banner ---------- */
export const TimeBanner=({onBook})=>{
 const h=new Date().getHours(); const night=h>=20||h<7;
 return html`<section aria-label=${night?'Need help tonight':'Book today'} className="rounded-[10px] border border-gold/60 bg-black px-4 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
  <p className="font-head font-semibold uppercase text-lg sm:text-xl tracking-[.02em]">${night?html`Need help tonight? <span className="text-gold">Call now.</span>`:html`AC or heat acting up? <span className="text-gold">Book your visit today.</span>`}</p>
  ${night?html`<a href=${SITE.phoneHref} className="flex items-center justify-center font-head font-bold uppercase text-lg bg-[linear-gradient(180deg,#c99a4a,#b98b43)] text-[#120800] rounded-[4px] min-h-[44px] px-6">${SITE.phoneDisplay}</a>`:html`<${BookLink} onBook=${onBook} className="flex items-center justify-center font-head font-bold uppercase text-lg bg-[linear-gradient(180deg,#c99a4a,#b98b43)] text-[#120800] rounded-[4px] min-h-[44px] px-6"/>`}
 </section>`;
};

/* ---------- 5. Seasonal checklist + reminder signup ---------- */
const SEASONS={
 summer:{tab:'Summer cooling',items:['Replace or clean your air filter','Clear leaves and debris from around the outdoor unit','Make sure vents and returns are not blocked','Test the thermostat on Cool before the heat arrives','Schedule an AC tune-up before peak season']},
 winter:{tab:'Winter heating',items:['Replace or clean your air filter','Test the thermostat on Heat before it gets cold','Keep vents, returns and the area around the furnace clear','Watch for unusual smells or noises on the first startup','Schedule a heating tune-up before cold weather']},
};
export const SeasonChecklist=()=>{
 const [s,setS]=useState('summer'); const [done,setDone]=useState({});
 const list=SEASONS[s].items; const n=list.filter((_,i)=>done[s+i]).length;
 const mail='mailto:'+SITE.email+'?subject='+encodeURIComponent('Tune-up reminders')+'&body='+encodeURIComponent('Hi, please send me seasonal tune-up reminders.\n\nName:\nCity:');
 return html`<${Panel} id="season-check" className="p-4 sm:p-6 scroll-mt-4">
  <h2 className=${IA_H2}>SEASONAL <span className="text-gold">CHECKLIST</span></h2>
  <p className="text-center text-sm sm:text-base mt-2 text-white/90">Quick steps to keep your system ready.</p>
  <div role="tablist" aria-label="Season" className="mt-4 grid grid-cols-2 gap-2">${Object.entries(SEASONS).map(([k,v])=>html`<button key=${k} type="button" role="tab" aria-selected=${s===k} onClick=${()=>setS(k)} className=${'min-h-[48px] rounded-lg border font-head font-semibold uppercase text-base sm:text-lg tracking-[.02em] '+(s===k?'border-gold bg-gold/15 text-gold':'border-gold/40 text-white bg-black')}>${v.tab}</button>`)}</div>
  <ul className="mt-4 space-y-1">${list.map((t,i)=>html`<li key=${s+i}><label className="flex gap-3 items-start min-h-[44px] py-2 cursor-pointer"><input type="checkbox" checked=${!!done[s+i]} onChange=${()=>setDone(d=>({...d,[s+i]:!d[s+i]}))} className="mt-1 w-5 h-5 accent-[#c99a4a] shrink-0"/><span className=${done[s+i]?'line-through text-white/50':''}>${t}</span></label></li>`)}</ul>
  <p className="mt-2 text-gold font-head font-semibold uppercase tracking-[.03em]" aria-live="polite">${n} of ${list.length} done</p>
  <div className="mt-4 grid sm:grid-cols-2 gap-3"><a href=${mail} className=${IA_BTN}>Email me tune-up reminders</a><a href="#maintenance" className="flex items-center justify-center rounded-[4px] border-2 border-gold text-gold font-head font-bold uppercase text-xl min-h-[52px] px-6 text-center">See Comfort Club</a></div>
 <//>`;
};
