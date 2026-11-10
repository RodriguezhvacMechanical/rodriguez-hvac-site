import {html,React,useState} from '../lib/h.js';

export const MAP_SRC='/images/service-map.jpg';
/* ---------- Live service-area map (Leaflet + OpenStreetMap); falls back to the static image ---------- */
const LEAF='https://unpkg.com/leaflet@1.9.4/dist/';
let leafP=null;
const ensureLeaflet=()=>{
 if(window.L&&window.L.map)return Promise.resolve(window.L);
 if(leafP)return leafP;
 leafP=new Promise((res,rej)=>{
  const l=document.createElement('link');l.rel='stylesheet';l.href=LEAF+'leaflet.css';document.head.appendChild(l);
  const s=document.createElement('script');s.src=LEAF+'leaflet.js';s.onload=()=>window.L?res(window.L):rej(new Error('Leaflet missing'));s.onerror=()=>rej(new Error('Leaflet failed to load'));document.head.appendChild(s);
 });
 leafP.catch(()=>{leafP=null});
 return leafP;
};
const ZC=['#c99a4a','#5a7fa8','#8aa062','#86609a'];
/* [city, latitude, longitude, zone index (0 = Zone 1), always-show-label] — approximate city centers */
const CITY_PTS=[
 ['Fontana',34.0922,-117.4350,0,1],['Rialto',34.1064,-117.3703,0,0],['Bloomington',34.0700,-117.3965,0,0],['Rancho Cucamonga',34.1064,-117.5931,0,0],['North Fontana',34.1400,-117.4500,0,0],['Jurupa Valley',33.9972,-117.4854,0,0],['South Ontario',34.0300,-117.6200,0,0],['Colton',34.0739,-117.3137,0,0],
 ['Ontario',34.0633,-117.6509,1,0],['Upland',34.0975,-117.6484,1,0],['Claremont',34.0967,-117.7198,1,0],['Montclair',34.0775,-117.6898,1,0],['Chino',33.9885,-117.6890,1,0],['Chino Hills',33.9898,-117.7326,1,0],['Redlands',34.0556,-117.1825,1,0],['Highland',34.1283,-117.2086,1,0],['San Bernardino',34.1083,-117.2898,1,1],['Loma Linda',34.0483,-117.2611,1,0],['Eastvale',33.9525,-117.5848,1,0],['Corona',33.8753,-117.5664,1,1],
 ['Riverside',33.9533,-117.3962,2,1],['Moreno Valley',33.9425,-117.2297,2,0],['Beaumont',33.9295,-116.9772,2,0],['Yucaipa',34.0336,-117.0431,2,0],['Norco',33.9311,-117.5486,2,0],['Lake Elsinore',33.6681,-117.3273,2,0],['Menifee',33.6971,-117.1853,2,0],['Perris',33.7825,-117.2286,2,0],['Diamond Bar',34.0286,-117.8103,2,0],['Pomona',34.0551,-117.7500,2,0],['Covina',34.0900,-117.8903,2,0],['West Covina',34.0686,-117.9390,2,0],
 ['Temecula',33.4936,-117.1484,3,1],['Murrieta',33.5539,-117.2139,3,0],['Orange County',33.7175,-117.8311,3,1],['Pasadena',34.1478,-118.1445,3,1],['Glendora',34.1361,-117.8653,3,0],['Arcadia',34.1397,-118.0353,3,0],['Whittier',33.9792,-118.0328,3,0],['Fullerton',33.8704,-117.9243,3,0],['Anaheim',33.8366,-117.9143,3,0],['Huntington Beach',33.6603,-117.9992,3,0],['Long Beach',33.7701,-118.1937,3,0],
];
export const LiveMap=({interactive=false,onReady,onFail,className=''})=>{
 const ref=React.useRef(null);
 React.useEffect(()=>{
  let map=null,dead=false;
  ensureLeaflet().then(L=>{
   if(dead||!ref.current)return;
   const touch=!!(L.Browser&&(L.Browser.mobile||L.Browser.touch));
   map=L.map(ref.current,{scrollWheelZoom:interactive,dragging:interactive||!touch,doubleClickZoom:interactive,boxZoom:false,keyboard:interactive,zoomSnap:0.25,minZoom:8,maxZoom:13});
   const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'}).addTo(map);
   let ok=0,bad=0;
   tiles.on('tileload',()=>{ok++});
   tiles.on('tileerror',()=>{bad++;if(bad>5&&!ok&&!dead&&onFail)onFail()});
   map.getPane('tilePane').style.filter='invert(1) hue-rotate(180deg) brightness(.9) saturate(.55) contrast(.95)';
   [3,2,1,0].forEach(zi=>CITY_PTS.filter(c=>c[3]===zi).forEach(c=>L.circle([c[1],c[2]],{radius:4500,stroke:false,fillColor:ZC[zi],fillOpacity:0.28,interactive:false}).addTo(map)));
   CITY_PTS.forEach(c=>L.circleMarker([c[1],c[2]],{radius:c[4]?7:4.5,color:'#000',weight:1,fillColor:ZC[c[3]],fillOpacity:1}).addTo(map).bindTooltip(c[0],{permanent:!!c[4],direction:'top',offset:[0,-4],className:'zone-tip'}));
   map.fitBounds(L.latLngBounds(CITY_PTS.map(c=>[c[1],c[2]])),{padding:[14,14]});
   if(onReady)onReady();
  }).catch(()=>{if(!dead&&onFail)onFail()});
  return()=>{dead=true;if(map)map.remove()};
 },[interactive]);
 return html`<div ref=${ref} className=${className} role="region" aria-label="Interactive service area map: Zone 1 gold, Zone 2 blue, Zone 3 green, Zone 4 purple" style=${{background:'#0b0b0b'}}></div>`;
};
export const MAP_ALT='Service area map: Zone 1 (gold) around Fontana, Zone 2 (blue) Extended Inland Empire, Zone 3 (green) Outer Service Area, Zone 4 (purple) Premium Travel Area including Orange County, Temecula and Murrieta';
export const MapImage=({onZoom})=>{
 const [st,setSt]=useState('load');
 return html`<div className="relative w-full"><img src=${MAP_SRC} width="534" height="555" alt=${MAP_ALT} className="block w-full h-auto"/>
  ${st!=='fail'?html`<${LiveMap} onReady=${()=>setSt('ready')} onFail=${()=>setSt('fail')} className=${'absolute inset-0 '+(st==='ready'?'':'invisible')}/>`:null}
  <button type="button" onClick=${onZoom} aria-label="Enlarge service area map" className=${'absolute z-[1100] flex items-center gap-1.5 rounded-full bg-black/85 border border-gold/70 px-3 py-1.5 text-sm font-semibold text-gold '+(st==='ready'?'top-2 right-2 min-h-[44px]':'inset-0 w-full rounded-none border-0 bg-transparent justify-end items-end p-2')}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M16 16l5 5M10.5 8v5M8 10.5h5"/></svg><span className=${st==='ready'?'':'rounded-full bg-black/80 border border-gold/70 px-3 py-1.5 md:hidden'}>${st==='ready'?'Enlarge map':'Tap to enlarge'}</span></button></div>`;
};
