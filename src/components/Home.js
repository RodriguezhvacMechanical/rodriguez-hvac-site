import {html,React,useState} from '../lib/h.js';
import {BookLink} from './BookLink.js';
import {C,Logo,Panel,Photo,Social,Title} from './ui.js';
import {Check,IcoCal,IcoCalClock,IcoClock,IcoClockSpeed,IcoFb,IcoGear,IcoIg,IcoInfo,IcoMail,IcoPhone,IcoPhoneO,IcoPinO,IcoRibbon,IcoShield,IcoSiren,IcoThumb} from './icons.js';
import {Badge,Option,Rate,ZoneRow,zones} from './Sections.js';
import {MapImage} from './ServiceMap.js';
import {Burger,RateCard,rateRows} from './Mobile.js';
import {slug} from './BookingModal.js';
import {SITE} from '../config/site.js';

export function Home({onBook,onMenu,onZoomMap}){
 return html`<div className="max-w-[1320px] mx-auto px-3 pt-3 pb-3 pb-sticky sm:px-5 xl:px-7 xl:pt-2 flex flex-col gap-4 xl:gap-[19px] font-body">
  <header className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:grid-rows-[auto_1fr] gap-4 lg:gap-y-0 lg:gap-x-4 xl:gap-x-0 xl:grid-cols-[1fr_462px] xl:-mb-[17px]">
   <${Burger} onClick=${onMenu} className="absolute top-0 right-0 z-20"/>
   <div className="relative z-10 flex flex-col sm:flex-row sm:items-center xl:items-start gap-4 xl:gap-0 xl:pt-[27px] lg:col-start-1">
    <${Logo}/>
    <div className="sm:border-l sm:border-white/15 sm:pl-6 sm:pr-14 md:pr-0 xl:ml-[35px] xl:pl-[34px] xl:mt-[10px] xl:pb-[2px] min-w-0"><h1 className="font-head font-bold uppercase text-[38px] min-[375px]:text-[42px] sm:text-5xl lg:text-[40px] xl:text-[47px] leading-[.98] xl:leading-[46px] tracking-[.01em] xl:whitespace-nowrap">Expert Diagnostics.<br/><span className="gold-grad">Precise Solutions.</span></h1><p className="text-sm xl:text-[15px] xl:leading-[20px] mt-2 xl:mt-[10px]">Honest Pricing. Quality Work. Comfort You Can Count On.</p></div>
   </div>
   <${Photo} src="/images/technician.jpg" label=${html`TECHNICIAN PHOTO PLACEHOLDER<br/>(add public/images/technician.jpg)`} className="h-44 lg:h-full lg:min-h-[250px] xl:min-h-[295px] lg:w-[300px] xl:w-[462px] lg:col-start-2 lg:row-start-1 lg:row-span-2 xl:relative xl:left-[8px] rounded-md"/>
   <${Panel} className="bg-black p-4 xl:px-[26px] xl:py-0 xl:h-[103px] xl:w-[619px] flex items-center gap-4 xl:gap-[26px] lg:col-start-1 lg:row-start-2 lg:self-start xl:mt-[13px]"><${IcoShield} className="w-[52px] h-[52px] xl:w-[64px] xl:h-[64px] shrink-0"/><div><h2 className="font-head font-semibold text-2xl sm:text-3xl xl:text-[28px] uppercase leading-none tracking-[.02em]">Diagnostic Fee Waived With Repair</h2><p className="text-sm xl:text-[17px] xl:leading-[22px] mt-1 xl:mt-[6px] xl:max-w-[430px]">We diagnose the issue and apply the diagnostic fee toward any repair.</p></div><//>
  </header>

  <div className="grid grid-cols-1 lg:grid-cols-[705fr_540fr] gap-4 xl:gap-[18px] items-start xl:-mb-[7px]">
   <div>
    <${Panel}><${Title} a="DIAGNOSTIC FEE" b="BY LOCATION" cls="xl:h-[78px]" sub=${html`Based on distance from <span className="text-gold">Fontana, CA</span>`}/>${zones.map(z=>html`<${ZoneRow} key=${z.n} z=${z}/>`)}<//>
    <p className="text-xs xl:text-[15px] xl:leading-[21px] mt-2 xl:mt-[8px] px-2 xl:px-[29px] flex gap-2 xl:gap-[10px] items-start"><${IcoInfo} className="w-[18px] h-[18px] xl:w-[23px] xl:h-[23px] shrink-0 xl:mt-[2px]"/><span className="xl:max-w-[480px]">Travel fees allow us to provide prompt, same-day service throughout the areas we proudly serve.</span></p>
   </div>
   <${Panel} className="overflow-hidden"><${Title} a="OUR" b="SERVICE AREAS" cls="xl:h-[50px]"/><${MapImage} onZoom=${onZoomMap}/>
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 py-3 xl:py-0 xl:h-[69px] xl:items-center xl:gap-x-[30px] font-head text-xl xl:text-[25px] font-semibold">${[['ZONE 1',C.gold],['ZONE 2',C.zb],['ZONE 3',C.zg],['ZONE 4',C.zp]].map(([n,c])=>html`<span key=${n} className="flex items-center gap-2 xl:gap-[9px]"><i className="inline-block w-5 h-5 xl:w-[25px] xl:h-[25px] rounded-full" style=${{background:c}}></i><span style=${{color:c}}>${n}</span></span>`)}</div><//>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-[619fr_625fr] gap-4 xl:gap-[19px] items-stretch">
   <${Panel} className="p-4 xl:px-[13px] xl:pt-0 xl:pb-[4px] flex flex-col"><h2 className="font-head font-semibold uppercase text-2xl sm:text-3xl xl:text-[30px] text-center leading-none xl:h-[58px] xl:flex xl:items-center xl:justify-center tracking-[.01em]"><span>Comprehensive <span className="text-gold">System Evaluation</span></span></h2>
    <div className="grid sm:grid-cols-[150px_1fr] xl:grid-cols-[265px_1fr] gap-4 xl:gap-[20px] mt-4 xl:mt-[8px] flex-1">
     <${Photo} src="/images/gauge.jpg" label="GAUGE PHOTO PLACEHOLDER (add public/images/gauge.jpg)" className="rounded-md min-h-[160px] xl:min-h-0 xl:h-[382px] xl:self-start"/>
     <div className="flex flex-col"><p className="text-sm xl:text-[17px] xl:leading-[24px] text-white/90">Our detailed evaluation identifies issues accurately and helps your system run efficiently and reliably.</p>
      <ul className="mt-3 xl:mt-[4px] space-y-1.5 xl:space-y-0 text-sm xl:text-[17px]">${['Full electrical testing','Capacitor & contactor testing','Refrigerant performance analysis','Temperature split testing','Airflow evaluation','Safety control inspection','Professional repair recommendations'].map(t=>html`<li key=${t} className="flex gap-2 xl:gap-[10px] items-center xl:h-[27px]"><${Check}/>${t}</li>`)}</ul>
      <div className="mt-4 xl:mt-[18px] mx-auto sm:ml-auto sm:mr-0 sm:w-[78%] xl:w-[284px] xl:ml-[6px] rounded-[8px] border-[1.5px] border-gold/70 text-center py-2 xl:py-0 xl:h-[109px] flex flex-col justify-center"><div className="text-gold text-xs xl:text-[15px] tracking-[.1em]">STARTING AT</div><div className="font-head text-5xl xl:text-[56px] font-bold leading-none tracking-[.06em]">$189</div><div className="text-xs xl:text-[15px] font-semibold tracking-[.03em]">APPLIED TOWARD ANY REPAIR</div></div></div></div><//>
   <${Panel} id="services" className="p-4 xl:px-[14px] xl:pt-0 xl:pb-[13px] scroll-mt-4"><h2 className="font-head font-semibold uppercase text-2xl sm:text-3xl xl:text-[30px] text-center leading-none xl:h-[58px] xl:flex xl:items-center xl:justify-center tracking-[.01em]"><span>Premium <span className="text-gold">Service Options</span></span></h2>
     <div className="space-y-3 xl:space-y-[12px] mt-4 xl:mt-0">
      <${Option} title="STANDARD" sub="SYSTEM EVALUATION" desc="During regular business hours" price="$189" Ic=${IcoCalClock} cls="text-gold" border="border-gold/55"/>
      <${Option} title="PRIORITY" sub="SAME-DAY SERVICE" desc="Priority scheduling for your convenience" price="$229" Ic=${IcoClockSpeed} cls="text-zb" border="border-zb/60"/>
      <${Option} title="EMERGENCY" sub="AFTER-HOURS SERVICE" desc="Nights, weekends & holidays when you need us most" price="$289" Ic=${IcoSiren} cls="text-rd" border="border-rd/60"/></div><//>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-[619fr_625fr] gap-4 xl:gap-[19px] items-stretch">
   <${Panel} className="bg-[#090909] overflow-hidden"><div className="text-center py-3 xl:py-0 xl:h-[41px] xl:flex xl:items-center xl:justify-center"><h2 className="font-head font-semibold uppercase text-2xl sm:text-3xl xl:text-[29px] leading-none tracking-[.01em]">After-Hours <span className="text-rd">Emergency</span> Diagnostic Rates</h2></div>
    <div className="hidden sm:block overflow-x-auto"><table className="w-full min-w-[320px] table-fixed border-collapse"><colgroup><col style=${{width:'37%'}}/><col style=${{width:'21%'}}/><col style=${{width:'21%'}}/><col style=${{width:'21%'}}/></colgroup><thead><tr className="text-xs xl:text-[16px] font-semibold"><th className="border-t border-gold/45 p-2 xl:py-0 xl:h-[50px] text-center xl:text-[18px] tracking-[.02em]">TIME</th><th className="border-t border-l border-gold/45 p-2 xl:py-0 xl:leading-[1.2] tracking-[.02em]">ZONE 1<div className="font-normal text-[10px] xl:text-[11.5px]">(LOCAL)</div></th><th className="border-t border-l border-gold/45 p-2 xl:py-0 xl:leading-[1.2] text-zb tracking-[.02em]">ZONE 2<div className="font-normal text-[10px] xl:text-[11.5px]">(EXTENDED)</div></th><th className="border-t border-l border-gold/45 p-2 xl:py-0 xl:leading-[1.2] tracking-[.02em]">ALL OTHER<div className="font-normal text-[10px] xl:text-[11.5px]">ZONES</div></th></tr></thead>
    <tbody><${Rate} t="MONDAY – FRIDAY" s="After 5:00 PM" Ic=${IcoClock} a="$249" b="$279" c="$299"/><${Rate} t="WEEKENDS & HOLIDAYS" s="All Day" Ic=${IcoCal} a="$289" b="$319" c="$349"/></tbody></table></div>
    <div className="sm:hidden px-3 pb-1 flex flex-col gap-3">${rateRows.map(r=>html`<${RateCard} key=${r.t} r=${r}/>`)}</div>
    <p className="text-center text-sm xl:text-[15.5px] text-rd border-[1.5px] border-rd/70 rounded-[6px] mx-auto my-3 xl:mt-[6px] xl:mb-[10px] px-3 xl:px-[18px] py-1 xl:py-[2px] w-fit max-w-[92%]">Applied toward repair if completed during same visit.</p><//>
   <${Panel} className="bg-[#0c0c0c] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-[139fr_148fr_162fr_176fr] p-2 xl:p-0 items-stretch">
    <${Badge} Ic=${IcoShield} cls="" a="LICENSED" b="& INSURED" c="Lic# 1039013"/>
    <${Badge} Ic=${IcoRibbon} cls="border-l border-gold/45" a="EXPERT" b="TECHNICIANS" c="Highly Trained & Experienced"/>
    <${Badge} Ic=${IcoGear} cls="border-t border-gold/45 sm:border-t-0 sm:border-l lg:border-t lg:border-l-0 xl:border-t-0 xl:border-l" a="QUALITY" b="PARTS" c="Built to Last. Backed by Warranty"/>
    <${Badge} Ic=${IcoThumb} cls="border-l border-gold/45 border-t sm:border-t-0 lg:border-t xl:border-t-0" a="100%" b="SATISFACTION" c="Your Comfort is Our Priority"/><//>
  </div>

  <${Panel} className="bg-black p-4 xl:pl-[57px] xl:pr-[44px] xl:py-0 xl:h-[75px] flex flex-wrap xl:flex-nowrap items-center gap-4 xl:gap-0 justify-between">
   <div className="flex items-center gap-3 xl:gap-[24px]"><${IcoCal} className="w-10 h-10 sm:w-12 sm:h-12 xl:w-[57px] xl:h-[57px] shrink-0"/><div><h2 className="font-head font-semibold uppercase text-2xl sm:text-3xl xl:text-[26px] leading-none xl:tracking-[.04em]">Schedule Your Appointment Today</h2><p className="text-sm xl:text-[17px] mt-1 xl:mt-[5px]">It’s fast, easy, and convenient.</p></div></div>
   <span className="hidden xl:block w-px h-[44px] bg-white/25 ml-[23px]" aria-hidden="true"></span>
   <a href=${SITE.phoneHref} className="flex items-center gap-2 xl:gap-[12px] xl:ml-[25px] xl:mr-auto font-head font-semibold text-3xl sm:text-4xl xl:text-[38px] min-h-[44px] xl:tracking-[.03em]"><${IcoPhone} className="w-7 h-7 xl:w-9 xl:h-9"/>909.582.0902</a>
   <${BookLink} onBook=${onBook} className="flex items-center justify-center bg-[linear-gradient(180deg,#c99a4a,#b98b43)] text-[#120800] font-head font-bold uppercase text-xl sm:text-2xl xl:text-[25px] tracking-[.02em] px-8 py-3 xl:py-0 rounded-[4px] min-h-[52px] sm:min-h-[44px] xl:h-[50px] w-full sm:w-auto xl:w-[280px] xl:whitespace-nowrap text-center"/><//>
  ${SITE.depositNotice?html`<p className="xl:hidden text-center text-sm text-gold -mt-2">${SITE.depositNotice}</p>`:null}

  <footer className="grid grid-cols-2 lg:grid-cols-[350fr_197fr_175fr_363fr_178fr] gap-6 lg:gap-0 py-4 xl:pt-[2px] xl:pb-0 text-sm xl:text-[14.5px]">
   <div className="col-span-2 lg:col-span-1 xl:pl-[14px] xl:pt-[3px]"><${Logo} small=${true}/></div>
   <nav aria-label="Services"><h3 className="font-medium text-base xl:text-[16.5px] tracking-[.02em] mb-1 xl:mb-[3px]"><a href="#services" className="inline-block py-3 -my-3">SERVICES</a></h3>${['Repair','Installation','Maintenance','Indoor Air Quality'].map(t=>html`<a key=${t} href=${'#'+slug(t)} className="block py-3 lg:py-[6px] xl:py-0 xl:leading-[19px] text-white/90">${t}</a>`)}</nav>
   <nav aria-label="Company"><h3 className="font-medium text-base xl:text-[16.5px] tracking-[.02em] mb-1 xl:mb-[3px]">COMPANY</h3>${['About Us','Reviews','Financing','Contact Us'].map(t=>html`<a key=${t} href=${'#'+slug(t)} className="block py-3 lg:py-[6px] xl:py-0 xl:leading-[19px] text-white/90">${t}</a>`)}</nav>
   <div className="col-span-2 lg:col-span-1"><h3 className="font-medium text-base xl:text-[16.5px] tracking-[.02em] mb-1 xl:mb-[3px]">CONTACT US</h3>
    <a href=${SITE.phoneHref} className="flex items-center gap-[11px] py-3 lg:py-[6px] xl:py-0 xl:h-[23px]"><${IcoPhoneO} className="w-[18px] h-[18px] shrink-0"/>909.582.0902</a>
    <a href=${'mailto:'+SITE.email} className="flex items-center gap-[11px] py-3 lg:py-[6px] xl:py-0 xl:h-[23px] break-all"><${IcoMail} className="w-[18px] h-[18px] shrink-0"/>rodriguezhvacmechanical@gmail.com</a>
    <p className="flex items-center gap-[11px] py-1 xl:leading-[17px]"><${IcoPinO} className="w-[18px] h-[18px] shrink-0"/><span>Serving the Inland Empire<br/>CA & Surrounding Areas</span></p></div>
   <div className="col-span-2 lg:col-span-1"><h3 className="font-medium text-base xl:text-[16.5px] tracking-[.02em] mb-2 xl:mb-[8px]">FOLLOW US</h3><div className="flex gap-3 xl:gap-[10px]"><${Social} label="Facebook" url=${SITE.facebookUrl}><${IcoFb} className="w-6 h-6"/><//><${Social} label="Instagram" url=${SITE.instagramUrl}><${IcoIg} className="w-5 h-5"/><//></div></div>
  </footer>
  <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-xs xl:text-[13px] text-white/75 border-t border-white/15 pt-3 xl:pt-[9px] xl:px-0"><span>© 2025 Rodriguez HVAC Mechanical. All rights reserved.</span><span>Lic# 1039013</span></div>
 </div>`;
}

