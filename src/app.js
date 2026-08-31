const weapons = [
  { id: 'm4', name: 'M4', type: 'ASSAULT RIFLE', role: 'VERSATILE', range: 78, control: 72, mobility: 68, accuracy: 81, note: 'Balanced platform for aggressive mid-range play.' },
  { id: 'striker', name: 'STRIKER', type: 'SMG', role: 'CLOSE RANGE', range: 52, control: 61, mobility: 91, accuracy: 69, note: 'Fast handling and strong close-quarters pressure.' },
  { id: 'saber', name: 'SABER', type: 'BATTLE RIFLE', role: 'PRECISION', range: 89, control: 84, mobility: 51, accuracy: 92, note: 'High precision option for disciplined players.' },
  { id: 'reaper', name: 'REAPER', type: 'LMG', role: 'SUPPRESSION', range: 86, control: 77, mobility: 39, accuracy: 76, note: 'Sustained fire with strong lane control.' }
];

const release = Date.parse('2026-10-23T00:00:00+01:00');

function countdown() {
  const diff = Math.max(0, release - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const minutes = Math.floor(diff / 60000) % 60;
  return `${days}D ${hours}H ${minutes}M`;
}

function weaponCard(w) {
  return `<button class="weapon-card" data-weapon="${w.id}"><span class="eyebrow">${w.type}</span><strong>${w.name}</strong><span>${w.role}</span><div class="meter"><i style="width:${w.accuracy}%"></i></div><small>ACC ${w.accuracy} · MOB ${w.mobility}</small></button>`;
}

function renderWeapon(w) {
  document.querySelector('#app').innerHTML = `<main class="shell detail-view">
    <header class="topbar"><a class="brand" href="#">MW4<span>BUILDS</span></a><nav><a href="#weapons">WEAPONS</a><a href="#build">BUILD</a><a href="#community">COMMUNITY</a></nav><a class="button ghost" href="#build">CREATE</a></header>
    <section class="detail-head"><div><p class="eyebrow">${w.type} / BETA DATA</p><h1>${w.name}</h1><p class="lede">${w.note}</p></div><div class="score"><b>${w.accuracy}</b><span>ACCURACY</span></div></section>
    <section class="stats"><div><span>RANGE</span><b>${w.range}</b></div><div><span>CONTROL</span><b>${w.control}</b></div><div><span>MOBILITY</span><b>${w.mobility}</b></div><div><span>ACCURACY</span><b>${w.accuracy}</b></div></section>
    <section class="build-panel"><div><p class="eyebrow">QUICK BUILD</p><h2>FIELD READY</h2><p>Start with a clean five-slot community build and tune it to your playstyle.</p></div><button class="button" id="copy">COPY BUILD</button></section>
    <footer>Independent community resource. Not affiliated with or endorsed by Activision, Infinity Ward or Call of Duty.</footer>
  </main>`;
  document.querySelector('#copy').onclick = async () => { try { await navigator.clipboard.writeText(`${w.name} — Field Ready`); document.querySelector('#copy').textContent = 'COPIED'; } catch {} };
}

function renderHome() {
  document.querySelector('#app').innerHTML = `<main class="shell"><header class="topbar"><a class="brand" href="#">MW4<span>BUILDS</span></a><nav><a href="#weapons">WEAPONS</a><a href="#build">BUILD</a><a href="#community">COMMUNITY</a></nav><a class="button ghost" href="#build">CREATE</a></header>
  <section class="hero"><div><div class="status"><i></i> BETA LIVE</div><h1>BUILD<br><em>BETTER.</em></h1><p>Weapons, loadouts and community builds for the next generation of combat.</p><div class="actions"><a class="button" href="#build">BUILD LOADOUT</a><a class="button ghost" href="#weapons">BROWSE WEAPONS</a></div></div><aside class="countdown"><span>RELEASE</span><strong id="timer">${countdown()}</strong><small>23 OCT 2026 · OFFICIAL TARGET</small></aside></section>
  <section id="weapons" class="section"><div class="section-head"><div><p class="eyebrow">BETA ARMOURY</p><h2>WEAPONS</h2></div><a href="#weapons">VIEW ALL →</a></div><div class="weapon-grid">${weapons.map(weaponCard).join('')}</div></section>
  <section id="build" class="quick"><div><p class="eyebrow">LOADOUT BUILDER</p><h2>YOUR NEXT BUILD STARTS HERE.</h2></div><a class="button" href="#build">START BUILDING</a></section>
  <footer>MW4 BUILDS · BY JTT · Independent community resource. Not affiliated with or endorsed by Activision, Infinity Ward or Call of Duty.</footer></main>`;
  setInterval(() => { const el = document.querySelector('#timer'); if (el) el.textContent = countdown(); }, 30000);
  document.querySelectorAll('[data-weapon]').forEach(el => el.onclick = () => renderWeapon(weapons.find(w => w.id === el.dataset.weapon)));
}

renderHome();
