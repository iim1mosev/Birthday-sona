/* ============ DATA — عدّل هنا ============ */
const DATA = {
  name: "SONA",
  birthday: "NOVEMBER 10",
  pin: "1011",
  memories: [
    { image: "1.JPG", date: "اول خروجه لينا سوا", caption: "كنت فرحان اوي اليوم . مكنتش عايز اروح وله عايز اليوم يخلص , كنت عايز افضل معاكي طول اليوم ❤" },
    { image: "2.JPG", date: "كانت اول مره نخرج انا وانتي لوحدينا 😍", caption: "انا فاكر ان اليوم ده كان حلو اوي من اولو لحد اخرو . كان اول مره اروح مول مصر مع بنت او مع حد عموما , كنت حاسس نفسي مالك الدنيا و الي فيها " },
    { image: "3.JPG", date: "احلي يوم ي حياتي ", caption: "علي قد الزعل الي زعلتو في اول اليوم , ميجيش حاجه جمب الفرحه الي فرحتها اليوم ده . مكنش فارق معايا اي حاجه كنا ماشين زي المجانين ومروحين بليل بس كنا مبسوطين اوي ساعتها🥰 ." },
    { image: "4.JPG", date: "تغفيله حلوه بس وراها حاجات كتير 😂", caption: "كنت نازل اوديكي المعهد واروح 😂 . وله انا دخلت المعهد وله انتي دخلتي المعهد فضلنا نتصور قد كده ونتمشي كتير اوي ولفينا كتير اويي ومكناش زهقتنين خالص" },
    { image: "5.JPG", date: "قعدنا كتير اوي اليوم ده 💗", caption: "كنتي مروحه عند اخوكي وفضلنا نتمشي كتير اويي وفضلنا قاعدين ع الطريق وقعدنا نتكلم كتير اوي . واحنا قاعدين في موتسيكل عمل حادثه قدمنا 😂 . فاكره ؟" },
    { image: "6.JPG", date: "في رمضان 🤍", caption: "كان اول مره افطر بره مع حد عموما كنت فرحان اوي اليوم وانا شايف حنيتك عليا وانتي مش بتكلي وهمك كلو انك تأكليني كنت مروح طاير من الفرحه 💞" },
    { image: "7.JPG", date: "كنتي زعلانه مني يهانم 🤨💓", caption: "اكنتي مديقه مني اليوم ده اوي عشان ضيعت الادي بتاعك . مقدرتش اروح وانا شايفك مدايقه . قلبت الدنيا عشان عرفت اجيب الايدي وفي الاخر صالحتك بردو 😛❤" },
    { image: "8.JPG", date: "بعد م اتخبطتي يأستاذه 😂❤", caption: "كنت فرحان اوي اننا رجعنا نتكلم وكنت مبسوط اوي واحنا قاعدين مع بعض مكنتش عايز حاجه تبوظ  💔☺" },
    { image: "vedio.MP4", date: "عيد ميلادي 🥺❤", caption: "كل الي فات حاجه وده حاجه تانيه خالص . مش قادر انسي اليوم ده كنت فرحان ازاي مكنتش متخيل اي حاجه من الي حصلت ومكنتش متخيل اي حاجه , احلي عيد ميلاد في حياتي كلها 💓" }
  ],
  reasons: [
    { title: "عيونك", description: "لحد دلوقتي متعرفيش لما بركز ف عيونك اي الي بيحصلي بس مببقاش شايف حاجه غيرك في الدنيا كلها ❤ ." },
    { title: "خوفك عليا", description: "لما اكون في الشغل والقيكي بتقوليلي  خلي بالك ع نفسك . وكل كويس .ومتعملش كدا 💕 ." },
    { title: "ثقتك في نفسك", description: "مهما سمعتي من اي حد واثقه في نفسك وعمر م حد قدر يهز ثقتك في نفسك" }
  ],
  letter: `حبيت اكون اول حد يقولك كل سنه وانتي طيبه يحسونتي . اتمني ان السنه دي تعدي وتكوني مبسوطه فيها ومفيش حاجه مزعلاكي حبيت اقولك اني بحبك ايوه يحسناء لسه بحبك بعد الي حصل كلو لسه في قلبي مشاعر ليكي ومهما العمر يعدي هتفضلي دايما في قلبي يحسناء وهتفضلي دايما ع بالي . يمكن مش هتعرفي تصدقيني بعد الي حصل ده بس بجد يحسناء انا لسه بحبك وهفضل اقول كده طول عمري يحسناء . انا بحبك يحسناء يبنت هاشم

كل سنه وانتي طيبه يحته من قلبي 🎊💓`,
  song: { title: "ولا عاش ولا كان - توليت", src: "song.mp3" },
  voice: { src: "song2.mp3", duck: 0.12 }   // duck = صوت الاغنيه الاساسيه وقت الريكورد (0 الى 1)
};

/* ============ helpers ============ */
const $ = (s, r = document) => r.querySelector(s);
const rand = (a, b) => Math.random() * (b - a) + a;
const show = el => el.classList.remove("hidden");
const hide = el => el.classList.add("hidden");

document.querySelectorAll(".nameSlot").forEach(e => e.textContent = DATA.name);
$("#finalDate").textContent = DATA.birthday;
$("#entrySub").textContent = "For " + DATA.name;
$("#songTitle").textContent = DATA.song.title;

/* ============ custom heart cursor ============ */
(() => {
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;
  const c = $("#cursor");
  let last = 0;
  addEventListener("mousemove", e => {
    c.style.transform = `translate(${e.clientX - 12}px,${e.clientY - 12}px)`;
    const now = performance.now();
    if (now - last < 60) return;
    last = now;
    const t = document.createElement("div");
    t.className = "trail";
    t.textContent = "❤";
    t.style.left = e.clientX - 8 + "px";
    t.style.top = e.clientY - 8 + "px";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 600);
  });
})();

/* ============ music ============ */
const audio = new Audio(DATA.song.src);
audio.loop = true;
const playBtn = $("#playBtn");
const fmt = s => isNaN(s) ? "00:00" : String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(Math.floor(s % 60)).padStart(2, "0");
audio.addEventListener("timeupdate", () => {
  $("#songTime").textContent = fmt(audio.currentTime);
  $("#barFill").style.width = (audio.currentTime / (audio.duration || 1)) * 100 + "%";
});
const setPlayIcon = () => playBtn.textContent = audio.paused ? "▶" : "❚❚";
audio.addEventListener("play", setPlayIcon);
audio.addEventListener("pause", setPlayIcon);
$("#player").addEventListener("click", () => {
  audio.paused ? audio.play().catch(console.error) : audio.pause();
});

/* ============ 1) PIN entry ============ */
let pin = "", busy = false;
const dots = [...document.querySelectorAll(".dot")];
const renderPin = () => dots.forEach((d, i) => {
  d.textContent = pin[i] || "";
  d.classList.toggle("empty", !pin[i]);
});
renderPin();

const keypad = $("#keypad");
[1,2,3,4,5,6,7,8,9,"",0,"DEL"].forEach(k => {
  if (k === "") return keypad.appendChild(document.createElement("div"));
  const b = document.createElement("button");
  b.textContent = k;
  if (k === "DEL") b.className = "del";
  b.onclick = () => k === "DEL" ? del() : press(String(k));
  keypad.appendChild(b);
});
addEventListener("keydown", e => {
  if ($("#entry").classList.contains("hidden") || busy) return;
  if (/^\d$/.test(e.key)) press(e.key);
  if (e.key === "Backspace") del();
});

function del() { if (busy) return; pin = pin.slice(0, -1); renderPin(); }
function press(d) {
  if (busy || pin.length >= 4) return;
  pin += d; renderPin();
  if (pin.length < 4) return;
  if (pin === DATA.pin) {
    busy = true;
    $("#entryTitle").textContent = "اشطر سونا في الدنيا كلهااا";
    $("#entrySub").textContent = "Unlocked";
    show($("#unlockedCover"));
    audio.play().catch(console.error);
    show($("#player"));
    setTimeout(startIntro, 2000);
  } else {
    const box = $("#pinDots");
    box.classList.add("shake");
    setTimeout(() => { box.classList.remove("shake"); pin = ""; renderPin(); }, 500);
  }
}

/* ============ 2) intro ============ */
function startIntro() {
  const entry = $("#entry");
  entry.classList.add("fade");
  setTimeout(() => hide(entry), 1500);
  const intro = $("#intro");
  show(intro);
  $("#introLine1").classList.add("go");
  $("#introLine2").classList.add("go");
  setTimeout(() => {
    intro.style.opacity = 0;
    startMain();
    setTimeout(() => hide(intro), 2000);
  }, 7000);
}

/* ============ 3) main page ============ */
let mainStarted = false;
function startMain() {
  if (mainStarted) return;
  mainStarted = true;
  show($("#main"));
  document.body.classList.remove("locked");
  initHero(); buildStory(); buildReasons(); initLetter(); initVoice();
}

/* floating hearts + particle heart */
function initHero() {
  const fh = $("#floatHearts");
  for (let i = 0; i < 40; i++) {
    const h = document.createElement("i");
    h.textContent = "❤";
    h.style.cssText = `left:${rand(0,100)}%;font-size:${rand(10,30)}px;animation-duration:${rand(10,20)}s;animation-delay:${rand(-20,0)}s`;
    fh.appendChild(h);
  }

  const cv = $("#heartCanvas"), ctx = cv.getContext("2d", { willReadFrequently: true });
  let W, H, parts = [], lastW = 0;
  const mouse = { x: -1000, y: -1000, r: 100 };
  const colors = ["#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777"];

  class P {
    constructor(x, y, c) {
      this.x = rand(0, W); this.y = rand(0, H);
      this.bx = x; this.by = y; this.c = c;
      this.size = rand(0, 3) + (W < 768 ? 2.5 : 2);
      this.density = rand(1, 31);
    }
    draw() { ctx.fillStyle = this.c; ctx.fillRect(this.x, this.y, this.size, this.size); }
    update() {
      const dx = mouse.x - this.x, dy = mouse.y - this.y, d = Math.hypot(dx, dy);
      if (d < mouse.r) {
        const f = (mouse.r - d) / mouse.r;
        this.x -= (dx / d) * f * this.density;
        this.y -= (dy / d) * f * this.density;
      } else {
        this.x -= (this.x - this.bx) / 10;
        this.y -= (this.y - this.by) / 10;
      }
    }
  }

  function build() {
    W = cv.width = innerWidth; H = cv.height = innerHeight; lastW = innerWidth;
    parts = []; ctx.clearRect(0, 0, W, H);
    const mob = W < 768, s = Math.min(W, H) * (mob ? .35 : .3), cx = W / 2, cy = H * .5 - s * .2;
    ctx.fillStyle = "#fff"; ctx.beginPath();
    ctx.moveTo(cx, cy + s * .3);
    ctx.bezierCurveTo(cx, cy - s * .2, cx - s, cy - s * .2, cx - s, cy + s * .3);
    ctx.bezierCurveTo(cx - s, cy + s, cx, cy + s * 1.5, cx, cy + s * 2);
    ctx.bezierCurveTo(cx, cy + s * 1.5, cx + s, cy + s, cx + s, cy + s * .3);
    ctx.bezierCurveTo(cx + s, cy - s * .2, cx, cy - s * .2, cx, cy + s * .3);
    ctx.fill();
    const data = ctx.getImageData(0, 0, W, H).data;
    ctx.clearRect(0, 0, W, H);
    const step = Math.floor(W / (mob ? 35 : 55));
    for (let y = 0; y < H; y += step)
      for (let x = 0; x < W; x += step)
        if (data[(y * W + x) * 4 + 3] > 128) parts.push(new P(x, y, colors[Math.floor(Math.random() * colors.length)]));
  }
  const loop = () => { ctx.clearRect(0, 0, W, H); parts.forEach(p => { p.draw(); p.update(); }); requestAnimationFrame(loop); };
  const move = e => { const t = e.touches ? e.touches[0] : e; mouse.x = t.clientX; mouse.y = t.clientY; };
  const leave = () => { mouse.x = mouse.y = -1000; };
  addEventListener("resize", () => { if (innerWidth !== lastW) build(); });
  addEventListener("mousemove", move);
  addEventListener("touchmove", move, { passive: true });
  addEventListener("mouseleave", leave);
  addEventListener("touchend", leave);
  build(); loop();
}

/* reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .15 });

/* story */
function buildStory() {
  const box = $("#memories");
  DATA.memories.forEach((m, i) => {
    const isVideo = /\.mp4$/i.test(m.image);
    const el = document.createElement("div");
    el.className = "memory" + (i % 2 === 0 ? " even" : "");
    el.innerHTML = `
      <div class="media">${isVideo
        ? `<video src="${m.image}" autoplay loop muted playsinline></video>`
        : `<img src="${m.image}" alt="${m.date}" loading="lazy">`}</div>
      <div class="m-text"><span class="m-date">${m.date}</span><h3 class="m-cap">${m.caption}</h3><div class="m-line"></div></div>`;
    box.appendChild(el); io.observe(el);
  });
}

/* scratch cards */
function buildReasons() {
  const grid = $("#reasonGrid");
  DATA.reasons.forEach((r, i) => {
    const el = document.createElement("div");
    el.className = "reason";
    el.style.transitionDelay = i * .1 + "s";
    el.innerHTML = `<div class="back"><span class="num">${String(i + 1).padStart(2, "0")}</span><h3>${r.title}</h3><p>${r.description}</p></div><canvas></canvas>`;
    grid.appendChild(el); io.observe(el);
    scratch(el.querySelector("canvas"));
  });
}
function scratch(cv) {
  const ctx = cv.getContext("2d"), dpr = devicePixelRatio || 1;
  const rect = cv.getBoundingClientRect();
  cv.width = rect.width * dpr; cv.height = rect.height * dpr; ctx.scale(dpr, dpr);
  ctx.fillStyle = "#fbcfe8"; ctx.fillRect(0, 0, rect.width, rect.height);
  ctx.fillStyle = "#f9a8d4";
  for (let i = 0; i < 500; i++) { ctx.beginPath(); ctx.arc(rand(0, rect.width), rand(0, rect.height), rand(0, 2), 0, 7); ctx.fill(); }
  ctx.fillStyle = "#be185d"; ctx.font = "16px Almarai"; ctx.textAlign = "center";
  ctx.fillText("Scratch Me", rect.width / 2, rect.height / 2);
  ctx.globalCompositeOperation = "destination-out";
  let down = false, n = 0, done = false;
  const pos = e => { const b = cv.getBoundingClientRect(), t = e.touches ? e.touches[0] : e; return [t.clientX - b.left, t.clientY - b.top]; };
  const scr = e => {
    if (!down || done) return; e.preventDefault();
    const [x, y] = pos(e); ctx.beginPath(); ctx.arc(x, y, 25, 0, 7); ctx.fill();
    if (++n > 150) { done = true; cv.classList.add("done"); }
  };
  const start = e => { down = true; scr(e); }, stop = () => down = false;
  cv.addEventListener("mousedown", start); cv.addEventListener("mousemove", scr);
  cv.addEventListener("mouseup", stop); cv.addEventListener("mouseleave", stop);
  cv.addEventListener("touchstart", start, { passive: false });
  cv.addEventListener("touchmove", scr, { passive: false });
  cv.addEventListener("touchend", stop);
}

/* letter */
function initLetter() {
  const env = $("#envelope");
  const open = () => {
    hide(env); hide($("#envHint")); show($("#letterCard"));
    typeLetter();
  };
  env.onclick = open;
  env.onkeydown = e => { if (e.key === "Enter" || e.key === " ") open(); };
}
function typeLetter() {
  const el = $("#letterText"), text = DATA.letter;
  const bar = '<span class="cursor-bar"></span>';
  let i = 0, done = false, timer;
  const finish = () => { done = true; clearTimeout(timer); el.textContent = text; $("#letterSign").classList.add("show"); };
  const tick = () => {
    if (i < text.length) { i++; el.innerHTML = text.slice(0, i).replace(/</g, "&lt;") + bar; timer = setTimeout(tick, 40); }
    else finish();
  };
  el.onclick = () => { if (!done) finish(); };
  timer = setTimeout(tick, 500);
}

/* cake -> final */
$("#surpriseBtn").onclick = () => {
  $("#cakeBox").classList.add("out");
  show($("#glow"));
  setTimeout(startFinal, 3000);
};
function startFinal() {
  document.body.classList.add("locked");
  show($("#final"));
  const box = $("#finalHearts");
  for (let i = 0; i < 40; i++) {
    const h = document.createElement("i");
    h.textContent = "❤";
    h.style.cssText = `left:${rand(0,100)}%;font-size:${rand(10,40)}px;animation-duration:${rand(4,12)}s;animation-delay:${rand(3,7)}s;color:${i % 3 ? "#fbcfe8" : "#f472b6"}`;
    box.appendChild(h);
  }
}

/* ============ voice message + black stage + fireworks ============ */
function initVoice() {
  if (initVoice.done) return; initVoice.done = true;

  const vo = new Audio(DATA.voice.src);
  vo.preload = "auto";
  const stage = $("#stage"), btn = $("#voiceBtn"), wave = $("#voiceWave");
  const cv = $("#fxCanvas"), ctx = cv.getContext("2d");
  let playing = false, wasPlaying = false, raf = 0, fadeT = 0, W = 0, H = 0;

  /* waveform bars (WhatsApp style) */
  const BARS = 38;
  for (let i = 0; i < BARS; i++) {
    const b = document.createElement("i");
    b.style.height = (20 + Math.abs(Math.sin(i * .7) * 55) + rand(0, 25)) + "%";
    wave.appendChild(b);
  }
  const bars = [...wave.children];

  /* stars */
  const stars = $("#stars");
  for (let i = 0; i < 70; i++) {
    const s = document.createElement("i"), sz = rand(1, 3);
    s.style.cssText = `left:${rand(0,100)}%;top:${rand(0,100)}%;width:${sz}px;height:${sz}px;animation-delay:${rand(-3,0)}s;animation-duration:${rand(2,5)}s`;
    stars.appendChild(s);
  }

  /* progress / time */
  vo.addEventListener("loadedmetadata", () => $("#voiceTime").textContent = fmt(vo.duration));
  vo.addEventListener("timeupdate", () => {
    const p = vo.currentTime / (vo.duration || 1);
    $("#voiceTime").textContent = fmt(vo.currentTime);
    $("#stTime").textContent = fmt(vo.currentTime) + " / " + fmt(vo.duration);
    $("#stFill").style.width = p * 100 + "%";
    const n = Math.round(p * BARS);
    bars.forEach((b, i) => b.classList.toggle("played", i < n));
  });
  vo.addEventListener("error", () => { $("#voiceLabel").textContent = "ملف " + DATA.voice.src + " مش موجود"; stop(true); });
  vo.addEventListener("ended", () => stop());

  /* fade volume of main song (never fully silent) */
  function fadeVol(to, ms) {
    clearInterval(fadeT);
    const from = audio.volume, t0 = performance.now();
    fadeT = setInterval(() => {
      const k = Math.min(1, (performance.now() - t0) / ms);
      audio.volume = from + (to - from) * k;
      if (k === 1) clearInterval(fadeT);
    }, 40);
  }

  /* analyser: fireworks react to her voice (works on http/https only) */
  let ac, an, fd;
  function setupAnalyser() {
    if (ac || !/^https?:/.test(location.protocol)) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      ac = new AC();
      const src = ac.createMediaElementSource(vo);
      an = ac.createAnalyser(); an.fftSize = 256;
      src.connect(an); an.connect(ac.destination);
      fd = new Uint8Array(an.frequencyBinCount);
    } catch (e) { an = null; }
  }
  function level() {
    if (!an) return 0;
    an.getByteFrequencyData(fd);
    let s = 0; for (let i = 0; i < 40; i++) s += fd[i];
    return s / 40 / 255;
  }

  /* fireworks */
  const rockets = [], sparks = [];
  const pal = ["#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#fde047", "#ffffff", "#fb923c"];
  function resize() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
  addEventListener("resize", () => playing && resize());

  function launch(big) {
    rockets.push({ x: rand(W * .15, W * .85), y: H + 10, vy: -rand(H * .016, H * .022), ty: rand(H * .12, H * .5), c: pal[Math.floor(rand(0, pal.length))], big });
  }
  function burst(x, y, c, big) {
    const heart = Math.random() < .35, n = heart ? 70 : (big ? 110 : 70), sc = rand(.35, .55) * Math.min(W, H) / 40;
    for (let i = 0; i < n; i++) {
      let vx, vy;
      if (heart) {
        const t = (i / n) * Math.PI * 2;
        vx = 16 * Math.pow(Math.sin(t), 3) * sc * .06;
        vy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * sc * .06;
      } else {
        const a = rand(0, Math.PI * 2), sp = rand(1, big ? 7 : 5.5);
        vx = Math.cos(a) * sp; vy = Math.sin(a) * sp;
      }
      sparks.push({ x, y, vx, vy, life: 1, d: rand(.008, .018), c: heart ? "#f472b6" : (Math.random() < .3 ? "#fff" : c), s: rand(1.5, 3) });
    }
  }

  let lastLaunch = 0, nextAuto = 0;
  function frame(now) {
    raf = requestAnimationFrame(frame);
    const lv = level();
    stage.style.setProperty("--lv", an ? Math.min(1, lv * 1.6).toFixed(3) : 0);

    /* launch: on voice peaks if analyser works, otherwise on a timer */
    if (an) {
      if (lv > .22 && now - lastLaunch > 380) { lastLaunch = now; launch(lv > .38); if (lv > .4) launch(true); }
    }
    if (now > nextAuto) { nextAuto = now + rand(900, 1800); if (!an || lv < .15) launch(false); }

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,.2)"; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.y += r.vy; r.vy *= .985;
      ctx.fillStyle = r.c; ctx.beginPath(); ctx.arc(r.x, r.y, 2.2, 0, 7); ctx.fill();
      if (r.y <= r.ty || r.vy > -1.2) { burst(r.x, r.y, r.c, r.big); rockets.splice(i, 1); }
    }
    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      p.x += p.vx; p.y += p.vy; p.vx *= .985; p.vy = p.vy * .985 + .04; p.life -= p.d;
      if (p.life <= 0) { sparks.splice(i, 1); continue; }
      ctx.globalAlpha = p.life; ctx.fillStyle = p.c;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.s * p.life + .3, 0, 7); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  /* start / stop */
  function start() {
    if (playing) return;
    playing = true;
    setupAnalyser();
    if (ac && ac.state === "suspended") ac.resume();
    wasPlaying = !audio.paused;
    if (wasPlaying) fadeVol(DATA.voice.duck, 1500);     // اغنيه واطيه بس باينه
    show(stage); resize();
    ctx.clearRect(0, 0, W, H);
    void stage.offsetWidth; stage.classList.add("on");  // الشاشه تسود تدريجي
    document.body.classList.add("locked");
    vo.currentTime = 0;
    vo.play().catch(e => { console.error(e); stop(true); });
    btn.textContent = "❚❚";
    cancelAnimationFrame(raf); nextAuto = performance.now() + 2500;
    raf = requestAnimationFrame(frame);
  }
  function stop(quick) {
    if (!playing) return;
    playing = false;
    vo.pause();
    stage.classList.remove("on");                       // كل حاجه ترجع زي م كانت
    if (wasPlaying) fadeVol(1, 2000); else audio.volume = 1;
    btn.textContent = "▶";
    setTimeout(() => {
      cancelAnimationFrame(raf); rockets.length = sparks.length = 0;
      hide(stage);
      if ($("#final").classList.contains("hidden")) document.body.classList.remove("locked");
    }, quick ? 100 : 2600);
  }

  btn.onclick = () => playing ? stop() : start();
  $("#stageClose").onclick = () => stop();
}
