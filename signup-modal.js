function renderSignupModal() {
  document.body.insertAdjacentHTML('beforeend', `

<!-- SIGNUP MODAL -->
<div id="signup-modal" class="modal-overlay" onclick="if(event.target===this)closeSignup()">
  <div class="modal-box">
    <button class="modal-close" onclick="closeSignup()">×</button>

    <div id="s1">
      <div class="section-label">Step 1 of 2</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:2rem;margin-bottom:0.4rem">Create Your Free Profile</h3>
      <p class="text-sm text-muted mb-3">Join 84,000+ travelers connecting worldwide.</p>
      <div class="flex flex-col gap-2">
        <div class="field">
          <label>Username</label>
          <input id="s-username" type="text" placeholder="e.g. sofiaTravels" autocomplete="username">
        </div>
        <div class="field">
          <label>Email</label>
          <input id="s-email" type="email" placeholder="sofia@example.com" autocomplete="email">
        </div>
        <div class="field">
          <label>Confirm Email</label>
          <input id="s-email2" type="email" placeholder="Repeat your email">
        </div>
        <div class="field">
          <label>Password</label>
          <input id="s-pass" type="password" placeholder="Min. 8 characters" autocomplete="new-password">
        </div>
        <div class="field">
          <label>Confirm Password</label>
          <input id="s-pass2" type="password" placeholder="Repeat your password" autocomplete="new-password">
        </div>
        <div id="s1-err" style="font-size:0.8rem;color:var(--accent);display:none"></div>
        <button class="btn btn-primary w-full" style="margin-top:0.25rem" onclick="signupStep2()">Continue →</button>
      </div>
      <p class="text-xs text-muted" style="text-align:center;margin-top:1.25rem">
        Already have an account?
        <a href="#" style="color:var(--white);font-weight:600" onclick="event.preventDefault();switchToLogin()">Sign in</a>
      </p>
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
        <button id="s2-btn" class="btn btn-primary w-full" style="margin-top:0.25rem" onclick="signupSubmit()">Create My Profile 🚀</button>
        <button style="background:none;border:none;color:var(--muted);font-size:0.8rem;cursor:pointer;font-family:'Instrument Sans',sans-serif"
          onclick="document.getElementById('s1').style.display='block';document.getElementById('s2').style.display='none'">← Back</button>
      </div>
    </div>

    <div id="s-done" style="display:none;text-align:center;padding:1rem 0">
      <div style="font-size:3.5rem;margin-bottom:1.25rem">🌍</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:2.25rem;margin-bottom:0.75rem">Welcome to Roamr!</h3>
      <p class="text-sm text-muted" style="margin-bottom:2rem;line-height:1.7">Your profile is ready. Start exploring travelers headed your way.</p>
      <a href="discover.html" class="btn btn-primary">Explore Travelers →</a>
    </div>
  </div>
</div>

<!-- LOGIN MODAL -->
<div id="login-modal" class="modal-overlay" onclick="if(event.target===this)closeLogin()">
  <div class="modal-box">
    <button class="modal-close" onclick="closeLogin()">×</button>

    <div id="l-form">
      <div class="section-label">Welcome Back</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:2rem;margin-bottom:0.4rem">Sign In</h3>
      <p class="text-sm text-muted mb-3">Good to see you again, traveler.</p>
      <div class="flex flex-col gap-2">
        <div class="field">
          <label>Username or Email</label>
          <input id="l-user" type="text" placeholder="username or email@example.com" autocomplete="username">
        </div>
        <div class="field">
          <label>Password</label>
          <input id="l-pass" type="password" placeholder="Your password" autocomplete="current-password">
        </div>
        <div id="l-err" style="font-size:0.8rem;color:var(--accent);display:none"></div>
        <button id="l-btn" class="btn btn-primary w-full" style="margin-top:0.25rem" onclick="loginSubmit()">Sign In →</button>
      </div>
      <p class="text-xs text-muted" style="text-align:center;margin-top:1.25rem">
        Don't have an account?
        <a href="#" style="color:var(--white);font-weight:600" onclick="event.preventDefault();switchToSignup()">Create one free</a>
      </p>
    </div>

    <div id="l-done" style="display:none;text-align:center;padding:1rem 0">
      <div style="font-size:3.5rem;margin-bottom:1.25rem">👋</div>
      <h3 id="l-welcome" style="font-family:'Bebas Neue',sans-serif;font-size:2.25rem;margin-bottom:0.75rem">Welcome back!</h3>
      <p class="text-sm text-muted" style="margin-bottom:2rem;line-height:1.7">You're signed in. Continue exploring.</p>
      <a href="discover.html" class="btn btn-primary">Explore Travelers →</a>
    </div>
  </div>
</div>
`);

  setTimeout(() => initCityAutocomplete('s-city', 's-city-dd', 's-city-spin'), 100);
}

// ── Signup Flow ──────────────────────────────────────────────────────────────

function signupStep2() {
  const username = document.getElementById('s-username').value.trim();
  const email    = document.getElementById('s-email').value.trim();
  const email2   = document.getElementById('s-email2').value.trim();
  const pass     = document.getElementById('s-pass').value;
  const pass2    = document.getElementById('s-pass2').value;
  const err      = document.getElementById('s1-err');

  if (!username || !email || !email2 || !pass || !pass2) return showErr(err, 'Please fill in all fields.');
  if (username.length < 3) return showErr(err, 'Username must be at least 3 characters.');
  if (!/^[a-zA-Z0-9_.-]+$/.test(username)) return showErr(err, 'Username may only contain letters, numbers, underscores, dashes, and dots.');
  if (!/\S+@\S+\.\S+/.test(email)) return showErr(err, 'Please enter a valid email address.');
  if (email !== email2) return showErr(err, 'Email addresses do not match.');
  if (pass.length < 8) return showErr(err, 'Password must be at least 8 characters.');
  if (pass !== pass2) return showErr(err, 'Passwords do not match.');

  err.style.display = 'none';
  document.getElementById('s1').style.display = 'none';
  document.getElementById('s2').style.display = 'block';
}

async function signupSubmit() {
  const city     = document.getElementById('s-city').value.trim();
  const selected = [...document.querySelectorAll('#s2 .style-tag.selected')].map(el => el.textContent.trim());
  const err      = document.getElementById('s2-err');
  const btn      = document.getElementById('s2-btn');

  if (!city) return showErr(err, 'Please enter your home city.');
  if (!selected.length) return showErr(err, 'Pick at least one travel style.');
  err.style.display = 'none';

  btn.textContent = 'Creating your profile…';
  btn.disabled = true;

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: document.getElementById('s-username').value.trim(),
        email: document.getElementById('s-email').value.trim(),
        password: document.getElementById('s-pass').value,
        homeCity: city,
        travelStyles: selected,
      }),
    });
    const data = await res.json();

    if (!res.ok) {
      btn.textContent = 'Create My Profile 🚀';
      btn.disabled = false;
      // Username/email conflicts — send back to step 1
      if (data.error && (data.error.toLowerCase().includes('username') || data.error.toLowerCase().includes('email'))) {
        document.getElementById('s2').style.display = 'none';
        document.getElementById('s1').style.display = 'block';
        return showErr(document.getElementById('s1-err'), data.error);
      }
      return showErr(err, data.error || 'Something went wrong. Please try again.');
    }

    document.getElementById('s2').style.display = 'none';
    document.getElementById('s-done').style.display = 'block';
  } catch {
    btn.textContent = 'Create My Profile 🚀';
    btn.disabled = false;
    showErr(err, 'Could not reach the server. Please try again.');
  }
}

// ── Login Flow ───────────────────────────────────────────────────────────────

async function loginSubmit() {
  const usernameOrEmail = document.getElementById('l-user').value.trim();
  const password        = document.getElementById('l-pass').value;
  const err             = document.getElementById('l-err');
  const btn             = document.getElementById('l-btn');

  if (!usernameOrEmail || !password) return showErr(err, 'Please fill in all fields.');
  err.style.display = 'none';

  btn.textContent = 'Signing in…';
  btn.disabled = true;

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usernameOrEmail, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      btn.textContent = 'Sign In →';
      btn.disabled = false;
      return showErr(err, data.error || 'Sign in failed. Please try again.');
    }

    document.getElementById('l-welcome').textContent = `Welcome back, ${data.user.username}!`;
    document.getElementById('l-form').style.display = 'none';
    document.getElementById('l-done').style.display = 'block';
  } catch {
    btn.textContent = 'Sign In →';
    btn.disabled = false;
    showErr(err, 'Could not reach the server. Please try again.');
  }
}

// ── Modal Helpers ────────────────────────────────────────────────────────────

function showErr(el, msg) { el.textContent = msg; el.style.display = 'block'; }

function openSignup()   { document.getElementById('signup-modal').classList.add('open'); }
function closeSignup()  { document.getElementById('signup-modal').classList.remove('open'); }
function openLogin()    { document.getElementById('login-modal').classList.add('open'); }
function closeLogin()   { document.getElementById('login-modal').classList.remove('open'); }

function switchToLogin()   { closeSignup(); openLogin(); }
function switchToSignup()  { closeLogin();  openSignup(); }
