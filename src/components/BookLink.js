import {html,React,useState} from '../lib/h.js';
import {SITE} from '../config/site.js';

export const loadHcp=()=>{
 if(!SITE.hcpToken||document.getElementById('hcp-script'))return;
 const b=document.createElement('button');b.className='hcp-button';b.hidden=true;b.setAttribute('data-token',SITE.hcpToken);b.setAttribute('data-orgname',SITE.hcpOrgName);document.body.appendChild(b);
 const s=document.createElement('script');s.id='hcp-script';s.async=true;s.src='https://online-booking.housecallpro.com/script.js?token='+SITE.hcpToken+'&orgName='+SITE.hcpOrgName;document.body.appendChild(s);
};
export const openBooking=(fallback)=>{
 try{ if(SITE.hcpToken&&window.HCPWidget&&typeof window.HCPWidget.openModal==='function'){window.HCPWidget.openModal();return;} }catch(e){}
 fallback();
};
export const BookLink=({className,onBook})=>SITE.bookingUrl
 ?html`<a href=${SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className=${className}>Book Appointment</a>`
 :html`<button type="button" onClick=${onBook} className=${className}>Book Appointment</button>`;
