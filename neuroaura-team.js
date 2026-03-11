(function(){
function init(){
document.body.innerHTML=`<div id="cur"></div><div id="curR"></div>
<nav>
<a href="/neuroaura-landing" class="logo">Neuro<em>Aura</em></a>
<div class="nav-r">
<a href="/neuroaura-landing">Expérience</a>
<a href="/neuroaura-persona">Personas</a>
<a href="/neuroaura-rapport">Rapport</a>
<a href="#" class="nav-cta">Réserver</a>
</div>
</nav>
<div class="hero">
<canvas id="hC"></canvas><div class="hf"></div>
<div class="hi">
<div class="eyebrow">Activation corporate</div>
<h1>Team Building<br><i>neurologique</i></h1>
<p class="hero-desc">Cartographiez les profils cognitifs de votre équipe. Révélez les complémentarités cachées, les zones de friction et les super-pouvoirs collectifs parmi les 9 profils CellandArt.</p>
<div class="hero-btns">
<a href="#" class="btn-p">Demander un devis</a>
<a href="#" class="btn-g">Télécharger le dossier</a>
</div>
</div>
</div>
<section class="sec sec-alt">
<div class="wrap">
<div class="reveal"><div class="sec-eyebrow">Cartographie d'équipe</div><h2 class="sec-title">8 profils,<br><i>une équipe</i></h2><p class="sec-desc">Chaque membre passe 2 min avec le casque EEG. Son profil parmi les 9 personas CellandArt est calculé et affiché en temps réel.</p></div>
<div class="team-grid"><div class="tm-card" style="border-top-color:#aa44ff">
<div class="tm-aura"><canvas class="aura-c" data-color="#aa44ff" width="64" height="64"></canvas></div>
<div class="tm-name">Marie L.</div>
<span class="tm-persona" style="color:#aa44ff">Le Visionnaire</span>
<div class="tm-bars">
<div class="bar-row"><span class="bar-lbl" style="color:#00e5ff">α</span><div class="bar-track"><div class="bar-fill" style="width:20%;background:#00e5ff"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#ff9500">θ</span><div class="bar-track"><div class="bar-fill" style="width:72%;background:#ff9500"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#4488ff">β</span><div class="bar-track"><div class="bar-fill" style="width:15%;background:#4488ff"></div></div></div>
</div>
</div><div class="tm-card" style="border-top-color:#00ffcc">
<div class="tm-aura"><canvas class="aura-c" data-color="#00ffcc" width="64" height="64"></canvas></div>
<div class="tm-name">Thomas R.</div>
<span class="tm-persona" style="color:#00ffcc">Le Médiateur</span>
<div class="tm-bars">
<div class="bar-row"><span class="bar-lbl" style="color:#00e5ff">α</span><div class="bar-track"><div class="bar-fill" style="width:44%;background:#00e5ff"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#ff9500">θ</span><div class="bar-track"><div class="bar-fill" style="width:58%;background:#ff9500"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#4488ff">β</span><div class="bar-track"><div class="bar-fill" style="width:14%;background:#4488ff"></div></div></div>
</div>
</div><div class="tm-card" style="border-top-color:#ff9500">
<div class="tm-aura"><canvas class="aura-c" data-color="#ff9500" width="64" height="64"></canvas></div>
<div class="tm-name">Sophie M.</div>
<span class="tm-persona" style="color:#ff9500">Le Pionnier</span>
<div class="tm-bars">
<div class="bar-row"><span class="bar-lbl" style="color:#00e5ff">α</span><div class="bar-track"><div class="bar-fill" style="width:22%;background:#00e5ff"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#ff9500">θ</span><div class="bar-track"><div class="bar-fill" style="width:62%;background:#ff9500"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#4488ff">β</span><div class="bar-track"><div class="bar-fill" style="width:48%;background:#4488ff"></div></div></div>
</div>
</div><div class="tm-card" style="border-top-color:#4488ff">
<div class="tm-aura"><canvas class="aura-c" data-color="#4488ff" width="64" height="64"></canvas></div>
<div class="tm-name">Lucas B.</div>
<span class="tm-persona" style="color:#4488ff">Le Décideur</span>
<div class="tm-bars">
<div class="bar-row"><span class="bar-lbl" style="color:#00e5ff">α</span><div class="bar-track"><div class="bar-fill" style="width:33%;background:#00e5ff"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#ff9500">θ</span><div class="bar-track"><div class="bar-fill" style="width:32%;background:#ff9500"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#4488ff">β</span><div class="bar-track"><div class="bar-fill" style="width:62%;background:#4488ff"></div></div></div>
</div>
</div><div class="tm-card" style="border-top-color:#00e5ff">
<div class="tm-aura"><canvas class="aura-c" data-color="#00e5ff" width="64" height="64"></canvas></div>
<div class="tm-name">Isabelle D.</div>
<span class="tm-persona" style="color:#00e5ff">Le Pilote</span>
<div class="tm-bars">
<div class="bar-row"><span class="bar-lbl" style="color:#00e5ff">α</span><div class="bar-track"><div class="bar-fill" style="width:40%;background:#00e5ff"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#ff9500">θ</span><div class="bar-track"><div class="bar-fill" style="width:20%;background:#ff9500"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#4488ff">β</span><div class="bar-track"><div class="bar-fill" style="width:68%;background:#4488ff"></div></div></div>
</div>
</div><div class="tm-card" style="border-top-color:#00ff88">
<div class="tm-aura"><canvas class="aura-c" data-color="#00ff88" width="64" height="64"></canvas></div>
<div class="tm-name">Alex P.</div>
<span class="tm-persona" style="color:#00ff88">L'Éclaireur</span>
<div class="tm-bars">
<div class="bar-row"><span class="bar-lbl" style="color:#00e5ff">α</span><div class="bar-track"><div class="bar-fill" style="width:28%;background:#00e5ff"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#ff9500">θ</span><div class="bar-track"><div class="bar-fill" style="width:44%;background:#ff9500"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#4488ff">β</span><div class="bar-track"><div class="bar-fill" style="width:60%;background:#4488ff"></div></div></div>
</div>
</div><div class="tm-card" style="border-top-color:#ffee00">
<div class="tm-aura"><canvas class="aura-c" data-color="#ffee00" width="64" height="64"></canvas></div>
<div class="tm-name">Chloé F.</div>
<span class="tm-persona" style="color:#ffee00">L'Observateur</span>
<div class="tm-bars">
<div class="bar-row"><span class="bar-lbl" style="color:#00e5ff">α</span><div class="bar-track"><div class="bar-fill" style="width:68%;background:#00e5ff"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#ff9500">θ</span><div class="bar-track"><div class="bar-fill" style="width:42%;background:#ff9500"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#4488ff">β</span><div class="bar-track"><div class="bar-fill" style="width:18%;background:#4488ff"></div></div></div>
</div>
</div><div class="tm-card" style="border-top-color:#ff88aa">
<div class="tm-aura"><canvas class="aura-c" data-color="#ff88aa" width="64" height="64"></canvas></div>
<div class="tm-name">Julien V.</div>
<span class="tm-persona" style="color:#ff88aa">Le Guide</span>
<div class="tm-bars">
<div class="bar-row"><span class="bar-lbl" style="color:#00e5ff">α</span><div class="bar-track"><div class="bar-fill" style="width:60%;background:#00e5ff"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#ff9500">θ</span><div class="bar-track"><div class="bar-fill" style="width:22%;background:#ff9500"></div></div></div>
<div class="bar-row"><span class="bar-lbl" style="color:#4488ff">β</span><div class="bar-track"><div class="bar-fill" style="width:48%;background:#4488ff"></div></div></div>
</div>
</div></div>
</div>
</section>
<section class="sec">
<div class="wrap">
<div class="reveal"><div class="sec-eyebrow">Compatibilité par paires</div><h2 class="sec-title">Matrice de<br><i>résonance cognitive</i></h2></div>
<div class="matrix-wrap reveal d2">
<table class="compat">
<thead><tr><th class="cm-head"></th><th class="cm-head"><div style="width:6px;height:6px;border-radius:50%;background:#aa44ff;margin:0 auto .4rem"></div>Marie</th><th class="cm-head"><div style="width:6px;height:6px;border-radius:50%;background:#00ffcc;margin:0 auto .4rem"></div>Thomas</th><th class="cm-head"><div style="width:6px;height:6px;border-radius:50%;background:#ff9500;margin:0 auto .4rem"></div>Sophie</th><th class="cm-head"><div style="width:6px;height:6px;border-radius:50%;background:#4488ff;margin:0 auto .4rem"></div>Lucas</th><th class="cm-head"><div style="width:6px;height:6px;border-radius:50%;background:#00e5ff;margin:0 auto .4rem"></div>Isabelle</th><th class="cm-head"><div style="width:6px;height:6px;border-radius:50%;background:#00ff88;margin:0 auto .4rem"></div>Alex</th><th class="cm-head"><div style="width:6px;height:6px;border-radius:50%;background:#ffee00;margin:0 auto .4rem"></div>Chloé</th><th class="cm-head"><div style="width:6px;height:6px;border-radius:50%;background:#ff88aa;margin:0 auto .4rem"></div>Julien</th></tr></thead>
<tbody><tr><td class="cm-self"><div style="display:flex;align-items:center;gap:.5rem"><div style="width:6px;height:6px;border-radius:50%;background:#aa44ff;flex-shrink:0"></div><span class="cm-name">Marie L.</span></div></td><td class="cm-cell" style="text-align:center;vertical-align:middle"><span style="color:rgba(255,255,255,.1);font-family:var(--serif);font-size:1.2rem">—</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">88</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">80</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">65</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">60</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">74</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">82</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">72</span><span class="cm-pct">%</span></td></tr><tr><td class="cm-self"><div style="display:flex;align-items:center;gap:.5rem"><div style="width:6px;height:6px;border-radius:50%;background:#00ffcc;flex-shrink:0"></div><span class="cm-name">Thomas R.</span></div></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">88</span><span class="cm-pct">%</span></td><td class="cm-cell" style="text-align:center;vertical-align:middle"><span style="color:rgba(255,255,255,.1);font-family:var(--serif);font-size:1.2rem">—</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">76</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">60</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">62</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">70</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,255,136,.07);text-align:center;vertical-align:middle"><span class="cm-score s90">90</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">78</span><span class="cm-pct">%</span></td></tr><tr><td class="cm-self"><div style="display:flex;align-items:center;gap:.5rem"><div style="width:6px;height:6px;border-radius:50%;background:#ff9500;flex-shrink:0"></div><span class="cm-name">Sophie M.</span></div></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">80</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">76</span><span class="cm-pct">%</span></td><td class="cm-cell" style="text-align:center;vertical-align:middle"><span style="color:rgba(255,255,255,.1);font-family:var(--serif);font-size:1.2rem">—</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">85</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">72</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">88</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">65</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">70</span><span class="cm-pct">%</span></td></tr><tr><td class="cm-self"><div style="display:flex;align-items:center;gap:.5rem"><div style="width:6px;height:6px;border-radius:50%;background:#4488ff;flex-shrink:0"></div><span class="cm-name">Lucas B.</span></div></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">65</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">60</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">85</span><span class="cm-pct">%</span></td><td class="cm-cell" style="text-align:center;vertical-align:middle"><span style="color:rgba(255,255,255,.1);font-family:var(--serif);font-size:1.2rem">—</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">89</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,255,136,.07);text-align:center;vertical-align:middle"><span class="cm-score s90">92</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">68</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">78</span><span class="cm-pct">%</span></td></tr><tr><td class="cm-self"><div style="display:flex;align-items:center;gap:.5rem"><div style="width:6px;height:6px;border-radius:50%;background:#00e5ff;flex-shrink:0"></div><span class="cm-name">Isabelle D.</span></div></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">60</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">62</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">72</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">89</span><span class="cm-pct">%</span></td><td class="cm-cell" style="text-align:center;vertical-align:middle"><span style="color:rgba(255,255,255,.1);font-family:var(--serif);font-size:1.2rem">—</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">84</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">72</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">88</span><span class="cm-pct">%</span></td></tr><tr><td class="cm-self"><div style="display:flex;align-items:center;gap:.5rem"><div style="width:6px;height:6px;border-radius:50%;background:#00ff88;flex-shrink:0"></div><span class="cm-name">Alex P.</span></div></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">74</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">70</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">88</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,255,136,.07);text-align:center;vertical-align:middle"><span class="cm-score s90">92</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">84</span><span class="cm-pct">%</span></td><td class="cm-cell" style="text-align:center;vertical-align:middle"><span style="color:rgba(255,255,255,.1);font-family:var(--serif);font-size:1.2rem">—</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">65</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">76</span><span class="cm-pct">%</span></td></tr><tr><td class="cm-self"><div style="display:flex;align-items:center;gap:.5rem"><div style="width:6px;height:6px;border-radius:50%;background:#ffee00;flex-shrink:0"></div><span class="cm-name">Chloé F.</span></div></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">82</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,255,136,.07);text-align:center;vertical-align:middle"><span class="cm-score s90">90</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">65</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">68</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">72</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(255,170,68,.04);text-align:center;vertical-align:middle"><span class="cm-score s60">65</span><span class="cm-pct">%</span></td><td class="cm-cell" style="text-align:center;vertical-align:middle"><span style="color:rgba(255,255,255,.1);font-family:var(--serif);font-size:1.2rem">—</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">86</span><span class="cm-pct">%</span></td></tr><tr><td class="cm-self"><div style="display:flex;align-items:center;gap:.5rem"><div style="width:6px;height:6px;border-radius:50%;background:#ff88aa;flex-shrink:0"></div><span class="cm-name">Julien V.</span></div></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">72</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">78</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">70</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">78</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">88</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(136,221,255,.04);text-align:center;vertical-align:middle"><span class="cm-score s70">76</span><span class="cm-pct">%</span></td><td class="cm-cell" style="background:rgba(0,229,255,.06);text-align:center;vertical-align:middle"><span class="cm-score s80">86</span><span class="cm-pct">%</span></td><td class="cm-cell" style="text-align:center;vertical-align:middle"><span style="color:rgba(255,255,255,.1);font-family:var(--serif);font-size:1.2rem">—</span></td></tr></tbody>
</table>
</div>
<div class="score-legend reveal d3">
<span class="sl-lbl">Score</span>
<span class="sl-item s90">90+ Excellente</span><span class="sl-item s80">80+ Forte</span><span class="sl-item s70">70+ Bonne</span><span class="sl-item s60">60+ Moyenne</span><span class="sl-item s50">-60 Friction</span>
</div>
</div>
</section>
<section class="sec sec-alt">
<div class="wrap">
<div class="reveal"><div class="sec-eyebrow">Analyse collective</div><h2 class="sec-title">Forces & <i>angles morts</i></h2></div>
<div class="ins-grid">
<div class="ins-card reveal d1">
<div class="ins-lbl" style="color:var(--green)">💪 Forces collectives</div>
<div class="ii"><div class="ii-dot" style="background:var(--green)"></div><div><div class="ii-title">Vision stratégique + exécution</div><p class="ii-desc">Le duo Visionnaire (Marie) — Décideur (Lucas) forme un binôme naturel : l'un projette à long terme, l'autre structure et exécute. Complémentarité rare et très performante.</p></div></div>
<div class="ii"><div class="ii-dot" style="background:var(--green)"></div><div><div class="ii-title">Équilibre des trois familles d'ondes</div><p class="ii-desc">L'équipe couvre les 3 dominances (Thêta, Bêta, Alpha), offrant une palette cognitive complète : créativité, action, stabilité. Riche en profils complémentaires.</p></div></div>
<div class="ii"><div class="ii-dot" style="background:var(--green)"></div><div><div class="ii-title">Intelligence de médiation présente</div><p class="ii-desc">Thomas (Médiateur) et Chloé (Observateur) apportent calme, écoute et recul lors des phases de tension ou de décision complexe.</p></div></div>
</div>
<div class="ins-card reveal d2">
<div class="ins-lbl" style="color:var(--red)">⚠️ Angles morts</div>
<div class="ii"><div class="ii-dot" style="background:var(--red)"></div><div><div class="ii-title">Profil Chef d'Orchestre absent</div><p class="ii-desc">Aucun profil Alpha/Alpha dans l'équipe. Risque de manque de régulation émotionnelle durable en phase de stress prolongé ou de gestion de conflits répétés.</p></div></div>
<div class="ii"><div class="ii-dot" style="background:var(--red)"></div><div><div class="ii-title">Tensions Visionnaire / Décideur</div><p class="ii-desc">La cohabitation Visionnaire (Marie) et Décideur (Lucas) peut créer des frictions sur le rythme : l'un a besoin de temps d'incubation, l'autre veut décider vite.</p></div></div>
<div class="ii"><div class="ii-dot" style="background:var(--red)"></div><div><div class="ii-title">Éclaireur et Médiateur en friction</div><p class="ii-desc">Alex (Éclaireur) et Thomas (Médiateur) ont des modes d'action opposés — vitesse vs. douceur. Sans cadrage, ils peuvent ralentir mutuellement la dynamique collective.</p></div></div>
</div>
</div>
</div>
</section>
<section class="radar-sec">
<div class="radar-grid">
<div class="reveal">
<div class="sec-eyebrow">Signature cérébrale collective</div>
<h2 class="sec-title">ADN cognitif<br><i>de l'équipe</i></h2>
<p>Le radar représente la distribution moyenne des fréquences cérébrales de votre équipe, comparée à la population générale et à une équipe haute performance.</p>
<p>Votre équipe présente une distribution équilibrée des trois familles d'ondes, ce qui est caractéristique d'une équipe à haute adaptabilité.</p>
<div class="legend">
<div class="li"><div class="li-line" style="background:var(--cyan)"></div>Votre équipe</div>
<div class="li"><div class="li-line" style="background:rgba(255,255,255,.25)"></div>Population générale</div>
<div class="li"><div class="li-line" style="background:var(--orange)"></div>Équipe haute performance</div>
</div>
</div>
<div class="reveal d2"><canvas id="radarC" width="480" height="480"></canvas></div>
</div>
</section>
<section class="cta-sec">
<div class="sec-eyebrow" style="justify-content:center">Prêt à cartographier votre équipe ?</div>
<h2 class="sec-title" style="text-align:center">Réservez votre<br><i>session team</i></h2>
<p style="font-weight:300;font-size:.9rem;color:var(--muted);max-width:520px;margin:0 auto 3rem;line-height:1.85">Format demi-journée ou journée complète. Installation clé en main. Rapport d'équipe complet remis à chaque participant.</p>
<div style="display:flex;gap:1.2rem;justify-content:center">
<a href="#" class="btn-p">Demander un devis</a>
<a href="#" class="btn-g">Télécharger le dossier</a>
</div>
<div class="cta-meta">
<div class="cm-item"><span>Format</span><p>Demi-journée · Journée</p></div>
<div class="cm-item"><span>Participants</span><p>6 à 120 personnes</p></div>
<div class="cm-item"><span>Livrable</span><p>Rapport individuel + équipe</p></div>
<div class="cm-item"><span>Setup</span><p>Clé en main</p></div>
</div>
</section>
<footer>
<div class="ft-logo">Neuro<em>Aura</em> <span style="font-family:var(--mono);font-size:.5rem;color:var(--faint);margin-left:.8rem">by CellandArt</span></div>
<div class="ft-links"><a href="/neuroaura-landing">Accueil</a><a href="/neuroaura-persona">Personas</a><a href="/neuroaura-rapport">Rapport</a><a href="#">Contact</a></div>
<div class="ft-copy">© 2026 CellandArt · NeuroAura</div>
</footer>`;
const cur=document.getElementById('cur'),curR=document.getElementById('curR');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;curR.style.left=rx+'px';curR.style.top=ry+'px';requestAnimationFrame(loop);})();
(function(){const c=document.getElementById('hC');if(!c)return;const ctx=c.getContext('2d');let W,H;function resize(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight}resize();window.addEventListener('resize',resize);const bands=[{col:'#aa44ff',yC:.15,amp:.09,fr:.003,sp:.38,n:12,spr:.05,ph:0},{col:'#4488ff',yC:.45,amp:.08,fr:.0058,sp:.62,n:10,spr:.048,ph:2.2},{col:'#00e5ff',yC:.72,amp:.09,fr:.0042,sp:.44,n:8,spr:.042,ph:3.6},{col:'#00ff88',yC:.9,amp:.06,fr:.002,sp:.25,n:6,spr:.03,ph:1.5}];function wY(b,x,t,i){const o=(i/(b.n-1)-.5)*b.spr*H;return b.yC*H+(Math.sin(x*b.fr+t*b.sp+b.ph)+Math.sin(x*b.fr*1.65+t*b.sp*1.3+b.ph+.9)*.3)*b.amp*H+o;}let t=0;function draw(){ctx.fillStyle='rgba(0,0,5,.14)';ctx.fillRect(0,0,W,H);bands.forEach(b=>{for(let li=0;li<b.n;li++){const cf=1-Math.abs(li/(b.n-1)-.5)*2;ctx.beginPath();for(let s=0;s<=W;s+=2){const y=wY(b,s,t,li);s===0?ctx.moveTo(s,y):ctx.lineTo(s,y);}ctx.strokeStyle=b.col;ctx.globalAlpha=.08+.45*cf*cf;ctx.lineWidth=.5+cf*.9;ctx.shadowBlur=cf>.6?9:0;ctx.shadowColor=b.col;ctx.stroke();}});ctx.globalAlpha=1;ctx.shadowBlur=0;t+=.011;requestAnimationFrame(draw);}draw();})();
document.querySelectorAll('.aura-c').forEach(canvas=>{const ctx=canvas.getContext('2d'),color=canvas.dataset.color,W=canvas.width,H=canvas.height;const sec=color==='#00e5ff'?'#00ff88':color==='#ff3366'?'#ff9500':'#00e5ff';const pts=[];class P{constructor(){this.reset()}reset(){this.x=W/2+(Math.random()-.5)*8;this.y=H/2+(Math.random()-.5)*8;this.vx=(Math.random()-.5)*1.2;this.vy=(Math.random()-.5)*1.2;this.c=Math.random()>.5?color:sec;this.a=Math.random()*.5+.2;this.life=0;this.max=80+Math.random()*60;this.h=[];this.mh=20;}update(t){const a=Math.sin(this.x*.015+t)*Math.PI*2;this.vx+=Math.cos(a)*.1;this.vy+=Math.sin(a)*.1;const sp=Math.sqrt(this.vx**2+this.vy**2);if(sp>1.8){this.vx/=sp/1.8;this.vy/=sp/1.8;}this.x+=this.vx;this.y+=this.vy;this.h.push({x:this.x,y:this.y});if(this.h.length>this.mh)this.h.shift();this.life++;if(this.life>this.max||this.x<0||this.x>W||this.y<0||this.y>H)this.reset();}draw(){if(this.h.length<2)return;ctx.beginPath();ctx.moveTo(this.h[0].x,this.h[0].y);this.h.forEach(p=>ctx.lineTo(p.x,p.y));ctx.strokeStyle=this.c;ctx.globalAlpha=this.a*Math.min(this.life/10,1)*Math.min((this.max-this.life)/15,1);ctx.lineWidth=.7;ctx.shadowBlur=5;ctx.shadowColor=this.c;ctx.stroke();ctx.globalAlpha=1;ctx.shadowBlur=0;}}for(let i=0;i<20;i++){const p=new P();p.life=Math.floor(Math.random()*p.max);pts.push(p);}let t=0;function anim(){ctx.fillStyle='rgba(0,0,5,.2)';ctx.fillRect(0,0,W,H);t+=.04;pts.forEach(p=>{p.update(t);p.draw();});requestAnimationFrame(anim);}anim();});
(function(){const c=document.getElementById('radarC');if(!c)return;const ctx=c.getContext('2d'),W=c.width,H=c.height,cx=W/2,cy=H/2,maxR=180;const labels=['Alpha\n(Calme)','Thêta\n(Créativité)','Bêta\n(Focus)','Activation\n(Gamma)','Repos\n(Delta)'];const N=labels.length;const datasets=[{v:[0.42,0.50,0.60,0.48,0.20],color:'#00e5ff',lw:2},{v:[0.38,0.40,0.42,0.35,0.38],color:'rgba(255,255,255,.3)',lw:1.5},{v:[0.55,0.50,0.72,0.68,0.30],color:'#ff9500',lw:1.5}];function gp(i,r){const a=i*(2*Math.PI/N)-Math.PI/2;return{x:cx+r*Math.cos(a),y:cy+r*Math.sin(a)};}ctx.clearRect(0,0,W,H);[.2,.4,.6,.8,1].forEach(f=>{ctx.beginPath();for(let i=0;i<N;i++){const p=gp(i,f*maxR);i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y);}ctx.closePath();ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=1;ctx.stroke();});for(let i=0;i<N;i++){const p=gp(i,maxR);ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(p.x,p.y);ctx.strokeStyle='rgba(255,255,255,.08)';ctx.lineWidth=1;ctx.stroke();const lp=gp(i,maxR+30);const lines=labels[i].split('\n');ctx.font='300 11px DM Mono';ctx.fillStyle='rgba(240,238,255,.5)';ctx.textAlign='center';ctx.textBaseline='middle';lines.forEach((line,li)=>ctx.fillText(line,lp.x,lp.y+(li-.5*(lines.length-1))*14));}datasets.forEach((ds,di)=>{ctx.beginPath();ds.v.forEach((v,i)=>{const p=gp(i,v*maxR);i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y);});ctx.closePath();ctx.strokeStyle=ds.color;ctx.lineWidth=ds.lw;if(di===0){ctx.shadowBlur=10;ctx.shadowColor=ds.color;}ctx.stroke();ctx.shadowBlur=0;if(di===0){ctx.fillStyle='rgba(0,229,255,.07)';ctx.fill();}ds.v.forEach((v,i)=>{const p=gp(i,v*maxR);ctx.beginPath();ctx.arc(p.x,p.y,di===0?4:2.5,0,Math.PI*2);ctx.fillStyle=ds.color;ctx.fill();});});})();
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}
if(document.readyState==='loading'){
document.addEventListener('DOMContentLoaded',init);
}else{
init();
}
})();