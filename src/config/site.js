/* =====================  SITE SETTINGS — EDIT HERE  =====================
   phoneHref / email : used by every call + email link on the site.
   bookingUrl        : PLACEHOLDER — paste your Housecall Pro online booking
                       page URL between the quotes. While it is empty, the
                       Book Appointment buttons open the built-in request form.
   facebookUrl / instagramUrl : PLACEHOLDERS — add your real page URLs.
                       While empty, the icons show but do not navigate.       */
export const SITE={
 phoneDisplay:'909.582.0902',
 phoneHref:'tel:9095820902',
 email:'rodriguezhvacmechanical@gmail.com',
 bookingUrl:'',
 facebookUrl:'',
 instagramUrl:'',
 googleUrl:'https://share.google/AsfN4ZWVc5UjBezHG',
 hcpToken:'a2c2f1d67276446e838de91c56c9bb64',   // Housecall Pro online-booking widget (from your embed code)
 hcpOrgName:'Rodriguez-Hvac-Mechanical',
 referral:{   // "Refer a Neighbor" ribbon. Set to null to hide it.
  headline:'Give $50, Get $50',
  body:'Refer a neighbor to Rodriguez HVAC Mechanical. They get $50 off their first repair, and you get $50 toward your next service. Just mention your name when they book.',
  terms:'Terms apply: credits apply after the referred customer\u2019s job is completed and paid. One welcome credit per household. Cannot be combined with other offers.',
 },
 depositNotice:'A 50% deposit of the booking price is required to book. Your deposit is credited toward your repair.',   // shown near the Book buttons; set to '' to hide
};
