import {html,React,useState} from '../lib/h.js';
import {BookLink} from './BookLink.js';
import {Logo,Panel} from './ui.js';
import {Burger} from './Mobile.js';
import {SITE} from '../config/site.js';

export const pages={'our-services':'Services','repair':'Repair','installation':'Installation','maintenance':'Maintenance','indoor-air-quality':'Indoor Air Quality','about-us':'About Us','reviews':'Reviews','financing':'Financing','builders':'Property Managers & Builders','contact-us':'Contact Us'};
const REVIEWS=[
 [
  "Curt Saczalski",
  "I installed 2 mini splits myself. I hired Jesus to come pressure test the lines, he fixed a couple issues and got the system up and running in no time. His price was very fair. Highly recommend, Jesus saved me a lot of money and time."
 ],
 [
  "Jacques Gravett",
  "HIGHLY RECOMMEND EXCELLENT SERVICE!! Jesus Rodriguez Hvac Mechanical analyzed my A/C problem and gave his recommendations. He found the source of the problem as to why my A/C was not working. He repaired it the same day within a couple of hours then proceeded to check it to make it was working properly which it now is. He was professional, on time, and reasonably priced. I recommend giving him a call to access your A/C problems first before doing anything else. Thank you Jesus!"
 ],
 [
  "Asul003",
  "Jesus is exceptionally skilled, professional, and—most importantly—honest. I’ve been relying on him for nearly two decades across multiple properties, and his expertise and perfectionism never disappoint. Whether it’s appliance repair or …"
 ],
 [
  "Kyle Millager",
  "Jesus is absolutely amazing, honest, punctual, and passionate about his work. He came with a moments notice to help us out and provide an estimate when we were told our whole system needed replacing by another company. All our system needed was a part replaced. He literally saved us over $25,000 (which is what we were quoted for a new system). Yes, there are some really shady companies out there. Jesus is not one of them. We highly recommend him."
 ],
 [
  "Abdallah Jadallah",
  "Been using Jesus for over a decade. I won’t use anyone else. If Jesus is busy, I will wait until he is available. Quality work for a reasonable price. I have used Jesus for my apartments, commercial building, and personal home. Jesus does it all!"
 ],
 [
  "Cody Demma",
  "My ac took a dump and wasnt cooling anymore, he came by to do repairs and was very transparent and kept me informed during each step of the work he performed. Very easy to schedule and thorough with his work!"
 ],
 [
  "David Stolls",
  "We have used Jesus Rodriguez twice in the past, several years ago, for 2 unrelated furnace problems. Jesus was totally communicative, prompt, courteous and explained EVERYTHING in very easy to understand language. He was very patient and understanding. He charged us a very reasonable rate. Recently we had an a/c problem and were so happy to find that Jesus was still around. Again communicative, honest, sooooo decent, and reliable. He drove from Ontario to Riverside the same day we called him and fixed everything beautifully and orderly. We understand he is working to expand his knowledge in related fields and we can't wait. Jesus will be an asset to any related trade he gets involved in. Terrific attitude, friendly, always smiling, knowledgeable and excellent ability to communicate."
 ],
 [
  "Vicky Hsu",
  "We just installed a mini splits with other HVAC guy. The units works fine for the first couple of weeks, then doesn’t work. We have to turn on both mini splits units in order to get cold air which defeats the purpose for the mini splits. The original mechanics came 3 times and still can’t fix the problems. Jesus only spent couple hours and fixed the problems. It’s been couple days after he fixed the units, the units are running perfectly without any issues. We are glad that we found Jesus. He is very nice and responsible person; we highly recommend him."
 ]
];
const ReviewList=()=>html`<div className="mt-5">
 <div className="flex flex-wrap items-center gap-x-3 gap-y-1"><span className="font-head font-bold text-5xl text-gold leading-none">5.0</span><span className="text-gold text-2xl tracking-widest" aria-label="5 out of 5 stars">★★★★★</span><span className="text-base">8 Google reviews</span></div>
 <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">${REVIEWS.map(([n,t])=>html`<figure key=${n} className="rounded-xl border border-gold/45 bg-ink p-4"><div className="text-gold tracking-widest" aria-hidden="true">★★★★★</div><blockquote className="mt-2 text-base leading-snug">${t}</blockquote><figcaption className="mt-3 font-head font-semibold uppercase tracking-wide text-gold">${n}</figcaption></figure>`)}</div>
 ${SITE.googleUrl?html`<a href=${SITE.googleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-5 min-h-[44px] text-gold underline">See all reviews on Google</a>`:null}
</div>`;
const PartnerPage=()=>{
 const [sent,setSent]=useState(false); const [d,setD]=useState({});
 const set=k=>e=>setD({...d,[k]:e.target.value});
 const pin='w-full min-h-[44px] rounded bg-black border border-gold/50 px-3 text-base text-white focus:outline-none focus:border-gold';
 const body=['Name: '+d.name,'Company: '+(d.co||''),'Phone: '+d.phone,'Email: '+d.email,'Property type: '+d.type,'Number of units: '+(d.units||''),'Property address / city: '+d.addr,'What you need: '+(d.msg||'')].join('\n');
 const mail='mailto:'+SITE.email+'?subject='+encodeURIComponent('Bid request – '+(d.name||''))+'&body='+encodeURIComponent(body);
 const L=(t,id,full,child)=>html`<div className=${full?'sm:col-span-2':''}><label htmlFor=${id} className="block text-sm font-semibold mb-1">${t}</label>${child}</div>`;
 return html`<div className="mt-3">
  <p className="text-lg sm:text-xl text-white/90 max-w-[760px]">Reliable HVAC service for property managers, investors and builders. Quick scheduling, and we back our work.</p>
  <div className="mt-5 grid md:grid-cols-2 gap-4">
   <div className="rounded-xl border border-gold/60 bg-ink p-5"><h2 className="font-head font-semibold uppercase text-2xl text-gold">Quick Scheduling</h2><p className="mt-2 text-white/90">Tell us what you need and we get you on the schedule quickly, so your units and projects stay on track.</p></div>
   <div className="rounded-xl border border-gold/60 bg-ink p-5"><h2 className="font-head font-semibold uppercase text-2xl text-gold">We Back Our Work</h2><p className="mt-2 text-white/90">Quality parts and expert workmanship on every job, and we stand behind what we do.</p></div>
  </div>
  <div className="mt-4 grid sm:grid-cols-3 gap-3 text-center">
   <div className="rounded-lg border border-gold/40 p-3"><div className="font-head font-bold text-2xl text-gold">LICENSED</div><div className="text-sm text-white/85">Lic# ${SITE.license||'1039013'}</div></div>
   <div className="rounded-lg border border-gold/40 p-3"><div className="font-head font-bold text-2xl text-gold">5.0 ★★★★★</div><div className="text-sm text-white/85">on Google · 8 reviews</div></div>
   <div className="rounded-lg border border-gold/40 p-3"><div className="font-head font-bold text-2xl text-gold">HONEST PRICING</div><div className="text-sm text-white/85">Quality work, every time</div></div>
  </div>
  <figure className="mt-4 rounded-xl border border-gold/45 bg-ink p-4"><div className="text-gold tracking-widest" aria-hidden="true">★★★★★</div><blockquote className="mt-1 text-white/90">“Been using Jesus for over a decade. I won’t use anyone else. If Jesus is busy, I will wait until he is available. Quality work for a reasonable price. I have used Jesus for my apartments, commercial building, and personal home. Jesus does it all!”</blockquote><figcaption className="mt-2 text-sm text-gold">— Abdallah Jadallah, Google review</figcaption></figure>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">Request a <span className="text-gold">Bid</span></h2>
  <p className="text-white/85 mt-1">Tell us about the property and what you need. Prefer to talk? Call <a href=${SITE.phoneHref} className="text-gold underline">${SITE.phoneDisplay}</a>.</p>
  ${sent?html`<div className="mt-4 space-y-3 max-w-xl"><p>Your request is ready. Tap below to send it to Rodriguez HVAC Mechanical by email, or call us directly.</p><a href=${mail} className="block text-center bg-gold text-black font-head font-bold uppercase text-xl py-3 rounded-sm min-h-[44px]">Send Request by Email</a><a href=${SITE.phoneHref} className="block text-center border border-gold text-gold font-head font-bold uppercase text-xl py-3 rounded-sm min-h-[44px]">Call ${SITE.phoneDisplay}</a></div>`:
  html`<form className="mt-4 grid sm:grid-cols-2 gap-3 max-w-2xl" onSubmit=${e=>{e.preventDefault();setSent(true)}}>
   ${L('Full name','b-name',false,html`<input id="b-name" required autoComplete="name" className=${pin} value=${d.name||''} onChange=${set('name')}/>`)}
   ${L('Company (optional)','b-co',false,html`<input id="b-co" autoComplete="organization" className=${pin} value=${d.co||''} onChange=${set('co')}/>`)}
   ${L('Phone','b-phone',false,html`<input id="b-phone" type="tel" required autoComplete="tel" className=${pin} value=${d.phone||''} onChange=${set('phone')}/>`)}
   ${L('Email','b-email',false,html`<input id="b-email" type="email" required autoComplete="email" className=${pin} value=${d.email||''} onChange=${set('email')}/>`)}
   ${L('Property type','b-type',false,html`<select id="b-type" required className=${pin} value=${d.type||''} onChange=${set('type')}><option value="">Select…</option>${['Single-family rental','Apartments / multi-unit','Commercial building','New construction','Other'].map(o=>html`<option key=${o}>${o}</option>`)}</select>`)}
   ${L('Number of units (optional)','b-units',false,html`<input id="b-units" inputMode="numeric" className=${pin} value=${d.units||''} onChange=${set('units')}/>`)}
   ${L('Property address or city','b-addr',true,html`<input id="b-addr" required className=${pin} value=${d.addr||''} onChange=${set('addr')}/>`)}
   ${L('What do you need?','b-msg',true,html`<textarea id="b-msg" rows="3" className=${pin+' py-2'} value=${d.msg||''} onChange=${set('msg')}></textarea>`)}
   <button type="submit" className="sm:col-span-2 bg-gold text-black font-head font-bold uppercase text-xl py-3 rounded-sm min-h-[44px]">Continue</button></form>`}
 </div>`;
};
const PLANS=[
 {name:'Comfort Club Essential',sub:'One system, AC or heating',visits:'1 tune-up per year (your choice of AC or heating)'},
 {name:'Comfort Club Complete',sub:'Whole-home comfort',visits:'2 tune-ups per year: AC in spring, heating in fall',best:true}
];
const PERKS=['Priority scheduling, ahead of new calls','No-Risk Diagnosis fee always waived for members','10% off repairs','Give $50, Get $50 referral credits, usable toward renewal','Renewal credit after your second year','Seasonal reminder texts with one-tap booking','We back our work'];
const ACLIST=['Check refrigerant pressures and temperature split','Inspect and clean the outdoor coil','Test capacitor, contactor and motor amperage','Clear and flush the condensate drain','Replace or clean the filter','Check thermostat settings and calibration'];
const HEATLIST=['Clean and inspect burners, igniter and flame sensor','Visually inspect the heat exchanger','Check gas pressure and combustion','Test carbon monoxide','Inspect the flue and vent','Check blower motor and safety controls'];
const MaintenancePage=()=>{
 const join=p=>'mailto:'+SITE.email+'?subject='+encodeURIComponent('Comfort Club sign-up – '+p.name)+'&body='+encodeURIComponent('Plan: '+p.name+'\nName: \nPhone: \nService address: \nPreferred billing (monthly or yearly): ');
 return html`<div className="mt-3">
  <p className="text-lg sm:text-xl text-white/90 max-w-[760px]">Join the Rodriguez Comfort Club. Yearly AC and heating tune-ups, priority scheduling and repair savings, so your system keeps running and you stay first in line.</p>
  <div className="mt-5 grid md:grid-cols-2 gap-4">${PLANS.map(p=>html`<div key=${p.name} className=${'rounded-xl bg-ink p-5 border '+(p.best?'border-gold border-2':'border-gold/50')}>
   ${p.best?html`<div className="text-xs font-bold tracking-widest uppercase text-gold">Best value</div>`:null}
   <h2 className="font-head font-semibold uppercase text-2xl text-gold">${p.name}</h2><p className="text-white/80">${p.sub}</p>
   <p className="mt-3 text-white/90 font-semibold">Call or email for member pricing.</p>
   <p className="mt-3 text-white/90">${p.visits}</p>
   <a href=${join(p)} className="mt-4 block text-center bg-gold text-black font-head font-bold uppercase text-xl py-3 rounded-sm min-h-[44px]">Join ${p.name.replace('Comfort Club ','')}</a></div>`)}</div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">Member <span className="text-gold">Perks</span></h2>
  <ul className="mt-3 grid sm:grid-cols-2 gap-2">${PERKS.map(t=>html`<li key=${t} className="rounded-lg border border-gold/40 p-3 flex gap-3"><span className="text-gold" aria-hidden="true">✓</span><span>${t}</span></li>`)}</ul>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">What Every <span className="text-gold">Tune-Up</span> Covers</h2>
  <div className="mt-3 grid md:grid-cols-2 gap-4">
   <div className="rounded-xl border border-gold/45 bg-ink p-5"><h3 className="font-head font-semibold uppercase text-xl text-gold">AC tune-up</h3><ul className="mt-2 space-y-1 list-disc pl-5">${ACLIST.map(t=>html`<li key=${t}>${t}</li>`)}</ul></div>
   <div className="rounded-xl border border-gold/45 bg-ink p-5"><h3 className="font-head font-semibold uppercase text-xl text-gold">Heating tune-up</h3><ul className="mt-2 space-y-1 list-disc pl-5">${HEATLIST.map(t=>html`<li key=${t}>${t}</li>`)}</ul></div>
  </div>
  <p className="mt-4 text-white/85">Every visit ends with a written report listing what we checked, what we found, and any recommended repairs with prices. Repairs and parts are priced separately, with your member discount applied.</p>
  <p className="mt-4 text-white/85">Questions or want to sign up by phone? Call <a href=${SITE.phoneHref} className="text-gold underline">${SITE.phoneDisplay}</a>.</p>
 </div>`;
};
const RSTEPS=[['Book','Pick a time online or call us. Your booking deposit is credited toward your repair.'],['Diagnose','A skilled technician tests your system to find exactly what is wrong.'],['Know the price','We explain what we found and your repair options, with prices, so you can decide.'],['Repair','We fix the real problem and stand behind the work.']];
const RTYPES=[['Air conditioning repair','AC not cooling, not turning on, or not keeping up.'],['Heating repair','Furnace or heat not working or not heating evenly.'],['Ventilation repair','Airflow and ventilation problems that leave rooms uncomfortable.']];
const RDIAG=['Full electrical testing','Capacitor & contactor testing','Refrigerant performance analysis','Temperature split testing','Airflow evaluation','Safety control inspection','Professional repair recommendations'];
const RepairPage=({onBook})=>html`<div className="mt-3">
  <p className="text-lg sm:text-xl text-white/90 max-w-[760px]">AC down? Heat out? We find out why, risk free. Your diagnosis is on us when you repair with us.</p>
  <div className="mt-5 grid md:grid-cols-3 gap-4">${RTYPES.map(([t,d])=>html`<div key=${t} className="rounded-xl border border-gold/50 bg-ink p-5"><h2 className="font-head font-semibold uppercase text-2xl text-gold">${t}</h2><p className="mt-2 text-white/90">${d}</p></div>`)}</div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">How <span className="text-gold">Repair</span> Works</h2>
  <ol className="mt-3 grid sm:grid-cols-2 gap-3">${RSTEPS.map(([t,d],i)=>html`<li key=${t} className="rounded-lg border border-gold/40 p-4 flex gap-4"><span className="font-head font-bold text-3xl text-gold leading-none">${i+1}</span><div><div className="font-head font-semibold uppercase text-xl">${t}</div><p className="text-white/90">${d}</p></div></li>`)}</ol>
  <div className="mt-6 rounded-xl border-2 border-gold bg-ink p-5"><h2 className="font-head font-semibold uppercase text-2xl text-gold">Your Diagnosis Is On Us</h2><p className="mt-2 text-white/90">Find out what is wrong before you commit. If you repair with us, the diagnostic fee is waived. Choose your city on the home page to see your exact diagnostic price upfront.</p></div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">What Our <span className="text-gold">Diagnosis</span> Includes</h2>
  <ul className="mt-3 grid sm:grid-cols-2 gap-2">${RDIAG.map(t=>html`<li key=${t} className="rounded-lg border border-gold/40 p-3 flex gap-3"><span className="text-gold" aria-hidden="true">✓</span><span>${t}</span></li>`)}</ul>
  <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl"><${BookLink} onBook=${onBook} className="inline-flex items-center justify-center bg-gold text-black font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]"/><a href=${SITE.phoneHref} className="inline-flex items-center justify-center border border-gold text-gold font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]">Call ${SITE.phoneDisplay}</a></div>
  ${SITE.depositNotice?html`<p className="mt-3 text-sm text-gold">${SITE.depositNotice}</p>`:null}
 </div>`;
const ITYPES=[['Air conditioning installation','A new AC system sized and installed for your home.'],['Heating installation','A new furnace or heating system installed the right way.'],['System replacement','Replace an old or failing system with one that works smarter, not harder.']];
const ISTEPS=[['Book','Pick a time online or call us so we can learn about your home and what you need.'],['Plan','We explain your options clearly, with honest pricing, so you can choose with confidence.'],['Install','A licensed technician installs your system with quality parts and expert workmanship.'],['Check','We test the system to make sure it is running right before we finish.']];
const IWHY=[['Licensed','Lic# '],['We Back Our Work','Quality parts and expert workmanship, and we stand behind what we do.'],['Honest Pricing','Clear options and prices, so there are no surprises.']];
const InstallPage=({onBook})=>html`<div className="mt-3">
  <p className="text-lg sm:text-xl text-white/90 max-w-[760px]">A new system should keep you comfortable for years. We install heating and cooling systems the right way, and we back our work.</p>
  <div className="mt-5 grid md:grid-cols-3 gap-4">${ITYPES.map(([t,d])=>html`<div key=${t} className="rounded-xl border border-gold/50 bg-ink p-5"><h2 className="font-head font-semibold uppercase text-2xl text-gold">${t}</h2><p className="mt-2 text-white/90">${d}</p></div>`)}</div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">How <span className="text-gold">Installation</span> Works</h2>
  <ol className="mt-3 grid sm:grid-cols-2 gap-3">${ISTEPS.map(([t,d],i)=>html`<li key=${t} className="rounded-lg border border-gold/40 p-4 flex gap-4"><span className="font-head font-bold text-3xl text-gold leading-none">${i+1}</span><div><div className="font-head font-semibold uppercase text-xl">${t}</div><p className="text-white/90">${d}</p></div></li>`)}</ol>
  <div className="mt-6 grid sm:grid-cols-3 gap-3">${IWHY.map(([t,d],i)=>html`<div key=${t} className="rounded-lg border border-gold/40 p-4 text-center"><div className="font-head font-bold text-2xl text-gold uppercase">${t}</div><div className="text-sm text-white/85 mt-1">${i===0?d+(SITE.license||'1039013'):d}</div></div>`)}</div>
  <div className="mt-6 rounded-xl border-2 border-gold bg-ink p-5"><h2 className="font-head font-semibold uppercase text-2xl text-gold">Building or managing properties?</h2><p className="mt-2 text-white/90">We work with property managers, investors and builders too. Quick scheduling, and we back our work.</p><a href="#builders" className="inline-flex items-center mt-3 min-h-[44px] text-gold underline">See Property Managers & Builders →</a></div>
  <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl"><${BookLink} onBook=${onBook} className="inline-flex items-center justify-center bg-gold text-black font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]"/><a href=${SITE.phoneHref} className="inline-flex items-center justify-center border border-gold text-gold font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]">Call ${SITE.phoneDisplay}</a></div>
 </div>`;
const AQTYPES=[['Air purification','Whole-home air cleaning that works with your heating and cooling system to reduce dust and airborne particles.'],['Humidification','Add moisture to dry winter air so your home feels more comfortable.'],['Dehumidification','Control excess moisture so the air feels less damp and sticky.'],['Fresh air ventilation','Bring fresh outdoor air into a tightly sealed home in a controlled way.'],['Air filtration','Upgraded whole-home filters for cleaner air moving through your system.']];
const AQSIGNS=['Dry air, static shocks or dry skin in winter','Air that feels stuffy, damp or sticky','Dust that keeps coming back','Lingering odors in the home','A tightly sealed home that never feels fresh'];
const IAQPage=({onBook})=>html`<div className="mt-3">
  <p className="text-lg sm:text-xl text-white/90 max-w-[760px]">Comfort is more than temperature. We improve the air inside your home with Aprilaire products, installed to work with your heating and cooling system.</p>
  <div className="mt-5 rounded-xl border-2 border-gold bg-ink p-5"><div className="text-xs font-bold tracking-widest uppercase text-gold">The products we use</div><h2 className="font-head font-bold uppercase text-4xl sm:text-5xl">Aprilaire</h2><p className="mt-2 text-white/90">Aprilaire makes whole-home indoor air quality products, and they are what we install. Tell us what you are noticing at home and we will recommend what fits.</p></div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">What We <span className="text-gold">Install</span></h2>
  <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 gap-4">${AQTYPES.map(([t,d])=>html`<div key=${t} className="rounded-xl border border-gold/50 bg-ink p-5"><h3 className="font-head font-semibold uppercase text-2xl text-gold">${t}</h3><p className="mt-2 text-white/90">${d}</p></div>`)}</div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">Signs You May <span className="text-gold">Need It</span></h2>
  <ul className="mt-3 grid sm:grid-cols-2 gap-2">${AQSIGNS.map(t=>html`<li key=${t} className="rounded-lg border border-gold/40 p-3 flex gap-3"><span className="text-gold" aria-hidden="true">✓</span><span>${t}</span></li>`)}</ul>
  <div className="mt-6 grid sm:grid-cols-3 gap-3">${[['Licensed','Lic# '+(SITE.license||'1039013')],['We Back Our Work','Quality parts and expert workmanship.'],['Honest Pricing','Clear options and prices.']].map(([t,d])=>html`<div key=${t} className="rounded-lg border border-gold/40 p-4 text-center"><div className="font-head font-bold text-2xl text-gold uppercase">${t}</div><div className="text-sm text-white/85 mt-1">${d}</div></div>`)}</div>
  <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl"><${BookLink} onBook=${onBook} className="inline-flex items-center justify-center bg-gold text-black font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]"/><a href=${SITE.phoneHref} className="inline-flex items-center justify-center border border-gold text-gold font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]">Call ${SITE.phoneDisplay}</a></div>
  <p className="mt-4 text-xs text-white/60">Aprilaire is a registered trademark of its owner. Rodriguez HVAC Mechanical is an independent contractor.</p>
 </div>`;
const AVALUES=[['Honest Pricing','Clear options and prices, so there are no surprises.'],['Quality Work','Quality parts and expert workmanship on every job.'],['We Back Our Work','We stand behind what we do.'],['Comfort You Can Count On','Heating and cooling that keeps your home comfortable.']];
const AboutPage=({onBook})=>html`<div className="mt-3">
  <p className="text-lg sm:text-xl text-white/90 max-w-[760px]">Rodriguez HVAC Mechanical is a family-owned, licensed heating and cooling company based in Fontana, CA, serving the Inland Empire and surrounding areas. Expert diagnostics. Precise solutions.</p>
  <div className="mt-5 grid sm:grid-cols-3 gap-3 text-center">
   <div className="rounded-lg border border-gold/40 p-3"><div className="font-head font-bold text-2xl text-gold">LICENSED</div><div className="text-sm text-white/85">Lic# ${SITE.license||'1039013'}</div></div>
   <div className="rounded-lg border border-gold/40 p-3"><div className="font-head font-bold text-2xl text-gold">5.0 ★★★★★</div><div className="text-sm text-white/85">on Google · 8 reviews</div></div>
   <div className="rounded-lg border border-gold/40 p-3"><div className="font-head font-bold text-2xl text-gold">FAMILY OWNED</div><div className="text-sm text-white/85">13 years in business</div></div>
  </div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">Our <span className="text-gold">Story</span></h2>
  <div className="mt-3 rounded-xl border-2 border-gold bg-ink p-5 max-w-[820px] space-y-3 text-white/90"><p>Rodriguez HVAC Mechanical is a family-owned business. I learned the HVAC trade from my father, and I chose to follow in his footsteps.</p><p>I attended trade school, earned my certifications and built my experience working for an established company. Along the way, I saw what was missing and how I could do better for customers.</p><p>Thirteen years ago, I went out on my own to deliver that standard of service and to serve the community I grew up in. Today I bring the same values my father taught me to every job: honest work, and results I stand behind.</p></div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">What We <span className="text-gold">Do</span></h2>
  <p className="mt-2 text-white/90 max-w-[760px]">We provide installation, repair, service and maintenance of heating and cooling equipment for residential and commercial clients, and we improve indoor air quality with Aprilaire products. Every job begins with an expert diagnosis, so you understand the problem and the cost before you decide.</p>
  <div className="mt-3 flex flex-wrap gap-2">${[['Repair','#repair'],['Installation','#installation'],['Maintenance','#maintenance'],['Indoor Air Quality','#indoor-air-quality']].map(([t,h])=>html`<a key=${t} href=${h} className="inline-flex items-center min-h-[44px] px-4 rounded-sm border border-gold text-gold font-head font-semibold uppercase">${t}</a>`)}</div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">What We <span className="text-gold">Stand For</span></h2>
  <div className="mt-3 grid sm:grid-cols-2 gap-4">${AVALUES.map(([t,d])=>html`<div key=${t} className="rounded-xl border border-gold/50 bg-ink p-5"><h3 className="font-head font-semibold uppercase text-2xl text-gold">${t}</h3><p className="mt-2 text-white/90">${d}</p></div>`)}</div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">What Customers <span className="text-gold">Say</span></h2>
  <div className="mt-3 grid md:grid-cols-2 gap-4">
   <figure className="rounded-xl border border-gold/45 bg-ink p-4"><div className="text-gold tracking-widest" aria-hidden="true">★★★★★</div><blockquote className="mt-1 text-white/90">“Been using Jesus for over a decade. I won’t use anyone else. If Jesus is busy, I will wait until he is available. Quality work for a reasonable price. I have used Jesus for my apartments, commercial building, and personal home. Jesus does it all!”</blockquote><figcaption className="mt-2 text-sm text-gold">— Abdallah Jadallah, Google review</figcaption></figure>
   <figure className="rounded-xl border border-gold/45 bg-ink p-4"><div className="text-gold tracking-widest" aria-hidden="true">★★★★★</div><blockquote className="mt-1 text-white/90">“${REVIEWS[0][1]}”</blockquote><figcaption className="mt-2 text-sm text-gold">— ${REVIEWS[0][0]}, Google review</figcaption></figure>
  </div>
  <a href="#reviews" className="inline-flex items-center mt-3 min-h-[44px] text-gold underline">Read all reviews →</a>
  <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl"><${BookLink} onBook=${onBook} className="inline-flex items-center justify-center bg-gold text-black font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]"/><a href=${SITE.phoneHref} className="inline-flex items-center justify-center border border-gold text-gold font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]">Call ${SITE.phoneDisplay}</a></div>
 </div>`;
const SVCSET=[['Installation','Professional installation of new heating and cooling systems and equipment.','#installation'],['Repair','Accurate diagnosis and effective repair, with clear and honest pricing.','#repair'],['Service','Expert service for your existing equipment to keep it operating reliably.','#repair'],['Equipment Maintenance','Scheduled maintenance to promote efficiency, reliability and longer equipment life.','#maintenance']];
const ServicesPage=({onBook})=>html`<div className="mt-3">
  <p className="text-lg sm:text-xl text-white/90 max-w-[760px]">Rodriguez HVAC Mechanical provides installation, repair, service and equipment maintenance for residential and commercial heating and cooling systems.</p>
  <div className="mt-5 grid md:grid-cols-2 gap-4">
   <div className="rounded-xl border border-gold/60 bg-ink p-5"><h2 className="font-head font-semibold uppercase text-2xl text-gold">Residential</h2><p className="mt-2 text-white/90">Complete heating and cooling solutions for your home, from system installation to repair, service and routine maintenance. Every job is performed to a high standard and backed by our work.</p></div>
   <div className="rounded-xl border border-gold/60 bg-ink p-5"><h2 className="font-head font-semibold uppercase text-2xl text-gold">Commercial</h2><p className="mt-2 text-white/90">Dependable heating and cooling service for commercial properties, including repairs, service calls and scheduled equipment maintenance.</p></div>
  </div>
  <h2 className="mt-7 font-head font-semibold uppercase text-3xl">What We <span className="text-gold">Do</span></h2>
  <div className="mt-3 grid sm:grid-cols-2 gap-4">${SVCSET.map(([t,d,h])=>html`<a key=${t} href=${h} className="block rounded-xl border border-gold/50 bg-ink p-5"><h3 className="font-head font-semibold uppercase text-2xl text-gold">${t}</h3><p className="mt-2 text-white/90">${d}</p><span className="inline-block mt-2 text-gold underline">Learn more →</span></a>`)}</div>
  <div className="mt-6 grid sm:grid-cols-2 gap-3">
   <a href="#indoor-air-quality" className="block rounded-lg border border-gold/40 p-4"><div className="font-head font-bold text-xl text-gold uppercase">Indoor Air Quality</div><div className="text-sm text-white/85 mt-1">Aprilaire products for cleaner, more comfortable indoor air.</div></a>
   <a href="#builders" className="block rounded-lg border border-gold/40 p-4"><div className="font-head font-bold text-xl text-gold uppercase">Property Managers & Builders</div><div className="text-sm text-white/85 mt-1">Quick scheduling, and we back our work.</div></a>
  </div>
  <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl"><${BookLink} onBook=${onBook} className="inline-flex items-center justify-center bg-gold text-black font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]"/><a href=${SITE.phoneHref} className="inline-flex items-center justify-center border border-gold text-gold font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]">Call ${SITE.phoneDisplay}</a></div>
 </div>`;
const ContactPage=({onBook})=>{
 const online=[['Google',SITE.googleUrl,'See our reviews and find us on Google'],['Yelp',SITE.yelpUrl,'Find us on Yelp'],['Instagram',SITE.instagramUrl,'Follow us on Instagram']].filter(x=>x[1]);
 return html`<div className="mt-3">
  <p className="text-lg sm:text-xl text-white/90 max-w-[760px]">Reach Rodriguez HVAC Mechanical by phone, email or online. We serve the Inland Empire, CA and surrounding areas.</p>
  <div className="mt-5 grid md:grid-cols-2 gap-4">
   <a href=${SITE.phoneHref} className="block rounded-xl border border-gold/60 bg-ink p-5"><div className="text-xs font-bold tracking-widest uppercase text-gold">Call</div><div className="font-head font-bold text-3xl mt-1">${SITE.phoneDisplay}</div></a>
   <a href=${'mailto:'+SITE.email} className="block rounded-xl border border-gold/60 bg-ink p-5"><div className="text-xs font-bold tracking-widest uppercase text-gold">Email</div><div className="text-lg mt-2 break-all">${SITE.email}</div></a>
  </div>
  <p className="mt-4 text-white/85">Fontana, CA · Lic# ${SITE.license||'1039013'} · Serving the Inland Empire, CA & Surrounding Areas</p>
  ${online.length?html`<h2 className="mt-7 font-head font-semibold uppercase text-3xl">Find Us <span className="text-gold">Online</span></h2>
  <div className="mt-3 grid sm:grid-cols-3 gap-3">${online.map(([n,u,d])=>html`<a key=${n} href=${u} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-gold/50 p-4"><div className="font-head font-bold text-2xl text-gold uppercase">${n}</div><div className="text-sm text-white/85 mt-1">${d}</div></a>`)}</div>`:null}
  <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl"><${BookLink} onBook=${onBook} className="inline-flex items-center justify-center bg-gold text-black font-head font-bold uppercase text-xl px-6 py-3 rounded-sm min-h-[44px]"/></div>
 </div>`;};
export const SubPage=({id,onBook,onMenu})=>html`<div className="max-w-[1100px] mx-auto p-3 sm:p-5 space-y-6 pb-sticky">
 <header className="flex flex-wrap justify-between items-center gap-3"><a href="#" aria-label="Rodriguez HVAC Mechanical home"><${Logo} small=${true}/></a><${Burger} onClick=${onMenu}/><${BookLink} onBook=${onBook} className="max-md:hidden inline-flex items-center justify-center bg-gold text-black font-head font-bold uppercase text-xl px-6 py-2 rounded-sm min-h-[44px]"/></header>
 <${Panel} className="p-5 sm:p-8"><h1 className="font-head font-bold uppercase text-4xl sm:text-5xl"><span className="text-gold">${pages[id]}</span></h1>
  ${id==='builders'?html`<${PartnerPage}/>`:id==='maintenance'?html`<${MaintenancePage}/>`:id==='repair'?html`<${RepairPage} onBook=${onBook}/>`:id==='installation'?html`<${InstallPage} onBook=${onBook}/>`:id==='indoor-air-quality'?html`<${IAQPage} onBook=${onBook}/>`:id==='about-us'?html`<${AboutPage} onBook=${onBook}/>`:id==='our-services'?html`<${ServicesPage} onBook=${onBook}/>`:id==='contact-us'?html`<${ContactPage} onBook=${onBook}/>`:id==='reviews'?html`<${ReviewList}/>`:html`<div className="ph rounded-md min-h-[160px] mt-5">PAGE CONTENT PLACEHOLDER — send your copy for “${pages[id]}”</div>`}
  <a href="#" className="inline-block mt-5 text-gold underline min-h-[44px] py-2">← Back to home</a><//></div>`;

