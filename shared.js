// ── Shared data store (simulated backend) ──────────────────────────
const TRAVELERS = [
  { id:1, name:'Sofia R.', initials:'SR', color:'#e84c2b', city:'Lisbon', country:'Portugal', bio:'Architecture student turned full-time nomad. Always down for street food tours and sunrise hikes.', tags:['Backpacker','Foodie','Culture & Art'], trips:['Bali','Tokyo','Colombia'], rating:4.9, reviews:23, verified:true, pro:false, online:true },
  { id:2, name:'Marco K.', initials:'MK', color:'#2b7de8', city:'Berlin', country:'Germany', bio:'Software engineer working remotely. I travel slow — usually 1-2 months per country. Big on diving and local music scenes.', tags:['Digital Nomad','Adventure','Diving'], trips:['Bali','Vietnam','Mexico'], rating:4.7, reviews:18, verified:true, pro:true, online:true },
  { id:3, name:'Aisha L.', initials:'AL', color:'#2bb57d', city:'New York', country:'USA', bio:'UX designer and yoga teacher. Seeking communities, not tourist traps. Love slow travel and deep conversations.', tags:['Yoga','Culture & Art','Eco Travel'], trips:['India','Morocco','Greece'], rating:5.0, reviews:31, verified:true, pro:true, online:false },
  { id:4, name:'Priya K.', initials:'PK', color:'#a855f7', city:'Sydney', country:'Australia', bio:'Marine biologist who dives everywhere. Passionate about ocean conservation and reef photography.', tags:['Adventure','Eco Travel','Diving'], trips:['Maldives','Philippines','Hawaii'], rating:4.8, reviews:14, verified:true, pro:false, online:true },
  { id:5, name:'Daniel M.', initials:'DM', color:'#f5a623', city:'Toronto', country:'Canada', bio:'Remote product manager. Obsessed with coffee culture, co-working spots, and weekend road trips.', tags:['Digital Nomad','Foodie','Backpacker'], trips:['Lisbon','Tokyo','Buenos Aires'], rating:4.6, reviews:9, verified:false, pro:false, online:false },
  { id:6, name:'Yuki T.', initials:'YT', color:'#e84c8b', city:'Osaka', country:'Japan', bio:'Illustrator and street photographer. I collect postcards from every city I visit and always know the best hidden cafés.', tags:['Culture & Art','Foodie','Solo'], trips:['Paris','New York','Seoul'], rating:4.9, reviews:27, verified:true, pro:true, online:true },
  { id:7, name:'Carlos V.', initials:'CV', color:'#e8842b', city:'Mexico City', country:'Mexico', bio:'Chef and culinary traveler. I learn one local recipe in every country. Happy to cook for new friends!', tags:['Foodie','Culture & Art','Beach & Relax'], trips:['Italy','Thailand','Peru'], rating:4.8, reviews:19, verified:true, pro:false, online:false },
  { id:8, name:'Lena B.', initials:'LB', color:'#38bdf8', city:'Stockholm', country:'Sweden', bio:'Environmental consultant and trail runner. 30+ countries and counting. Looking for hiking partners.', tags:['Adventure','Eco Travel','Backpacker'], trips:['Patagonia','Nepal','Iceland'], rating:4.7, reviews:22, verified:true, pro:true, online:true },
];

const TRIPS = [
  { id:1, travelerId:2, traveler:'Marco K.', initials:'MK', color:'#2b7de8', destination:'Bali, Indonesia', dates:'Jun 12 – Jul 8', daysLeft:14, style:'Digital Nomad', tags:['Surfing','Co-working','Local food'], spots:2, desc:'Planning to base in Canggu for co-working but will explore Ubud and Nusa islands on weekends. Looking for 1-2 like-minded people to split villa costs and explore together.' },
  { id:2, travelerId:3, traveler:'Aisha L.', initials:'AL', color:'#2bb57d', destination:'Kyoto, Japan', dates:'Jul 1 – Jul 21', daysLeft:33, style:'Culture & Art', tags:['Temples','Hiking','Ceramics'], spots:1, desc:'Deep-diving into traditional Japan — ryokans, tea ceremonies, forest hikes. Want one other person who appreciates slow travel and isn\'t in a rush.' },
  { id:3, travelerId:6, traveler:'Yuki T.', initials:'YT', color:'#e84c8b', destination:'Lisbon, Portugal', dates:'Jun 20 – Jul 5', daysLeft:2, style:'Culture & Art', tags:['Photography','Fado','Street art'], spots:3, desc:'Documenting Lisbon\'s street art scene for a personal project. Happy to show people around the city in exchange for good company!' },
  { id:4, travelerId:8, traveler:'Lena B.', initials:'LB', color:'#38bdf8', destination:'Patagonia, Chile', dates:'Aug 3 – Aug 24', daysLeft:66, style:'Adventure', tags:['Trekking','Camping','Wildlife'], spots:2, desc:'W Trek + Torres del Paine circuit. Looking for experienced hikers who can carry their own pack. I\'ve done this before and will share my full planning doc.' },
  { id:5, travelerId:7, traveler:'Carlos V.', initials:'CV', color:'#e8842b', destination:'Rome, Italy', dates:'Jul 10 – Jul 25', daysLeft:42, style:'Foodie', tags:['Cooking','Markets','Wine'], spots:4, desc:'Culinary trip — market visits, cooking classes, vineyard day trips. No tourist traps. Looking for fellow food lovers to share meals and discoveries.' },
  { id:6, travelerId:4, traveler:'Priya K.', initials:'PK', color:'#a855f7', destination:'Raja Ampat, Indonesia', dates:'Sep 1 – Sep 14', daysLeft:90, style:'Adventure', tags:['Diving','Marine life','Photography'], spots:2, desc:'Liveaboard diving trip — one of the best dive sites on earth. Must be a certified diver (Open Water min). Split costs on the liveaboard vessel.' },
];

const EVENTS = [
  { id:1, city:'Bali', country:'Indonesia', emoji:'🌴', title:'Canggu Nomad Meetup', date:'Jun 15', time:'6:00 PM', location:'Dojo Bali Co-working', category:'Networking', attendees:24, max:40 },
  { id:2, city:'Lisbon', country:'Portugal', emoji:'🏛', title:'Sunset Fado Walk', date:'Jun 21', time:'7:30 PM', location:'Alfama District', category:'Culture', attendees:8, max:12 },
  { id:3, city:'Tokyo', country:'Japan', emoji:'🗼', title:'Tsukiji Market Food Tour', date:'Jun 18', time:'7:00 AM', location:'Tsukiji Outer Market', category:'Food', attendees:11, max:15 },
  { id:4, city:'Medellín', country:'Colombia', emoji:'🌸', title:'Language Exchange Night', date:'Jun 22', time:'7:00 PM', location:'El Poblado Café', category:'Social', attendees:19, max:30 },
  { id:5, city:'Barcelona', country:'Spain', emoji:'🏖', title:'Sunrise Beach Run', date:'Jun 16', time:'6:30 AM', location:'Barceloneta Beach', category:'Fitness', attendees:7, max:20 },
  { id:6, city:'Chiang Mai', country:'Thailand', emoji:'🐘', title:'Ethical Elephant Sanctuary Visit', date:'Jun 25', time:'8:00 AM', location:'Elephant Nature Park', category:'Eco', attendees:6, max:8 },
];

const LIVE_CITIES = [
  { city:'Bali', country:'Indonesia', emoji:'🌴', travelers:284, trending:true },
  { city:'Lisbon', country:'Portugal', emoji:'🏛', travelers:198, trending:true },
  { city:'Tokyo', country:'Japan', emoji:'🗼', travelers:312, trending:false },
  { city:'Medellín', country:'Colombia', emoji:'🌸', travelers:143, trending:true },
  { city:'Chiang Mai', country:'Thailand', emoji:'🐘', travelers:167, trending:false },
  { city:'Barcelona', country:'Spain', emoji:'🏖', travelers:229, trending:false },
  { city:'Buenos Aires', country:'Argentina', emoji:'🥩', travelers:112, trending:false },
  { city:'Cape Town', country:'South Africa', emoji:'🏔', travelers:89, trending:true },
  { city:'Tbilisi', country:'Georgia', emoji:'🍷', travelers:76, trending:true },
  { city:'Oaxaca', country:'Mexico', emoji:'🌮', travelers:94, trending:false },
  { city:'Sarajevo', country:'Bosnia', emoji:'🕌', travelers:41, trending:true },
  { city:'Hanoi', country:'Vietnam', emoji:'🍜', travelers:158, travelers:158, trending:false },
];

const REVIEWS = [
  { reviewer:'Aisha L.', initials:'AL', color:'#2bb57d', text:'Marco was an amazing travel companion in Lisbon. Incredibly organised, great taste in music and food. Would travel with him again in a heartbeat.', rating:5, trip:'Lisbon', date:'Mar 2026' },
  { reviewer:'Sofia R.', initials:'SR', color:'#e84c2b', text:'Super easy going and respectful. We hiked Sintra together and grabbed dinner after. Highly recommend Marco as a travel buddy.', rating:5, trip:'Sintra', date:'Jan 2026' },
  { reviewer:'Daniel M.', initials:'DM', color:'#f5a623', text:'Good company on a co-working day in Bali. Marco knows all the best spots and is generous with recommendations.', rating:4, trip:'Bali', date:'Nov 2025' },
];

// Utility functions
function getParam(key) { return new URLSearchParams(window.location.search).get(key); }
function countryFlag(code) {
  if (!code || code.length !== 2) return '🌍';
  return String.fromCodePoint(...[...code.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
}
function renderStars(n) { return '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n)); }

// City autocomplete
function initCityAutocomplete(inputId, dropdownId, spinnerId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  const spinner = spinnerId ? document.getElementById(spinnerId) : null;
  if (!input || !dropdown) return;
  let debounce = null, results = [], activeIdx = -1;
  input.addEventListener('input', () => {
    const val = input.value.trim();
    activeIdx = -1;
    clearTimeout(debounce);
    if (val.length < 2) { dropdown.style.display = 'none'; if (spinner) spinner.style.display = 'none'; return; }
    if (spinner) spinner.style.display = 'block';
    debounce = setTimeout(() => fetchCities(val), 320);
  });
  input.addEventListener('keydown', (e) => {
    const opts = dropdown.querySelectorAll('.city-option');
    if (!opts.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); activeIdx = Math.min(activeIdx+1, opts.length-1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); activeIdx = Math.max(activeIdx-1, 0); }
    else if (e.key === 'Enter' && activeIdx >= 0) { e.preventDefault(); select(activeIdx); return; }
    else if (e.key === 'Escape') { dropdown.style.display='none'; return; }
    else return;
    opts.forEach((o,i) => o.classList.toggle('kbd-active', i===activeIdx));
  });
  document.addEventListener('click', e => { if (!e.target.closest('#'+inputId) && !e.target.closest('#'+dropdownId)) dropdown.style.display='none'; });
  async function fetchCities(q) {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&featuretype=city&format=json&limit=7&addressdetails=1`, { headers: {'Accept-Language':'en','User-Agent':'Roamr/1.0'} });
      const data = await res.json();
      results = data.filter(p => ['city','town','administrative'].includes(p.addresstype||p.type)).slice(0,6).map(p => ({ name: p.address?.city||p.address?.town||p.name, country: p.address?.country||'', code: (p.address?.country_code||'').toUpperCase() })).filter((v,i,a) => a.findIndex(x=>x.name===v.name&&x.country===v.country)===i);
      if (spinner) spinner.style.display = 'none';
      if (!results.length) { dropdown.style.display='none'; return; }
      dropdown.innerHTML = results.map((r,i) => `<div class="city-option" onclick="(function(){document.getElementById('${inputId}').value='${r.name}, ${r.country}';document.getElementById('${dropdownId}').style.display='none';})()"><span>${countryFlag(r.code)}</span><span class="city-name">${r.name}</span><span class="city-country">${r.country}</span></div>`).join('');
      dropdown.style.display = 'block';
    } catch(e) { if (spinner) spinner.style.display='none'; }
  }
  function select(idx) { const r=results[idx]; if(!r)return; input.value=`${r.name}, ${r.country}`; dropdown.style.display='none'; activeIdx=-1; }
}

// Signup modal (shared across pages)
function openSignup() { document.getElementById('signup-modal').classList.add('open'); }
function closeSignup() { document.getElementById('signup-modal').classList.remove('open'); }
