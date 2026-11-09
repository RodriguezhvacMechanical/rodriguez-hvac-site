import {html,React,useState} from '../lib/h.js';
import {BookLink} from './BookLink.js';
import {Logo,Panel} from './ui.js';
import {Burger} from './Mobile.js';
import {SITE} from '../config/site.js';

export const pages={'repair':'Repair','installation':'Installation','maintenance':'Maintenance','indoor-air-quality':'Indoor Air Quality','about-us':'About Us','reviews':'Reviews','financing':'Financing','contact-us':'Contact Us'};
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
export const SubPage=({id,onBook,onMenu})=>html`<div className="max-w-[1100px] mx-auto p-3 sm:p-5 space-y-6 pb-sticky">
 <header className="flex flex-wrap justify-between items-center gap-3"><a href="#" aria-label="Rodriguez HVAC Mechanical home"><${Logo} small=${true}/></a><${Burger} onClick=${onMenu}/><${BookLink} onBook=${onBook} className="max-md:hidden inline-flex items-center justify-center bg-gold text-black font-head font-bold uppercase text-xl px-6 py-2 rounded-sm min-h-[44px]"/></header>
 <${Panel} className="p-5 sm:p-8"><h1 className="font-head font-bold uppercase text-4xl sm:text-5xl"><span className="text-gold">${pages[id]}</span></h1>
  ${id==='contact-us'?html`<div className="mt-4 space-y-2"><a href=${SITE.phoneHref} className="block text-xl min-h-[44px]">909.582.0902</a><a href=${'mailto:'+SITE.email} className="block break-all min-h-[44px]">rodriguezhvacmechanical@gmail.com</a><p>Serving the Inland Empire, CA & Surrounding Areas</p></div>`:null}
  ${id==='reviews'?html`<${ReviewList}/>`:html`<div className="ph rounded-md min-h-[160px] mt-5">PAGE CONTENT PLACEHOLDER — send your copy for “${pages[id]}”</div>`}
  <a href="#" className="inline-block mt-5 text-gold underline min-h-[44px] py-2">← Back to home</a><//></div>`;

