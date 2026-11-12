import {html,React,useState} from '../lib/h.js';
import {SITE} from '../config/site.js';

export const slug=t=>t.toLowerCase().replace(/ /g,'-');
export const inp='w-full min-h-[44px] rounded bg-black border border-gold/50 px-3 text-base text-white focus:outline-none focus:border-gold';
export const Field=({label,id,children,full})=>html`<div className=${full?'sm:col-span-2':''}><label htmlFor=${id} className="block text-sm font-semibold mb-1">${label}</label>${children}</div>`;

export function BookingModal({onClose}){
 const [sent,setSent]=useState(false); const [d,setD]=useState({});
 React.useEffect(()=>{const k=e=>{if(e.key==='Escape')onClose()};document.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{document.removeEventListener('keydown',k);document.body.style.overflow=''}},[]);
 const set=k=>e=>setD({...d,[k]:e.target.value});
 const body=['Name: '+d.name,'Phone: '+d.phone,'Email: '+d.email,'Address / City / ZIP: '+d.addr,'Service: '+d.svc,'Preferred date: '+d.date,'Preferred time: '+d.time,'Details: '+(d.msg||'')].join('\n');
 const mail='mailto:'+SITE.email+'?subject='+encodeURIComponent('Appointment request – '+(d.name||''))+'&body='+encodeURIComponent(body);
 return html`<div className="fixed inset-0 z-50 bg-black/80 flex items-start sm:items-center justify-center overflow-y-auto p-3" onClick=${onClose}>
  <div role="dialog" aria-modal="true" aria-labelledby="bk-t" className="w-full max-w-xl rounded-lg border border-gold bg-ink p-4 sm:p-6 my-auto" onClick=${e=>e.stopPropagation()}>
   <div className="flex justify-between items-start gap-3"><h2 id="bk-t" className="font-head font-semibold uppercase text-3xl leading-none">Book <span className="text-gold">Appointment</span></h2><button onClick=${onClose} aria-label="Close" className="w-11 h-11 -mt-2 -mr-2 text-2xl text-gold">✕</button></div>
   ${SITE.depositNotice?html`<p className="mt-2 text-sm text-gold">${SITE.depositNotice}</p>`:null}
   ${sent?html`<div className="mt-4 space-y-3"><p>Your request is ready. Tap below to send it to Rodriguez HVAC Mechanical by email, or call us to schedule right away.</p><a href=${mail} className="block text-center bg-gold text-black font-head font-bold uppercase text-xl py-3 rounded-sm min-h-[44px]">Send Request by Email</a><a href=${SITE.phoneHref} className="block text-center border border-gold text-gold font-head font-semibold text-xl py-3 rounded-sm min-h-[44px]">Call 909.582.0902</a><button onClick=${()=>setSent(false)} className="text-sm underline min-h-[44px]">Edit my details</button></div>`:
   html`<form className="mt-4 grid sm:grid-cols-2 gap-3" onSubmit=${e=>{e.preventDefault();setSent(true)}}>
    <${Field} label="Full name" id="f-name"><input id="f-name" required autoComplete="name" className=${inp} value=${d.name||''} onChange=${set('name')}/><//>
    <${Field} label="Phone" id="f-phone"><input id="f-phone" type="tel" required autoComplete="tel" className=${inp} value=${d.phone||''} onChange=${set('phone')}/><//>
    <${Field} label="Email" id="f-email" full=${true}><input id="f-email" type="email" required autoComplete="email" className=${inp} value=${d.email||''} onChange=${set('email')}/><//>
    <${Field} label="Service address (street, city, ZIP)" id="f-addr" full=${true}><input id="f-addr" required autoComplete="street-address" className=${inp} value=${d.addr||''} onChange=${set('addr')}/><//>
    <${Field} label="Service needed" id="f-svc"><select id="f-svc" required className=${inp} value=${d.svc||''} onChange=${set('svc')}><option value="">Select…</option>${['Repair','Installation','Maintenance','Indoor Air Quality'].map(o=>html`<option key=${o}>${o}</option>`)}</select><//>
    <${Field} label="Preferred date" id="f-date"><input id="f-date" type="date" className=${inp} value=${d.date||''} onChange=${set('date')}/><//>
    <${Field} label="Preferred time" id="f-time"><input id="f-time" type="time" className=${inp} value=${d.time||''} onChange=${set('time')}/><//>
    <${Field} label="Describe the issue (optional)" id="f-msg" full=${true}><textarea id="f-msg" rows="3" className=${inp+' py-2'} value=${d.msg||''} onChange=${set('msg')}></textarea><//>
    <button type="submit" className="sm:col-span-2 bg-gold text-black font-head font-bold uppercase text-xl py-3 rounded-sm min-h-[44px]">Continue</button>
    <p className="sm:col-span-2 text-xs text-white/70">Diagnostic fee is applied toward repair. Fees vary by zone.</p></form>`}
  </div></div>`;
}

