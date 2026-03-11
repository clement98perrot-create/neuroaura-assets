document.addEventListener('DOMContentLoaded',function(){
document.body.innerHTML=`<div id="cur"></div>
<div id="curR"></div>
<nav id="nav">
<a href="/neuroaura-landing" class="logo">Neuro<em>Aura</em></a>
<div class="nav-links">
<a href="#experience">Expérience</a>
<a href="/neuroaura-persona">Personas</a>
<a href="/neuroaura-team">Team Building</a>
<a href="#duo">Duo EEG</a>
<a href="/neuroaura-rapport">Rapport</a>
<a href="#booking" class="nav-cta">Réserver</a>
</div>
</nav>
<section class="hero">
<canvas id="heroCanvas"></canvas>
<div class="hero-vignette"></div>
<div class="hero-left-fade"></div>
<div class="hero-content">
<div class="hero-eyebrow">Expérience EEG événementielle</div>
<h1 class="hero-title">
Ton cerveau,<br>
<i>ton œuvre d'art</i>
<b>/ Visualisation en temps réel</b>
</h1>
<p class="hero-desc">NeuroAura transforme l'activité de votre cerveau en une œuvre d'art générative unique — en direct, sous vos yeux. Chaque onde, chaque pensée, devient une ligne de lumière.</p>
<div class="hero-actions">
<a href="#experience" class="btn-primary">Découvrir l'expérience</a>
<a href="/neuroaura-rapport" class="btn-ghost">Voir un exemple</a>
</div>
</div>
<div class="live-badge">
<div class="live-dot"></div>
<span>Rendu temps réel · OpenBCI · 256 Hz</span>
</div>
<div class="scroll-hint">
<div class="sh-line"></div>
<span>Explorer</span>
</div>
</section>
<div class="stats-strip">
<div class="stats-grid">
<div class="stat-item reveal"><span class="stat-val">9</span><span class="stat-lbl">Personas cérébraux</span></div>
<div class="stat-item reveal d1"><span class="stat-val">2'</span><span class="stat-lbl">Par session individuelle</span></div>
<div class="stat-item reveal d2"><span class="stat-val">256</span><span class="stat-lbl">Hz d'échantillonnage</span></div>
<div class="stat-item reveal d3"><span class="stat-val">∞</span><span class="stat-lbl">Œuvres uniques générées</span></div>
</div>
</div>
<section class="experience" id="experience">
<div class="exp-grid">
<div class="exp-text reveal">
<div class="section-eyebrow">Comment ça marche</div>
<h2 class="section-title">De l'onde<br>à <i>l'œuvre</i></h2>
<div class="exp-steps">
<div class="exp-step">
<div class="step-num">01</div>
<div class="step-body">
<h4>Casque EEG sans fil</h4>
<p>Le participant enfile un casque OpenBCI léger et discret. En quelques secondes, 8 électrodes captent l'activité électrique du cerveau en temps réel.</p>
</div>
</div>
<div class="exp-step">
<div class="step-num">02</div>
<div class="step-body">
<h4>Génération visuelle live</h4>
<p>Un algorithme traduit chaque fréquence cérébrale (delta, thêta, alpha, bêta, gamma) en couleurs, vitesses et formes — une œuvre unique projetée en grand format.</p>
</div>
</div>
<div class="exp-step">
<div class="step-num">03</div>
<div class="step-body">
<h4>Persona & rapport personnalisé</h4>
<p>À l'issue de la session, le participant reçoit son profil neuronal parmi 9 personas, avec ses forces dominantes, son type d'ondes et un portrait imprimable.</p>
</div>
</div>
<div class="exp-step">
<div class="step-num">04</div>
<div class="step-body">
<h4>Tirage d'art à emporter</h4>
<p>L'œuvre générée est exportée en haute résolution et peut être imprimée sur place ou envoyée comme souvenir unique de l'expérience.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="personas" id="personas">
<div class="personas-head">
<div class="reveal">
<div class="section-eyebrow">Profils neurologiques</div>
<h2 class="section-title">9 personas<br><i>cérébraux</i></h2>
</div>
<div class="personas-head-r reveal d2">Chaque profil est calculé à partir du ratio d'ondes cérébrales dominant. Chacun révèle un mode de fonctionnement cognitif et émotionnel unique.</div>
</div>
<div class="personas-grid">
<div class="persona-card pc-1 reveal">
<svg class="persona-wave" viewBox="0 0 60 40"><polyline points="0,20 10,8 20,32 30,10 40,28 50,12 60,20" fill="none" stroke="#00e5ff" stroke-width="1.5" opacity=".8"/></svg>
<div class="persona-name">L'Explorateur</div>
<span class="persona-wave-type">α Alpha dominant</span>
<p class="persona-desc">Créatif, intuitif, ancré dans le présent. L'esprit vagabonde librement.</p>
</div>
<div class="persona-card pc-2 reveal d1">
<svg class="persona-wave" viewBox="0 0 60 40"><polyline points="0,20 5,10 10,30 15,8 20,32 25,12 30,28 35,10 40,30 45,12 50,28 55,14 60,20" fill="none" stroke="#00ff88" stroke-width="1.5" opacity=".8"/></svg>
<div class="persona-name">L'Analytique</div>
<span class="persona-wave-type">β Bêta dominant</span>
<p class="persona-desc">Focalisé, logique, orienté solution. Cerveau en mode performance.</p>
</div>
<div class="persona-card pc-3 reveal d2">
<svg class="persona-wave" viewBox="0 0 60 40"><polyline points="0,20 15,5 30,35 45,5 60,20" fill="none" stroke="#aa44ff" stroke-width="1.5" opacity=".8"/></svg>
<div class="persona-name">Le Visionnaire</div>
<span class="persona-wave-type">θ Thêta dominant</span>
<p class="persona-desc">Imaginatif, intuitif, proche du rêve éveillé. Source de grandes idées.</p>
</div>
<div class="persona-card pc-4 reveal d3">
<svg class="persona-wave" viewBox="0 0 60 40"><polyline points="0,22 30,18 60,22" fill="none" stroke="#ff9500" stroke-width="1.5" opacity=".8"/><polyline points="0,20 30,15 60,20" fill="none" stroke="#ff9500" stroke-width=".8" opacity=".4"/></svg>
<div class="persona-name">Le Méditatif</div>
<span class="persona-wave-type">δ Delta dominant</span>
<p class="persona-desc">Profondément calme, régénérateur, ancré. Maître du lâcher-prise.</p>
</div>
<div class="persona-card pc-5 reveal d4">
<svg class="persona-wave" viewBox="0 0 60 40"><polyline points="0,20 3,6 6,34 9,6 12,34 15,8 18,32 21,10 24,30 27,12 30,28 33,10 36,30 39,12 42,28 45,10 48,30 51,14 54,26 57,16 60,20" fill="none" stroke="#ff3366" stroke-width="1" opacity=".8"/></svg>
<div class="persona-name">L'Hyperactif</div>
<span class="persona-wave-type">γ Gamma dominant</span>
<p class="persona-desc">Ultra-connecté, traitement rapide. Cerveau en surrégime cognitif.</p>
</div>
<div class="persona-card pc-6 reveal d5">
<svg class="persona-wave" viewBox="0 0 60 40"><path d="M0,20 C10,10 20,30 30,20 C40,10 50,30 60,20" fill="none" stroke="#ffee00" stroke-width="1.5" opacity=".8"/></svg>
<div class="persona-name">L'Équilibré</div>
<span class="persona-wave-type">α/β Mixte</span>
<p class="persona-desc">Flexible, adaptable. Passe naturellement du mode focus au mode créatif.</p>
</div>
<div class="persona-card pc-7 reveal d6">
<svg class="persona-wave" viewBox="0 0 60 40"><path d="M0,20 C5,25 10,15 20,22 C30,28 40,12 50,18 C55,21 58,19 60,20" fill="none" stroke="#00ffcc" stroke-width="1.5" opacity=".8"/></svg>
<div class="persona-name">L'Empathique</div>
<span class="persona-wave-type">θ/α Frontal</span>
<p class="persona-desc">Très sensible aux émotions. Traitement social et émotionnel amplifié.</p>
</div>
<div class="persona-card pc-8 reveal d7">
<svg class="persona-wave" viewBox="0 0 60 40"><polyline points="0,20 8,14 16,20 24,14 32,20 40,14 48,20 56,14 60,16" fill="none" stroke="#ff88aa" stroke-width="1.5" opacity=".8"/></svg>
<div class="persona-name">Le Stratège</div>
<span class="persona-wave-type">β haut / Frontal G</span>
<p class="persona-desc">Planificateur, décideur, vision long-terme. Leader analytique naturel.</p>
</div>
<div class="persona-card pc-9 reveal d8">
<svg class="persona-wave" viewBox="0 0 60 40"><path d="M0,20 Q15,5 30,20 Q45,35 60,20" fill="none" stroke="#88aaff" stroke-width="1.5" opacity=".8"/><path d="M0,20 Q15,35 30,20 Q45,5 60,20" fill="none" stroke="#88aaff" stroke-width=".8" opacity=".4"/></svg>
<div class="persona-name">L'Intuitif</div>
<span class="persona-wave-type">θ/α Droit dominant</span>
<p class="persona-desc">Pensée holistique, synthèse rapide. Perçoit les patterns globaux.</p>
</div>
</div>
</section>
<section class="team" id="team">
<div class="team-wrap">
<div class="team-head">
<div class="reveal">
<div class="section-eyebrow">Activation corporate</div>
<h2 class="section-title">Team Building<br><i>neurologique</i></h2>
</div>
<div class="reveal d2">
<p>Cartographiez les profils cognitifs de votre équipe. Révélez les complémentarités, les zones de friction et les super-pouvoirs collectifs — avec la science pour seul arbitre.</p>
<a href="/neuroaura-team" class="btn-primary">Demander un devis</a>
</div>
</div>
<div class="team-features">
<div class="tf tf-1 reveal">
<svg class="tf-icon" viewBox="0 0 48 48" fill="none" stroke="rgba(0,229,255,.7)" stroke-width="1">
<circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="8"/>
<line x1="24" y1="6" x2="24" y2="16"/><line x1="24" y1="32" x2="24" y2="42"/>
<line x1="6" y1="24" x2="16" y2="24"/><line x1="32" y1="24" x2="42" y2="24"/>
</svg>
<h3>Carte des profils d'équipe</h3>
<p>Visualisez la distribution des 9 personas au sein de votre groupe. Identifiez les profils dominants, les absences et les zones de complémentarité naturelle.</p>
</div>
<div class="tf tf-2 reveal d1">
<svg class="tf-icon" viewBox="0 0 48 48" fill="none" stroke="rgba(0,255,136,.7)" stroke-width="1">
<circle cx="16" cy="20" r="8"/><circle cx="32" cy="20" r="8"/>
<path d="M8 38 C8 30 24 26 24 26 C24 26 40 30 40 38"/>
</svg>
<h3>Compatibilité par paires</h3>
<p>Score de compatibilité cognitive entre chaque duo. Révèle les partenaires naturels, les complémentarités créatives et les dynamiques de tension à anticiper.</p>
</div>
<div class="tf tf-3 reveal d2">
<svg class="tf-icon" viewBox="0 0 48 48" fill="none" stroke="rgba(170,68,255,.7)" stroke-width="1">
<polygon points="24,6 42,36 6,36"/>
<line x1="24" y1="6" x2="24" y2="36"/>
<line x1="6" y1="36" x2="42" y2="36"/>
<circle cx="24" cy="22" r="4"/>
</svg>
<h3>Forces & angles morts</h3>
<p>Rapport collectif des forces cognitives dominantes et des dimensions sous-représentées — pour mieux composer les équipes et anticiper les risques de décision.</p>
</div>
</div>
<div class="compat-demo reveal">
<div class="compat-person">
<div class="compat-aura"><canvas id="compat1"></canvas></div>
<div class="compat-name">Marie L.</div>
<div class="compat-type">L'Analytique · β Bêta</div>
</div>
<div class="compat-middle">
<span class="compat-score">87%</span>
<span class="compat-score-lbl">Compatibilité</span>
<div class="compat-bar"><div class="compat-bar-fill"></div></div>
</div>
<div class="compat-person">
<div class="compat-aura"><canvas id="compat2"></canvas></div>
<div class="compat-name">Thomas R.</div>
<div class="compat-type">Le Visionnaire · θ Thêta</div>
</div>
</div>
</div>
</section>
<section class="dual" id="duo">
<div class="dual-wrap">
<div class="dual-text reveal">
<div class="section-eyebrow">Mode fusion</div>
<h2 class="section-title">Deux cerveaux,<br><i>une œuvre</i></h2>
<p>Deux participants portent simultanément un casque EEG. Leurs activités cérébrales fusionnent en temps réel dans une seule œuvre générative partagée — révélant la dynamique unique de leur interaction.</p>
<p>L'œuvre change selon les états de synchronie, de compétition ou de résonance entre les deux cerveaux. Chaque interaction produit une image absolument unique.</p>
<div class="dual-points">
<div class="dp">
<span class="dp-icon">◈</span>
<div><h4>Synchronie cérébrale</h4><p>Quand deux cerveaux entrent en résonance alpha, la représentation visuelle converge vers une harmonie de couleurs et de formes.</p></div>
</div>
<div class="dp">
<span class="dp-icon">◈</span>
<div><h4>Portrait de couple ou de binôme</h4><p>Idéal pour des moments forts : inauguration, séminaire de direction, lancement de partenariat. L'œuvre finale appartient aux deux participants.</p></div>
</div>
</div>
<a href="/neuroaura-team" class="btn-primary" style="margin-top:2rem">Réserver une session duo</a>
</div>
<div class="dual-visual reveal d2">
<div class="dual-canvas-wrap">
<canvas id="dualCanvas"></canvas>
<div class="dual-labels">
<div class="dual-label dl-1"><div class="dual-label-dot"></div>Participant A</div>
<div class="dual-label dl-2"><div class="dual-label-dot"></div>Participant B</div>
</div>
<div class="dual-merge-tag">↔ Fusion en cours · Synchronie α : 74%</div>
</div>
</div>
</div>
</section>
<section class="report" id="rapport">
<div class="report-wrap">
<div class="report-head reveal">
<div class="section-eyebrow">Livrables</div>
<h2 class="section-title">Votre rapport<br><i>neurologique</i></h2>
<p>À l'issue de chaque session, chaque participant reçoit un rapport personnalisé complet — beautifully designed, scientifiquement fondé.</p>
</div>
<div class="report-card-grid">
<div class="rc rc-1 reveal">
<span class="rc-num">01 —</span>
<h3>Portrait cérébral</h3>
<p>Votre œuvre générée en haute résolution, prête à imprimer. Format carré 3000×3000px, palette de couleurs issue de vos ondes dominantes.</p>
<div class="rc-tags"><span class="rc-tag">Print HD</span><span class="rc-tag">PNG / PDF</span><span class="rc-tag">Unique</span></div>
</div>
<div class="rc rc-2 reveal d1">
<span class="rc-num">02 —</span>
<h3>Fiche Persona</h3>
<p>Votre profil parmi les 9 personas, avec description de votre mode cognitif dominant, vos forces naturelles, vos angles morts et recommandations personnalisées.</p>
<div class="rc-tags"><span class="rc-tag">Score α/β/θ/δ</span><span class="rc-tag">Radar</span><span class="rc-tag">Forces</span></div>
</div>
<div class="rc rc-3 reveal d2">
<span class="rc-num">03 —</span>
<h3>Rapport d'équipe</h3>
<p>En mode team building : cartographie des profils, matrice de compatibilité, forces collectives et recommandations pour la composition des équipes projet.</p>
<div class="rc-tags"><span class="rc-tag">Matrice</span><span class="rc-tag">Compatibilité</span><span class="rc-tag">PDF</span></div>
</div>
</div>
</div>
</section>
<section class="booking" id="booking">
<div class="booking-inner reveal">
<div class="section-eyebrow">Prêt à explorer votre cerveau ?</div>
<h2 class="section-title">Vivez<br><i>l'expérience</i></h2>
<p>NeuroAura est disponible pour vos événements d'entreprise, séminaires, soirées privées, festivals et expositions. Chaque installation est clé en main.</p>
<div class="booking-actions">
<a href="/neuroaura-team" class="btn-primary">Réserver une installation</a>
<a href="/neuroaura-rapport" class="btn-ghost">Télécharger le dossier</a>
</div>
<div class="booking-meta">
<div class="bm-item"><span>Format</span><p>Demi-journée · Journée · Multi-jours</p></div>
<div class="bm-item"><span>Participants</span><p>10 à 500 personnes</p></div>
<div class="bm-item"><span>Setup</span><p>Installation complète fournie</p></div>
</div>
</div>
</section>
<footer>
<div class="footer-inner">
<div class="footer-logo">Neuro<em>Aura</em> <span style="font-family:var(--mono);font-size:.55rem;letter-spacing:.1em;color:var(--faint);margin-left:1rem">by CellandArt</span></div>
<div class="footer-links">
<a href="#experience">Expérience</a><a href="/neuroaura-persona">Personas</a><a href="/neuroaura-team">Team Building</a><a href="#">Contact</a><a href="#">CGV</a>
</div>
<div class="footer-copy">© 2025 CellandArt / NeuroAura</div>
</div>
</footer>`;
});
const cur=document.getElementById('cur'),curR=document.getElementById('curR');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;curR.style.left=rx+'px';curR.style.top=ry+'px';requestAnimationFrame(loop);})();
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('stuck',scrollY>60));
(function(){
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let W, H;
function resize(){
W = canvas.width = canvas.offsetWidth;
H = canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener('resize', resize);
const bands = [
{
color: '#00e5ff',
shadowColor: '#00b8d4',
yCenter: 0.18,   
amp: 0.13,        
freq: 0.0028,     
speed: 0.38,      
lines: 18,        
spread: 0.07,     
phase: 0,
alpha: 0.72,
wmod: 1,          
},
{
color: '#00e5ff',
shadowColor: '#00b8d4',
yCenter: 0.26,
amp: 0.10,
freq: 0.0025,
speed: 0.32,
lines: 10,
spread: 0.04,
phase: 1.4,
alpha: 0.28,
wmod: 0.7,
},
{
color: '#00ff88',
shadowColor: '#00cc66',
yCenter: 0.44,
amp: 0.085,
freq: 0.0058,
speed: 0.65,
lines: 16,
spread: 0.055,
phase: 2.1,
alpha: 0.7,
wmod: 1.2,
},
{
color: '#00dd66',
shadowColor: '#00aa44',
yCenter: 0.52,
amp: 0.065,
freq: 0.0052,
speed: 0.55,
lines: 8,
spread: 0.03,
phase: 0.8,
alpha: 0.25,
wmod: 0.9,
},
{
color: '#ff9500',
shadowColor: '#cc7000',
yCenter: 0.68,
amp: 0.10,
freq: 0.0038,
speed: 0.48,
lines: 14,
spread: 0.05,
phase: 3.5,
alpha: 0.68,
wmod: 1.1,
},
{
color: '#ff2266',
shadowColor: '#cc0044',
yCenter: 0.86,
amp: 0.065,
freq: 0.0018,
speed: 0.22,
lines: 12,
spread: 0.04,
phase: 1.8,
alpha: 0.55,
wmod: 0.8,
},
];
function waveY(band, x, t, lineIdx) {
const offset = (lineIdx / (band.lines - 1) - 0.5) * band.spread * H;
const baseY = band.yCenter * H;
const w1 = Math.sin(x * band.freq + t * band.speed + band.phase);
const w2 = Math.sin(x * band.freq * 1.7 + t * band.speed * 1.3 + band.phase + 0.9) * 0.35;
const w3 = Math.sin(x * band.freq * 0.5 + t * band.speed * 0.7 + band.phase + 1.8) * 0.2;
return baseY + (w1 + w2 + w3) * band.amp * H * band.wmod + offset;
}
let t = 0;
function draw(){
ctx.fillStyle = 'rgba(0,0,5,0.14)';
ctx.fillRect(0, 0, W, H);
bands.forEach(band => {
const steps = Math.ceil(W / 2); 
for(let li = 0; li < band.lines; li++){
const centerFrac = 1 - Math.abs(li / (band.lines - 1) - 0.5) * 2;
const lineAlpha = band.alpha * (0.15 + 0.85 * centerFrac * centerFrac);
const lineWidth = 0.5 + centerFrac * 1.2;
ctx.beginPath();
for(let s = 0; s <= steps; s++){
const x = (s / steps) * W;
const y = waveY(band, x, t, li);
s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
}
ctx.strokeStyle = band.color;
ctx.globalAlpha = lineAlpha;
ctx.lineWidth = lineWidth;
if(centerFrac > 0.6){
ctx.shadowBlur = 14;
ctx.shadowColor = band.shadowColor;
} else {
ctx.shadowBlur = 0;
}
ctx.stroke();
}
});
ctx.globalAlpha = 1;
ctx.shadowBlur = 0;
t += 0.012;
requestAnimationFrame(draw);
}
draw();
})();
function initCompatCanvas(id,colors){
const canvas=document.getElementById(id);
if(!canvas)return;
const ctx=canvas.getContext('2d');
let W,H;
function resize(){W=canvas.width=canvas.offsetWidth;H=canvas.height=canvas.offsetHeight;}
resize();
const particles=[];
class P{
constructor(){this.x=W/2;this.y=H/2;this.vx=(Math.random()-.5)*1.5;this.vy=(Math.random()-.5)*1.5;this.color=colors[Math.floor(Math.random()*colors.length)];this.alpha=Math.random()*.6+.2;this.life=0;this.maxLife=120+Math.random()*80;this.hist=[];this.maxH=30;}
update(t){const s=.008;const a=Math.sin(this.x*s+t)*Math.PI*2;this.vx+=Math.cos(a)*.08;this.vy+=Math.sin(a)*.08;const sp=Math.sqrt(this.vx**2+this.vy**2);if(sp>2){this.vx/=sp/2;this.vy/=sp/2;}this.x+=this.vx;this.y+=this.vy;this.hist.push({x:this.x,y:this.y});if(this.hist.length>this.maxH)this.hist.shift();this.life++;if(this.life>this.maxLife||this.x<0||this.x>W||this.y<0||this.y>H){this.x=W/2+( Math.random()-.5)*20;this.y=H/2+(Math.random()-.5)*20;this.vx=(Math.random()-.5)*1.5;this.vy=(Math.random()-.5)*1.5;this.life=0;this.hist=[];}}
draw(){if(this.hist.length<2)return;ctx.beginPath();ctx.moveTo(this.hist[0].x,this.hist[0].y);this.hist.forEach(p=>ctx.lineTo(p.x,p.y));ctx.strokeStyle=this.color;ctx.globalAlpha=this.alpha*Math.min(this.life/20,1)*Math.min((this.maxLife-this.life)/20,1);ctx.lineWidth=.6;ctx.shadowBlur=6;ctx.shadowColor=this.color;ctx.stroke();ctx.globalAlpha=1;ctx.shadowBlur=0;}
}
for(let i=0;i<40;i++){const p=new P();p.life=Math.floor(Math.random()*p.maxLife);particles.push(p);}
let t=0;
function anim(){ctx.fillStyle='rgba(0,0,5,.2)';ctx.fillRect(0,0,W,H);t+=.03;particles.forEach(p=>{p.update(t);p.draw();});requestAnimationFrame(anim);}
anim();
}
initCompatCanvas('compat1',['#00e5ff','#00ff88','#ffffff']);
initCompatCanvas('compat2',['#aa44ff','#ff3366','#ff9500']);
(function(){
const canvas=document.getElementById('dualCanvas');
if(!canvas)return;
const ctx=canvas.getContext('2d');
let W,H;
function resize(){W=canvas.width=canvas.offsetWidth;H=canvas.height=canvas.offsetHeight;}
resize();
window.addEventListener('resize',resize);
const pA=[],pB=[];
const colA=['#00e5ff','#00ffcc','#4488ff','#ffffff'];
const colB=['#ff3366','#ff9500','#aa44ff','#ffee00'];
class DP{
constructor(x0,y0,cols){this.x=x0;this.y=y0;this.vx=(Math.random()-.5)*1.4;this.vy=(Math.random()-.5)*1.4;this.color=cols[Math.floor(Math.random()*cols.length)];this.alpha=Math.random()*.5+.2;this.life=0;this.maxLife=150+Math.random()*120;this.hist=[];this.maxH=50;this.cols=cols;this.x0=x0;this.y0=y0;}
update(t){const a=Math.sin(this.x*.005+t*.6)*Math.PI*2+Math.cos(this.y*.005+t*.4)*Math.PI;this.vx+=Math.cos(a)*.05;this.vy+=Math.sin(a)*.05;const sp=Math.sqrt(this.vx**2+this.vy**2);if(sp>2){this.vx/=sp/2;this.vy/=sp/2;}this.x+=this.vx;this.y+=this.vy;this.hist.push({x:this.x,y:this.y});if(this.hist.length>this.maxH)this.hist.shift();this.life++;if(this.life>this.maxLife||this.x<0||this.x>W||this.y<0||this.y>H){this.x=this.x0+(Math.random()-.5)*W*.4;this.y=this.y0+(Math.random()-.5)*H*.6;this.vx=(Math.random()-.5)*1.4;this.vy=(Math.random()-.5)*1.4;this.color=this.cols[Math.floor(Math.random()*this.cols.length)];this.life=0;this.hist=[];}}
draw(){if(this.hist.length<2)return;ctx.beginPath();ctx.moveTo(this.hist[0].x,this.hist[0].y);this.hist.forEach(p=>ctx.lineTo(p.x,p.y));ctx.strokeStyle=this.color;ctx.globalAlpha=this.alpha*Math.min(this.life/25,1)*Math.min((this.maxLife-this.life)/25,1);ctx.lineWidth=.8;ctx.shadowBlur=8;ctx.shadowColor=this.color;ctx.stroke();ctx.globalAlpha=1;ctx.shadowBlur=0;}
}
function init(){
pA.length=0;pB.length=0;
for(let i=0;i<60;i++)pA.push(new DP(W*.25,H*.5,colA));
for(let i=0;i<60;i++)pB.push(new DP(W*.75,H*.5,colB));
}
init();
let t=0;
function anim(){
ctx.fillStyle='rgba(0,0,5,.22)';ctx.fillRect(0,0,W,H);
t+=.012;
[...pA,...pB].forEach(p=>{p.update(t);p.draw();});
requestAnimationFrame(anim);
}
anim();
})();
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));