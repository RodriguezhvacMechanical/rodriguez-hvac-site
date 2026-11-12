import {html,React,useState} from '../lib/h.js';

export const soc='w-11 h-11 xl:w-8 xl:h-8 border border-white/70 rounded-[5px] flex items-center justify-center';
export const Social=({label,url,extra='',children})=>url
 ?html`<a href=${url} target="_blank" rel="noopener noreferrer" aria-label=${label} className=${soc+' '+extra}>${children}</a>`
 :html`<a href="#" aria-label=${label+' (link not set yet)'} title=${label+' link not set yet'} onClick=${e=>e.preventDefault()} className=${soc+' '+extra}>${children}</a>`;

export const C={gold:'#c99a4a',zb:'#5a7fa8',zg:'#8aa062',zp:'#86609a',rd:'#c84d41'};
export const INK='#0e0e0e';
export const Panel=({className='',children,...p})=>html`<section className=${'rounded-[10px] border-2 border-gold/60 '+(className.includes('bg-')?'':'bg-ink ')+className} ...${p}>${children}</section>`;
export const Title=({a,b,sub,cls=''})=>html`<div className=${'text-center border-b border-gold/40 py-3 xl:py-0 xl:flex xl:flex-col xl:justify-center '+cls}><h2 className="font-head font-semibold uppercase text-2xl sm:text-3xl xl:text-[32px] leading-none tracking-[.01em]">${a} <span className="text-gold">${b}</span></h2>${sub&&html`<p className="text-sm xl:text-[17px] mt-1 xl:mt-[7px]">${sub}</p>`}</div>`;

export const LOGO_SRC='/images/logo.png';
export const Logo=({small})=>html`<img src=${LOGO_SRC} alt="Rodriguez HVAC Mechanical – Keeping You Comfortable" width="900" height="295" className=${small?'w-[200px] xl:w-[230px]':'w-[230px] sm:w-[260px] xl:w-[336px] xl:ml-[4px]'} style=${{height:'auto'}}/>`;

export const Photo=({src,label,className='',fit='object-cover'})=>{
 const [bad,setBad]=useState(false);
 return bad
  ?html`<div className=${'ph '+className}>${label}</div>`
  :html`<img src=${src} alt="" onError=${()=>setBad(true)} className=${fit+' w-full '+className}/>`;
};
