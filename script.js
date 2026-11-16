/* ===== সব কনটেন্ট এখান থেকে সম্পাদনা করুন — HTML/CSS ছুঁতে হবে না ===== */
const CONFIG = {
  googleScriptUrl: "",      // Google Apps Script Web App URL
  telegramBotToken: "9125806892:AAH3kdwSp79SaEv_BVjn90PhNg3AnxaFWg0",     // ⚠ নিরাপত্তা: ফ্রন্টএন্ডে আসল টোকেন রাখবেন না। সার্ভারলেস/ব্যাকএন্ড ফাংশন ব্যবহার করুন।
  telegramChatId: "8025885223"
};
const IMG = "https://i.ibb.co.com/PvCtPYhx/1790514533098.jpg";
const portfolioData = {
  personal: { name: "MD. ABDULLAH YUSUF", profession: "প্রফেশনাল গ্রাফিক ডিজাইনার", phone: "01306539224", email: "mdabdullahyusuf59@gmail.com", location: "Dhaka, Bangladesh", profileImage: IMG,
    tagline: "ক্রিয়েটিভ ডিজাইনের মাধ্যমে আইডিয়াকে দৃশ্যমান পরিচয়ে রূপ দেওয়া.",
    intro: "আমি আধুনিক, আকর্ষণীয় ও অর্থবহ ভিজ্যুয়াল ডিজাইন তৈরি করতে ভালোবাসি। ব্র্যান্ডিং, সোশ্যাল মিডিয়া ডিজাইন এবং ক্রিয়েটিভ ভিজ্যুয়াল সমাধানের মাধ্যমে একটি ব্র্যান্ডকে আলাদা পরিচয় দিতে কাজ করি।",
    typing: ["ক্রিয়েটিভ গ্রাফিক ডিজাইনার", "ব্র্যান্ডিং ডিজাইনার", "ভিজ্যুয়াল ডিজাইনার", "ক্রিয়েটিভ ডিজাইন এক্সপার্ট"] },
  about: { title: "আমার সম্পর্কে",
    description: "আমি MD. ABDULLAH YUSUF, ঢাকা-ভিত্তিক একজন প্রফেশনাল গ্রাফিক ডিজাইনার। সৃজনশীল চিন্তা ও ভিজ্যুয়াল কমিউনিকেশনের মাধ্যমে আমি এমন ব্র্যান্ড আইডেন্টিটি গড়ি, যা দর্শকের মনে স্থায়ী ছাপ ফেলে। প্রতিটি ডিজাইনে খুঁটিনাটির প্রতি নজর, আধুনিক ধারা এবং ক্লায়েন্টের প্রয়োজনকে সবার আগে রাখি, যাতে প্রফেশনাল ও কার্যকর ডিজাইন সমাধান পাওয়া যায়।",
    stats: [{ label: "বছরের অভিজ্ঞতা", value: 5, suffix: "+", icon: "fa-solid fa-award" }, { label: "সম্পন্ন প্রজেক্ট", value: 250, suffix: "+", icon: "fa-solid fa-folder-open" }, { label: "সন্তুষ্ট ক্লায়েন্ট", value: 120, suffix: "+", icon: "fa-solid fa-users" }, { label: "ডিজাইন দক্ষতা", value: 10, suffix: "+", icon: "fa-solid fa-layer-group" }] },
  skills: [
    { name: "গ্রাফিক ডিজাইন", percentage: 95, icon: "fa-solid fa-pen-nib" }, { name: "ব্র্যান্ড আইডেন্টিটি", percentage: 92, icon: "fa-solid fa-fingerprint" },
    { name: "লোগো ডিজাইন", percentage: 94, icon: "fa-solid fa-shapes" }, { name: "সোশ্যাল মিডিয়া ডিজাইন", percentage: 96, icon: "fa-solid fa-hashtag" },
    { name: "পোস্টার ডিজাইন", percentage: 90, icon: "fa-solid fa-image" }, { name: "ব্যানার ডিজাইন", percentage: 91, icon: "fa-solid fa-panorama" },
    { name: "থাম্বনেইল ডিজাইন", percentage: 93, icon: "fa-brands fa-youtube" }, { name: "ফটো এডিটিং", percentage: 89, icon: "fa-solid fa-camera-retro" },
    { name: "টাইপোগ্রাফি", percentage: 88, icon: "fa-solid fa-font" }, { name: "UI ভিজ্যুয়াল ডিজাইন", percentage: 82, icon: "fa-solid fa-display" }],
  services: [
    { title: "গ্রাফিক ডিজাইন", icon: "fa-solid fa-pen-ruler", text: "প্রিন্ট ও ডিজিটাল—সব মাধ্যমের জন্য পরিচ্ছন্ন, আধুনিক ডিজাইন।" },
    { title: "লোগো ও ব্র্যান্ডিং", icon: "fa-solid fa-gem", text: "আপনার ব্যবসার মূল্যবোধ ফুটিয়ে তোলা স্বতন্ত্র লোগো ও ব্র্যান্ড গাইড।" },
    { title: "সোশ্যাল মিডিয়া ডিজাইন", icon: "fa-brands fa-instagram", text: "দৃষ্টি আকর্ষণকারী পোস্ট, কভার ও ক্যাম্পেইন ক্রিয়েটিভ।" },
    { title: "পোস্টার ও ব্যানার ডিজাইন", icon: "fa-solid fa-rectangle-ad", text: "ইভেন্ট ও প্রচারের জন্য শক্তিশালী ভিজ্যুয়াল বার্তা।" },
    { title: "ইউটিউব থাম্বনেইল", icon: "fa-brands fa-youtube", text: "ক্লিক বাড়ানোর মতো আকর্ষণীয় ও পরিষ্কার থাম্বনেইল।" },
    { title: "বিজনেস প্রমোশনাল ডিজাইন", icon: "fa-solid fa-bullhorn", text: "ফ্লায়ার, ব্রোশিউর ও বিজনেস কার্ডসহ প্রমোশনাল ম্যাটেরিয়াল।" }],
  experience: [
    { year: "২০২৪ – বর্তমান", position: "সিনিয়র গ্রাফিক ডিজাইনার", org: "ফ্রিল্যান্স / বিভিন্ন ক্লায়েন্ট", description: "দেশি ও আন্তর্জাতিক ক্লায়েন্টের জন্য ব্র্যান্ডিং ও ক্যাম্পেইন ডিজাইন।" },
    { year: "২০২২ – ২০২৪", position: "ক্রিয়েটিভ ডিজাইনার", org: "ডিজিটাল মার্কেটিং এজেন্সি", description: "সোশ্যাল মিডিয়া কনটেন্ট ও বিজ্ঞাপন ক্রিয়েটিভ তৈরি।" },
    { year: "২০২০ – ২০২২", position: "জুনিয়র গ্রাফিক ডিজাইনার", org: "ডিজাইন স্টুডিও, ঢাকা", description: "লোগো, পোস্টার ও প্রিন্ট ডিজাইনে হাতেকলমে অভিজ্ঞতা।" }],
  testimonials: [
    { name: "রাফিয়া ইসলাম", profession: "উদ্যোক্তা", rating: 5, photo: IMG, review: "আমার ব্র্যান্ডের লোগো ও পুরো ভিজ্যুয়াল পরিচয় অসাধারণ হয়েছে। সময়মতো কাজ পেয়েছি।" },
    { name: "তানভীর আহমেদ", profession: "কনটেন্ট ক্রিয়েটর", rating: 5, photo: IMG, review: "থাম্বনেইল বদলানোর পর ভিউ ও ক্লিক স্পষ্টভাবে বেড়েছে। খুবই পেশাদার আচরণ।" },
    { name: "সাদিয়া রহমান", profession: "মার্কেটিং ম্যানেজার", rating: 5, photo: IMG, review: "ক্যাম্পেইনের সব ডিজাইন ছিল পরিচ্ছন্ন ও আধুনিক। আবারও কাজ করতে চাই।" }],
  projects: [
    { title: "নোভা ব্র্যান্ড আইডেন্টিটি", category: "ব্র্যান্ডিং", image: IMG, description: "একটি আধুনিক টেক ব্র্যান্ডের সম্পূর্ণ ভিজ্যুয়াল পরিচয়।", tools: ["Illustrator", "Photoshop"], date: "জানুয়ারি ২০২৬", liveUrl: "#", detailsUrl: "#" },
    { title: "আরাধ্য লোগো কালেকশন", category: "লোগো", image: IMG, description: "মিনিমাল ও স্মরণীয় লোগো ডিজাইন সংগ্রহ।", tools: ["Illustrator"], date: "ডিসেম্বর ২০২৫", liveUrl: "#", detailsUrl: "#" },
    { title: "ফুড ক্যাম্পেইন পোস্ট", category: "সোশ্যাল মিডিয়া", image: IMG, description: "রেস্টুরেন্ট প্রমোশনের জন্য সোশ্যাল মিডিয়া সিরিজ।", tools: ["Photoshop", "Figma"], date: "নভেম্বর ২০২৫", liveUrl: "#", detailsUrl: "#" },
    { title: "মিউজিক ফেস্ট পোস্টার", category: "পোস্টার", image: IMG, description: "ইভেন্টের জন্য সাহসী টাইপোগ্রাফিনির্ভর পোস্টার।", tools: ["Photoshop"], date: "অক্টোবর ২০২৫", liveUrl: "#", detailsUrl: "#" },
    { title: "সেল ক্যাম্পেইন ব্যানার", category: "ব্যানার", image: IMG, description: "ই-কমার্স সেলের জন্য ওয়েব ও সোশ্যাল ব্যানার।", tools: ["Photoshop", "Illustrator"], date: "সেপ্টেম্বর ২০২৫", liveUrl: "#", detailsUrl: "#" },
    { title: "টেক রিভিউ থাম্বনেইল", category: "থাম্বনেইল", image: IMG, description: "ইউটিউব চ্যানেলের জন্য উচ্চ-ক্লিক থাম্বনেইল সিরিজ।", tools: ["Photoshop"], date: "আগস্ট ২০২৫", liveUrl: "#", detailsUrl: "#" }],
  socialLinks: { facebook: "https://www.facebook.com/profile.php?id=61552642902650", whatsapp: "https://wa.me/8801306539224", instagram: "#", linkedin: "#", behance: "#", dribbble: "#", github: "#" },
  contact: { ...CONFIG, googleMapEmbedUrl: "https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed" }
};

(() => {
const D = portfolioData, P = D.personal;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
const bn = n => Number(n).toLocaleString('bn-BD');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const SOC = { facebook: 'fa-brands fa-facebook-f', whatsapp: 'fa-brands fa-whatsapp', instagram: 'fa-brands fa-instagram', linkedin: 'fa-brands fa-linkedin-in', behance: 'fa-brands fa-behance', dribbble: 'fa-brands fa-dribbble', github: 'fa-brands fa-github' };
const socials = () => Object.entries(D.socialLinks).filter(([, u]) => u && u !== '#').map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener" aria-label="${k}"><i class="${SOC[k]}"></i></a>`).join('');
const NAV = [['হোম', 'fa-house', '#home'], ['আমার সম্পর্কে', 'fa-user', '#about'], ['দক্ষতা', 'fa-bolt', '#skills'], ['অভিজ্ঞতা', 'fa-briefcase', '#experience'], ['প্রজেক্ট', 'fa-images', '#projects'], ['যোগাযোগ', 'fa-envelope', '#contact']];

/* shell: nav + footer */
$('#nav').innerHTML = `<div class="bar"><a class="logo" href="#home" aria-label="হোম"><b>AY</b><span>${esc(P.name)}</span></a><ul class="menu" id="menu">${NAV.map(([t, i, h]) => `<li><a href="${h}" ><i class="fa-solid ${i}"></i>${t}</a></li>`).join('')}</ul><button class="ib burger" id="burger" aria-label="মেনু" aria-expanded="false" aria-controls="menu"><i class="fa-solid fa-bars"></i></button></div>`;
$('#foot').innerHTML = `<div class="wrap"><div class="fgrid"><div><h4>${esc(P.name)}</h4><p class="lead">${esc(P.tagline.replace(/\.$/, '।'))}</p><div class="socials" style="margin-top:16px">${socials()}</div></div><div><h4>নেভিগেশন</h4><ul>${NAV.map(([t, , h]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div><div><h4>যোগাযোগ</h4><ul><li><i class="fa-solid fa-phone"></i><a href="tel:${P.phone}">${P.phone}</a></li><li><i class="fa-solid fa-envelope"></i><a href="mailto:${P.email}">${P.email}</a></li><li><i class="fa-solid fa-location-dot"></i>${esc(P.location)}</li></ul></div></div><p class="copy">© ২০২৬ ${esc(P.name)}। সর্বস্বত্ব সংরক্ষিত।</p></div>`;
const menu = $('#menu'), burger = $('#burger');
const setMenu = o => { menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); burger.firstChild.className = o ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'; };
burger.onclick = () => setMenu(!menu.classList.contains('open'));
$$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
addEventListener('scroll', () => $('#nav').classList.toggle('sc', scrollY > 30), { passive: true });
/* page transition */
addEventListener('pageshow', () => document.body.classList.remove('leave'));
requestAnimationFrame(() => document.body.classList.add('ready'));

/* reveal observer */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); if (e.target.dataset.count) count(e.target); } }), { threshold: .15 });
const watch = () => $$('.rv:not(.in),[data-count]').forEach(el => io.observe(el));
const count = el => { const t = +el.dataset.count, sx = el.dataset.suffix || ''; if (RM) { el.textContent = bn(t) + sx; return; } const s = performance.now(); (function f(n) { const p = Math.min((n - s) / 1600, 1); el.textContent = bn(Math.round(t * (1 - Math.pow(1 - p, 3)))) + sx; if (p < 1) requestAnimationFrame(f); })(s); };

{
  $('#hName').textContent = P.name; $('#hRole').textContent = ''; $('#hIntro').textContent = P.intro; $('#hImg').src = P.profileImage; $('#hSocial').innerHTML = socials();
  $('#aTitle').textContent = D.about.title; $('#aText').textContent = D.about.description;
  $('#stats').innerHTML = D.about.stats.map(s => `<div class="glass stat"><i class="${s.icon}"></i><b data-count="${s.value}" data-suffix="${s.suffix || ''}">০</b><span>${s.label}</span></div>`).join('');
  $('#skillGrid').innerHTML = D.skills.map(s => `<article class="glass card rv"><div class="ic"><i class="${s.icon}"></i></div><h3>${s.name}<span class="pct">${bn(s.percentage)}%</span></h3><div class="bar2" role="progressbar" aria-valuenow="${s.percentage}" aria-valuemin="0" aria-valuemax="100"><i style="--v:${s.percentage / 100}"></i></div></article>`).join('');
  $$('.bar2').forEach(b => b.closest('.rv').addEventListener('transitionend', () => {}, { once: true }));
  $('#svcGrid').innerHTML = D.services.map(s => `<article class="glass card rv"><div class="ic"><i class="${s.icon}"></i></div><h3>${s.title}</h3><p>${s.text}</p></article>`).join('');
  $('#timeline').innerHTML = D.experience.map(x => `<li class="glass tl rv" data-a="right"><time>${x.year}</time><h3>${x.position}</h3><em>${x.org}</em><p class="lead">${x.description}</p></li>`).join('');
  $('#slider').innerHTML = D.testimonials.map(t => `<figure class="glass tcard"><div class="who"><img src="${esc(t.photo)}" alt="${esc(t.name)}" loading="lazy" width="54" height="54"><div><b>${t.name}</b><div class="lead" style="font-size:.85rem">${t.profession}</div></div></div><div class="stars" aria-label="${t.rating} স্টার">${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}</div><blockquote class="lead" style="margin-top:10px">${t.review}</blockquote></figure>`).join('');
  const sl = $('#slider'), step = () => sl.firstElementChild.offsetWidth + 22;
  $('#next').onclick = () => sl.scrollBy({ left: step(), behavior: 'smooth' }); $('#prev').onclick = () => sl.scrollBy({ left: -step(), behavior: 'smooth' });
  sl.onkeydown = e => { if (e.key === 'ArrowRight') $('#next').click(); if (e.key === 'ArrowLeft') $('#prev').click(); };
  /* typing */
  const tp = $('#typed'); let wi = 0, ci = 0, del = false; const words = P.typing.map(w => [...w]);
  if (RM) tp.textContent = P.typing[0]; else (function tick() { const w = words[wi]; ci += del ? -1 : 1; tp.textContent = w.slice(0, ci).join(''); let d = del ? 40 : 90; if (!del && ci === w.length) { del = true; d = 1600; } else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; d = 350; } setTimeout(tick, d); })();
  /* glow + parallax + particles */
  const hero = $('#home'), glow = $('#glow');
  if (!RM) {
    hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top; glow.style.transform = `translate3d(${x}px,${y}px,0)`; const px = (x / r.width - .5), py = (y / r.height - .5); $('.hero-img').style.transform = `translate3d(${px * -14}px,${py * -14}px,0)`; $$('.orb').forEach((o, i) => o.style.translate = `${px * (i ? 40 : -40)}px ${py * 30}px`); });
    const c = $('#dots'), x = c.getContext('2d'); let W, H, ps = []; const rs = () => { W = c.width = hero.offsetWidth; H = c.height = hero.offsetHeight; ps = Array.from({ length: Math.min(45, W / 28 | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.6 + .4, v: Math.random() * .3 + .1 })); }; rs(); addEventListener('resize', rs);
    let on = true; new IntersectionObserver(e => on = e[0].isIntersecting).observe(hero);
    (function d() { if (on) { x.clearRect(0, 0, W, H); x.fillStyle = 'rgba(106,165,255,.6)'; ps.forEach(p => { p.y -= p.v; if (p.y < 0) p.y = H; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill(); }); } requestAnimationFrame(d); })();
  }
}

{
  const cats = ['সব', ...new Set(D.projects.map(p => p.category))];
  $('#filters').innerHTML = cats.map((c, i) => `<button role="tab" aria-selected="${!i}" data-c="${c}">${c}</button>`).join('');
  $('#pGrid').innerHTML = D.projects.map((p, i) => `<article class="glass pc rv" data-c="${p.category}"><div class="thumb"><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy"><div class="ov"><a class="btn" href="${esc(p.liveUrl)}" target="_blank" rel="noopener"><i class="fa-solid fa-eye"></i> লাইভ প্রিভিউ</a><button class="btn ghost" data-i="${i}"><i class="fa-solid fa-circle-info"></i> বিস্তারিত</button></div></div><div class="pb"><span class="tag">${p.category}</span><h3>${p.title}</h3><p>${p.description}</p></div></article>`).join('');
  $('#filters').onclick = e => { const b = e.target.closest('button'); if (!b) return; $$('#filters button').forEach(x => x.setAttribute('aria-selected', x === b)); $$('.pc').forEach(c => c.hidden = b.dataset.c !== 'সব' && c.dataset.c !== b.dataset.c); };
  const m = $('#modal'); let last;
  const close = () => { m.classList.remove('show'); setTimeout(() => { m.hidden = true; last && last.focus(); }, 350); document.body.style.overflow = ''; };
  $('#pGrid').onclick = e => { const b = e.target.closest('[data-i]'); if (!b) return; const p = D.projects[b.dataset.i]; last = b; $('#mImg').src = p.image; $('#mImg').alt = p.title; $('#mCat').textContent = p.category; $('#mTitle').textContent = p.title; $('#mDesc').textContent = p.description; $('#mTools').textContent = p.tools.join(', '); $('#mDate').textContent = p.date; $('#mLive').href = p.liveUrl; m.hidden = false; document.body.style.overflow = 'hidden'; requestAnimationFrame(() => { m.classList.add('show'); $('#mClose').focus(); }); };
  $('#mClose').onclick = close; m.onclick = e => e.target === m && close(); addEventListener('keydown', e => e.key === 'Escape' && !m.hidden && close());
  $('#map').src = D.contact.googleMapEmbedUrl;

  /* form */
  const f = $('#form'), V = {
    name: v => v.trim().length < 2 ? 'অনুগ্রহ করে আপনার নাম লিখুন।' : '',
    phone: v => /^(?:\+?88)?01[3-9]\d{8}$/.test(v.replace(/[\s-]/g, '')) ? '' : 'সঠিক বাংলাদেশি ফোন নম্বর দিন (যেমন: 01XXXXXXXXX)।',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'সঠিক ইমেইল ঠিকানা লিখুন।',
    message: v => v.trim().length < 10 ? 'মেসেজ কমপক্ষে ১০ অক্ষরের হতে হবে।' : ''
  };
  const chk = el => { const e = V[el.name](el.value); el.parentNode.classList.toggle('err', !!e); $('small', el.parentNode).textContent = e; el.setAttribute('aria-invalid', !!e); return !e; };
  $$('input,textarea', f).forEach(el => { el.addEventListener('blur', () => chk(el)); el.addEventListener('input', () => el.parentNode.classList.contains('err') && chk(el)); });
  async function send(d) {
    const C = D.contact, jobs = [];
    if (C.googleScriptUrl) jobs.push(fetch(C.googleScriptUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(d) }));
    /* ⚠ প্রোডাকশনে টেলিগ্রাম টোকেন ফ্রন্টএন্ডে রাখবেন না; নিজের সার্ভারলেস এন্ডপয়েন্টে পাঠান। */
    if (C.telegramBotToken && C.telegramChatId) jobs.push(fetch(`https://api.telegram.org/bot${C.telegramBotToken}/sendMessage`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ chat_id: C.telegramChatId, text: `নতুন মেসেজ\nনাম: ${d.name}\nফোন: ${d.phone}\nইমেইল: ${d.email}\n${d.message}` }) }));
    if (!jobs.length) await new Promise(r => setTimeout(r, 700));
    await Promise.all(jobs);
  }
  f.addEventListener('submit', async e => {
    e.preventDefault(); const els = $$('input,textarea', f); if (!els.map(chk).every(Boolean)) return $('[aria-invalid=true]', f).focus();
    const b = $('button[type=submit]', f); b.disabled = true; b.firstElementChild.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> পাঠানো হচ্ছে...';
    try { await send(Object.fromEntries(new FormData(f))); f.classList.add('done'); f.reset(); setTimeout(() => f.classList.remove('done'), 5000); }
    catch { alert('মেসেজ পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।'); }
    b.disabled = false; b.firstElementChild.innerHTML = '<i class="fa-solid fa-paper-plane"></i> মেসেজ পাঠান';
  });
}
const views = { home: $('#v-home'), portfolio: $('#v-portfolio') };
function route() {
  const id = (location.hash || '#home').slice(1), pf = ['projects', 'contact'].includes(id);
  views.home.hidden = pf; views.portfolio.hidden = !pf;
  $$('#menu a').forEach(a => a.removeAttribute('aria-current'));
  const cur = $(`#menu a[href="#${id}"]`); if (cur) cur.setAttribute('aria-current', 'page');
  document.title = pf ? 'সৃজনশীল কাজ | MD. ABDULLAH YUSUF' : 'MD. ABDULLAH YUSUF | প্রফেশনাল গ্রাফিক ডিজাইনার';
  dispatchEvent(new Event('resize'));
  requestAnimationFrame(() => { const t = document.getElementById(id); (!t || id === 'home' || id === 'projects') ? scrollTo(0, 0) : t.scrollIntoView(); });
}
addEventListener('hashchange', route); route();
watch();
$$('.skills .rv,.svc .rv').forEach((c, i) => c.style.transitionDelay = (i % 4) * 70 + 'ms');
})();

/* Sign Up / OTP Verify / Resend / Sign In — আপনার ওয়েবসাইটে যোগ হবে */
(() => {
  // ⚠ ব্যাকএন্ড (Render) এর URL এখানে বসান
  const API = "https://YOUR-BACKEND.onrender.com/api/auth";

  const $ = (s, r = document) => r.querySelector(s);
  const bnD = s => String(s).replace(/[০-৯]/g, d => '০১২৩৪৫৬৭৮৯'.indexOf(d));
  const toBn = n => String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
  const store = { get: k => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }, del: k => { try { localStorage.removeItem(k); } catch {} } };
  let user = null, pending = '', timer = null;

  document.head.insertAdjacentHTML('beforeend', `<style>
  .am{position:fixed;inset:0;z-index:90;display:grid;place-items:center;padding:16px;background:rgba(3,8,16,.78);backdrop-filter:blur(8px);animation:amf .3s}
  .ab{position:relative;width:min(430px,100%);max-height:94vh;overflow:auto;padding:34px 26px 26px;background:rgba(11,27,51,.94);animation:amu .45s cubic-bezier(.22,1,.36,1)}
  @keyframes amf{from{opacity:0}}@keyframes amu{from{opacity:0;transform:translateY(24px) scale(.97)}}
  .ab h3{font-size:1.5rem;margin-bottom:4px}.ab .lead{font-size:.95rem;margin-bottom:18px;word-break:break-word}
  .ab form{display:grid;gap:4px}.ax{position:absolute;right:12px;top:12px;width:40px;height:40px}
  .amsg{min-height:1.4em;margin-top:10px;text-align:center;font-size:.92rem;color:#fca5a5}.amsg.ok{color:#6ee7b7}
  .alink{background:none;border:0;color:var(--p2);cursor:pointer;font-weight:600;padding:6px}.alink:disabled{color:var(--gray);cursor:not-allowed}
  .asw{text-align:center;color:var(--gray);font-size:.92rem;margin-top:8px}
  #a-otpin{text-align:center;font-size:1.7rem;letter-spacing:.5em;padding:14px 8px 14px 18px}
  .anav{min-height:42px;padding:8px 18px;font-size:.92rem;white-space:nowrap}.anav span{max-width:110px;overflow:hidden;text-overflow:ellipsis}
  @media(max-width:900px){.anav{margin-left:auto;margin-right:10px;padding:8px 14px}}
  </style>`);
  const fld = (id, label, type = 'text', ac = '') => `<div class="fld"><input id="${id}" type="${type}" placeholder=" " autocomplete="${ac}" required><label for="${id}">${label}</label><small></small></div>`;
  document.body.insertAdjacentHTML('beforeend', `<div class="am" id="am" hidden role="dialog" aria-modal="true" aria-labelledby="a-t"><div class="ab glass">
  <button class="ib ax" id="a-x" type="button" aria-label="বন্ধ করুন"><i class="fa-solid fa-xmark"></i></button>
  <h3 id="a-t"></h3><p class="lead" id="a-s"></p>
  <form data-v="in" novalidate>${fld('a-ie', 'ইমেইল', 'email', 'email')}${fld('a-ip', 'পাসওয়ার্ড', 'password', 'current-password')}<button class="btn" type="submit">সাইন ইন করুন</button><p class="asw">অ্যাকাউন্ট নেই? <button type="button" class="alink" data-go="up">সাইন আপ</button></p></form>
  <form data-v="up" novalidate>${fld('a-un', 'নাম', 'text', 'name')}${fld('a-ue', 'ইমেইল', 'email', 'email')}${fld('a-up', 'পাসওয়ার্ড (কমপক্ষে ৮ অক্ষর)', 'password', 'new-password')}<button class="btn" type="submit">সাইন আপ করুন</button><p class="asw">আগে থেকেই অ্যাকাউন্ট আছে? <button type="button" class="alink" data-go="in">সাইন ইন</button></p></form>
  <form data-v="otp" novalidate>${fld('a-otpin', 'ছয় সংখ্যার OTP', 'text', 'one-time-code').replace('type="text"', 'type="text" inputmode="numeric" maxlength="6"')}<button class="btn" type="submit">ভেরিফাই করুন</button><p class="asw">কোড পাননি? <button type="button" class="alink" id="a-re">আবার পাঠান</button></p></form>
  <div data-v="acc" style="text-align:center"><button class="btn" id="a-out" type="button"><i class="fa-solid fa-right-from-bracket"></i> সাইন আউট</button></div>
  <p class="amsg" id="a-m" role="alert"></p></div></div>`);

  const modal = $('#am'), msg = $('#a-m');
  const say = (t, ok) => { msg.textContent = t || ''; msg.className = 'amsg' + (ok ? ' ok' : ''); };
  const T = { in: ['সাইন ইন', 'আপনার অ্যাকাউন্টে প্রবেশ করুন'], up: ['সাইন আপ', 'নতুন অ্যাকাউন্ট তৈরি করুন'], otp: ['ইমেইল ভেরিফাই করুন', () => `${pending}-এ একটি ছয় সংখ্যার কোড পাঠানো হয়েছে। কোডটি ১০ মিনিট পর্যন্ত কার্যকর থাকবে।`], acc: ['আমার অ্যাকাউন্ট', () => `${user ? user.name : ''} (${user ? user.email : ''})`] };
  function show(v) {
    document.querySelectorAll('#am [data-v]').forEach(f => f.hidden = f.dataset.v !== v);
    $('#a-t').textContent = T[v][0]; $('#a-s').textContent = typeof T[v][1] === 'function' ? T[v][1]() : T[v][1]; say('');
    document.querySelectorAll('#am .fld').forEach(f => { f.classList.remove('err'); $('small', f).textContent = ''; });
    setTimeout(() => { const i = $(`#am [data-v="${v}"] input`); i && i.focus(); }, 60);
  }
  const open = v => { modal.hidden = false; document.body.style.overflow = 'hidden'; show(v || (user ? 'acc' : 'in')); };
  const close = () => { modal.hidden = true; document.body.style.overflow = ''; };
  $('#a-x').onclick = close; modal.onclick = e => e.target === modal && close();
  addEventListener('keydown', e => e.key === 'Escape' && !modal.hidden && close());
  modal.addEventListener('click', e => { const g = e.target.closest('[data-go]'); if (g) show(g.dataset.go); });

  /* nav বাটন */
  const nav = document.createElement('button');
  nav.type = 'button'; nav.className = 'btn anav'; nav.id = 'a-nav';
  const bar = $('.nav .bar'); bar.insertBefore(nav, $('#burger'));
  const paintNav = () => { nav.innerHTML = user ? `<i class="fa-solid fa-circle-user"></i><span>${user.name.split(' ')[0].replace(/[<>&"]/g, '')}</span>` : '<i class="fa-solid fa-right-to-bracket"></i><span>সাইন ইন</span>'; };
  nav.onclick = () => open();

  /* API */
  async function api(path, body, token) {
    let r, d = {};
    try { r = await fetch(API + path, { method: body ? 'POST' : 'GET', headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) }, body: body ? JSON.stringify(body) : undefined }); }
    catch { throw Object.assign(new Error('সার্ভারের সাথে সংযোগ করা যাচ্ছে না। ইন্টারনেট দেখে আবার চেষ্টা করুন।'), { data: {} }); }
    try { d = await r.json(); } catch {}
    if (!r.ok) throw Object.assign(new Error(d.message || 'কিছু ভুল হয়েছে। আবার চেষ্টা করুন।'), { code: d.code, data: d });
    return d;
  }
  const busy = (form, on, label) => { const b = $('button[type=submit]', form); b.disabled = on; if (label) b.dataset.l = b.dataset.l || b.textContent; b.innerHTML = on ? '<i class="fa-solid fa-spinner fa-spin"></i> অপেক্ষা করুন...' : (b.dataset.l || b.textContent); };
  const bad = (input, t) => { const f = input.parentNode; f.classList.add('err'); $('small', f).textContent = t; input.focus(); return false; };
  const clear = form => form.querySelectorAll('.fld').forEach(f => { f.classList.remove('err'); $('small', f).textContent = ''; });
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function startCd(sec) {
    clearInterval(timer); const b = $('#a-re'); let s = sec;
    const tick = () => { if (s <= 0) { clearInterval(timer); b.disabled = false; b.textContent = 'আবার পাঠান'; return; } b.disabled = true; b.textContent = `আবার পাঠান (${toBn(s)} সেকেন্ড)`; s--; };
    tick(); timer = setInterval(tick, 1000);
  }
  const login = d => { store.set('ay_token', d.token); user = d.user; paintNav(); };
  const toOtp = (email, wait) => { pending = email; show('otp'); startCd(wait || 60); };

  const forms = Object.fromEntries([...document.querySelectorAll('#am form')].map(f => [f.dataset.v, f]));
  forms.up.onsubmit = async e => {
    e.preventDefault(); const f = forms.up; clear(f); const n = $('#a-un'), em = $('#a-ue'), p = $('#a-up');
    if (n.value.trim().length < 2) return bad(n, 'অনুগ্রহ করে আপনার নাম লিখুন।');
    if (!EMAIL.test(em.value.trim())) return bad(em, 'সঠিক ইমেইল ঠিকানা দিন।');
    if (p.value.length < 8) return bad(p, 'পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।');
    busy(f, true, 1);
    try { const d = await api('/signup', { name: n.value.trim(), email: em.value.trim(), password: p.value }); toOtp(em.value.trim().toLowerCase(), d.wait); }
    catch (err) { say(err.message); } busy(f, false);
  };
  forms.otp.onsubmit = async e => {
    e.preventDefault(); const f = forms.otp; clear(f); const i = $('#a-otpin'); const code = bnD(i.value).replace(/\D/g, '');
    if (code.length !== 6) return bad(i, 'ছয় সংখ্যার OTP লিখুন।');
    busy(f, true, 1);
    try { const d = await api('/verify', { email: pending, otp: code }); login(d); i.value = ''; show('acc'); say('ইমেইল ভেরিফাই সম্পন্ন! আপনি সাইন ইন হয়েছেন।', true); setTimeout(close, 1800); }
    catch (err) { say(err.message); } busy(f, false);
  };
  $('#a-re').onclick = async () => {
    say(''); $('#a-re').disabled = true;
    try { const d = await api('/resend', { email: pending }); say('নতুন OTP পাঠানো হয়েছে।', true); startCd(d.wait || 60); }
    catch (err) { say(err.message); err.data && err.data.wait ? startCd(err.data.wait) : ($('#a-re').disabled = false); }
  };
  forms.in.onsubmit = async e => {
    e.preventDefault(); const f = forms.in; clear(f); const em = $('#a-ie'), p = $('#a-ip');
    if (!EMAIL.test(em.value.trim())) return bad(em, 'সঠিক ইমেইল ঠিকানা দিন।');
    if (!p.value) return bad(p, 'পাসওয়ার্ড লিখুন।');
    busy(f, true, 1);
    try { const d = await api('/signin', { email: em.value.trim(), password: p.value }); login(d); p.value = ''; close(); }
    catch (err) {
      if (err.code === 'NOT_VERIFIED') { const mail = em.value.trim().toLowerCase(); let w = 60; try { const d = await api('/resend', { email: mail }); w = d.wait; } catch (x) { w = (x.data && x.data.wait) || 0; } toOtp(mail, w); say('আপনার ইমেইল এখনো ভেরিফাই হয়নি। কোডটি দিন।', true); }
      else say(err.message);
    } busy(f, false);
  };
  $('#a-out').onclick = () => { store.del('ay_token'); user = null; paintNav(); close(); };

  /* আগের সেশন ফিরিয়ে আনা */
  paintNav();
  const t = store.get('ay_token');
  if (t) api('/me', null, t).then(d => { user = d.user; paintNav(); }).catch(err => { if (err.data && err.data.message) store.del('ay_token'); });
})();
