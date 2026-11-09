import {html,React,useState} from '../lib/h.js';
import {loadHcp,openBooking} from './BookLink.js';
import {MapLightbox,MobileMenu,StickyBar} from './Mobile.js';
import {BookingModal} from './BookingModal.js';
import {SubPage,pages} from './SubPage.js';
import {Home} from './Home.js';

export function App(){
 const get=()=>{try{return decodeURIComponent(location.hash.replace('#',''))}catch(e){return ''}};
 const [h,setH]=useState(get()); const [open,setOpen]=useState(false); const [menu,setMenu]=useState(false); const [zoom,setZoom]=useState(false);
 React.useEffect(()=>{const f=()=>setH(get());window.addEventListener('hashchange',f);return()=>window.removeEventListener('hashchange',f)},[]);
  React.useEffect(()=>{ if(!h||pages[h]){window.scrollTo(0,0);return} const el=document.getElementById(h); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); },[h]);
 const book=()=>openBooking(()=>setOpen(true));
 React.useEffect(()=>{loadHcp()},[]);
 return html`<${React.Fragment}>${pages[h]?html`<${SubPage} id=${h} onBook=${book} onMenu=${()=>setMenu(true)}/>`:html`<${Home} onBook=${book} onMenu=${()=>setMenu(true)} onZoomMap=${()=>setZoom(true)}/>`}${open&&html`<${BookingModal} onClose=${()=>setOpen(false)}/>`}${menu&&html`<${MobileMenu} onClose=${()=>setMenu(false)} onBook=${book}/>`}${zoom&&html`<${MapLightbox} onClose=${()=>setZoom(false)}/>`}<${StickyBar} onBook=${book}/><//>`;
}

