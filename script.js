const DB = {
  makanan: {
    nasi: [
      {name:"Nasi Goreng Spesial", desc:"Nasi goreng dengan telur, ayam suwir, kerupuk & acar segar.", price:22000, img:"1-1.jpg", rating:4.8, reviews:120, badge:"BEST SELLER", delivery:"20-30 menit", category:"nasi"},
      {name:"Nasi Padang Komplit", desc:"Lengkap dengan rendang sapi, ayam bakar, sayur nangka & sambal hijau.", price:40000, img:"2-1.jpeg", rating:4.9, reviews:256, badge:"POPULER", delivery:"25-35 menit", category:"nasi"},
      {name:"Nasi Gudeg Jogja", desc:"Gudeg manis khas Jogja dengan ayam kampung, telur & areh.", price:30000, img:"3-1.jpg", rating:4.7, reviews:89, delivery:"30-40 menit", category:"nasi"},
      {name:"Nasi Ayam Geprek", desc:"Ayam crispy dibalut sambal bawang pedas dengan nasi pulen hangat.", price:30000, img:"4-1.jpg", rating:4.6, reviews:312, badge:"TERLARIS", delivery:"15-25 menit", category:"nasi"},
      {name:"Nasi Campur Bali", desc:"Aneka lauk khas Bali dengan sambal matah, jukut urab & lawar.", price:60000, img:"5-1.jpg", rating:4.8, reviews:145, delivery:"35-45 menit", category:"nasi"},
      {name:"Nasi Uduk Betawi", desc:"Nasi uduk gurih santan dengan tempe orek, telur dadar & sambal kacang.", price:25000, img:"6-1.jpeg", rating:4.5, reviews:78, delivery:"20-30 menit", category:"nasi"}
    ],
    mie: [
      {name:"Mie Ayam Bakso", desc:"Mie kuning kenyal dengan ayam kecap, bakso sapi & kuah kaldu.", price:41000, img:"1-2.jpg", rating:4.7, reviews:198, badge:"FAVORIT", delivery:"15-25 menit", category:"mie"},
      {name:"Mie Goreng Jawa", desc:"Mie goreng manis khas Jawa dengan telur, sawi & kerupuk.", price:20000, img:"2-2.webp", rating:4.6, reviews:156, delivery:"20-30 menit", category:"mie"},
      {name:"Mie Ramen Jepang", desc:"Mie kuah tonkotsu kental dengan chashu, nori & telur rebus.", price:32000, img:"3-2.jpg", rating:4.9, reviews:234, badge:"PREMIUM", delivery:"25-35 menit", category:"mie"},
      {name:"Mie Kocok Bandung", desc:"Mie kuah bening khas Bandung dengan kikil, tauge & bakso.", price:19000, img:"4-2.jpg", rating:4.5, reviews:67, delivery:"30-40 menit", category:"mie"},
      {name:"Mie Cakalang Manado", desc:"Mie kuning dengan ikan cakalang fufu, sambal rica & daun kemangi.", price:24000, img:"5-2.webp", rating:4.7, reviews:92, delivery:"35-45 menit", category:"mie"},
      {name:"Mie Goreng Seafood", desc:"Mie goreng dengan udang, bakso, kerupuk & sayuran segar.", price:26000, img:"6-2.jpg", rating:4.8, reviews:178, delivery:"25-35 menit", category:"mie"}
    ]
  },
  minuman: {
    jus: [
      {name:"Jus Alpukat Coklat", desc:"Alpukat mentega diblender dengan susu coklat & madu murni.", price:15000, img:"1-3.webp", rating:4.8, reviews:145, delivery:"10-15 menit", category:"jus"},
      {name:"Jus Mangga Segar", desc:"Mangga harum manis asli tanpa pemanis buatan & es batu.", price:12000, img:"2-3.jpg", rating:4.7, reviews:98, badge:"SEGAR", delivery:"10-15 menit", category:"jus"},
      {name:"Jus Wortel Jeruk", desc:"Campuran wortel & jeruk peras kaya vitamin A & C alami.", price:14000, img:"3-3.jpg", rating:4.6, reviews:56, delivery:"10-15 menit", category:"jus"},
      {name:"Jus Nanas Madu", desc:"Nanas segar dengan sentuhan madu asli & daun mint.", price:13000, img:"4-3.jpg", rating:4.5, reviews:72, delivery:"10-15 menit", category:"jus"},
	  
      {name:"Jus Strawberry Yogurt", desc:"Strawberry asli diblender dengan yogurt plain & granola.", price:16000, img:"5-3.webp", rating:4.9, reviews:189, badge:"SEHAT", delivery:"10-15 menit", category:"jus"},
      {name:"Jus Semangka Mint", desc:"Semangka merah segar dengan daun mint & es batu.", price:11000, img:"6-3.jpg", rating:4.4, reviews:43, delivery:"10-15 menit", category:"jus"}
    ],
    kopi: [
      {name:"Kopi Susu Gula Aren", desc:"Espresso shot dengan susu segar & gula aren asli.", price:30000, img:"1-4.jpeg", rating:4.9, reviews:456, badge:"BEST SELLER", delivery:"10-15 menit", category:"kopi"},
      {name:"Americano Hot", desc:"Double shot espresso dengan air panas, rasa bold & clean.", price:21000, img:"2-4.webp", rating:4.7, reviews:234, delivery:"10-15 menit", category:"kopi"},
      {name:"Cappuccino", desc:"Espresso, steamed milk & foam tebal dengan taburan cocoa.", price:27000, img:"3-4.jpg", rating:4.8, reviews:178, delivery:"10-15 menit", category:"kopi"},
      {name:"Es Teh Manis", desc:"Teh tubruk pilihan diseduh dingin dengan gula batu.", price:8000, img:"4-4.jpeg", rating:4.6, reviews:567, badge:"KLASIK", delivery:"5-10 menit", category:"kopi"},
      {name:"Matcha Latte", desc:"Bubuk matcha premium Jepang dengan susu oat creamy.", price:30000, img:"5-4.jpg", rating:4.8, reviews:123, delivery:"10-15 menit", category:"kopi"},
      {name:"Coklat Hangat", desc:"Coklat bubuk premium diseduh susu full cream & creamer.", price:23000, img:"6-4.webp", rating:4.7, reviews:89, delivery:"10-15 menit", category:"kopi"}
    ]
  },
  camilan: {
    gorengan: [
      {name:"Risoles Mayo", desc:"Risoles isi ragout ayam & sayuran dengan balutan mayo.", price:25000, img:"1-5.jpg", rating:4.6, reviews:134, delivery:"15-20 menit", category:"gorengan"},
      {name:"Pisang Goreng Keju", desc:"Pisang raja crispy dengan topping keju & susu kental manis.", price:18000, img:"2-5.jpg", rating:4.7, reviews:201, badge:"FAVORIT", delivery:"15-20 menit", category:"gorengan"},
      {name:"Cireng Rujak", desc:"Cireng renyah dengan bumbu rujak pedas manis khas Sunda.", price:10000, img:"3-5.jpg", rating:4.5, reviews:87, delivery:"15-20 menit", category:"gorengan"},
      {name:"Tahu Crispy", desc:"Tahu putih goreng tepung dengan sambal kecap pedas.", price:15000, img:"4-5.jpg", rating:4.4, reviews:156, delivery:"10-15 menit", category:"gorengan"},
      {name:"Bakwan Sayur", desc:"Campuran wortel, tauge & kubis goreng tepung renyah.", price:10000, img:"5-5.avif", rating:4.3, reviews:92, delivery:"10-15 menit", category:"gorengan"},
      {name:"Dimsum Ayam", desc:"Dimsum kukus isi ayam & udang dengan saus spesial.", price:30000, img:"6-5.jpg", rating:4.8, reviews:178, badge:"PREMIUM", delivery:"20-25 menit", category:"gorengan"}
    ],
    kue: [
      {name:"Kue Lapis Legit", desc:"Kue berlapis tipis dengan rasa spekuk & mentega premium.", price:35000, img:"1-6.jpg", rating:4.9, reviews:67, badge:"MEWAH", delivery:"30-40 menit", category:"kue"},
      {name:"Klepon", desc:"Bola ketan hijau isi gula merah & taburan kelapa parut.", price:30000, img:"2-6.jpeg", rating:4.6, reviews:145, delivery:"20-30 menit", category:"kue"},
      {name:"Nastar Keju", desc:"Kue kering nanas dengan topping keju cheddar melimpah.", price:45000, img:"3-6.jpg", rating:4.8, reviews:234, badge:"BEST SELLER", delivery:"30-40 menit", category:"kue"},
      {name:"Bolu Pandan", desc:"Bolu kukus lembut aroma pandan asli dengan topping ceres.", price:25000, img:"4-6.jpg", rating:4.7, reviews:98, delivery:"25-35 menit", category:"kue"},
      {name:"Martabak Manis", desc:"Martabak tebal dengan topping coklat, keju, kacang & susu.", price:50000, img:"5-6.jpg", rating:4.9, reviews:456, badge:"POPULER", delivery:"25-35 menit", category:"kue"},
      {name:"Kue Lumpur", desc:"Kue tradisional lembut dengan topping kismis & santan.", price:12000, img:"6-6.jpeg", rating:4.5, reviews:76, delivery:"20-30 menit", category:"kue"}
    ]
  },
  dessert: {
    eskrim: [
      {name:"Es Krim Vanilla", desc:"Es krim klasik vanilla Madagascar dengan topping mint dan strawberry.", price:25000, img:"1-7.jpg", rating:4.7, reviews:234, delivery:"10-15 menit", category:"eskrim"},
      {name:"Es Krim Coklat", desc:"Es krim dark chocolate Belgium yang creamy & rich.", price:25000, img:"2-7.jpg", rating:4.8, reviews:189, badge:"FAVORIT", delivery:"10-15 menit", category:"eskrim"},
      {name:"Es Krim Strawberry", desc:"Es krim strawberry segar dengan potongan buah asli.", price:30000, img:"3-7.jpeg", rating:4.6, reviews:145, delivery:"10-15 menit", category:"eskrim"},
      {name:"Es Krim Matcha", desc:"Es krim green tea Jepang dengan sensasi lembut.", price:40000, img:"4-7.jpg", rating:4.9, reviews:167, badge:"PREMIUM", delivery:"10-15 menit", category:"eskrim"},
      {name:"Es Krim Cookies", desc:"Es krim vanilla dengan potongan cookies & chocolate chips.", price:17000, img:"5-7.jpg", rating:4.7, reviews:183, delivery:"10-15 menit", category:"eskrim"},
      {name:"Sundae Special", desc:"3 scoop es krim pilihan dengan saus coklat & kacang.", price:25000, img:"6-7.jpg", rating:4.8, reviews:201, delivery:"10-15 menit", category:"eskrim"}
    ],
    puding: [
      {name:"Puding Coklat Lapis", desc:"Puding coklat lembut dengan lapisan vla vanilla creamy.", price:12000, img:"1-8.jpg", rating:4.6, reviews:98, delivery:"15-20 menit", category:"puding"},
      {name:"Puding Mangga", desc:"Puding susu segar dengan potongan mangga harum manis.", price:13000, img:"2-8.jpeg", rating:4.7, reviews:134, badge:"SEGAR", delivery:"15-20 menit", category:"puding"},
      {name:"Puding Roti Tawar", desc:"Roti tawar direndam susu & telur, dipanggang dengan keju.", price:15000, img:"3-8.webp", rating:4.5, reviews:67, delivery:"20-25 menit", category:"puding"},
      {name:"Jelly Buah Segar", desc:"Jelly transparan dengan campuran buah kaleng & mint.", price:10000, img:"4-8.jpg", rating:4.4, reviews:89, delivery:"15-20 menit", category:"puding"},
      {name:"Puding Karamel", desc:"Puding telur dengan saus karamel manis legit.", price:25000, img:"5-8.jpg", rating:4.8, reviews:167, delivery:"15-20 menit", category:"puding"},
      {name:"Puding Susu Ubi", desc:"Puding ubi ungu & susu segar yang lembut & sehat.", price:12000, img:"6-8.webp", rating:4.6, reviews:78, delivery:"15-20 menit", category:"puding"}
    ]
  },
  roti: {
    "roti manis": [
      {name:"Roti Tawar", desc:"Roti putih lembut untuk sarapan.", price:12000, img:"1-9.avif", rating:4.8, reviews:210, delivery:"10-15 menit", category:"roti manis"},
      {name:"Roti Sobek", desc:"Roti empuk yang bisa disobek per bagian.", price:15000, img:"2-9.avif", rating:4.7, reviews:180, delivery:"10-15 menit", category:"roti manis"},
      {name:"Roti Coklat", desc:"Roti isi coklat manis.", price:13000, img:"3-9.jpg", rating:4.8, reviews:240, delivery:"10-15 menit", category:"roti manis"},
      {name:"Roti Keju", desc:"Roti isi keju lembut.", price:14000, img:"4-9.jpg", rating:4.7, reviews:220, delivery:"10-15 menit", category:"roti manis"},
      {name:"Roti Kismis", desc:"Roti dengan kismis manis alami.", price:16000, img:"5-9.jpg", rating:4.6, reviews:150, delivery:"10-15 menit", category:"roti manis"},
      {name:"Roti Pisang", desc:"Roti dengan isian pisang.", price:15000, img:"6-9.jpg", rating:4.8, reviews:190, delivery:"10-15 menit", category:"roti manis"}
    ],
    "roti gurih": [
      {name:"Roti Sosis", desc:"Roti isi sosis ayam yang empuk dan saus sambal.", price:25000, img:"1-10.webp", rating:4.7, reviews:210, delivery:"10-15 menit", category:"roti gurih"},
      {name:"Roti Ayam", desc:"Roti isi ayam suwir.", price:20000, img:"2-10.jpg", rating:4.8, reviews:230, delivery:"10-15 menit", category:"roti gurih"},
      {name:"Roti Tuna", desc:"Roti isi tuna mayo.", price:35000, img:"3-10.jpeg", rating:4.7, reviews:200, delivery:"10-15 menit", category:"roti gurih"},
      {name:"Roti Kornet", desc:"Roti yang digoreng dan diisidengan kornet serta dilumuri saus tomat dan mayonaise.", price:45000, img:"4-10.jpg", rating:4.6, reviews:180, delivery:"10-15 menit", category:"roti gurih"},
      {name:"Roti Telur", desc:"Roti gandum isi telur dadar.", price:16000, img:"5-10.jpeg", rating:4.5, reviews:160, delivery:"10-15 menit", category:"roti gurih"},
      {name:"Roti Abon", desc:"Roti isi abon sapi.", price:22000, img:"6-10.webp", rating:4.8, reviews:220, delivery:"10-15 menit", category:"roti gurih"}
    ]
  }
};
const State = {
  cart: JSON.parse(localStorage.getItem('cart_v2')) || [],
  wishlist: JSON.parse(localStorage.getItem('wishlist_v2')) || [],
  user: JSON.parse(localStorage.getItem('user_v2')) || null,
  viewed: JSON.parse(localStorage.getItem('viewed_v2')) || [],
  theme: localStorage.getItem('theme_v2') || 'light',
  coupon: localStorage.getItem('coupon_v2') || null,
  currentMainCategory: 'all',
  currentSubmenu: null,
  currentSort: 'popular',
  searchQuery: '',
  productsVisible: 12,
  checkoutStep: 1,
  save(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
};
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const fmt = n => `Rp ${n.toLocaleString('id-ID')}`;
const escapeHTML = str => { const d = document.createElement('div'); d.textContent = str || ''; return d.innerHTML; };
const findProduct = name => { 
  for(const cat of Object.values(DB)) {
    for(const sub of Object.values(cat)) {
      const f = sub.find(p=>p.name===name);
      if(f) return {...f, id: name.toLowerCase().replace(/\s+/g,'-')};
    }
  }
  return null; 
};
const debounce = (fn, w) => { let t; return (...a) => { clearTimeout(t); t=setTimeout(()=>fn(...a),w); }; };
function togglePassword(inputId, checkbox) {
  const input = document.getElementById(inputId);
  if (input && checkbox) {
    input.type = checkbox.checked ? 'text' : 'password';
  }
}
function initPasswordStrength() {
  const passwordInput = document.getElementById('authPass');
  const strengthText = document.getElementById('strengthText');
  const capsWarning = document.getElementById('capsWarning');
  const requirements = {
    length: document.getElementById('req-length'),
    upper: document.getElementById('req-upper'),
    number: document.getElementById('req-number'),
    special: document.getElementById('req-special')
  };
  
  if (!passwordInput) return;
  
  const getStrengthDetails = (password, strength) => {
    if (!password) return { color: '#64748b', text: 'Enter a password' };
    if (strength <= 1) return { color: '#ff4d8d', text: 'Weak Password' };
    if (strength <= 3) return { color: '#f59e0b', text: 'Good Password' };
    return { color: '#22d3ce', text: 'Strong Password' };
  };
  
  const updateStrength = (password) => {
    const checks = [
      { id: 'length', test: (pwd) => pwd.length >= 8 },
      { id: 'upper', test: (pwd) => /[A-Z]/.test(pwd) },
      { id: 'number', test: (pwd) => /[0-9]/.test(pwd) },
      { id: 'special', test: (pwd) => /[^A-Za-z0-9]/.test(pwd) }
    ];
    
    let strength = 0;
    checks.forEach(check => {
      const isValid = check.test(password);
      if (requirements[check.id]) {
        requirements[check.id].classList.toggle('valid', isValid);
      }
      if (isValid) strength++;
    });
    
    const { color, text } = getStrengthDetails(password, strength);
    strengthText.textContent = text;
    strengthText.style.color = color;
    
    for (let i = 0; i < 4; i++) {
      const segment = document.getElementById(`segment${i}`);
      if (segment) {
        if (i < strength) {
          segment.classList.add('is-active');
          segment.style.backgroundColor = color;
          segment.style.boxShadow = `0 0 14px ${color}66`;
        } else {
          segment.classList.remove('is-active');
          segment.style.backgroundColor = '';
          segment.style.boxShadow = '';
        }
      }
    }
  };
  
  passwordInput.addEventListener('input', (e) => {
    updateStrength(e.target.value);
  });
  
  passwordInput.addEventListener('keydown', (e) => {
    const isCapsOn = e.getModifierState('CapsLock');
    capsWarning?.classList.toggle('is-visible', isCapsOn);
  });
  
  updateStrength(passwordInput.value);
}
const Toast = {
  container: null,
  init() { this.container = $('#toastContainer'); },
  show(msg, type='success', title='') {
    if(!this.container) return;
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    const icon = type==='success'?'✅':type==='error'?'❌':'️';
    t.innerHTML = `<span class="toast-icon">${icon}</span><div class="toast-content">${title?`<div class="toast-title">${title}</div>`:''}<div class="toast-message">${escapeHTML(msg)}</div></div><button class="toast-close">&times;</button>`;
    this.container.appendChild(t);
    t.querySelector('.toast-close').onclick = () => t.remove();
    setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(100px)'; setTimeout(()=>t.remove(),300); }, 3000);
  }
};
const FX = {
  mouseBg() {
    document.addEventListener('mousemove', e => {
      document.body.style.setProperty('--mx', `${(e.clientX/window.innerWidth)*100}%`);
      document.body.style.setProperty('--my', `${(e.clientY/window.innerHeight)*100}%`);
    });
  },
  entranceObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('fade-up'); observer.unobserve(entry.target); }});
    }, { threshold: 0.1 });
    $$('.hero-content, .section-header, .main-tab-btn, .search-section, .footer-premium').forEach(el => observer.observe(el));
  },
  buttonEffects() {
    $$('.btn-modern, .btn-neon, .main-tab-btn, .submenu-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        const r = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.clientX - r.left}px`; 
        ripple.style.top = `${e.clientY - r.top}px`;
        this.appendChild(ripple);
        setTimeout(()=>ripple.remove(), 600);
      });
    });
  },
  card3D() {
    $$('.product-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left)/rect.width - 0.5;
        const y = (e.clientY - rect.top)/rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-8px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }
};
const Theme = {
  init() {
    if(State.theme==='dark') document.body.classList.add('dark');
    $('#themeToggle')?.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      State.theme = document.body.classList.contains('dark') ? 'dark' : 'light';
      State.save('theme_v2', State.theme);
    });
  }
};
const Hero = {
  current: 0, slides: [], interval: null,
  init() {
    this.slides = $$('.hero-slide');
    if(!this.slides.length) return;
    this.bind(); this.auto();
  },
  bind() {
    $('.hero-nav.prev')?.addEventListener('click', ()=>this.prev());
    $('.hero-nav.next')?.addEventListener('click', ()=>this.next());
    $$('.hero-dots .dot').forEach((d,i) => d.addEventListener('click', ()=>this.goTo(i)));
    $('.hero-slider')?.addEventListener('mouseenter', ()=>this.pause());
    $('.hero-slider')?.addEventListener('mouseleave', ()=>this.auto());
  },
  goTo(i) {
    this.slides[this.current]?.classList.remove('active');
    $$('.hero-dots .dot')[this.current]?.classList.remove('active');
    this.current = (i+this.slides.length)%this.slides.length;
    this.slides[this.current]?.classList.add('active');
    $$('.hero-dots .dot')[this.current]?.classList.add('active');
    $('.hero-track').style.transform = `translateX(-${this.current*100}%)`;
  },
  next(){ this.goTo(this.current+1); }, prev(){ this.goTo(this.current-1); },
  auto(){ this.pause(); this.interval=setInterval(()=>this.next(), 5000); },
  pause(){ if(this.interval){ clearInterval(this.interval); this.interval=null; } }
};
const Products = {
  all: [],
  categoryMapping: {
    makanan: ['nasi', 'mie'],
    minuman: ['jus', 'kopi'],
    camilan: ['gorengan', 'kue'],
    dessert: ['eskrim', 'puding'],  
    roti: ['roti manis', 'roti gurih']
  },
  submenuData: {
    makanan: [
      {key: 'nasi', label: '🍚 Nasi'},
      {key: 'mie', label: '🍜 Mie'}
    ],
    minuman: [
      {key: 'jus', label: '🍹 Jus'},
      {key: 'kopi', label: '☕ Kopi'}
    ],
    camilan: [
      {key: 'gorengan', label: '🍢 Gorengan'},
      {key: 'kue', label: '🍰 Kue'}
    ],
    dessert: [
      {key: 'eskrim', label: '🍦 Es Krim'},
      {key: 'puding', label: '🍮 Puding'}
    ],
    roti: [
      {key: 'roti manis', label: '🍞 Roti Manis'},
      {key: 'roti gurih', label: '🍞 Roti Gurih'}
    ]
  },
  init() {
    for(const mainCat of Object.values(DB)) {
      for(const subCat of Object.values(mainCat)) {
        this.all.push(...subCat);
      }
    }
    this.bind(); 
    this.render(true);
  },
  bind() {
    $('#searchInput')?.addEventListener('input', debounce(e=>{ 
      State.searchQuery=e.target.value.toLowerCase().trim(); 
      this.render(false); 
    }, 300));
    $('#categoryFilter')?.addEventListener('change', e=>{ 
      State.currentCategory=e.target.value; 
      this.render(false); 
    });
    $('#sortFilter')?.addEventListener('change', e=>{ 
      State.currentSort=e.target.value; 
      this.render(false); 
    });
    $$('.main-tab-btn').forEach(btn => btn.addEventListener('click', e=>{
      $$('.main-tab-btn').forEach(b=>b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const mainCat = e.currentTarget.dataset.mainCategory;
      State.currentMainCategory = mainCat;
      State.currentSubmenu = null; 
      const submenu = $('#submenuContainer');
      const submenuTabs = $('#submenuTabs');
      
      if(this.submenuData[mainCat] && mainCat !== 'all') {
        submenu.style.display = 'flex';
        submenuTabs.innerHTML = this.submenuData[mainCat].map(item => 
          `<button class="submenu-btn" data-sub="${item.key}">${item.label}</button>`
        ).join('');
        
        $$('.submenu-btn').forEach(sb => sb.addEventListener('click', ev=>{
          $$('.submenu-btn').forEach(x=>x.classList.remove('active'));
          ev.currentTarget.classList.add('active');
          State.currentSubmenu = ev.currentTarget.dataset.sub;
          this.render(false);
        }));
      } else {
        submenu.style.display = 'none';
      }
      
      this.render(false);
    }));
    $('#productGrid')?.addEventListener('click', e=>{
      const card = e.target.closest('.product-card');
      const btn = e.target.closest('button[data-action]');
      if(card && !btn && typeof QuickView!=='undefined') QuickView.open(findProduct(card.dataset.name));
      if(btn) { 
        e.stopPropagation(); 
        const name=btn.dataset.name; 
        const p=findProduct(name); 
        if(!p)return; 
        if(btn.dataset.action==='cart'&&typeof Cart!=='undefined') Cart.add(p); 
        else if(btn.dataset.action==='wish'&&typeof Wishlist!=='undefined') Wishlist.toggle(p.id); 
      }
    });
    $('#loadMore')?.addEventListener('click', ()=>{ 
      State.productsVisible+=8; 
      this.render(false); 
    });
  },
  
  filter(p) {
    let f=[...p];
    
    if(State.searchQuery) {
      f=f.filter(p=>p.name.toLowerCase().includes(State.searchQuery)||p.desc.toLowerCase().includes(State.searchQuery));
    }
    if(State.currentMainCategory && State.currentMainCategory !== 'all') {
      const subcategories = this.categoryMapping[State.currentMainCategory];
      if(subcategories) {
        f = f.filter(p => subcategories.includes(p.category));
      }
    }
    if(State.currentSubmenu) {
      f = f.filter(p => p.category === State.currentSubmenu);
    }
    switch(State.currentSort) { 
      case 'cheap': f.sort((a,b)=>a.price-b.price); break; 
      case 'expensive': f.sort((a,b)=>b.price-a.price); break; 
      case 'rating': f.sort((a,b)=>b.rating-a.rating); break; 
      default: f.sort((a,b)=>b.reviews-a.reviews); 
    }
    return f;
  },
  render(skeleton=true) {
    const grid = $('#productGrid'); if(!grid) return;
    if(skeleton) { 
      grid.innerHTML = Array(6).fill('').map(()=>`<div class="skeleton-card"><div class="skeleton-image"></div><div class="skeleton-content"><div class="skeleton-line"></div><div class="skeleton-line short"></div><div class="skeleton-line"></div></div></div>`).join(''); 
      setTimeout(()=>this.render(false), 500); 
      return; 
    }
    const f = this.filter(this.all).slice(0, State.productsVisible);
    if(!f.length) { 
      grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)"><div style="font-size:3rem;margin-bottom:16px">🔍</div><p>Produk tidak ditemukan</p></div>`; 
      $('#loadMore').style.display='none'; 
      return; 
    }
    grid.innerHTML = f.map(p=>{
      const id = p.name.toLowerCase().replace(/\s+/g,'-');
      const w = State.wishlist.includes(id);
      return `<div class="product-card" data-name="${p.name}" tabindex="0">
        <div class="product-image">
          <img src="${p.img}" alt="${escapeHTML(p.name)}" loading="eager" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23f3f4f6%22 width=%22400%22 height=%22300%22/%3E%3Ctext fill=%22%239ca3af%22 font-family=%22sans-serif%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E🍛 Menu Kuliner%3C/text%3E%3C/svg%3E';">
          ${p.badge?`<span class="product-badge">${p.badge}</span>`:''}
        </div>
        <div class="product-info">
          <h3>${escapeHTML(p.name)}</h3>
          <div class="product-rating">⭐ ${p.rating} <span>(${p.reviews})</span></div>
          <div class="product-delivery">🚚 ${p.delivery}</div>
          <p class="product-desc">${escapeHTML(p.desc)}</p>
          <div class="product-price">${fmt(p.price)}</div>
          <div class="product-actions">
            <button class="btn-add" data-action="cart" data-name="${p.name}">💸 Beli</button>
            <button class="btn-wishlist ${w?'active':''}" data-action="wish" data-name="${p.name}">❤️</button>
          </div>
        </div>
      </div>`;
    }).join('');
    $('#loadMore').style.display = State.productsVisible < this.filter(this.all).length ? 'inline-flex' : 'none';
    setTimeout(()=>FX.card3D(), 50);
  }
};
const Cart = {
  init() { this.updateBadge(); this.render(); this.bind(); this.applyCoupon(); },
  bind() {
    $('#cartBtn')?.addEventListener('click', ()=>this.toggle(true));
    $('#closeCart')?.addEventListener('click', ()=>this.toggle(false));
    $('#cartOverlay')?.addEventListener('click', ()=>this.toggle(false));
    $('#mobCart')?.addEventListener('click', ()=>this.toggle(true));
    $('#clearCart')?.addEventListener('click', ()=>this.clear());
    $('#checkoutBtn')?.addEventListener('click', ()=>{ if(typeof Checkout!=='undefined') Checkout.open(); });
    $$('.btn-outline, .btn-text').forEach(b=>{ if(b.dataset?.closeCart==='true') b.addEventListener('click', ()=>this.toggle(false)); });
    $('#applyCoupon')?.addEventListener('click', ()=>this.applyCoupon(true));
    $('#couponInput')?.addEventListener('keypress', e=>{ if(e.key==='Enter') this.applyCoupon(true); });
  },
  toggle(show) { const p=$('#cartPanel'), o=$('#cartOverlay'); if(!p||!o)return; p.classList.toggle('active', show); o.classList.toggle('active', show); document.body.style.overflow=show?'hidden':''; },
  add(p, q=1) { const ex=State.cart.find(i=>i.id===p.id); if(ex) ex.qty+=q; else State.cart.push({...p, id: p.name.toLowerCase().replace(/\s+/g,'-'), qty:q}); State.save('cart_v2', State.cart); this.updateBadge(); this.render(); this.fly(p.img); this.shake(); Toast.show(`${p.name} ditambahkan`, 'success'); },
  remove(id) { State.cart=State.cart.filter(i=>i.id!==id); State.save('cart_v2', State.cart); this.updateBadge(); this.render(); Toast.show('Item dihapus'); },
  updateQty(id, d) { const i=State.cart.find(x=>x.id===id); if(!i)return; i.qty=Math.max(1, i.qty+d); if(i.qty<=0) this.remove(id); else { State.save('cart_v2', State.cart); this.render(); } },
  clear() { if(!State.cart.length||!confirm('Kosongkan keranjang?')) return; State.cart=[]; State.save('cart_v2', State.cart); this.updateBadge(); this.render(); Toast.show('Keranjang dikosongkan'); },
  updateBadge() { const c=State.cart.reduce((s,i)=>s+i.qty,0); $$('#cartCount,#mobCartBadge').forEach(el=>{ if(el){ el.textContent=c; el.style.display=c?'block':'none'; } }); },
  render() { const c=$('#cartItems'); if(!c) return; if(!State.cart.length) { c.innerHTML=`<div class="cart-empty"><div class="empty-icon">🛒
  </div><p>Keranjangmu masih kosong</p><button class="btn-modern secondary" data-close-cart>Jelajahi Menu</button></div>`; $('#checkoutBtn').disabled=true; this.updateTotals(0); return; }
    let sub=0; c.innerHTML=State.cart.map(i=>{ sub+=i.price*i.qty; return `<div class="cart-item"><img src="${i.img}" alt="${escapeHTML(i.name)}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2270%22 height=%2270%22 viewBox=%220 0 70 70%22%3E%3Crect fill=%22%23e2e8f0%22 width=%2270%22 height=%2270%22/%3E%3Ctext fill=%22%2364748b%22 font-family=%22sans-serif%22 font-size=%2210%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E🍛%3C/text%3E%3C/svg%3E';"><div class="cart-item-info"><h4>${escapeHTML(i.name)}</h4><div class="cart-item-price">${fmt(i.price)}</div><div class="cart-item-qty"><button class="qty-btn" data-qty="-1" data-id="${i.id}">−</button><span>${i.qty}</span><button class="qty-btn" data-qty="1" data-id="${i.id}">+</button></div></div><button class="cart-item-remove" data-remove="${i.id}">&times;</button></div>`; }).join('');
    this.updateTotals(sub);
    c.querySelectorAll('[data-qty]').forEach(b=>b.addEventListener('click',e=>this.updateQty(e.currentTarget.dataset.id, +e.currentTarget.dataset.qty)));
    c.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',e=>this.remove(e.currentTarget.dataset.remove)));
    $('#checkoutBtn').disabled=false;
  },
  updateTotals(sub) { const ship=sub>=50000?0:10000; let disc=0; if(State.coupon==='HEMAT10') disc=Math.round(sub*0.1); const tot=sub+ship-disc; $('#cartSubtotal').textContent=fmt(sub); $('#cartShipping').textContent=ship===0?'Gratis':fmt(ship); const dr=$('#discountRow'); if(disc>0){ $('#cartDiscount').textContent=`- ${fmt(disc)}`; dr.style.display='flex'; } else dr.style.display='none'; $('#cartTotal').textContent=fmt(tot); if(typeof Checkout!=='undefined') Checkout.updateTotals(sub, ship, disc); },
  applyCoupon(force=false) { const inp=$('#couponInput'), st=$('#couponStatus'); const code=inp?.value.trim().toUpperCase(); if(!code&&!force) return; const valid={HEMAT10:{msg:'Diskon 10% aktif! 🎉'}, GRATISONGKIR:{msg:'Gratis ongkir aktif! 🚚'}}; if(valid[code]){ State.coupon=code; State.save('coupon_v2', code); if(st){ st.textContent=`✅ ${valid[code].msg}`; st.style.color='var(--success)'; } this.render(); Toast.show(valid[code].msg, 'success'); if(inp) inp.value=''; } else { if(st){ st.textContent='❌ Kode tidak valid'; st.style.color='var(--danger)'; } if(force) Toast.show('Kode tidak valid', 'error'); } },
  fly(img) { const f=$('#flyElement'), c=$('#cartBtn'); if(!f||!c) return; const r=c.getBoundingClientRect(); f.style.backgroundImage=`url(${img})`; f.style.left=`${window.innerWidth-80}px`; f.style.top=`${r.top+r.height/2}px`; f.classList.add('active'); setTimeout(()=>f.classList.remove('active'),700); },
  shake() { const b=$('#cartBtn'); if(!b)return; b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'),400); },
  getTotal() { return State.cart.reduce((s,i)=>s+i.price*i.qty, 0); }
};
const Wishlist = {
  init() { this.updateBadge(); this.bind(); },
  bind() {
    $('#wishBtn')?.addEventListener('click', ()=>this.open());
    const m=$('#wishlistModal'); 
    if(m) {
      m.addEventListener('click', e=>{ 
        if(e.target===m || e.target.classList.contains('modal-close')) this.close(); 
      });
    }
  },
  toggle(id) { 
    const product = this.getProductById(id);
    if(!product) { console.error('Product not found:', id); return; } 
    const index = State.wishlist.indexOf(id); 
    if(index === -1) {
      State.wishlist.push(id);
      Toast.show(`${product.name} ditambahkan ke wishlist`, 'success');
    } else {
      State.wishlist.splice(index, 1);
      Toast.show(`${product.name} dihapus dari wishlist`, 'warning');
    }
    State.save('wishlist_v2', State.wishlist); 
    this.updateBadge(); 
    this.updateBtn(id);
  },
  getProductById(id) {
    for(const category of Object.values(DB)) {
      for(const subcategory of Object.values(category)) {
        const product = subcategory.find(p => p.name.toLowerCase().replace(/\s+/g,'-') === id);
        if(product) return product;
      }
    }
    return null;
  },
  updateBtn(id) { 
    $$(`.btn-wishlist[data-name]`).forEach(btn => {
      const productName = btn.getAttribute('data-name');
      const productId = productName.toLowerCase().replace(/\s+/g,'-');
      if(productId === id) {
        btn.classList.toggle('active', State.wishlist.includes(id));
      }
    });
  },
  updateBadge() { 
    const badge = $('#wishCount'); 
    if(badge) { 
      const count = State.wishlist.length;
      badge.textContent = count; 
      badge.style.display = count > 0 ? 'block' : 'none'; 
    } 
  },
  open() { 
    const container = $('#wishlistItems');
    const modal = $('#wishlistModal');
    if(!container || !modal) { console.error('Wishlist elements not found'); return; } 
    if(State.wishlist.length === 0) { 
      container.innerHTML = `<div class="cart-empty"><div class="empty-icon">💔</div><p>Wishlist kosong</p><button class="btn-modern secondary" onclick="Wishlist.close()" style="margin-top:15px">Tutup</button></div>`; 
    } else { 
      let html = '';
      State.wishlist.forEach(id => {
        const product = this.getProductById(id);
        if(product) {
          const safeName = product.name.replace(/'/g, "\\'");
          html += `<div class="cart-item">
            <img src="${product.img}" alt="${escapeHTML(product.name)}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2270%22 height=%2270%22 viewBox=%220 0 70 70%22%3E%3Crect fill=%22%23e2e8f0%22 width=%2270%22 height=%2270%22/%3E%3Ctext fill=%22%2364748b%22 font-family=%22sans-serif%22 font-size=%2210%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E🍛%3C/text%3E%3C/svg%3E';">
            <div class="cart-item-info"><h4>${escapeHTML(product.name)}</h4><div class="cart-item-price">${fmt(product.price)}</div></div>
            <button onclick="Wishlist.remove('${id}')" style="background:var(--danger);color:#fff;border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center;transition:transform 0.2s" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">❌</button>
          </div>`;
        }
      });
      container.innerHTML = html;
    } 
    modal.classList.add('active'); 
    document.body.style.overflow = 'hidden'; 
  },
  addToCartAndRemove(productName, wishlistId) {
    const product = findProduct(productName);
    if(product) { Cart.add(product); this.toggle(wishlistId); }
  },
  close() { 
    const modal = $('#wishlistModal'); 
    if(modal) { modal.classList.remove('active'); document.body.style.overflow = ''; } 
  },
  remove(id) {
    const index = State.wishlist.indexOf(id);
    if(index > -1) {
      const product = this.getProductById(id);
      State.wishlist.splice(index, 1);
      State.save('wishlist_v2', State.wishlist);
      this.updateBadge();
      this.updateBtn(id);
      if(product) Toast.show(`${product.name} dihapus dari wishlist`, 'success');
      if($('#wishlistModal')?.classList.contains('active')) this.open();
    }
  }
};
const QuickView = {
  current: null,
  init() {
    const m=$('#quickViewModal'); 
    if(m) { m.addEventListener('click', e=>{ if(e.target===m || e.target.classList.contains('modal-close')) this.close(); }); }
    $('#qvAddToCart')?.addEventListener('click', ()=>{ if(this.current && typeof Cart!=='undefined'){ Cart.add(this.current, +$('#qvQty')?.value||1); this.close(); } });
    $('#qvAddToWish')?.addEventListener('click', ()=>{ if(this.current && typeof Wishlist!=='undefined') Wishlist.toggle(this.current.id); });
    $$('.qty-btn[data-action]').forEach(b=>b.addEventListener('click',e=>{ 
      const inp=$('#qvQty'); if(!inp)return; 
      const a=e.currentTarget.dataset.action; const v=parseInt(inp.value)||1; 
      inp.value=a==='increase'?Math.min(20,v+1):Math.max(1,v-1); 
    }));
  },
  open(p) { 
    if(!p)return; this.current=p; 
    $('#qvImage').src=p.img; $('#qvTitle').textContent=p.name; $('#qvDesc').textContent=p.desc; 
    $('#qvPrice').textContent=fmt(p.price); $('#qvDelivery').textContent=p.delivery; 
    $('#qvBadge').textContent=p.badge||''; $('#qvBadge').style.display=p.badge?'block':'none'; 
    $('#qvRating').innerHTML=`⭐ ${p.rating} <span>(${p.reviews})</span>`; 
    if(!State.viewed.includes(p.name)){ State.viewed.push(p.name); if(State.viewed.length>20) State.viewed.shift(); State.save('viewed_v2', State.viewed); } 
    $('#quickViewModal')?.classList.add('active'); document.body.style.overflow='hidden'; 
  },
  close() { $('#quickViewModal')?.classList.remove('active'); document.body.style.overflow=''; this.current=null; }
};
const Auth = {
  currentPanel: 'login',
  init() { this.updateUI(); this.bind(); initPasswordStrength(); },
  updateUI() { const b=$('#authBtn'); if(!b)return; b.innerHTML=State.user?`👤 ${State.user.name?.split(' ')[0]||'User'}`:'👤 Masuk'; },
  bind() {
    $('#authBtn')?.addEventListener('click', ()=>State.user?this.logout():this.open());
    $('#loginForm')?.addEventListener('submit', e=>this.handleLogin(e));
    $('#registerForm')?.addEventListener('submit', e=>this.handleRegister(e));
  },
  open() { $('#authModal')?.classList.add('active'); document.body.style.overflow='hidden'; this.switchPanel('login'); },
  close() { $('#authModal')?.classList.remove('active'); document.body.style.overflow=''; this.switchPanel('login'); },
  switchPanel(panel) {
    this.currentPanel = panel;
    const wrapper = document.querySelector('.auth-panel-wrapper');
    if (wrapper) {
      if (panel === 'register') { wrapper.classList.add('active'); } else { wrapper.classList.remove('active'); }
    }
  },
  handleLogin(e) {
    e.preventDefault();
    const em=$('#loginEmail')?.value.trim(), pass=$('#loginPass')?.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!em || !emailRegex.test(em)) return Toast.show('Email tidak valid','error');
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!pass || !passRegex.test(pass)) return Toast.show('Password harus huruf besar, kecil & angka','error');
    const u=JSON.parse(localStorage.getItem('users_v2'))||[];
    const usr=u.find(x=>x.email===em&&x.pass===pass);
    if(!usr) return Toast.show('Email/password salah','error');
    State.user={name:usr.name, email:usr.email};
    Toast.show(`Welcome, ${usr.name?.split(' ')[0]}!`);
    State.save('user_v2', State.user);
    this.updateUI();
    this.close();
  },
  handleRegister(e) {
    e.preventDefault();
    const n=$('#authName')?.value.trim(), em=$('#authEmail')?.value.trim(), pass=$('#authPass')?.value;
    if(!n||n.length<2) return Toast.show('Nama minimal 2 karakter','error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!em || !emailRegex.test(em)) return Toast.show('Email tidak valid','error');
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!pass || !passRegex.test(pass)) return Toast.show('Password harus huruf besar, kecil & angka','error');
    const u=JSON.parse(localStorage.getItem('users_v2'))||[];
    if(u.find(x=>x.email===em)) return Toast.show('Email sudah terdaftar','error');
    u.push({name:n, email:em, pass});
    localStorage.setItem('users_v2', JSON.stringify(u));
    State.user={name:n, email:em};
    Toast.show('Registrasi berhasil! 🎉');
    State.save('user_v2', State.user);
    this.updateUI();
    this.close();
  },
  logout() { State.user=null; State.save('user_v2', null); this.updateUI(); Toast.show('Logout berhasil 👋'); }
};
const Checkout = {
  open() { if(!State.user){ Toast.show('Login dulu ya','warning'); Auth.open(); return; } if(!State.cart.length) return; this.populate(); this.goToStep(1); $('#checkoutModal')?.classList.add('active'); document.body.style.overflow='hidden'; },
  close() { $('#checkoutModal')?.classList.remove('active'); document.body.style.overflow=''; },
  goToStep(n) { State.checkoutStep=n; $$('.checkout-step').forEach((s,i)=>s.classList.toggle('active', i+1===n)); $$('.checkout-steps .step').forEach((s,i)=>s.classList.toggle('active', i+1<=n)); },
  populate() { 
    const c=$('#checkoutItems'); if(!c) return; 
    c.innerHTML=State.cart.map(i=>`<div style="display:flex;justify-content:space-between;padding:8px 0;font-size:0.9rem"><span>${i.name} × ${i.qty}</span><strong>${fmt(i.price*i.qty)}</strong></div>`).join(''); 
    const sub=Cart.getTotal(), ship=sub>=50000?0:10000; let disc=0; if(State.coupon==='HEMAT10') disc=Math.round(sub*0.1); const tot=sub+ship-disc; 
    $('#confirmSubtotal').textContent=fmt(sub); $('#confirmShipping').textContent=ship===0?'Gratis':fmt(ship); $('#confirmTotal').textContent=fmt(tot); 
    $('#checkoutShipping').textContent=$('#confirmShipping').textContent; 
    const dr=$('#confirmDiscountRow'); if(disc>0){ $('#confirmDiscount').textContent=`- ${fmt(disc)}`; dr.style.display='flex'; } else dr.style.display='none'; 
  },
  updateTotals(sub, ship, disc) { 
    const tot=sub+ship-disc; if(!$('#checkoutModal')?.classList.contains('active')) return; 
    $('#confirmSubtotal').textContent=fmt(sub); $('#confirmShipping').textContent=ship===0?'Gratis':fmt(ship); $('#confirmTotal').textContent=fmt(tot); 
    const dr=$('#confirmDiscountRow'); if(disc>0){ $('#confirmDiscount').textContent=`- ${fmt(disc)}`; dr.style.display='flex'; } else dr.style.display='none'; 
  },
  submit(e) { 
    e.preventDefault(); if(!$('#agreeTerms')?.checked) return Toast.show('Setujui syarat dulu','warning'); 
    const b=e.target.querySelector('button[type="submit"]'); if(b){ b.classList.add('loading'); b.disabled=true; } 
    setTimeout(()=>{ State.cart=[]; State.save('cart_v2', State.cart); Cart.updateBadge(); Cart.render(); this.close(); if(b){ b.classList.remove('loading'); b.disabled=false; } Toast.show('Pesanan berhasil! 🎉','success'); }, 1500); 
  }
};
window.nextStep = n => Checkout.goToStep(n);
function initApp() {
  console.log('🍛 KulinerNusantara loaded - Two-Level Menu System ✨');
  try { 
    Toast.init(); Theme.init(); Hero.init(); Products.init(); Cart.init(); Wishlist.init(); QuickView.init(); Auth.init(); Checkout.init(); 
  } catch(e) { console.error('❌ Module init error:', e); }
  try { FX.mouseBg(); FX.entranceObserver(); FX.buttonEffects(); } catch(e) { console.error('❌ FX init error:', e); }
  try { $$('.hero-cta .btn-modern').forEach(b=>b.addEventListener('click',e=>{ const t=e.currentTarget.dataset.scroll; if(t) $(`#${t}`)?.scrollIntoView({behavior:'smooth'}); })); } catch(e) {}
  setTimeout(()=>{ $('#preloader')?.classList.add('hidden'); console.log('✅ Preloader hidden'); }, 1000);
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();