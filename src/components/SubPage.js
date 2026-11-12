import {html,React,useState} from '../lib/h.js';
import {BookLink} from './BookLink.js';
import {Logo,Panel} from './ui.js';
import {Burger} from './Mobile.js';
import {SITE} from '../config/site.js';

export const pages={'repair':'Repair','installation':'Installation','maintenance':'Maintenance','indoor-air-quality':'Indoor Air Quality','about-us':'About Us','reviews':'Reviews','financing':'Financing','builders':'Property Managers & Builders','contact-us':'Contact Us'};
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
export const SubPage=({id,onBook,onMenu})=>html`<div className="max-w-[1100px] mx-auto p-3 sm:p-5 space-y-6 pb-sticky">
 <header className="flex flex-wrap justify-between items-center gap-3"><a href="#" aria-label="Rodriguez HVAC Mechanical home"><${Logo} small=${true}/></a><${Burger} onClick=${onMenu}/><${BookLink} onBook=${onBook} className="max-md:hidden inline-flex items-center justify-center bg-gold text-black font-head font-bold uppercase text-xl px-6 py-2 rounded-sm min-h-[44px]"/></header>
 <${Panel} className="p-5 sm:p-8"><h1 className="font-head font-bold uppercase text-4xl sm:text-5xl"><span className="text-gold">${pages[id]}</span></h1>
  ${id==='contact-us'?html`<div className="mt-4 space-y-2"><a href=${SITE.phoneHref} className="block text-xl min-h-[44px]">909.582.0902</a><a href=${'mailto:'+SITE.email} className="block break-all min-h-[44px]">rodriguezhvacmechanical@gmail.com</a><p>Serving the Inland Empire, CA & Surrounding Areas</p></div>`:null}
  ${id==='builders'?html`<${PartnerPage}/>`:id==='reviews'?html`<${ReviewList}/>`:html`<div className="ph rounded-md min-h-[160px] mt-5">PAGE CONTENT PLACEHOLDER — send your copy for “${pages[id]}”</div>`}
  <a href="#" className="inline-block mt-5 text-gold underline min-h-[44px] py-2">← Back to home</a><//></div>`;

