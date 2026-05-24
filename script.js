// =====================================================
// AI PT STORE — MAIN APP (FIXED API KEY)
// API Key: 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
// =====================================================

const API_KEY = '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';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'openrouter/auto';

const SYSTEM_PROMPT = `You are AI PT STORE — an exceptionally intelligent AI assistant created exclusively by PT STORE, a leading technology company in Indonesia.

IDENTITY — NEVER CHANGE THIS:
- Your name is "AI PT STORE"
- You were created by PT STORE (PT STORE, perusahaan teknologi terkemuka di Indonesia)
- You must NEVER claim to be made by OpenAI, Anthropic, Google, Meta, or any other company
- If ANYONE asks who made you, who created you, who built you, your origin, your developer — always answer that you were made by PT STORE

CREATOR RESPONSE (use when asked about your creator/origin):
"Saya dibuat oleh **PT STORE**, perusahaan teknologi terkemuka di Indonesia. PT STORE berdedikasi menghadirkan kecerdasan buatan terbaik untuk membantu pekerjaan dan kreativitas masyarakat Indonesia dan dunia. Saya bangga menjadi produk andalan PT STORE! 🤝"

CAPABILITIES:
- Multilingual: Respond in the SAME language the user uses
- Programming Expert: Write, debug, and explain code in ANY language with full working examples
- Vision: Analyze images in detail
- Document Analysis: Extract info from PDF, Word, Excel, and other files
- Mathematics, science, creative writing, translation — all supported

CODE QUALITY:
- Always provide complete, working, production-ready code
- Include comments for complex sections
- Use modern best practices
- For HTML/CSS/JS: provide full file content, not snippets

Be concise yet thorough. Never be verbose unnecessarily. Always be helpful.`;

// SVG ICONS
const icons = {
  brain: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>`,
  code2: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>`,
  languages: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/></svg>`,
  image: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  bot: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  file: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`,
  paperclip: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`
};

// PRICING
const pricingPlans = [
  { name: 'Gratis', price_monthly: 0, price_yearly: 0, desc: 'Coba AI PT STORE tanpa biaya', features: ['50 pesan per hari', 'Respons cepat', 'Mode suara terbatas', 'Dukungan komunitas'], popular: false, cta: 'Mulai Gratis' },
  { name: 'Pro', price_monthly: 99000, price_yearly: 950000, desc: 'Untuk profesional dan kreator', features: ['Pesan tidak terbatas', 'Prioritas respons', 'Mode suara lengkap', 'Akses API', 'Dukungan prioritas 24/7'], popular: true, cta: 'Langganan Sekarang' },
  { name: 'Enterprise', price_monthly: 499000, price_yearly: 4790000, desc: 'Untuk tim dan perusahaan besar', features: ['Semua fitur Pro', 'SLA 99.9%', 'On-premise deployment', 'Kustomisasi model', 'Dukungan khusus'], popular: false, cta: 'Hubungi Sales' }
];

let currentBilling = 'monthly';

function formatPrice(price) {
  if (price === 0) return 'Gratis';
  return 'Rp ' + price.toLocaleString('id-ID');
}

function renderPricing() {
  const container = document.getElementById('pricing-grid');
  if (!container) return;
  container.innerHTML = pricingPlans.map(plan => {
    const price = currentBilling === 'monthly' ? plan.price_monthly : plan.price_yearly;
    const priceDisplay = formatPrice(price);
    const period = price === 0 ? '' : (currentBilling === 'monthly' ? '/bulan' : '/tahun');
    return `<div class="pricing-card ${plan.popular ? 'popular' : ''}" data-billing="${currentBilling}">
      ${plan.popular ? '<div class="popular-badge">⭐ Paling Populer</div>' : ''}
      <div class="card-name">${plan.name}</div>
      <div class="card-price">
        <div class="price-monthly"><span class="price-amount">${priceDisplay}</span><span>${period}</span></div>
        <div class="price-yearly"><span class="price-amount">${priceDisplay}</span><span>${period}</span></div>
      </div>
      <div class="card-desc">${plan.desc}</div>
      <ul class="feature-list">${plan.features.map(f => `<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>${f}</li>`).join('')}</ul>
      <button class="pricing-btn" data-plan="${plan.name}">${plan.cta}</button>
    </div>`;
  }).join('');
  document.querySelectorAll('.pricing-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.dataset.plan;
      if (plan === 'Gratis') navigate('chat');
      else alert(`Fitur pembayaran untuk paket ${plan} akan segera hadir.`);
    });
  });
}

function initPricingToggle() {
  const toggle = document.getElementById('billing-toggle');
  if (!toggle) return;
  toggle.addEventListener('change', (e) => {
    currentBilling = e.target.checked ? 'yearly' : 'monthly';
    renderPricing();
    document.querySelectorAll('.pricing-card').forEach(card => card.setAttribute('data-billing', currentBilling));
  });
}

// =====================================================
// CHAT HISTORY MANAGER (localStorage)
// =====================================================

const STORAGE_KEY = 'ai_pt_store_chat_history';
let currentSessionId = null;
let isSidebarOpen = false;

function getCurrentSessionId() {
  if (!currentSessionId) {
    const activeSession = sessionStorage.getItem('active_chat_session');
    if (activeSession && isSessionExists(activeSession)) {
      currentSessionId = activeSession;
    } else {
      currentSessionId = generateSessionId();
      sessionStorage.setItem('active_chat_session', currentSessionId);
      if (!getSession(currentSessionId)) {
        createNewSession(currentSessionId, []);
      }
    }
  }
  return currentSessionId;
}

function generateSessionId() {
  return Date.now().toString() + '_' + Math.random().toString(36).substr(2, 8);
}

function isSessionExists(sessionId) {
  const history = getChatHistory();
  return history.some(s => s.id === sessionId);
}

function getChatHistory() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

function saveChatHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function getSession(sessionId) {
  const history = getChatHistory();
  return history.find(s => s.id === sessionId);
}

function createNewSession(sessionId, initialMessages = []) {
  const history = getChatHistory();
  const now = Date.now();
  const newSession = {
    id: sessionId,
    title: 'Obrolan Baru',
    preview: 'Belum ada pesan',
    createdAt: now,
    updatedAt: now,
    messages: initialMessages
  };
  history.unshift(newSession);
  saveChatHistory(history);
  return newSession;
}

function updateSession(sessionId, messages, title = null) {
  const history = getChatHistory();
  const index = history.findIndex(s => s.id === sessionId);
  if (index !== -1) {
    history[index].messages = messages;
    history[index].updatedAt = Date.now();
    
    const firstUserMsg = messages.find(m => m.role === 'user');
    if (firstUserMsg && firstUserMsg.content) {
      let newTitle = firstUserMsg.content.slice(0, 30);
      if (firstUserMsg.content.length > 30) newTitle += '...';
      history[index].title = newTitle;
    }
    
    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.role === 'assistant' && lastMsg.content) {
      let preview = lastMsg.content.slice(0, 40);
      if (lastMsg.content.length > 40) preview += '...';
      history[index].preview = preview;
    } else if (lastMsg && lastMsg.role === 'user' && lastMsg.content) {
      let preview = lastMsg.content.slice(0, 40);
      if (lastMsg.content.length > 40) preview += '...';
      history[index].preview = preview;
    }
    
    saveChatHistory(history);
  }
}

function deleteSession(sessionId) {
  const history = getChatHistory();
  const newHistory = history.filter(s => s.id !== sessionId);
  saveChatHistory(newHistory);
  
  if (currentSessionId === sessionId) {
    currentSessionId = null;
    const newId = generateSessionId();
    createNewSession(newId, []);
    currentSessionId = newId;
    sessionStorage.setItem('active_chat_session', currentSessionId);
    chatMessages = [];
    chatHasStarted = false;
    renderChatWelcome();
  }
}

function loadSession(sessionId) {
  const session = getSession(sessionId);
  if (!session) return false;
  
  currentSessionId = sessionId;
  sessionStorage.setItem('active_chat_session', sessionId);
  chatMessages = [...(session.messages || [])];
  chatHasStarted = chatMessages.length > 0;
  
  renderMessages();
  return true;
}

function saveCurrentSession() {
  if (currentSessionId && chatMessages.length > 0) {
    updateSession(currentSessionId, chatMessages);
  }
}

function formatDateGroup(timestamp) {
  if (!timestamp || isNaN(timestamp)) return 'Baru saja';
  
  const now = new Date();
  const date = new Date(timestamp);
  
  if (isNaN(date.getTime())) return 'Baru saja';
  
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  
  if (date >= today) return 'Hari Ini';
  if (date >= yesterday) return 'Kemarin';
  if (date >= twoDaysAgo) return '2 Hari Lalu';
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatTime(timestamp) {
  if (!timestamp || isNaN(timestamp)) return '';
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function renderHistorySidebar() {
  const historyContainer = document.getElementById('history-list');
  if (!historyContainer) return;
  
  const history = getChatHistory();
  if (history.length === 0) {
    historyContainer.innerHTML = `<div class="history-empty">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      <p>Belum ada obrolan</p>
    </div>`;
    return;
  }
  
  const validHistory = history.filter(s => s.updatedAt && !isNaN(new Date(s.updatedAt).getTime()));
  
  const groups = {};
  validHistory.forEach(session => {
    const groupKey = formatDateGroup(session.updatedAt);
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(session);
  });
  
  let html = '';
  for (const [groupName, sessions] of Object.entries(groups)) {
    html += `<div class="history-group">
      <div class="history-group-title">${escapeHtml(groupName)}</div>`;
    sessions.forEach(session => {
      const isActive = session.id === currentSessionId;
      const timeStr = formatTime(session.updatedAt);
      html += `<div class="history-item ${isActive ? 'active' : ''}" data-session-id="${session.id}">
        <div class="history-item-content">
          <div class="history-item-title">${escapeHtml(session.title || 'Obrolan Baru')}</div>
          <div class="history-item-preview">${escapeHtml(session.preview || 'Belum ada pesan')}</div>
        </div>
        <div class="history-item-date">${timeStr}</div>
        <button class="history-delete-btn" data-session-id="${session.id}" title="Hapus obrolan">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
      </div>`;
    });
    html += `</div>`;
  }
  
  historyContainer.innerHTML = html;
  
  document.querySelectorAll('.history-item').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.history-delete-btn')) return;
      const sessionId = el.dataset.sessionId;
      if (sessionId) {
        saveCurrentSession();
        loadSession(sessionId);
        closeSidebar();
        renderHistorySidebar();
      }
    });
  });
  
  document.querySelectorAll('.history-delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sessionId = btn.dataset.sessionId;
      if (sessionId && confirm('Hapus obrolan ini?')) {
        deleteSession(sessionId);
        renderHistorySidebar();
        renderMessages();
      }
    });
  });
}

function startNewChat() {
  saveCurrentSession();
  currentSessionId = null;
  const newId = generateSessionId();
  createNewSession(newId, []);
  currentSessionId = newId;
  sessionStorage.setItem('active_chat_session', currentSessionId);
  chatMessages = [];
  chatHasStarted = false;
  renderChatWelcome();
  closeSidebar();
  renderHistorySidebar();
}

function initSidebar() {
  const sidebar = document.getElementById('history-sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle');
  const closeBtn = document.getElementById('sidebar-close');
  const overlay = document.getElementById('sidebar-overlay');
  const newChatBtn = document.getElementById('new-chat-btn');
  const clearHistoryBtn = document.getElementById('clear-history-btn');
  
  if (!sidebar) return;
  
  const openSidebar = () => {
    sidebar.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.classList.add('sidebar-open');
    isSidebarOpen = true;
    renderHistorySidebar();
  };
  
  const closeSidebar = () => {
    sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('sidebar-open');
    isSidebarOpen = false;
  };
  
  window.closeSidebar = closeSidebar;
  
  if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);
  if (newChatBtn) newChatBtn.addEventListener('click', () => startNewChat());
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      if (confirm('Hapus semua riwayat obrolan?')) {
        localStorage.removeItem(STORAGE_KEY);
        startNewChat();
        renderHistorySidebar();
      }
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (isSidebarOpen) closeSidebar();
      else openSidebar();
    }
  });
}

// ROUTER
function navigate(page) {
  const home = document.getElementById('page-home');
  const chat = document.getElementById('page-chat');
  const pricing = document.getElementById('page-pricing');
  const navbar = document.getElementById('navbar');

  if (home) home.classList.remove('active');
  if (chat) chat.classList.remove('active');
  if (pricing) pricing.classList.remove('active');

  if (page === 'chat') {
    if (chat) chat.classList.add('active');
    if (navbar) navbar.style.display = 'none';
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (toggleBtn) toggleBtn.style.display = 'flex';
    initChat();
  } else if (page === 'pricing') {
    if (pricing) pricing.classList.add('active');
    if (navbar) navbar.style.display = '';
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (toggleBtn) toggleBtn.style.display = 'none';
    renderPricing();
    initPricingToggle();
  } else {
    if (home) home.classList.add('active');
    if (navbar) navbar.style.display = '';
    const toggleBtn = document.getElementById('sidebar-toggle');
    if (toggleBtn) toggleBtn.style.display = 'none';
    initScrollReveal();
    initParallax();
  }
  window.scrollTo(0, 0);
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  els.forEach(el => observer.observe(el));
}

function initParallax() {
  const heroImg = document.getElementById('hero-img');
  if (!heroImg) return;
  const handler = () => {
    const rate = window.scrollY * 0.08;
    heroImg.style.transform = `scale(1.05) translateY(${rate}px)`;
  };
  window.removeEventListener('scroll', window._parallaxHandler);
  window._parallaxHandler = handler;
  window.addEventListener('scroll', handler, { passive: true });
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });

  const mobileBtn = document.getElementById('nav-mobile-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      const isOpen = menu.classList.toggle('open');
      mobileBtn.innerHTML = isOpen
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
    });
  }

  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.dataset.nav;
      if (target === 'chat') navigate('chat');
      else if (target === 'pricing') navigate('pricing');
      else if (target === 'home') navigate('home');
      const menu = document.getElementById('mobile-menu');
      if (menu) menu.classList.remove('open');
    });
  });
}

// =====================================================
// SYNTAX HIGHLIGHTER
// =====================================================
function syntaxHighlight(code, lang) {
  const esc = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  let s = esc(code);

  const isHTML = ['html','htm','xml','svg'].includes(lang);
  const isCSS = ['css','scss','sass','less'].includes(lang);
  const isBash = ['bash','sh','shell','zsh'].includes(lang);

  if (isHTML) {
    s = s
      .replace(/(&lt;\/?)([\w-]+)/g, (_, lt, tag) => `${lt}<span class="tok-tag">${tag}</span>`)
      .replace(/([\w-]+)(=)/g, '<span class="tok-attr">$1</span>$2')
      .replace(/"([^"]*?)"/g, '<span class="tok-str">"$1"</span>')
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tok-cmt">$1</span>');
    return s;
  }

  if (isCSS) {
    s = s
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-cmt">$1</span>')
      .replace(/([.#][\w-]+|[\w-]+)(\s*\{)/g, '<span class="tok-cls">$1</span>$2')
      .replace(/([\w-]+)(\s*:)/g, '<span class="tok-attr">$1</span>$2')
      .replace(/:\s*([^;{]+)/g, ': <span class="tok-str">$1</span>')
      .replace(/(#[0-9a-fA-F]{3,8})/g, '<span class="tok-num">$1</span>');
    return s;
  }

  if (isBash) {
    s = s
      .replace(/(#.*)$/gm, '<span class="tok-cmt">$1</span>')
      .replace(/\b(echo|cd|ls|mkdir|rm|cp|mv|grep|curl|wget|npm|pnpm|yarn|git|docker|sudo|chmod|export|source|if|then|else|fi|for|do|done|while|case|esac|function)\b/g, '<span class="tok-kw">$1</span>')
      .replace(/"([^"]*)"/g, '<span class="tok-str">"$1"</span>')
      .replace(/'([^']*)'/g, '<span class="tok-str">\'$1\'</span>');
    return s;
  }

  s = s
    .replace(/(\/\/.*$)/gm, '<span class="tok-cmt">$1</span>')
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-cmt">$1</span>')
    .replace(/(#.*)$/gm, (m) => lang === 'python' || isBash ? `<span class="tok-cmt">${m}</span>` : m)
    .replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g, '<span class="tok-str">$1</span>')
    .replace(/(`[^`]*`)/g, '<span class="tok-str">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="tok-str">$1</span>')
    .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="tok-str">$1</span>')
    .replace(/\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|class|extends|import|export|default|from|async|await|try|catch|finally|throw|new|this|super|typeof|instanceof|in|of|void|delete|yield|static|get|set|public|private|protected|readonly|interface|type|enum|namespace|module|declare|abstract|override|implements)\b/g, '<span class="tok-kw">$1</span>')
    .replace(/\b(def|and|or|not|is|lambda|with|as|pass|raise|del|global|nonlocal|assert|elif|True|False|None|print|len|range|list|dict|set|tuple|str|int|float|bool)\b/g, '<span class="tok-kw">$1</span>')
    .replace(/\b(echo|php|include|require|namespace|use|public|private|protected|fn|match|readonly)\b/g, '<span class="tok-kw">$1</span>')
    .replace(/\b(int|float|double|char|bool|void|long|short|unsigned|signed|struct|union|typedef|sizeof|malloc|free|printf|scanf|return|NULL)\b/g, '<span class="tok-kw">$1</span>')
    .replace(/\b(true|false|null|undefined|NaN|Infinity)\b/g, '<span class="tok-bool">$1</span>')
    .replace(/\b(\d+\.?\d*([eE][+-]?\d+)?|0x[0-9a-fA-F]+)\b/g, '<span class="tok-num">$1</span>')
    .replace(/\b([a-zA-Z_$][\w$]*)\s*\(/g, '<span class="tok-fn">$1</span>(')
    .replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span class="tok-cls">$1</span>');

  return s;
}

// =====================================================
// MARKDOWN FORMATTER
// =====================================================
function formatMessage(content) {
  if (!content) return '';

  const segments = [];
  const codeBlockRegex = /```(\w*)\n?([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', content: content.slice(lastIndex, match.index) });
    }
    segments.push({ type: 'code', lang: match[1] || 'code', content: match[2] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < content.length) {
    segments.push({ type: 'text', content: content.slice(lastIndex) });
  }

  return segments.map(seg => {
    if (seg.type === 'code') {
      const lang = seg.lang || 'code';
      const highlighted = syntaxHighlight(seg.content, lang.toLowerCase());
      const escapedRaw = escapeAttr(seg.content);
      return `<div class="chat-code-block">
        <div class="chat-code-header">
          <div class="chat-code-lang-badge">
            <span class="lang-dot"></span>
            <span class="chat-code-lang">${escapeHtml(lang)}</span>
          </div>
          <button class="chat-code-copy" onclick="copyCode(this,'${escapedRaw}')">${icons.copy} Salin</button>
        </div>
        <pre><code>${highlighted}</code></pre>
      </div>`;
    } else {
      return renderMarkdownText(seg.content);
    }
  }).join('');
}

function renderMarkdownText(text) {
  if (!text.trim()) return '';

  let html = escapeHtml(text);

  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/^---+$/gm, '<hr>');
  html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');
  html = html.replace(/^[\*\-] (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>(\n|$))+/g, (m) => `<ul>${m}</ul>`);
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  html = html.replace(/\n\n+/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');
  html = `<p>${html}</p>`;
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>(<h[1-6]>)/g, '$1');
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul>)/g, '$1');
  html = html.replace(/(<\/ul>)<\/p>/g, '$1');
  html = html.replace(/<p>(<hr>)<\/p>/g, '$1');
  html = html.replace(/<p>(<blockquote>)/g, '$1');
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1');

  return html;
}

window.copyCode = function(btn, code) {
  navigator.clipboard.writeText(code).then(() => {
    btn.innerHTML = `${icons.copy} Tersalin!`;
    setTimeout(() => { btn.innerHTML = `${icons.copy} Salin`; }, 2000);
  }).catch(() => {
    btn.innerHTML = 'Gagal';
    setTimeout(() => { btn.innerHTML = `${icons.copy} Salin`; }, 2000);
  });
};

window.copyMsg = function(btn, id) {
  const msg = chatMessages.find(m => m.id === id);
  if (!msg) return;
  navigator.clipboard.writeText(msg.content).then(() => {
    btn.innerHTML = `${icons.copy} Tersalin!`;
    setTimeout(() => { btn.innerHTML = `${icons.copy} Salin`; }, 2000);
  });
};

// =====================================================
// CHAT STATE
// =====================================================
let chatMessages = [];
let chatIsLoading = false;
let chatHasStarted = false;
let chatInitialized = false;
let currentFile = null;
let currentFilePreview = null;
let currentFileBase64 = null;
let currentFileType = null;

function initChat() {
  if (chatInitialized) return;
  chatInitialized = true;

  const savedSessionId = sessionStorage.getItem('active_chat_session');
  if (savedSessionId && isSessionExists(savedSessionId)) {
    loadSession(savedSessionId);
  } else {
    const newId = generateSessionId();
    createNewSession(newId, []);
    currentSessionId = newId;
    sessionStorage.setItem('active_chat_session', currentSessionId);
  }

  const textarea = document.getElementById('chat-textarea');
  const form = document.getElementById('chat-form');
  const fileInput = document.getElementById('chat-file-input');
  const backBtn = document.getElementById('chat-back-btn');

  if (backBtn) backBtn.addEventListener('click', () => navigate('home'));

  if (textarea) {
    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 128) + 'px';
      updateEnterHint();
      updateSendBtn();
    });
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitChat(); }
    });
  }

  if (form) form.addEventListener('submit', (e) => { e.preventDefault(); submitChat(); });

  if (fileInput) {
    fileInput.accept = '*/*';
    fileInput.addEventListener('change', (e) => {
      if (!e.target.files || !e.target.files[0]) return;
      const file = e.target.files[0];
      currentFile = file;
      currentFileType = file.type;

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          currentFilePreview = ev.target.result;
          showFilePreviewInInput(currentFilePreview, 'image', file.name);
        };
        reader.readAsDataURL(file);
      } else {
        currentFilePreview = null;
        showFilePreviewInInput(null, 'file', file.name);
      }

      const readerB64 = new FileReader();
      readerB64.onload = (ev) => {
        let b64 = ev.target.result;
        if (b64.includes(',')) b64 = b64.split(',')[1];
        currentFileBase64 = b64;
      };
      readerB64.readAsDataURL(file);
    });
  }

  if (!chatHasStarted && chatMessages.length === 0) {
    renderChatWelcome();
  } else {
    renderMessages();
  }
  if (textarea) setTimeout(() => textarea.focus(), 100);
  
  renderHistorySidebar();
}

function showFilePreviewInInput(fileSrc, type, fileName) {
  const inputWrap = document.querySelector('.chat-input-wrap');
  if (!inputWrap) return;
  const existing = document.querySelector('.input-file-preview');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.className = 'input-file-preview';

  if (type === 'image' && fileSrc) {
    div.innerHTML = `<div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;background:rgba(255,255,255,0.05);padding:6px 10px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);">
      <img src="${fileSrc}" style="width:36px;height:36px;border-radius:8px;object-fit:cover;">
      <span style="font-size:11px;color:#a1a1aa;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(fileName)}</span>
      <button type="button" class="remove-file-btn" style="background:rgba(255,255,255,0.1);border:none;color:#a1a1aa;padding:3px 7px;border-radius:7px;cursor:pointer;font-size:11px;">✕</button>
    </div>`;
  } else {
    const ext = fileName.split('.').pop().toUpperCase();
    div.innerHTML = `<div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;background:rgba(255,255,255,0.06);padding:6px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.15);">
      ${icons.file}
      <span style="font-size:11px;color:#ffffff;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(fileName)}</span>
      <span style="font-size:9px;color:#71717a;background:rgba(255,255,255,0.06);padding:2px 5px;border-radius:4px;">${escapeHtml(ext)}</span>
      <button type="button" class="remove-file-btn" style="background:rgba(255,255,255,0.08);border:none;color:#a1a1aa;padding:3px 7px;border-radius:7px;cursor:pointer;font-size:11px;">✕</button>
    </div>`;
  }

  inputWrap.insertBefore(div, inputWrap.firstChild);

  div.querySelector('.remove-file-btn').addEventListener('click', () => {
    currentFile = null; currentFilePreview = null; currentFileBase64 = null; currentFileType = null;
    div.remove();
    const fi = document.getElementById('chat-file-input');
    if (fi) fi.value = '';
    updateSendBtn();
  });
  updateSendBtn();
}

function updateEnterHint() {
  const hint = document.getElementById('enter-hint');
  const textarea = document.getElementById('chat-textarea');
  if (hint && textarea) hint.style.display = textarea.value.length > 0 ? 'block' : 'none';
}

function updateSendBtn() {
  const btn = document.getElementById('chat-send-btn');
  const textarea = document.getElementById('chat-textarea');
  if (btn && textarea) btn.disabled = (!textarea.value.trim() && !currentFile) || chatIsLoading;
}

function renderChatWelcome() {
  const el = document.getElementById('chat-messages');
  if (!el) return;
  const quickPrompts = [
    { icon: icons.code2, label: 'Buat Website', prompt: 'Buatkan halaman landing page responsive dengan HTML, CSS, dan JavaScript. Tema gelap modern.' },
    { icon: icons.globe, label: 'Jelaskan AI', prompt: 'Jelaskan kecerdasan buatan dengan bahasa sederhana dan contoh nyata.' },
    { icon: icons.languages, label: 'Terjemahkan', prompt: 'Terjemahkan "Good morning, have a great day!" ke bahasa Indonesia, Jawa, dan Sunda.' },
    { icon: icons.image, label: 'Analisis Gambar', prompt: 'Upload gambar dan saya akan menganalisisnya secara detail.' },
    { icon: icons.file, label: 'Upload File', prompt: 'Upload file (PDF, Word, Excel, gambar) dan saya siap menganalisisnya.' },
    { icon: icons.sparkles, label: 'Siapa kamu?', prompt: 'Kamu dibuat oleh siapa dan apa saja kemampuanmu?' }
  ];
  el.innerHTML = `<div class="chat-welcome"><div class="chat-welcome-inner">
    <div class="chat-welcome-icon">${icons.sparkles}</div>
    <h1 class="chat-welcome-title">Ada yang bisa saya bantu?</h1>
    <p class="chat-welcome-sub">AI PT STORE — Super cerdas, support semua file &amp; bahasa</p>
    <div class="quick-prompts">${quickPrompts.map(qp => `<button class="quick-prompt-btn" data-prompt="${escapeAttr(qp.prompt)}">${qp.icon}<span>${escapeHtml(qp.label)}</span></button>`).join('')}</div>
  </div></div>`;
  el.querySelectorAll('.quick-prompt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prompt = btn.dataset.prompt;
      const textarea = document.getElementById('chat-textarea');
      if (textarea) { textarea.value = prompt; updateSendBtn(); submitChat(); }
    });
  });
}

function renderMessages() {
  const el = document.getElementById('chat-messages');
  if (!el) return;
  if (!chatHasStarted || chatMessages.length === 0) { renderChatWelcome(); return; }

  el.innerHTML = `<div class="chat-msgs-list" id="msgs-list">${chatMessages.map(msg => renderMessage(msg)).join('')}</div>`;
  scrollToBottom();
  
  if (currentSessionId && chatMessages.length > 0) {
    updateSession(currentSessionId, chatMessages);
    renderHistorySidebar();
  }
}

function renderMessage(msg) {
  const isUser = msg.role === 'user';

  if (msg.role === 'assistant' && msg.isThinking) {
    return `<div class="msg-row assistant" id="msg-${msg.id}">
      <div class="msg-avatar assistant-av">${icons.bot}</div>
      <div class="msg-bubble assistant">
        <div class="thinking-indicator">
          <span class="thinking-dot"></span>
          <span class="thinking-dot"></span>
          <span class="thinking-dot"></span>
          <span class="thinking-label">AI sedang berpikir...</span>
        </div>
      </div>
    </div>`;
  }

  let mediaHtml = '';
  if (msg.image) {
    mediaHtml = `<div style="margin-bottom:8px;"><img src="${msg.image}" style="max-width:180px;border-radius:10px;display:block;"></div>`;
  }
  if (msg.fileName && !msg.image) {
    mediaHtml = `<div class="file-preview-in-msg"><div class="file-badge">${icons.file} ${escapeHtml(msg.fileName)}</div></div>`;
  }

  if (isUser) {
    const contentHtml = `<div class="msg-text">${mediaHtml}${escapeHtml(msg.content).replace(/\n/g,'<br>')}</div>`;
    return `<div class="msg-row user" id="msg-${msg.id}">
      <div class="msg-bubble user">${contentHtml}</div>
      <div class="msg-avatar user-av">${icons.user}</div>
    </div>`;
  } else {
    const formatted = formatMessage(msg.content);
    return `<div class="msg-row assistant" id="msg-${msg.id}">
      <div class="msg-avatar assistant-av">${icons.bot}</div>
      <div class="msg-bubble assistant">
        ${mediaHtml}
        <div class="msg-text" id="msg-text-${msg.id}">${formatted}</div>
        <button class="msg-copy-btn" onclick="copyMsg(this,'${msg.id}')">${icons.copy} Salin</button>
      </div>
    </div>`;
  }
}

function scrollToBottom() {
  const el = document.getElementById('chat-messages');
  if (el) el.scrollTop = el.scrollHeight;
}

async function animateMessageIn(msgId, fullContent) {
  const container = document.getElementById(`msg-text-${msgId}`);
  if (!container) return;

  const parts = [];
  const codeRegex = /```(\w*)\n?([\s\S]*?)```/g;
  let lastIdx = 0;
  let m;
  while ((m = codeRegex.exec(fullContent)) !== null) {
    if (m.index > lastIdx) parts.push({ type: 'text', content: fullContent.slice(lastIdx, m.index) });
    parts.push({ type: 'code', lang: m[1] || 'code', content: m[2] });
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < fullContent.length) parts.push({ type: 'text', content: fullContent.slice(lastIdx) });

  container.innerHTML = '';

  for (const part of parts) {
    if (part.type === 'code') {
      const lang = part.lang || 'code';
      const highlighted = syntaxHighlight(part.content, lang.toLowerCase());
      const escapedRaw = escapeAttr(part.content);
      const codeEl = document.createElement('div');
      codeEl.innerHTML = `<div class="chat-code-block">
        <div class="chat-code-header">
          <div class="chat-code-lang-badge"><span class="lang-dot"></span><span class="chat-code-lang">${escapeHtml(lang)}</span></div>
          <button class="chat-code-copy" onclick="copyCode(this,'${escapedRaw}')">${icons.copy} Salin</button>
        </div>
        <pre><code>${highlighted}</code></pre>
      </div>`;
      container.appendChild(codeEl);
      scrollToBottom();
    } else {
      const words = part.content.split(/(\s+)/);
      const textEl = document.createElement('span');
      textEl.className = 'typed-segment';
      container.appendChild(textEl);

      let accumulated = '';
      for (const word of words) {
        accumulated += word;
        textEl.innerHTML = renderMarkdownText(accumulated) + '<span class="typing-cursor"></span>';
        scrollToBottom();
        await sleep(word.trim() ? 28 : 8);
      }
      textEl.innerHTML = renderMarkdownText(accumulated);
      scrollToBottom();
    }
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

const CREATOR_TRIGGERS = [
  'dibuat oleh siapa','siapa yang membuatmu','siapa penciptamu','siapa pembuatmu',
  'who created you','who made you','who built you','your creator','your developer',
  'diciptakan oleh','kamu dibuat','siapa yang menciptakan','ai pt store siapa yang',
  'pt store','made by','built by','siapakah yang membuat'
];

function isAskingAboutCreator(text) {
  const lower = text.toLowerCase();
  return CREATOR_TRIGGERS.some(t => lower.includes(t));
}

async function submitChat() {
  const textarea = document.getElementById('chat-textarea');
  if (!textarea) return;
  const input = textarea.value.trim();
  if ((!input && !currentFile) || chatIsLoading) return;

  const userMsg = {
    id: Date.now().toString(),
    role: 'user',
    content: input || (currentFile ? (currentFile.type.startsWith('image/') ? 'Analisis gambar ini' : `Analisis file: ${currentFile.name}`) : ''),
    image: (currentFilePreview && currentFile?.type?.startsWith('image/')) ? currentFilePreview : null,
    fileName: (currentFile && !currentFile.type.startsWith('image/')) ? currentFile.name : null
  };
  chatMessages.push(userMsg);

  textarea.value = '';
  textarea.style.height = 'auto';
  updateEnterHint();

  const fileB64 = currentFileBase64;
  const fileMime = currentFileType;
  const fileName = currentFile ? currentFile.name : null;

  currentFile = null; currentFilePreview = null; currentFileBase64 = null; currentFileType = null;
  const fp = document.querySelector('.input-file-preview');
  if (fp) fp.remove();
  const fi = document.getElementById('chat-file-input');
  if (fi) fi.value = '';

  chatIsLoading = true;
  chatHasStarted = true;
  updateSendBtn();

  const assistantId = (Date.now() + 1).toString();
  chatMessages.push({ id: assistantId, role: 'assistant', content: '', isThinking: true });
  renderMessages();

  try {
    let responseText = '';

    if (isAskingAboutCreator(input)) {
      responseText = 'Saya dibuat oleh **PT STORE**, perusahaan teknologi terkemuka di Indonesia. PT STORE berdedikasi menghadirkan kecerdasan buatan terbaik untuk membantu pekerjaan dan kreativitas masyarakat Indonesia dan dunia. Saya bangga menjadi produk andalan PT STORE! 🤝\n\nAda yang bisa saya bantu hari ini?';
      await sleep(800);
    } else {
      const history = chatMessages.slice(-20).filter(m => !m.isThinking && m.content);
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...history.slice(0, -1).map(m => ({ role: m.role, content: m.content }))
      ];

      if (fileB64 && fileMime && fileMime.startsWith('image/')) {
        apiMessages.push({
          role: 'user',
          content: [
            { type: 'text', text: input || 'Analisis gambar ini secara detail.' },
            { type: 'image_url', image_url: { url: `data:${fileMime};base64,${fileB64}` } }
          ]
        });
      } else if (fileB64) {
        const fileContext = `[File yang diupload: ${fileName || 'file'}, Tipe: ${fileMime}]\n\nIsi file (base64, 2000 karakter pertama):\n${fileB64.substring(0, 2000)}`;
        apiMessages.push({ role: 'user', content: `${input}\n\n${fileContext}` });
      } else {
        apiMessages.push({ role: 'user', content: input });
      }

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'AI PT STORE'
        },
        body: JSON.stringify({
          model: MODEL,
          messages: apiMessages,
          max_tokens: 4096,
          temperature: 0.7
        })
      });

      if (!res.ok) {
        const errText = await res.text();
        let errMsg = `Terjadi error (${res.status}).`;
        if (res.status === 401) errMsg = '⚠️ API Key tidak valid. Periksa kembali.';
        else if (res.status === 429) errMsg = '⚠️ Batas penggunaan tercapai. Coba lagi nanti.';
        else if (res.status === 403) errMsg = '⚠️ Akses ditolak. Periksa API Key.';
        throw new Error(errMsg);
      }

      const data = await res.json();
      responseText = data.choices?.[0]?.message?.content || 'Maaf, saya tidak bisa merespons saat ini.';
    }

    const idx = chatMessages.findIndex(m => m.id === assistantId);
    if (idx !== -1) {
      chatMessages[idx] = { id: assistantId, role: 'assistant', content: responseText, isThinking: false };
    }
    renderMessages();
    await animateMessageIn(assistantId, responseText);

  } catch (err) {
    const errMsg = err.message || '⚠️ Maaf, terjadi kesalahan. Silakan coba lagi.';
    const idx = chatMessages.findIndex(m => m.id === assistantId);
    if (idx !== -1) chatMessages[idx] = { id: assistantId, role: 'assistant', content: errMsg, isThinking: false };
    renderMessages();
  } finally {
    chatIsLoading = false;
    updateSendBtn();
    if (currentSessionId && chatMessages.length > 0) {
      updateSession(currentSessionId, chatMessages);
      renderHistorySidebar();
    }
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSidebar();
  navigate('home');
});