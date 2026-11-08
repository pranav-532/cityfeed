// ============================================================
// CityFeed — Application State & Data
// IIT Madras | MS2002 Course Project
// ============================================================

// ── Auth State ──
const AUTH = {
  isLoggedIn: false,
  user: null,
  demoUser: {
    name: 'Pranav Kolekar',
    email: 'demo@iitm.ac.in',
    password: 'cityfeed2026',
    college: 'IIT Madras',
    year: '1st Year B.Tech',
    dept: 'Chemical Engineering',
    rollno: 'CH25B071',
    avatar: 'PK',
    appliedCount: 0,
    savedCount: 0,
    applied: [],
    saved: []
  }
};

// ── Competitions Data ──
const COMPETITIONS = [
  {
    id: 'c1',
    type: 'competition',
    title: 'Unstop Momentum — National Case Study Challenge 2026',
    org: 'Unstop',
    orgLogo: '🏆',
    banner: 'linear-gradient(135deg, #6C3CE1, #2d1070)',
    tags: ['Case Study', 'Business Strategy', 'Open for All'],
    prize: '₹1,00,000',
    deadline: '2026-11-25',
    daysLeft: 17,
    participants: '12,400+',
    location: 'Pan India (Online + Chennai Finals)',
    mode: 'Hybrid',
    description: 'India\'s largest case study challenge. Tackle real business problems from top companies. Chennai regional finals to be hosted at IIT Madras Research Park.',
    eligibility: 'Open to all UG/PG students',
    team: '2–4 members',
    registerLink: '#',
    featured: true
  },
  {
    id: 'c2',
    type: 'hackathon',
    title: 'Smart India Hackathon — Internal Hackathon (IITM Round)',
    org: 'IIT Madras',
    orgLogo: '🎓',
    banner: 'linear-gradient(135deg, #00C9A7, #0d3b5e)',
    tags: ['Hackathon', 'Government', 'Problem Solving'],
    prize: '₹50,000',
    deadline: '2026-11-30',
    daysLeft: 22,
    participants: '800+',
    location: 'IIT Madras Campus',
    mode: 'Offline',
    description: 'Internal round for SIH 2026. Top teams represent IITM at the national finals. 36-hour hackathon with mentors from MeitY and industry.',
    eligibility: 'IITM students only',
    team: '6 members',
    registerLink: '#',
    featured: false
  },
  {
    id: 'c3',
    type: 'competition',
    title: 'Nirmaan Annual Business Plan Competition',
    org: 'E-Cell IITM (Nirmaan)',
    orgLogo: '💡',
    banner: 'linear-gradient(135deg, #FF6B35, #c45320)',
    tags: ['Entrepreneurship', 'Business Plan', 'Startup'],
    prize: '₹75,000 + Incubation',
    deadline: '2026-12-05',
    daysLeft: 27,
    participants: '340+',
    location: 'IIT Madras, Chennai',
    mode: 'Offline',
    description: 'Present your startup idea to a panel of VCs and industry leaders. Top 5 teams get incubation support at IITM\'s startup incubator (IITM Incubation Cell).',
    eligibility: 'Chennai cluster colleges',
    team: '2–5 members',
    registerLink: '#',
    featured: false
  },
  {
    id: 'c4',
    type: 'hackathon',
    title: 'Chennai Hacks 3.0 — 24-Hour Hackathon',
    org: 'CodeChef VIT Chennai',
    orgLogo: '⚡',
    banner: 'linear-gradient(135deg, #2d1070, #00C9A7)',
    tags: ['Web Dev', 'AI/ML', 'Open Source'],
    prize: '₹30,000',
    deadline: '2026-11-20',
    daysLeft: 12,
    participants: '600+',
    location: 'VIT Chennai Campus',
    mode: 'Offline',
    description: 'Build innovative solutions in 24 hours. Themes: Climate Tech, EdTech, FinTech. Free food and accommodation for participants.',
    eligibility: 'Open to all Chennai colleges',
    team: '3–5 members',
    registerLink: '#',
    featured: false
  },
  {
    id: 'c5',
    type: 'competition',
    title: 'TechTatva Design Challenge — UI/UX Track',
    org: 'MIT Manipal (Online)',
    orgLogo: '🎨',
    banner: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    tags: ['UI/UX', 'Design', 'Figma'],
    prize: '₹15,000',
    deadline: '2026-11-18',
    daysLeft: 10,
    participants: '2,100+',
    location: 'Online',
    mode: 'Online',
    description: 'Design a mobile app for a given problem statement. Submit Figma prototype. Special category for first-year students.',
    eligibility: 'Open to all',
    team: 'Individual or 2 members',
    registerLink: '#',
    featured: false
  },
  {
    id: 'c6',
    type: 'competition',
    title: 'Shaastra Finance League — Stock Market Simulation',
    org: 'Shaastra, IIT Madras',
    orgLogo: '📈',
    banner: 'linear-gradient(135deg, #065f46, #00C9A7)',
    tags: ['Finance', 'Stock Market', 'Strategy'],
    prize: '₹20,000',
    deadline: '2026-12-01',
    daysLeft: 23,
    participants: '900+',
    location: 'IIT Madras / Online prelims',
    mode: 'Hybrid',
    description: 'India\'s top student-run stock market simulation. Online prelims, offline finals at Shaastra 2027. Mentored by IITM Finance & Investment Club.',
    eligibility: 'All UG students',
    team: '2–3 members',
    registerLink: '#',
    featured: false
  },
  {
    id: 'c7',
    type: 'hackathon',
    title: 'Google Solution Challenge — IITM Chapter Qualifier',
    org: 'GDSC IIT Madras',
    orgLogo: '🌐',
    banner: 'linear-gradient(135deg, #1a73e8, #0d3b5e)',
    tags: ['Google Tech', 'SDGs', 'Mobile/Web'],
    prize: 'Google Goodies + Trip to Google HQ',
    deadline: '2026-12-10',
    daysLeft: 32,
    participants: '450+',
    location: 'IIT Madras / Online',
    mode: 'Hybrid',
    description: 'Build a solution using Google technologies that addresses one of the UN Sustainable Development Goals. Top IITM team qualifies for the global challenge.',
    eligibility: 'IITM students',
    team: '3–4 members',
    registerLink: '#',
    featured: false
  },
  {
    id: 'c8',
    type: 'competition',
    title: 'Pragyan Quiz — Technical Quiz Challenge',
    org: 'Pragyan, NIT Trichy',
    orgLogo: '🧠',
    banner: 'linear-gradient(135deg, #7c2d12, #FF6B35)',
    tags: ['Quiz', 'Technical', 'General Knowledge'],
    prize: '₹10,000',
    deadline: '2026-11-22',
    daysLeft: 14,
    participants: '5,000+',
    location: 'Online (NIT Trichy Finals)',
    mode: 'Hybrid',
    description: 'South India\'s most prestigious technical quiz. Online rounds, top 20 teams invited to NIT Trichy for the grand finale.',
    eligibility: 'All college students',
    team: 'Individual',
    registerLink: '#',
    featured: false
  }
];

// ── Internships Data ──
const INTERNSHIPS = [
  {
    id: 'i1',
    type: 'internship',
    role: 'Product Management Intern',
    org: 'OLA Electric',
    orgLogo: '⚡',
    tags: ['PM', 'EV', 'Chennai'],
    stipend: '₹25,000/mo',
    deadline: '2026-11-30',
    daysLeft: 22,
    duration: '6 months',
    location: 'Chennai (On-site)',
    description: 'Work with the product team on OLA Electric\'s next-gen scooter software. Must have basic knowledge of EVs.',
    eligibility: '3rd/4th year students',
    apply: '#'
  },
  {
    id: 'i2',
    type: 'internship',
    role: 'Software Development Engineer Intern',
    org: 'Zoho Corporation',
    orgLogo: '🌩️',
    tags: ['SDE', 'Full Stack', 'Chennai'],
    stipend: '₹20,000/mo',
    deadline: '2026-12-01',
    daysLeft: 23,
    duration: '6 months',
    location: 'Chennai, Estancia IT Park',
    description: 'Join Zoho\'s product engineering team. Build features for Zoho CRM or Zoho Books. Preferred: Java/Python experience.',
    eligibility: '2nd year and above',
    apply: '#'
  },
  {
    id: 'i3',
    type: 'internship',
    role: 'Data Science Research Intern',
    org: 'Robert Bosch India',
    orgLogo: '🔧',
    tags: ['Data Science', 'ML', 'Research'],
    stipend: '₹30,000/mo',
    deadline: '2026-11-25',
    daysLeft: 17,
    duration: '3–6 months',
    location: 'Coimbatore (Hybrid)',
    description: 'Research on predictive maintenance using sensor data for automotive applications. Python, ML frameworks required.',
    eligibility: 'B.Tech/M.Tech 3rd year+',
    apply: '#'
  },
  {
    id: 'i4',
    type: 'internship',
    role: 'Business Development Intern',
    org: 'Freshworks',
    orgLogo: '🌱',
    tags: ['BDR', 'Sales', 'SaaS'],
    stipend: '₹15,000/mo',
    deadline: '2026-12-05',
    daysLeft: 27,
    duration: '3 months',
    location: 'Chennai (On-site)',
    description: 'Help grow Freshworks\' SMB customer base. Cold outreach, demos, CRM management. Great for MBA aspirants.',
    eligibility: 'All years welcome',
    apply: '#'
  },
  {
    id: 'i5',
    type: 'internship',
    role: 'UX Design Intern',
    org: 'Chargebee',
    orgLogo: '⚡',
    tags: ['UX', 'Figma', 'SaaS'],
    stipend: '₹18,000/mo',
    deadline: '2026-11-28',
    daysLeft: 20,
    duration: '3 months',
    location: 'Chennai / Remote',
    description: 'Design user flows and conduct usability tests for Chargebee\'s subscription billing platform. Portfolio required.',
    eligibility: 'Design/CS students',
    apply: '#'
  },
  {
    id: 'i6',
    type: 'internship',
    role: 'Chemical Process Engineering Intern',
    org: 'Madras Fertilizers Ltd',
    orgLogo: '🏭',
    tags: ['Chemical Engg', 'Process', 'Chennai'],
    stipend: '₹12,000/mo',
    deadline: '2026-12-10',
    daysLeft: 32,
    duration: '2 months',
    location: 'Manali, Chennai',
    description: 'On-site internship at a large-scale fertilizer plant. Work with process engineers on optimization and safety compliance.',
    eligibility: 'Chemical Engineering students',
    apply: '#'
  }
];

// ── Upcoming Deadlines for sidebar ──
const DEADLINES = [
  { title: 'Chennai Hacks 3.0', days: 10, color: '#ef4444' },
  { title: 'TechTatva UI/UX', days: 10, color: '#ef4444' },
  { title: 'Pragyan Quiz', days: 14, color: '#f97316' },
  { title: 'Unstop Momentum', days: 17, color: '#f97316' },
  { title: 'Bosch DS Intern', days: 17, color: '#f97316' },
  { title: 'SIH Internal Hack', days: 22, color: '#22c55e' }
];

// ── Toast Notifications ──
function showToast(msg, type = 'info', icon = '✓') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => { toast.classList.add('show'); });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ── Auth ──
function login(email, password) {
  if (email === AUTH.demoUser.email && password === AUTH.demoUser.password) {
    AUTH.isLoggedIn = true;
    AUTH.user = { ...AUTH.demoUser };
    updateAuthUI();
    return { success: true };
  }
  return { success: false, error: 'Invalid email or password. Try the demo credentials.' };
}

function logout() {
  AUTH.isLoggedIn = false;
  AUTH.user = null;
  updateAuthUI();
  showToast('Logged out successfully', 'info', '👋');
}

function updateAuthUI() {
  const loggedIn = AUTH.isLoggedIn;
  document.querySelectorAll('.show-logged-in').forEach(el => {
    el.style.display = loggedIn ? 'flex' : 'none';
  });
  document.querySelectorAll('.show-logged-out').forEach(el => {
    el.style.display = loggedIn ? 'none' : 'flex';
  });
  if (loggedIn && AUTH.user) {
    document.querySelectorAll('.user-name-display').forEach(el => { el.textContent = AUTH.user.name; });
    document.querySelectorAll('.user-avatar-display').forEach(el => { el.textContent = AUTH.user.avatar; });
    document.querySelectorAll('.user-college-display').forEach(el => { el.textContent = AUTH.user.college; });
    document.querySelectorAll('.user-year-display').forEach(el => { el.textContent = AUTH.user.year; });
    document.querySelectorAll('.user-dept-display').forEach(el => { el.textContent = AUTH.user.dept; });
    document.querySelectorAll('.applied-count').forEach(el => { el.textContent = AUTH.user.applied.length; });
    document.querySelectorAll('.saved-count').forEach(el => { el.textContent = AUTH.user.saved.length; });
  }
}

// ── Days left color ──
function daysColor(days) {
  if (days <= 10) return 'deadline-urgent';
  if (days <= 20) return 'deadline-orange';
  return '';
}

// ── Format date ──
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ── Apply to competition/internship ──
function applyTo(id, title) {
  if (!AUTH.isLoggedIn) {
    openAuthModal();
    showToast('Please login to apply', 'info', '🔒');
    return;
  }
  if (AUTH.user.applied.includes(id)) {
    showToast('You have already applied!', 'info', '✅');
    return;
  }
  AUTH.user.applied.push(id);
  AUTH.user.appliedCount++;
  updateAuthUI();
  showToast(`Applied to "${title}" successfully!`, 'success', '🎉');
  // Update button states
  document.querySelectorAll(`[data-apply="${id}"]`).forEach(btn => {
    btn.textContent = '✓ Applied';
    btn.classList.add('applied');
  });
  // Update profile sidebar
  document.querySelectorAll('.applied-count').forEach(el => { el.textContent = AUTH.user.applied.length; });
}

// ── Save ──
function saveItem(id, title) {
  if (!AUTH.isLoggedIn) { openAuthModal(); return; }
  const idx = AUTH.user.saved.indexOf(id);
  if (idx === -1) {
    AUTH.user.saved.push(id);
    showToast(`Saved "${title}"`, 'success', '🔖');
  } else {
    AUTH.user.saved.splice(idx, 1);
    showToast('Removed from saved', 'info', '🗑️');
  }
  updateAuthUI();
}

// ── Open/Close modals ──
function openAuthModal(tab = 'login') {
  document.getElementById('auth-modal').classList.add('open');
  switchAuthTab(tab);
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('login-form').classList.toggle('hidden', tab !== 'login');
  document.getElementById('signup-form').classList.toggle('hidden', tab !== 'signup');
}

function openApplyModal(id) {
  if (!AUTH.isLoggedIn) { openAuthModal(); showToast('Please login to apply', 'info', '🔒'); return; }
  const item = [...COMPETITIONS, ...INTERNSHIPS].find(x => x.id === id);
  if (!item) return;

  if (AUTH.user.applied.includes(id)) {
    showToast('You have already applied!', 'info', '✅');
    return;
  }

  const modal = document.getElementById('apply-modal');
  document.getElementById('apply-modal-title').textContent = item.title || item.role;
  document.getElementById('apply-modal-org').textContent = item.org;
  document.getElementById('apply-item-id').value = id;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeApplyModal() {
  document.getElementById('apply-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function submitApplication(e) {
  e.preventDefault();
  const id = document.getElementById('apply-item-id').value;
  const item = [...COMPETITIONS, ...INTERNSHIPS].find(x => x.id === id);
  if (!item) return;
  applyTo(id, item.title || item.role);
  closeApplyModal();
}

// ── Filter ──
let activeFilter = 'all';
let searchQuery = '';

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.filter === filter);
  });
  renderContent();
}

function setSearch(q) {
  searchQuery = q.toLowerCase();
  renderContent();
}

function getFilteredCompetitions() {
  return COMPETITIONS.filter(c => {
    const matchFilter = activeFilter === 'all' || activeFilter === c.type || activeFilter === 'competitions';
    const matchSearch = !searchQuery ||
      c.title.toLowerCase().includes(searchQuery) ||
      c.org.toLowerCase().includes(searchQuery) ||
      c.tags.some(t => t.toLowerCase().includes(searchQuery));
    return matchFilter && matchSearch;
  });
}

function getFilteredInternships() {
  return INTERNSHIPS.filter(i => {
    const matchFilter = activeFilter === 'all' || activeFilter === 'internship';
    const matchSearch = !searchQuery ||
      i.role.toLowerCase().includes(searchQuery) ||
      i.org.toLowerCase().includes(searchQuery) ||
      i.tags.some(t => t.toLowerCase().includes(searchQuery));
    return matchFilter && matchSearch;
  });
}

// ── Render Cards ──
function renderCompetitionCard(c) {
  const isApplied = AUTH.user && AUTH.user.applied.includes(c.id);
  const isSaved = AUTH.user && AUTH.user.saved.includes(c.id);
  const urgentClass = c.daysLeft <= 10 ? 'urgent' : '';
  const typeLabel = c.type === 'hackathon' ? 'Hackathon' : 'Competition';

  return `
  <div class="card animate-in" onclick="openDetailModal('${c.id}')">
    <div class="card-banner ${c.type}"></div>
    <div class="card-body">
      <div class="card-top-row">
        <div class="card-org">
          <div class="org-logo">${c.orgLogo}</div>
          <span>${c.org}</span>
        </div>
        <span class="type-pill ${c.type}">${typeLabel}</span>
      </div>
      <div class="card-title">${c.title}</div>
      <div class="card-tags">
        ${c.tags.slice(0,3).map(t => `<span class="tag tag-blue">${t}</span>`).join('')}
      </div>
      <div class="card-meta">
        <span>${c.participants} registered</span>
        <span>${c.location}</span>
        <span>${c.mode}</span>
      </div>
    </div>
    <div class="card-footer">
      <div>
        <div class="prize-label">Prize Pool</div>
        <div class="prize-value">${c.prize}</div>
      </div>
      <div class="card-actions">
        <span class="deadline-badge ${urgentClass}">${c.daysLeft}d left</span>
        <button class="apply-btn save-btn" onclick="event.stopPropagation(); saveItem('${c.id}', '${c.title.replace(/'/g, "\\'")}')">
          ${isSaved ? 'Saved' : 'Save'}
        </button>
        <button class="apply-btn ${isApplied ? 'applied' : ''}" data-apply="${c.id}"
          onclick="event.stopPropagation(); openApplyModal('${c.id}')">
          ${isApplied ? 'Applied' : 'Apply'}
        </button>
      </div>
    </div>
  </div>`;
}

function renderInternshipCard(i) {
  const isApplied = AUTH.user && AUTH.user.applied.includes(i.id);
  const urgentClass = i.daysLeft <= 10 ? 'urgent' : '';
  return `
  <div class="internship-card animate-in" onclick="openDetailModal('${i.id}')">
    <div class="internship-logo">${i.orgLogo}</div>
    <div class="internship-info">
      <div class="internship-role">${i.role}</div>
      <div class="internship-org">${i.org} &nbsp;&middot;&nbsp; ${i.location} &nbsp;&middot;&nbsp; ${i.duration}</div>
      <div class="internship-tags">
        ${i.tags.map(t => `<span class="tag tag-orange">${t}</span>`).join('')}
      </div>
    </div>
    <div class="internship-actions">
      <div class="internship-stipend">${i.stipend}</div>
      <div class="internship-deadline"><span class="deadline-badge ${urgentClass}">${i.daysLeft}d left</span></div>
      <button class="apply-btn btn-sm ${isApplied ? 'applied' : ''}" data-apply="${i.id}"
        onclick="event.stopPropagation(); openApplyModal('${i.id}')">
        ${isApplied ? 'Applied' : 'Apply'}
      </button>
    </div>
  </div>`;
}

function renderContent() {
  const comps = getFilteredCompetitions();
  const interns = getFilteredInternships();

  const compGrid = document.getElementById('competitions-grid');
  const internList = document.getElementById('internships-list');
  const compSection = document.getElementById('competitions-section');
  const internSection = document.getElementById('internships-section');

  if (compGrid) {
    if (comps.length === 0) {
      compGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="icon">🔍</div><h3>No results</h3><p>Try a different search or filter</p></div>`;
    } else {
      compGrid.innerHTML = comps.map(renderCompetitionCard).join('');
    }
    if (compSection) {
      compSection.style.display = (activeFilter === 'all' || activeFilter !== 'internship') ? 'block' : 'none';
    }
  }

  if (internList) {
    if (interns.length === 0) {
      internList.innerHTML = `<div class="empty-state"><div class="icon">💼</div><h3>No internships found</h3><p>Try a different search</p></div>`;
    } else {
      internList.innerHTML = interns.map(renderInternshipCard).join('');
    }
    if (internSection) {
      internSection.style.display = (activeFilter === 'all' || activeFilter === 'internship') ? 'block' : 'none';
    }
  }
}

// ── Detail Modal ──
function openDetailModal(id) {
  const item = [...COMPETITIONS, ...INTERNSHIPS].find(x => x.id === id);
  if (!item) return;

  const isComp = item.type === 'competition' || item.type === 'hackathon';
  const isApplied = AUTH.user && AUTH.user.applied.includes(id);
  const typeLabel = isComp ? (item.type === 'hackathon' ? 'Hackathon' : 'Competition') : 'Internship';

  document.getElementById('detail-modal-content').innerHTML = `
    <div style="background:var(--primary);padding:24px;color:white;border-radius:12px 12px 0 0">
      <div style="font-size:0.72rem;opacity:0.7;margin-bottom:6px;letter-spacing:0.5px;text-transform:uppercase">${typeLabel}</div>
      <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:6px;line-height:1.4">${item.title || item.role}</h2>
      <div style="font-size:0.82rem;opacity:0.8">${item.org} &nbsp;&middot;&nbsp; ${item.location || ''}</div>
    </div>
    <div style="padding:20px 24px">
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px">
        ${isComp
          ? `<div style="flex:1;min-width:120px;padding:12px;border:1px solid var(--border);border-radius:var(--radius)"><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:3px">Prize Pool</div><div style="font-weight:700;font-size:0.95rem">${item.prize}</div></div>`
          : `<div style="flex:1;min-width:120px;padding:12px;border:1px solid var(--border);border-radius:var(--radius)"><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:3px">Stipend</div><div style="font-weight:700;font-size:0.95rem">${item.stipend}</div></div>`}
        <div style="flex:1;min-width:120px;padding:12px;border:1px solid var(--border);border-radius:var(--radius)"><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:3px">Deadline</div><div style="font-weight:700;font-size:0.9rem">${formatDate(item.deadline)}</div></div>
        <div style="flex:1;min-width:120px;padding:12px;border:1px solid var(--border);border-radius:var(--radius)"><div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:3px">${isComp ? 'Team Size' : 'Duration'}</div><div style="font-weight:700;font-size:0.9rem">${isComp ? item.team : item.duration}</div></div>
      </div>
      <div style="font-size:0.8rem;font-weight:600;color:var(--text-secondary);margin-bottom:6px">About</div>
      <p style="color:var(--text-secondary);font-size:0.875rem;margin-bottom:16px;line-height:1.65">${item.description}</p>
      <div style="font-size:0.8rem;font-weight:600;color:var(--text-secondary);margin-bottom:6px">Eligibility</div>
      <p style="color:var(--text-secondary);font-size:0.875rem;margin-bottom:16px">${item.eligibility}</p>
      <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:20px">
        ${item.tags.map(t => `<span class="tag tag-blue">${t}</span>`).join('')}
      </div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="${isApplied ? '' : `openApplyModal('${id}'); closeDetailModal()`}"
          ${isApplied ? 'disabled style="opacity:0.6;cursor:default;flex:1;justify-content:center"' : ''}>
          ${isApplied ? 'Already Applied' : 'Apply Now'}
        </button>
        <button class="btn btn-ghost" onclick="saveItem('${id}', '${(item.title || item.role).replace(/'/g, "\\'")}'); closeDetailModal()">Save</button>
      </div>
    </div>`;

  document.getElementById('detail-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  document.getElementById('detail-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Sidebar Deadlines ──
function renderSidebarDeadlines() {
  const list = document.getElementById('deadline-list');
  if (!list) return;
  list.innerHTML = DEADLINES.map(d => `
    <div class="deadline-item">
      <div class="deadline-dot" style="background:${d.color}"></div>
      <div class="info">
        <strong>${d.title}</strong>
        <span>${d.days} days left</span>
      </div>
      <div class="days" style="color:${d.color}">${d.days}d</div>
    </div>`).join('');
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderContent();
  renderSidebarDeadlines();
  updateAuthUI();

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Handle login form
  const loginForm = document.getElementById('login-form-el');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const pwd = document.getElementById('login-pwd').value;
      const btn = loginForm.querySelector('button[type=submit]');
      btn.textContent = 'Logging in...';
      btn.disabled = true;
      setTimeout(() => {
        const result = login(email, pwd);
        if (result.success) {
          closeAuthModal();
          showToast(`Welcome back, ${AUTH.user.name}! 🎉`, 'success', '👋');
        } else {
          document.getElementById('login-error').textContent = result.error;
          document.getElementById('login-error').style.display = 'block';
          btn.textContent = 'Login';
          btn.disabled = false;
        }
      }, 700);
    });
  }

  // Handle signup form
  const signupForm = document.getElementById('signup-form-el');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = signupForm.querySelector('button[type=submit]');
      btn.textContent = 'Creating account...';
      btn.disabled = true;
      setTimeout(() => {
        // Auto-login with demo user for prototype
        AUTH.isLoggedIn = true;
        AUTH.user = { ...AUTH.demoUser, name: document.getElementById('signup-name').value || AUTH.demoUser.name, avatar: (document.getElementById('signup-name').value || 'PK').substring(0, 2).toUpperCase() };
        updateAuthUI();
        closeAuthModal();
        showToast('Account created! Welcome to CityFeed 🎉', 'success', '🌟');
      }, 1000);
    });
  }

  // Apply form
  const applyForm = document.getElementById('apply-form-el');
  if (applyForm) { applyForm.addEventListener('submit', submitApplication); }

  // Search
  const heroSearch = document.getElementById('hero-search-input');
  if (heroSearch) heroSearch.addEventListener('input', (e) => setSearch(e.target.value));
  const navSearch = document.getElementById('nav-search-input');
  if (navSearch) navSearch.addEventListener('input', (e) => setSearch(e.target.value));
});

