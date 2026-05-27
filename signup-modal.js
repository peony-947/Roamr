function renderSignupModal() {
  const el = document.createElement('div');
  el.innerHTML = `
<div id="signup-modal" class="modal-overlay" onclick="if(event.target===this)closeSignup()">
  <div class="modal-box">
    <button class="modal-close" onclick="closeSignup()">×</button>
    <div id="s1">
      <div class="section-label">Step 1 of 2</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:2rem;margin-bottom:0.4rem">Create Your Free Profile</h3>
      <p class="text-sm text-muted mb-3">Join 84,000+ travelers connecting worldwide.</p>
      <div class="flex flex-col gap-2">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem">
          <div class="field"><label>First Name</label><input id="s-fname" type="text" placeholder="Sofia"></div>
          <div class="field"><label>Last Name</label><input id="s-lname" type="text" placeholder="Reyes"></div>
        </div>
        <div class="field"><label>Email</label><input id="s-email" type="email" placeholder="sofia@example.com"></div>
        <div class="field"><label>Password</label><input id="s-pass" type="password" placeholder="Min. 8 characters"></div>
        <div id="s1-err" style="font-size:0.8rem;color:var(--accent);display:none"></div>
        <button class="btn btn-primary w-full" style="margin-top:0.25rem" onclick="signupStep2()">Continue →</button>
      </div>
      <p class="text-xs text-muted" style="text-align:center;margin-top:1.25rem">Already have an account? <a href="#" style="color:var(--white);font-weight:600">Sign in</a></p>
    </div>
    <div id="s2" style="display:none">
      <div class="section-label">Step 2 of 2</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:2rem;margin-bottom:0.4rem">Your Travel Style</h3>
      <p class="text-sm text-muted mb-3">Help us find your best matches.</p>
      <div class="flex flex-col gap-2">
        <div class="field" style="position:relative">
          <label>Home City</label>
          <div style="position:relative">
            <input id="s-city" type="text" autocomplete="off" placeholder="e.g. New York, London, Sydney">
            <span id="s-city-spin" style="display:none;position:absolute;right:0.85rem;top:50%;transform:translateY(-50%);font-size:0.75rem;color:var(--muted)">Searching…</span>
          </div>
          <div id="s-city-dd" style="display:none;position:absolute;left:0;right:0;top:100%;background:#1a1a14;border:1px solid var(--border2);border-top:none;border-radius:0 0 6px 6px;z-index:9999;max-height:200px;overflow-y:auto"></div>
        </div>
        <div class="field">
          <label style="margin-bottom:0.6rem">Travel Style</label>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
            <span class="style-tag" onclick="this.classList.toggle('selected')">🎒 Backpacker</span>
            <span class="style-tag" onclick="this.classList.toggle('selected')">✈️ Digital Nomad</span>
            <span class="style-tag" onclick="this.classList.toggle('selected')">🏖 Beach & Relax</span>
            <span class="style-tag" onclick="this.classList.toggle('selected')">🥾 Adventure</span>
            <span class="style-tag" onclick="this.classList.toggle('selected')">🍜 Foodie</span>
            <span class="style-tag" onclick="this.classList.toggle('selected')">🏛 Culture & Art</span>
            <span class="style-tag" onclick="this.classList.toggle('selected')">🌿 Eco Travel</span>
            <span class="style-tag" onclick="this.classList.toggle('selected')">💼 Business Travel</span>
          </div>
        </div>
        <div id="s2-err" style="font-size:0.8rem;color:var(--accent);display:none"></div>
        <button class="btn btn-primary w-full" style="margin-top:0.25rem" onclick="signupSubmit()">Create My Profile 🚀</button>
        <button style="background:none;border:none;color:var(--muted);font-size:0.8rem;cursor:pointer;font-family:'Instrument Sans',sans-serif" onclick="document.getElementById('s1').style.display='block';document.getElementById('s2').style.display='none'">← Back</button>
      </div>
    </div>
    <div id="s-done" style="display:none;text-align:center;padding:1rem 0">
      <div style="font-size:3.5rem;margin-bottom:1.25rem">🌍</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:2.25rem;margin-bottom:0.75rem">Welcome to Roamr!</h3>
      <p class="text-sm text-muted" style="margin-bottom:2rem;line-height:1.7">Your profile is ready. Start exploring travelers headed your way.</p>
      <a href="discover.html" class="btn btn-primary">Explore Travelers →</a>
    </div>
  </div>
</div>`;
  document.body.appendChild(el.firstElementChild);
  setTimeout(() => initCityAutocomplete('s-city','s-city-dd','s-city-spin'), 100);
}

function signupStep2() {
  const fname = document.getElementById('s-fname').value.trim();
  const email = document.getElementById('s-email').value.trim();
  const pass = document.getElementById('s-pass').value;
  const err = document.getElementById('s1-err');
  if (!fname || !email || !pass) { err.textContent='Please fill in all fields.'; err.style.display='block'; return; }
  if (!/\S+@\S+\.\S+/.test(email)) { err.textContent='Please enter a valid email.'; err.style.display='block'; return; }
  if (pass.length < 8) { err.textContent='Password must be at least 8 characters.'; err.style.display='block'; return; }
  err.style.display='none';
  document.getElementById('s1').style.display='none';
  document.getElementById('s2').style.display='block';
}

function signupSubmit() {
  const city = document.getElementById('s-city').value.trim();
  const selected = document.querySelectorAll('#s2 .style-tag.selected');
  const err = document.getElementById('s2-err');
  if (!city) { err.textContent='Please enter your home city.'; err.style.display='block'; return; }
  if (!selected.length) { err.textContent='Pick at least one travel style.'; err.style.display='block'; return; }
  err.style.display='none';
  document.getElementById('s2').style.display='none';
  document.getElementById('s-done').style.display='block';
}
