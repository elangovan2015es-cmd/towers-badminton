<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="TowersBC">
<meta name="theme-color" content="#0a0f1a">
<title>Towers Club Badminton v2.6</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#0a0f1a;--surface:#111827;--card:#1a2332;--border:#1e3048;
  --accent:#16c784;--gold:#f0b429;--red:#ef4444;--blue:#3b82f6;
  --purple:#a855f7;--text:#e2eaf5;--muted:#5a7a99;
  --locked:#2a1f0a;--locked-border:#7a5a0a;
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
body{background:var(--bg);color:var(--text);font-family:'Outfit',sans-serif;min-height:100vh;overscroll-behavior:none;}

/* SPLASH */
#splash{position:fixed;inset:0;background:var(--bg);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;transition:opacity .6s;}
#splash.hide{opacity:0;pointer-events:none;}
.sp-badge{width:160px;height:160px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;padding:8px;box-shadow:0 0 40px rgba(22,199,132,.25);}
.sp-title{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:3px;color:var(--accent);margin-top:4px;}
.sp-sub{font-size:11px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;}
.sp-ver{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--gold);background:rgba(240,180,41,.1);border:1px solid rgba(240,180,41,.2);border-radius:20px;padding:3px 12px;margin-top:4px;}
.sp-spin{width:26px;height:26px;border:3px solid var(--border);border-top-color:var(--accent);border-radius:50%;animation:spin .8s linear infinite;margin-top:10px;}
@keyframes spin{to{transform:rotate(360deg);}}

/* HEADER */
.hdr{position:sticky;top:0;z-index:100;background:linear-gradient(180deg,#0d1522 0%,rgba(10,15,26,.97) 100%);border-bottom:1px solid var(--border);padding:8px 14px;display:flex;align-items:center;justify-content:space-between;backdrop-filter:blur(10px);}
.hdr-left{display:flex;align-items:center;gap:10px;}
.hdr-badge{width:48px;height:48px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;padding:4px;flex-shrink:0;}
.hdr-text{}
.hdr-title{font-family:'Bebas Neue',sans-serif;font-size:18px;letter-spacing:2px;color:var(--accent);line-height:1.1;}
.hdr-meta{display:flex;align-items:center;gap:6px;margin-top:1px;}
.ver-pill{font-family:'JetBrains Mono',monospace;font-size:9px;background:rgba(240,180,41,.15);color:var(--gold);border:1px solid rgba(240,180,41,.3);border-radius:10px;padding:1px 7px;}
.hdr-date{font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);}
.hdr-right{display:flex;align-items:center;gap:6px;}
.admin-badge{background:rgba(22,199,132,.12);border:1px solid rgba(22,199,132,.25);color:var(--accent);font-size:10px;letter-spacing:.5px;border-radius:8px;padding:4px 9px;font-weight:600;cursor:pointer;}
.admin-badge.off{background:rgba(90,122,153,.1);color:var(--muted);border-color:var(--border);}

/* NAV */
.nav{display:flex;background:var(--surface);border-bottom:1px solid var(--border);overflow-x:auto;scrollbar-width:none;}
.nav::-webkit-scrollbar{display:none;}
.nb{flex:1;min-width:54px;padding:9px 4px 7px;background:none;border:none;border-bottom:2px solid transparent;color:var(--muted);font-family:'Outfit',sans-serif;font-size:9px;font-weight:500;cursor:pointer;transition:all .2s;white-space:nowrap;}
.nb.active{color:var(--accent);border-bottom-color:var(--accent);}
.nb .ni{display:block;font-size:18px;margin-bottom:1px;}

/* SCREENS */
.scr{display:none;padding:12px 12px 90px;animation:fadeUp .2s ease;}
.scr.active{display:block;}
@keyframes fadeUp{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}

/* CARDS */
.card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:14px;margin-bottom:10px;}
.ct{font-family:'Bebas Neue',sans-serif;font-size:12px;letter-spacing:1.5px;color:var(--accent);margin-bottom:10px;display:flex;align-items:center;gap:6px;}

/* STAT GRID */
.sg{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:10px;}
.sb{background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:11px 5px;text-align:center;}
.sn{font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--accent);line-height:1;}
.sn.gold{color:var(--gold);}.sn.red{color:var(--red);}
.sl{font-size:9px;color:var(--muted);letter-spacing:.6px;text-transform:uppercase;margin-top:1px;}

/* INPUTS */
.ig{margin-bottom:10px;}
.il{font-size:10px;color:var(--muted);letter-spacing:.7px;text-transform:uppercase;margin-bottom:5px;display:block;}
input,select,textarea{width:100%;background:var(--surface);border:1px solid var(--border);border-radius:9px;color:var(--text);font-family:'Outfit',sans-serif;font-size:14px;padding:9px 11px;outline:none;transition:border-color .2s;}
input:focus,select:focus{border-color:var(--accent);}
select option{background:var(--surface);color:var(--text);}
input[type=date]{color-scheme:dark;}

/* BUTTONS */
.btn{width:100%;padding:11px;border:none;border-radius:10px;font-family:'Outfit',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all .18s;}
.btn:active{transform:scale(.97);}
.btn-g{background:var(--accent);color:#030a05;}
.btn-o{background:rgba(240,180,41,.15);color:var(--gold);border:1px solid rgba(240,180,41,.3);}
.btn-wap{background:#25D366;color:#fff;}
.btn-ghost{background:var(--surface);color:var(--text);border:1px solid var(--border);}
.btn-sm{padding:5px 10px;font-size:11px;border-radius:7px;border:none;cursor:pointer;font-family:'Outfit',sans-serif;font-weight:600;}
.bs-g{background:var(--accent);color:#030a05;}
.bs-r{background:rgba(239,68,68,.2);color:var(--red);}
.bs-o{background:rgba(240,180,41,.2);color:var(--gold);}
.bs-b{background:rgba(59,130,246,.2);color:var(--blue);}
.row{display:flex;gap:8px;}.f1{flex:1;}

/* CHIPS */
.chips{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:7px;}
.chip{display:inline-flex;align-items:center;gap:5px;background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:5px 11px;font-size:12px;cursor:pointer;transition:all .18s;user-select:none;}
.chip.sel{background:var(--accent);color:#030a05;border-color:var(--accent);font-weight:600;}
.chip .ini{background:var(--border);border-radius:50%;width:19px;height:19px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;font-family:'JetBrains Mono',monospace;}
.chip.sel .ini{background:rgba(0,0,0,.2);}
.chip.winner-chip{border-color:var(--gold);background:rgba(240,180,41,.08);}
.chip.winner-chip.sel{background:var(--gold);color:#030a05;border-color:var(--gold);}

/* SCORE */
.score-row{display:flex;gap:8px;align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px 12px;margin-bottom:7px;}
.score-team{flex:1;text-align:center;}
.score-label{font-size:10px;color:var(--muted);letter-spacing:.5px;margin-bottom:4px;}
.score-pts{display:flex;align-items:center;justify-content:center;gap:8px;}
.sc-mini-btn{width:30px;height:30px;border-radius:50%;border:none;font-size:18px;cursor:pointer;font-weight:700;}
.sc-mini-minus{background:rgba(239,68,68,.2);color:var(--red);}
.sc-mini-plus{background:var(--accent);color:#030a05;}
.score-num{font-family:'Bebas Neue',sans-serif;font-size:32px;color:var(--text);min-width:36px;text-align:center;line-height:1;}
.score-vs{font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--muted);}

/* SHUTTLE COUNTER */
.sc-wrap{display:flex;align-items:center;justify-content:center;gap:20px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px;margin:10px 0;}
.sc-btn{width:44px;height:44px;border-radius:50%;border:none;font-size:22px;cursor:pointer;font-weight:700;transition:all .15s;}
.sc-btn:active{transform:scale(.9);}
.sc-minus{background:rgba(239,68,68,.2);color:var(--red);}
.sc-plus{background:var(--accent);color:#030a05;}
.sc-val{font-family:'Bebas Neue',sans-serif;font-size:56px;color:var(--accent);line-height:1;min-width:56px;text-align:center;}

/* GAME ROW */
.gr{display:flex;align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 11px;margin-bottom:7px;gap:7px;}
.gr-num{font-family:'Bebas Neue',sans-serif;font-size:18px;color:var(--muted);min-width:28px;}
.gr-body{flex:1;min-width:0;}
.gr-players{font-size:12px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.gr-time{font-size:10px;color:var(--muted);font-family:'JetBrains Mono',monospace;margin-top:1px;}
.gr-badge{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--accent);background:rgba(22,199,132,.1);border-radius:6px;padding:3px 7px;white-space:nowrap;}
.gr-score{font-size:10px;color:var(--gold);font-family:'JetBrains Mono',monospace;margin-top:1px;}
.winner-tag{display:inline-block;background:rgba(240,180,41,.15);color:var(--gold);font-size:9px;border-radius:4px;padding:1px 5px;margin-top:2px;font-weight:600;}

/* BALANCE ROW */
.br{display:flex;align-items:center;padding:9px 0;border-bottom:1px solid var(--border);gap:7px;}
.br:last-child{border-bottom:none;}
.br-ini{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);background:var(--border);border-radius:5px;padding:2px 5px;min-width:28px;text-align:center;}
.br-name{font-size:13px;font-weight:500;flex:1;}
.br-games{font-size:10px;color:var(--muted);}
.bv{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;padding:2px 8px;border-radius:6px;}
.bv-pos{background:rgba(22,199,132,.15);color:var(--accent);}
.bv-neg{background:rgba(239,68,68,.15);color:var(--red);}
.bv-zer{background:var(--border);color:var(--muted);}

/* LEADERBOARD */
.lb-row{display:flex;align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 12px;margin-bottom:6px;gap:8px;}
.lb-rank{font-family:'Bebas Neue',sans-serif;font-size:22px;min-width:28px;text-align:center;}
.lb-rank.r1{color:var(--gold);}.lb-rank.r2{color:#c0c0c0;}.lb-rank.r3{color:#cd7f32;}.lb-rank.r45{color:var(--muted);}
.lb-body{flex:1;}
.lb-name{font-size:13px;font-weight:600;}
.lb-sub{font-size:10px;color:var(--muted);margin-top:1px;}
.lb-wins{font-family:'Bebas Neue',sans-serif;font-size:24px;color:var(--accent);}
.lb-wins-lbl{font-size:9px;color:var(--muted);}

/* VOICE */
.voice-wrap{text-align:center;padding:6px 0;}
.vbtn{width:58px;height:58px;border-radius:50%;border:none;background:var(--accent);color:#030a05;font-size:24px;cursor:pointer;margin:0 auto 5px;display:flex;align-items:center;justify-content:center;transition:all .2s;}
.vbtn.on{animation:pulse-v .9s infinite;background:var(--red);}
@keyframes pulse-v{0%{box-shadow:0 0 0 0 rgba(239,68,68,.5);}70%{box-shadow:0 0 0 14px rgba(239,68,68,0);}100%{box-shadow:0 0 0 0 rgba(239,68,68,0);}}
.vstatus{font-size:11px;color:var(--muted);min-height:15px;}

/* INV BAR */
.inv-bar{height:8px;background:var(--border);border-radius:4px;margin:8px 0;overflow:hidden;}
.inv-fill{height:100%;border-radius:4px;transition:width .5s ease;}
.inv-hi{background:var(--accent);}.inv-med{background:var(--gold);}.inv-lo{background:var(--red);}

/* WEEK */
.wk-hdr{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px 12px;margin-bottom:7px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;}
.wk-hdr.locked{background:var(--locked);border-color:var(--locked-border);}
.wk-title{font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:1px;}
.wk-meta{font-size:10px;color:var(--muted);}
.wk-badge{font-size:9px;padding:2px 7px;border-radius:10px;font-weight:600;}
.wk-open{background:rgba(22,199,132,.15);color:var(--accent);}
.wk-lock{background:rgba(240,180,41,.15);color:var(--gold);}

/* MODAL */
.modal-bg{display:none;position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:500;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(4px);}
.modal-bg.open{display:flex;animation:fadeIn .2s ease;}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
.modal{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px;width:100%;max-width:360px;max-height:90vh;overflow-y:auto;}
.modal-title{font-family:'Bebas Neue',sans-serif;font-size:17px;letter-spacing:1.5px;margin-bottom:14px;color:var(--accent);}
.pin-dots{display:flex;gap:10px;justify-content:center;margin:10px 0;}
.pin-dot{width:13px;height:13px;border-radius:50%;border:2px solid var(--border);transition:all .2s;}
.pin-dot.filled{background:var(--accent);border-color:var(--accent);}
.pin-pad{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin:10px 0;}
.pin-key{padding:13px;border-radius:10px;background:var(--surface);border:1px solid var(--border);font-size:17px;font-weight:600;cursor:pointer;text-align:center;transition:all .15s;font-family:'JetBrains Mono',monospace;}
.pin-key:active{background:var(--accent);color:#030a05;transform:scale(.95);}

/* HELP */
.help-section{margin-bottom:14px;}
.help-h{font-family:'Bebas Neue',sans-serif;font-size:13px;letter-spacing:1.2px;color:var(--gold);margin-bottom:5px;}
.help-step{display:flex;gap:7px;margin-bottom:4px;}
.help-num{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--accent);background:rgba(22,199,132,.1);border-radius:4px;padding:1px 5px;min-width:20px;text-align:center;height:fit-content;margin-top:1px;}
.help-p{font-size:12px;color:var(--text);line-height:1.55;}
.hlt{padding:6px 14px;border-radius:16px;font-size:12px;font-weight:600;cursor:pointer;border:1px solid var(--border);background:var(--surface);color:var(--muted);transition:all .2s;}
.hlt.active{background:var(--accent);color:#030a05;border-color:var(--accent);}

/* PRINT */
@media print{body{background:#fff!important;color:#000!important;}#app{display:none!important;}#print-zone{display:block!important;}}
#print-zone{display:none;}
.pr-page{max-width:720px;margin:16px auto;padding:20px;font-family:Arial,sans-serif;color:#000;background:#fff;}
.pr-logo-row{display:flex;align-items:center;gap:16px;margin-bottom:6px;border-bottom:2px solid #1a3a8f;padding-bottom:10px;}
.pr-logo-badge{width:64px;height:64px;border-radius:50%;background:#fff;border:2px solid #1a3a8f;display:flex;align-items:center;justify-content:center;padding:4px;flex-shrink:0;}
.pr-org-block{}
.pr-org-name{font-size:20px;font-weight:700;font-family:Georgia,serif;color:#1a3a8f;letter-spacing:2px;}
.pr-org-addr{font-size:10px;color:#555;margin-top:2px;}
.pr-report-title{font-size:13px;font-weight:700;color:#1a3a8f;margin-top:3px;text-transform:uppercase;letter-spacing:1px;}
.pr-sub{font-size:10px;color:#777;margin:6px 0 12px;}
.pr-table{width:100%;border-collapse:collapse;font-size:11px;margin-bottom:14px;}
.pr-table th{background:#0a2a5a;color:#fff;padding:6px 8px;text-align:left;}
.pr-table td{padding:5px 8px;border-bottom:1px solid #ddd;}
.pr-table tr:nth-child(even) td{background:#f5f8ff;}
.pr-sec{font-size:12px;font-weight:700;text-transform:uppercase;margin:12px 0 5px;border-bottom:2px solid #1a3a8f;padding-bottom:2px;color:#1a3a8f;}
.pr-sign{margin-top:28px;display:flex;gap:40px;}
.pr-sign-box{flex:1;border-top:1px solid #000;padding-top:3px;font-size:10px;color:#555;}
.pr-footer{text-align:center;font-size:9px;color:#aaa;margin-top:14px;border-top:1px solid #ddd;padding-top:8px;}

/* TOAST */
.toast{position:fixed;bottom:76px;left:50%;transform:translateX(-50%) translateY(10px);background:var(--accent);color:#030a05;padding:8px 18px;border-radius:20px;font-size:13px;font-weight:600;opacity:0;transition:all .25s;z-index:999;white-space:nowrap;pointer-events:none;}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0);}
.toast.err{background:var(--red);color:#fff;}

/* MISC */
.empty{text-align:center;padding:28px 16px;color:var(--muted);}
.empty-icon{font-size:32px;margin-bottom:6px;}
.dg-label{font-size:10px;color:var(--gold);letter-spacing:1px;text-transform:uppercase;font-weight:600;margin:12px 0 5px;font-family:'JetBrains Mono',monospace;}
.divider{border:none;border-top:1px solid var(--border);margin:10px 0;}
.sub-tabs{display:flex;gap:5px;margin-bottom:10px;flex-wrap:wrap;}
.stab{padding:5px 12px;border-radius:16px;font-size:11px;font-weight:600;cursor:pointer;border:1px solid var(--border);background:var(--surface);color:var(--muted);transition:all .2s;}
.stab.active{background:var(--accent);color:#030a05;border-color:var(--accent);}
.alert-card{background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.3);border-radius:12px;padding:11px 13px;margin-bottom:10px;display:flex;align-items:center;gap:9px;}
.sec-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;}
.sh-title{font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:1px;}
.tm{font-size:11px;color:var(--muted);}.ta{color:var(--accent);}.tg{color:var(--gold);}
.bold{font-weight:600;}.center{text-align:center;}.mb8{margin-bottom:8px;}
.toggle-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;}
.toggle{position:relative;width:44px;height:24px;}
.toggle input{opacity:0;width:0;height:0;}
.slider{position:absolute;inset:0;background:var(--border);border-radius:12px;cursor:pointer;transition:.3s;}
.slider:before{content:'';position:absolute;height:18px;width:18px;left:3px;bottom:3px;background:#fff;border-radius:50%;transition:.3s;}
input:checked+.slider{background:var(--accent);}
input:checked+.slider:before{transform:translateX(20px);}
</style>
</head>
<body>

<!-- The ONE logo SVG definition we reuse everywhere -->
<svg style="display:none">
  <symbol id="tc-logo" viewBox="0 0 680 580">
    <circle cx="340" cy="278" r="232" fill="#f0f4ff" stroke="#1a3a8f" stroke-width="5"/>
    <circle cx="340" cy="278" r="218" fill="none" stroke="#1a3a8f" stroke-width="2"/>
    <circle cx="340" cy="278" r="212" fill="none" stroke="#1a3a8f" stroke-width="1" stroke-dasharray="5,5"/>
    <!-- LEFT RACQUET -->
    <g transform="translate(234,200) rotate(-40)">
      <ellipse cx="0" cy="0" rx="46" ry="58" fill="#f0f4ff" stroke="#1a3a8f" stroke-width="5"/>
      <line x1="-30" y1="-54" x2="-30" y2="54" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-18" y1="-57" x2="-18" y2="57" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-6"  y1="-58" x2="-6"  y2="58" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="6"   y1="-58" x2="6"   y2="58" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="18"  y1="-57" x2="18"  y2="57" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="30"  y1="-54" x2="30"  y2="54" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-44" y1="-40" x2="44" y2="-40" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="-28" x2="46" y2="-28" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="-16" x2="46" y2="-16" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="-4"  x2="46" y2="-4"  stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="8"   x2="46" y2="8"   stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="20"  x2="46" y2="20"  stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="32"  x2="46" y2="32"  stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-44" y1="44"  x2="44" y2="44"  stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <polygon points="-14,58 14,58 8,82 -8,82" fill="#1a3a8f"/>
      <rect x="-7" y="80" width="14" height="100" rx="4" fill="#1a3a8f"/>
      <rect x="-8" y="172" width="16" height="44" rx="4" fill="#0a1a5f"/>
      <line x1="-8" y1="182" x2="8" y2="182" stroke="#4a6aaf" stroke-width="1.5"/>
      <line x1="-8" y1="192" x2="8" y2="192" stroke="#4a6aaf" stroke-width="1.5"/>
      <line x1="-8" y1="202" x2="8" y2="202" stroke="#4a6aaf" stroke-width="1.5"/>
      <ellipse cx="0" cy="216" rx="9" ry="5" fill="#1a3a8f"/>
    </g>
    <!-- RIGHT RACQUET -->
    <g transform="translate(446,200) rotate(40)">
      <ellipse cx="0" cy="0" rx="46" ry="58" fill="#f0f4ff" stroke="#1a3a8f" stroke-width="5"/>
      <line x1="-30" y1="-54" x2="-30" y2="54" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-18" y1="-57" x2="-18" y2="57" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-6"  y1="-58" x2="-6"  y2="58" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="6"   y1="-58" x2="6"   y2="58" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="18"  y1="-57" x2="18"  y2="57" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="30"  y1="-54" x2="30"  y2="54" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-44" y1="-40" x2="44" y2="-40" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="-28" x2="46" y2="-28" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="-16" x2="46" y2="-16" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="-4"  x2="46" y2="-4"  stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="8"   x2="46" y2="8"   stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="20"  x2="46" y2="20"  stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-46" y1="32"  x2="46" y2="32"  stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <line x1="-44" y1="44"  x2="44" y2="44"  stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/>
      <polygon points="-14,58 14,58 8,82 -8,82" fill="#1a3a8f"/>
      <rect x="-7" y="80" width="14" height="100" rx="4" fill="#1a3a8f"/>
      <rect x="-8" y="172" width="16" height="44" rx="4" fill="#0a1a5f"/>
      <line x1="-8" y1="182" x2="8" y2="182" stroke="#4a6aaf" stroke-width="1.5"/>
      <line x1="-8" y1="192" x2="8" y2="192" stroke="#4a6aaf" stroke-width="1.5"/>
      <line x1="-8" y1="202" x2="8" y2="202" stroke="#4a6aaf" stroke-width="1.5"/>
      <ellipse cx="0" cy="216" rx="9" ry="5" fill="#1a3a8f"/>
    </g>
    <!-- SHUTTLECOCK -->
    <ellipse cx="340" cy="218" rx="13" ry="10" fill="#1a3a8f"/>
    <line x1="340" y1="210" x2="308" y2="158" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/>
    <line x1="340" y1="210" x2="316" y2="154" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/>
    <line x1="340" y1="210" x2="326" y2="152" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/>
    <line x1="340" y1="210" x2="334" y2="151" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/>
    <line x1="340" y1="210" x2="340" y2="150" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/>
    <line x1="340" y1="210" x2="346" y2="151" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/>
    <line x1="340" y1="210" x2="354" y2="152" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/>
    <line x1="340" y1="210" x2="364" y2="154" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/>
    <line x1="340" y1="210" x2="372" y2="158" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/>
    <path d="M308,158 Q318,148 328,152 Q334,149 340,150 Q346,149 352,152 Q362,148 372,158" fill="none" stroke="#1a3a8f" stroke-width="1.8"/>
    <path d="M314,174 Q324,166 334,169 Q340,167 346,169 Q356,166 366,174" fill="none" stroke="#1a3a8f" stroke-width="1.4" opacity=".6"/>
    <!-- TEXT inside badge -->
    <text font-family="Georgia,serif" font-size="30" font-weight="700" fill="#1a3a8f" text-anchor="middle" letter-spacing="4" x="340" y="532">TOWERS CLUB</text>
    <line x1="188" y1="524" x2="226" y2="524" stroke="#1a3a8f" stroke-width="1.5"/>
    <line x1="454" y1="524" x2="492" y2="524" stroke="#1a3a8f" stroke-width="1.5"/>
    <text font-family="Arial,sans-serif" font-size="13" fill="#2a50b0" text-anchor="middle" letter-spacing="2" x="340" y="556">BADMINTON · GROUP A</text>
  </symbol>
</svg>

<!-- SPLASH -->
<div id="splash">
  <div class="sp-badge"><svg width="144" height="144"><use href="#tc-logo"/></svg></div>
  <div class="sp-title">TOWERS CLUB BC</div>
  <div class="sp-sub">Group A · Anna Nagar · Chennai</div>
  <div class="sp-ver">v2.6 — April 2026</div>
  <div class="sp-spin"></div>
</div>

<!-- APP -->
<div id="app">

<!-- HEADER -->
<div class="hdr">
  <div class="hdr-left">
    <div class="hdr-badge"><svg width="40" height="40"><use href="#tc-logo"/></svg></div>
    <div class="hdr-text">
      <div class="hdr-title">TOWERS BC</div>
      <div class="hdr-meta">
        <div class="ver-pill">v2.6</div>
        <div class="hdr-date" id="hdrDate"></div>
      </div>
    </div>
  </div>
  <div class="hdr-right">
    <button class="btn-sm bs-b" style="padding:5px 8px;font-size:11px" onclick="openHelp()">❓ Help</button>
    <div class="admin-badge off" id="adminBadge" onclick="openAdminModal()">🔒 ADMIN</div>
  </div>
</div>

<!-- NAV -->
<div class="nav">
  <button class="nb active" onclick="goTo('home')" id="nb-home"><span class="ni">🏠</span>Home</button>
  <button class="nb" onclick="goTo('game')" id="nb-game"><span class="ni">🎮</span>Game</button>
  <button class="nb" onclick="goTo('players')" id="nb-players"><span class="ni">👥</span>Players</button>
  <button class="nb" onclick="goTo('stock')" id="nb-stock"><span class="ni">📦</span>Stock</button>
  <button class="nb" onclick="goTo('champs')" id="nb-champs"><span class="ni">🏆</span>Champs</button>
  <button class="nb" onclick="goTo('report')" id="nb-report"><span class="ni">📋</span>Report</button>
</div>

<!-- ===== HOME ===== -->
<div class="scr active" id="scr-home">
  <!-- PROMINENT LOGO BANNER -->
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:18px 0 10px;background:linear-gradient(180deg,rgba(26,35,50,.9) 0%,rgba(10,15,26,0) 100%);margin:-12px -12px 10px;border-bottom:1px solid var(--border)">
    <div style="width:100px;height:100px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;padding:6px;box-shadow:0 4px 24px rgba(22,199,132,.3);margin-bottom:8px">
      <svg width="88" height="88"><use href="#tc-logo"/></svg>
    </div>
    <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:3px;color:var(--accent)">TOWERS CLUB</div>
    <div style="font-size:10px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-top:1px">Badminton · Group A · Anna Nagar</div>
  </div>
  <div class="sg" style="margin-top:2px">
    <div class="sb"><div class="sn" id="s-games">0</div><div class="sl">Today Games</div></div>
    <div class="sb"><div class="sn gold" id="s-shut">0</div><div class="sl">Shuttles</div></div>
    <div class="sb"><div class="sn" id="s-stock">0</div><div class="sl">In Stock</div></div>
  </div>
  <div id="low-alert" style="display:none" class="alert-card">
    <span style="font-size:20px">⚠️</span>
    <div><div class="bold" style="color:var(--red)">Low Stock!</div><div class="tm" id="low-alert-msg"></div></div>
  </div>
  <div class="card">
    <div class="sec-hdr"><div class="ct" style="margin:0">TODAY'S SUMMARY</div><div class="tm" id="home-today-date"></div></div>
    <div style="margin-top:8px" id="home-player-summary"></div>
  </div>
  <div class="card">
    <div class="ct">QUICK ACTIONS</div>
    <div class="row mb8"><button class="btn btn-g f1" onclick="goTo('game')">+ Record Game</button></div>
    <button class="btn btn-wap" onclick="shareWA()">📤 Share Day Report on WhatsApp</button>
  </div>
</div>

<!-- ===== GAME ===== -->
<div class="scr" id="scr-game">
  <div class="card" id="game-locked-notice" style="display:none;background:var(--locked);border-color:var(--locked-border)">
    <div class="ct">🔒 WEEK LOCKED</div><div class="tm">Records frozen. Contact admin.</div>
  </div>
  <div id="game-entry-block">
    <div class="card">
      <div class="ct">GAME DATE</div>
      <span class="il">Select Date (defaults to today)</span>
      <input type="date" id="game-date">
    </div>
    <div class="card">
      <div class="ct">SELECT 4 PLAYERS</div>
      <div class="chips" id="game-chips"></div>
      <div class="tm" id="chips-hint">0 of 4 selected</div>
    </div>
    <div class="card">
      <div class="ct">SHUTTLES USED</div>
      <div class="sc-wrap">
        <button class="sc-btn sc-minus" onclick="chgS(-1)">−</button>
        <div class="sc-val" id="sc-display">1</div>
        <button class="sc-btn sc-plus" onclick="chgS(1)">+</button>
      </div>
      <div class="center tm">1 or 2 per game · Split equally among 4</div>
    </div>
    <div class="card">
      <div class="ct">GAME SCORE <span style="font-size:9px;color:var(--muted)">(OPTIONAL)</span></div>
      <div class="toggle-row">
        <span style="font-size:13px">Record score & winners?</span>
        <label class="toggle"><input type="checkbox" id="score-toggle" onchange="toggleScore()"><span class="slider"></span></label>
      </div>
      <div id="score-block" style="display:none;margin-top:8px">
        <div class="tm mb8">Select 2 winners from the 4 players</div>
        <div class="chips" id="winner-chips"></div>
        <div class="score-row" style="margin-top:8px">
          <div class="score-team">
            <div class="score-label">TEAM A</div>
            <div class="score-pts">
              <button class="sc-mini-btn sc-mini-minus" onclick="chgScore('a',-1)">−</button>
              <div class="score-num" id="score-a">21</div>
              <button class="sc-mini-btn sc-mini-plus" onclick="chgScore('a',1)">+</button>
            </div>
          </div>
          <div class="score-vs">VS</div>
          <div class="score-team">
            <div class="score-label">TEAM B</div>
            <div class="score-pts">
              <button class="sc-mini-btn sc-mini-minus" onclick="chgScore('b',-1)">−</button>
              <div class="score-num" id="score-b">15</div>
              <button class="sc-mini-btn sc-mini-plus" onclick="chgScore('b',1)">+</button>
            </div>
          </div>
        </div>
        <div class="tm center" id="score-winner-display"></div>
      </div>
    </div>
    <div class="card">
      <div class="ct">VOICE ENTRY</div>
      <div class="voice-wrap">
        <button class="vbtn" id="vBtn" onclick="toggleVoice()">🎙️</button>
        <div class="vstatus" id="vStatus">Tap mic · say names + shuttles</div>
        <div class="tm" style="margin-top:3px;font-size:10px">"Elango Sankar Kannan Pugazh two shuttles"</div>
      </div>
    </div>
    <div class="row">
      <button class="btn btn-ghost f1" onclick="resetEntry()">Reset</button>
      <button class="btn btn-g f1" onclick="recordGame()" style="margin-left:8px">✔ Record Game</button>
    </div>
  </div>
  <hr class="divider">
  <div class="sec-hdr" style="margin-top:4px">
    <div class="sh-title">TODAY'S GAMES</div>
    <span class="tm ta bold" id="tgc"></span>
  </div>
  <div id="today-log"></div>
</div>

<!-- ===== PLAYERS ===== -->
<div class="scr" id="scr-players">
  <div class="card" id="add-player-card">
    <div class="ct">ADD NEW PLAYER <span style="font-size:9px;color:var(--muted)">(Admin)</span></div>
    <div class="row mb8">
      <div class="f1 ig" style="margin-bottom:0"><span class="il">Full Name</span><input type="text" id="np-name" placeholder="Mr. Elango"></div>
      <div style="width:68px;margin-left:7px"><span class="il">Initials</span><input type="text" id="np-init" placeholder="EO" maxlength="3" style="text-transform:uppercase"></div>
    </div>
    <div class="ig mb8"><span class="il">WhatsApp (+country code)</span><input type="tel" id="np-phone" placeholder="+919876543210"></div>
    <button class="btn btn-g" onclick="addPlayer()">Add Player</button>
  </div>
  <div class="sec-hdr"><div class="sh-title">PLAYER ROSTER</div><span class="tm" id="p-count"></span></div>
  <div id="roster-list"></div>
  <div class="card" style="margin-top:4px"><div class="ct">ALL-TIME SHUTTLE BALANCES</div><div id="balance-list"></div></div>
  <div class="card" id="box-purchase-card">
    <div class="ct">BOX PURCHASE <span style="font-size:9px;color:var(--muted)">(Admin)</span></div>
    <div class="row mb8">
      <div class="f1"><span class="il">Player Who Bought</span><select id="box-player"><option value="">-- Select --</option></select></div>
      <div style="width:62px;margin-left:7px"><span class="il">Boxes</span><input type="number" id="box-count" value="1" min="1" max="50" oninput="updateBoxPreview()"></div>
    </div>
    <div class="ig mb8">
      <span class="il">Shuttles Per Box</span>
      <div style="display:flex;gap:8px">
        <div id="spb-10" onclick="selectSPB(10)" style="flex:1;padding:10px;border-radius:10px;border:2px solid var(--accent);background:rgba(22,199,132,.12);text-align:center;cursor:pointer;transition:all .2s">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--accent)">10</div>
          <div style="font-size:10px;color:var(--muted)">shuttles/box</div>
          <div style="font-size:9px;color:var(--muted);margin-top:2px">Standard</div>
        </div>
        <div id="spb-12" onclick="selectSPB(12)" style="flex:1;padding:10px;border-radius:10px;border:2px solid var(--border);background:var(--surface);text-align:center;cursor:pointer;transition:all .2s">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--muted)">12</div>
          <div style="font-size:10px;color:var(--muted)">shuttles/box</div>
          <div style="font-size:9px;color:var(--muted);margin-top:2px">Premium</div>
        </div>
        <div id="spb-custom" onclick="selectSPB('custom')" style="flex:1;padding:10px;border-radius:10px;border:2px solid var(--border);background:var(--surface);text-align:center;cursor:pointer;transition:all .2s">
          <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--muted)">??</div>
          <div style="font-size:10px;color:var(--muted)">shuttles/box</div>
          <div style="font-size:9px;color:var(--muted);margin-top:2px">Custom</div>
        </div>
      </div>
      <div id="custom-spb-wrap" style="display:none;margin-top:8px">
        <span class="il">Enter shuttles per box</span>
        <input type="number" id="custom-spb-val" placeholder="e.g. 6" min="1" max="20" oninput="updateBoxPreview()">
      </div>
    </div>
    <!-- Preview total shuttles -->
    <div id="box-preview" style="background:rgba(22,199,132,.08);border:1px solid rgba(22,199,132,.2);border-radius:10px;padding:10px 14px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between">
      <span style="font-size:12px;color:var(--muted)">Total shuttles to credit:</span>
      <span id="box-preview-total" style="font-family:'Bebas Neue',sans-serif;font-size:26px;color:var(--accent)">10</span>
    </div>
    <button class="btn btn-o" onclick="addBox()">💰 Record Purchase</button>
  </div>
</div>

<!-- ===== STOCK ===== -->
<div class="scr" id="scr-stock">
  <div class="card">
    <div class="ct">SHUTTLE INVENTORY</div>
    <div class="sg"><div class="sb"><div class="sn" id="inv-bought">0</div><div class="sl">Total Bought</div></div><div class="sb"><div class="sn gold" id="inv-used">0</div><div class="sl">Total Used</div></div><div class="sb"><div class="sn" id="inv-left">0</div><div class="sl">In Stock</div></div></div>
    <div class="inv-bar"><div id="inv-fill" style="width:100%"></div></div>
    <div class="tm center" id="inv-pct"></div>
  </div>
  <div class="card" id="opening-stock-card">
    <div class="ct">SET OPENING STOCK <span style="font-size:9px;color:var(--muted)">(Admin · once)</span></div>
    <div class="tm mb8">Enter shuttle count before app use began.</div>
    <div class="row"><input type="number" id="op-stock" placeholder="e.g. 20" class="f1"><button class="btn-sm bs-g" style="margin-left:8px;padding:10px 14px" onclick="setOpening()">Set</button></div>
  </div>
  <div class="sec-hdr" style="margin-top:4px"><div class="sh-title">PURCHASE LOG</div></div>
  <div id="purchase-log"></div>
</div>

<!-- ===== CHAMPIONS ===== -->
<div class="scr" id="scr-champs">
  <div class="sub-tabs">
    <div class="stab active" id="ct-ind" onclick="champTab('individual')">Individual</div>
    <div class="stab" id="ct-pair" onclick="champTab('pair')">Pairs</div>
  </div>
  <div class="ig mb8"><span class="il">Month</span><select id="champ-month" onchange="renderChamps()"></select></div>
  <div id="champ-content"></div>
</div>

<!-- ===== REPORT ===== -->
<div class="scr" id="scr-report">
  <div class="sub-tabs">
    <div class="stab active" id="rt-week" onclick="rTab('week')">Weekly</div>
    <div class="stab" id="rt-player" onclick="rTab('player')">By Player</div>
  </div>
  <div id="r-week">
    <div class="sec-hdr"><div class="sh-title">WEEKLY RECORDS</div><span class="tm tg bold" id="week-count"></span></div>
    <div id="week-list"></div>
  </div>
  <div id="r-player" style="display:none">
    <div class="ig"><span class="il">Select Player</span><select id="rp-sel" onchange="renderPlayerReport()"><option value="">-- All Players --</option></select></div>
    <div id="player-report-list"></div>
  </div>
</div>

</div><!-- #app -->

<!-- PRINT ZONE -->
<div id="print-zone"></div>

<!-- ADMIN MODAL -->
<div class="modal-bg" id="adminModal">
  <div class="modal">
    <div class="modal-title">🔐 ADMIN LOGIN</div>
    <div class="tm mb8" id="pin-msg">Enter 4-digit PIN</div>
    <div class="pin-dots" id="pin-dots"><div class="pin-dot" id="pd0"></div><div class="pin-dot" id="pd1"></div><div class="pin-dot" id="pd2"></div><div class="pin-dot" id="pd3"></div></div>
    <div class="pin-pad">
      <div class="pin-key" onclick="pinKey('1')">1</div><div class="pin-key" onclick="pinKey('2')">2</div><div class="pin-key" onclick="pinKey('3')">3</div>
      <div class="pin-key" onclick="pinKey('4')">4</div><div class="pin-key" onclick="pinKey('5')">5</div><div class="pin-key" onclick="pinKey('6')">6</div>
      <div class="pin-key" onclick="pinKey('7')">7</div><div class="pin-key" onclick="pinKey('8')">8</div><div class="pin-key" onclick="pinKey('9')">9</div>
      <div class="pin-key" onclick="pinKey('clr')" style="color:var(--red)">⌫</div><div class="pin-key" onclick="pinKey('0')">0</div><div class="pin-key" onclick="closeModal('adminModal')" style="color:var(--muted)">✕</div>
    </div>
  </div>
</div>

<!-- LOCK MODAL -->
<div class="modal-bg" id="lockModal">
  <div class="modal">
    <div class="modal-title">🔒 LOCK THIS WEEK?</div>
    <div class="tm mb8" id="lock-modal-msg"></div>
    <div id="lock-modal-preview" style="max-height:180px;overflow-y:auto;margin-bottom:10px;"></div>
    <div class="row">
      <button class="btn btn-ghost f1" onclick="closeModal('lockModal')">Cancel</button>
      <button class="btn btn-o f1" onclick="confirmLock()" style="margin-left:8px">🔒 Lock & Print</button>
    </div>
  </div>
</div>

<!-- HELP MODAL -->
<div class="modal-bg" id="helpModal">
  <div class="modal" style="max-width:420px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div class="modal-title" style="margin:0">❓ HOW TO USE</div>
      <button class="btn-sm bs-r" onclick="closeModal('helpModal')">✕ Close</button>
    </div>
    <div style="display:flex;gap:6px;margin-bottom:12px">
      <div class="hlt active" id="hl-en" onclick="helpLang('en')">🇬🇧 English</div>
      <div class="hlt" id="hl-ta" onclick="helpLang('ta')">🇮🇳 தமிழ்</div>
    </div>
    <div id="help-content"></div>
  </div>
</div>

<!-- TOAST -->
<div class="toast" id="toast"></div>

<script>
const APP_VERSION="v2.6";
const ADMIN_PIN='1255';
const DB_KEY='towersbc_v22';

let db={players:[],games:[],purchases:[],weeks:[],openingStock:0};
let isAdmin=false,pinBuf='',pendingLockWeek=null,curScreen='home';
let selP=new Set(),sCount=1,winnerSet=new Set(),scoreA=21,scoreB=15;
let shuttlesPerBox=10;
let champMode='individual',curHelpLang='en';

function loadDB(){try{const s=localStorage.getItem(DB_KEY);if(s)db=JSON.parse(s);}catch(e){}}
function saveDB(){localStorage.setItem(DB_KEY,JSON.stringify(db));}
loadDB();
if(!db.weeks)db.weeks=[];

function seedPlayers(){
  if(db.players.length>0)return;
  [{name:'Mr. Sankar',initials:'SR'},{name:'Mr. Elango',initials:'EO'},{name:'Mr. Kannan',initials:'KN'},
   {name:'Mr. V.Hinduja',initials:'VH'},{name:'Mr. Pugazh',initials:'PH'},{name:'Mr. Rajan',initials:'RN'},
   {name:'Mr. Satish',initials:'SH'},{name:'Mr. Lanka',initials:'LA'},{name:'Mr. Shahid',initials:'SD'},
   {name:'Mr. Venkat',initials:'VT'},{name:'Mr. Sarvesh',initials:'SV'}
  ].forEach(p=>db.players.push({id:uid(),joinDate:todayStr(),...p,phone:''}));
  saveDB();
}
seedPlayers();

function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2);}
function todayStr(){return new Date().toISOString().slice(0,10);}
function fmtDate(d){return new Date(d+'T00:00:00').toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});}
function fmtTime(ts){return new Date(ts).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});}
function getP(id){return db.players.find(p=>p.id===id);}
function monthKey(d){return d.slice(0,7);}
function monthLabel(mk){const[y,m]=mk.split('-');return new Date(y,m-1,1).toLocaleDateString('en-IN',{month:'long',year:'numeric'});}
function weekKey(d){const dt=new Date(d+'T00:00:00');const j=new Date(dt.getFullYear(),0,4);const w=Math.ceil(((dt-j)/86400000+((j.getDay()+6)%7+1))/7);return `${dt.getFullYear()}-W${String(w).padStart(2,'0')}`;}
function weekLabel(wk){const[y,w]=wk.split('-W').map(Number);const j=new Date(y,0,4);const mon=new Date(j.getTime()+((w-1)*7-((j.getDay()+6)%7))*86400000);const sun=new Date(mon.getTime()+6*86400000);return `${fmtDate(mon.toISOString().slice(0,10))} – ${fmtDate(sun.toISOString().slice(0,10))}`;}
function isWeekLocked(wk){const w=db.weeks.find(x=>x.weekKey===wk);return w&&w.locked;}
function ensureWeek(wk){if(!db.weeks.find(x=>x.weekKey===wk))db.weeks.push({weekKey:wk,label:weekLabel(wk),locked:false,lockedAt:null});}
function totalBought(){return db.openingStock+db.purchases.reduce((a,p)=>a+p.boxes*(p.spb||10),0);}
function totalUsed(){return db.games.reduce((a,g)=>a+g.shuttles,0);}
function stockLeft(){return Math.max(0,totalBought()-totalUsed());}
function todayGames(){return db.games.filter(g=>g.date===todayStr());}

function playerStats(){
  const s={};db.players.forEach(p=>{s[p.id]={consumed:0,contributed:0,games:0,wins:0};});
  db.games.forEach(g=>{const sh=g.shuttles/g.players.length;g.players.forEach(pid=>{if(s[pid]){s[pid].consumed+=sh;s[pid].games++;}});if(g.winners)g.winners.forEach(pid=>{if(s[pid])s[pid].wins++;});});
  db.purchases.forEach(p=>{if(s[p.playerId])s[p.playerId].contributed+=p.boxes*(p.spb||10);});
  return s;
}

function updateHdrDate(){const n=new Date();document.getElementById('hdrDate').textContent=n.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})+' '+n.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});}
updateHdrDate();setInterval(updateHdrDate,30000);

function goTo(name){document.querySelectorAll('.scr').forEach(s=>s.classList.remove('active'));document.querySelectorAll('.nb').forEach(b=>b.classList.remove('active'));document.getElementById('scr-'+name).classList.add('active');document.getElementById('nb-'+name).classList.add('active');curScreen=name;render(name);}
function render(name){if(name==='home')renderHome();if(name==='game')renderGame();if(name==='players')renderPlayers();if(name==='stock')renderStock();if(name==='champs')renderChamps();if(name==='report')renderReport();}

function renderHome(){
  const tg=todayGames();const ts=tg.reduce((a,g)=>a+g.shuttles,0);const stock=stockLeft();
  document.getElementById('s-games').textContent=tg.length;document.getElementById('s-shut').textContent=ts;document.getElementById('s-stock').textContent=stock;
  document.getElementById('home-today-date').textContent=fmtDate(todayStr());
  const la=document.getElementById('low-alert');
  if(stock<=5){la.style.display='flex';document.getElementById('low-alert-msg').textContent=`Only ${stock} shuttles left. Buy a box!`;}else la.style.display='none';
  const pmap={};tg.forEach(g=>{g.players.forEach(pid=>{if(!pmap[pid])pmap[pid]={games:0,shuttles:0,wins:0};pmap[pid].games++;pmap[pid].shuttles+=g.shuttles/g.players.length;if(g.winners&&g.winners.includes(pid))pmap[pid].wins++;});});
  const cont=document.getElementById('home-player-summary');
  if(!Object.keys(pmap).length){cont.innerHTML='<div class="empty" style="padding:14px"><div class="empty-icon">🏸</div><div>No games yet today</div></div>';return;}
  cont.innerHTML=Object.entries(pmap).map(([pid,v])=>{const p=getP(pid);if(!p)return '';return `<div class="br"><span class="br-ini">${p.initials}</span><span class="br-name">${p.name}</span><span class="tm" style="margin-right:5px">${v.games}g</span>${v.wins?`<span style="color:var(--gold);font-size:10px;margin-right:5px">🏆${v.wins}W</span>`:''}<span class="bv bv-neg">−${v.shuttles.toFixed(2)}🏸</span></div>`;}).join('');
}

function renderGame(){
  document.getElementById('game-date').value=todayStr();document.getElementById('game-date').max=todayStr();
  const wk=weekKey(todayStr());const locked=isWeekLocked(wk);
  document.getElementById('game-locked-notice').style.display=locked?'block':'none';
  document.getElementById('game-entry-block').style.display=locked?'none':'block';
  renderChips();renderTodayLog();
}

function renderChips(){
  const cont=document.getElementById('game-chips');
  if(!db.players.length){cont.innerHTML='<div class="tm">No players yet.</div>';return;}
  cont.innerHTML=db.players.map(p=>`<div class="chip ${selP.has(p.id)?'sel':''}" onclick="togP('${p.id}')"><span class="ini">${p.initials}</span>${p.name}</div>`).join('');
  const h=document.getElementById('chips-hint');h.textContent=`${selP.size} of 4 selected`;h.style.color=selP.size===4?'var(--accent)':'var(--muted)';
  renderWinnerChips();
}
function togP(id){if(selP.has(id)){selP.delete(id);winnerSet.delete(id);}else{if(selP.size>=4){toast('Max 4 players','err');return;}selP.add(id);}renderChips();}
function chgS(d){sCount=Math.max(1,Math.min(2,sCount+d));document.getElementById('sc-display').textContent=sCount;}
function toggleScore(){const on=document.getElementById('score-toggle').checked;document.getElementById('score-block').style.display=on?'block':'none';}
function renderWinnerChips(){
  const cont=document.getElementById('winner-chips');if(!cont)return;
  const players=[...selP].map(id=>getP(id)).filter(Boolean);
  if(!players.length){cont.innerHTML='<div class="tm">Select 4 players first</div>';return;}
  cont.innerHTML=players.map(p=>`<div class="chip winner-chip ${winnerSet.has(p.id)?'sel':''}" onclick="togWinner('${p.id}')"><span class="ini">${p.initials}</span>${p.name}</div>`).join('');
  updateScoreWD();
}
function togWinner(id){if(winnerSet.has(id))winnerSet.delete(id);else{if(winnerSet.size>=2){toast('Select exactly 2 winners','err');return;}winnerSet.add(id);}renderWinnerChips();}
function chgScore(t,d){if(t==='a'){scoreA=Math.max(0,scoreA+d);document.getElementById('score-a').textContent=scoreA;}else{scoreB=Math.max(0,scoreB+d);document.getElementById('score-b').textContent=scoreB;}updateScoreWD();}
function updateScoreWD(){const el=document.getElementById('score-winner-display');if(!el)return;if(winnerSet.size===2){const n=[...winnerSet].map(id=>{const p=getP(id);return p?p.initials:'?';}).join('&');el.textContent=`🏆 Winners: ${n} (${scoreA}–${scoreB})`;el.style.color='var(--gold)';}else{el.textContent='Select 2 winners above';el.style.color='var(--muted)';}}

function recordGame(){
  if(selP.size!==4){toast('Select exactly 4 players','err');return;}
  const stock=stockLeft();if(sCount>stock){toast(`Only ${stock} shuttles in stock!`,'err');return;}
  const gameDate=document.getElementById('game-date').value||todayStr();
  const wk=weekKey(gameDate);if(isWeekLocked(wk)){toast('This week is locked!','err');return;}
  ensureWeek(wk);
  const scoreOn=document.getElementById('score-toggle').checked;
  db.games.push({id:uid(),date:gameDate,weekKey:wk,players:[...selP],shuttles:sCount,ts:Date.now(),score:scoreOn?{a:scoreA,b:scoreB}:null,winners:scoreOn&&winnerSet.size===2?[...winnerSet]:[]});
  saveDB();toast(`Game recorded — ${sCount} shuttle${sCount>1?'s':''}`);resetEntry();renderTodayLog();renderHome();
}
function resetEntry(){selP.clear();winnerSet.clear();sCount=1;scoreA=21;scoreB=15;document.getElementById('sc-display').textContent=1;document.getElementById('score-toggle').checked=false;document.getElementById('score-block').style.display='none';document.getElementById('score-a').textContent=21;document.getElementById('score-b').textContent=15;renderChips();}
function renderTodayLog(){
  const tg=todayGames();const cont=document.getElementById('today-log');
  document.getElementById('tgc').textContent=tg.length?`${tg.length} games · ${tg.reduce((a,g)=>a+g.shuttles,0)} 🏸`:'';
  if(!tg.length){cont.innerHTML='<div class="empty" style="padding:14px"><div>No games today</div></div>';return;}
  const locked=isWeekLocked(weekKey(todayStr()));
  cont.innerHTML=tg.map((g,i)=>{
    const names=g.players.map(pid=>{const p=getP(pid);return p?p.initials:'?';}).join('·');
    let extra='';if(g.score)extra+=`<div class="gr-score">${g.score.a}–${g.score.b}</div>`;
    if(g.winners&&g.winners.length){const wn=g.winners.map(id=>{const p=getP(id);return p?p.initials:'?';}).join('&');extra+=`<span class="winner-tag">🏆${wn}</span>`;}
    return `<div class="gr"><div class="gr-num">${String(i+1).padStart(2,'0')}</div><div class="gr-body"><div class="gr-players">${names}</div><div class="gr-time">${fmtDate(g.date)} · ${fmtTime(g.ts)}</div>${extra}</div><span class="gr-badge">${g.shuttles}🏸</span>${!locked&&isAdmin?`<button class="btn-sm bs-r" style="margin-left:5px" onclick="delGame('${g.id}')">✕</button>`:''}</div>`;
  }).join('');
}
function delGame(id){if(!isAdmin){toast('Admin only','err');return;}db.games=db.games.filter(g=>g.id!==id);saveDB();renderTodayLog();renderHome();toast('Game removed');}

// VOICE
let recognition=null,isListening=false;
function toggleVoice(){
  if(!('webkitSpeechRecognition'in window)&&!('SpeechRecognition'in window)){toast('Voice not supported','err');return;}
  if(isListening){recognition.stop();return;}
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;recognition=new SR();recognition.lang='en-IN';recognition.continuous=false;recognition.interimResults=false;
  recognition.onstart=()=>{isListening=true;document.getElementById('vBtn').classList.add('on');document.getElementById('vBtn').textContent='⏹️';document.getElementById('vStatus').textContent='Listening…';};
  recognition.onend=()=>{isListening=false;document.getElementById('vBtn').classList.remove('on');document.getElementById('vBtn').textContent='🎙️';document.getElementById('vStatus').textContent='Tap mic · say names + shuttles';};
  recognition.onresult=(e)=>{const t=e.results[0][0].transcript.toLowerCase();document.getElementById('vStatus').textContent=`Heard: "${t}"`;parseVoice(t);};
  recognition.onerror=()=>{document.getElementById('vStatus').textContent='Could not hear — try again';};
  recognition.start();
}
function parseVoice(text){selP.clear();db.players.forEach(p=>{const parts=p.name.toLowerCase().replace('mr.','').replace('mr ','').trim().split(' ');parts.forEach(part=>{if(part.length>2&&text.includes(part)&&selP.size<4)selP.add(p.id);});});sCount=(text.includes('two')||text.includes('2'))?2:1;document.getElementById('sc-display').textContent=sCount;renderChips();toast(`${selP.size} players · ${sCount} shuttle(s)`);}

function renderPlayers(){
  document.getElementById('add-player-card').style.display=isAdmin?'block':'none';
  document.getElementById('box-purchase-card').style.display=isAdmin?'block':'none';
  const opts='<option value="">-- Select --</option>'+db.players.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  document.getElementById('box-player').innerHTML=opts;
  if(document.getElementById('rp-sel'))document.getElementById('rp-sel').innerHTML='<option value="">-- All Players --</option>'+db.players.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  document.getElementById('p-count').textContent=`${db.players.length} players`;
  document.getElementById('roster-list').innerHTML=db.players.length?db.players.map(p=>`<div class="gr" style="margin-bottom:7px"><div class="gr-num">${p.initials}</div><div class="gr-body"><div class="gr-players bold">${p.name}</div><div class="gr-time">${p.phone||'No phone'} · Joined ${fmtDate(p.joinDate)}</div></div>${isAdmin?`<button class="btn-sm bs-r" onclick="delPlayer('${p.id}')">✕</button>`:''}</div>`).join(''):'<div class="empty"><div class="empty-icon">👤</div><div>No players</div></div>';
  const stats=playerStats();
  const sorted=[...db.players].sort((a,b)=>{const ba=(stats[a.id]?.contributed||0)-(stats[a.id]?.consumed||0);const bb=(stats[b.id]?.contributed||0)-(stats[b.id]?.consumed||0);return bb-ba;});
  document.getElementById('balance-list').innerHTML=sorted.map(p=>{const s=stats[p.id]||{consumed:0,contributed:0,games:0,wins:0};const bal=s.contributed-s.consumed;const cls=bal>0?'bv-pos':bal<0?'bv-neg':'bv-zer';return `<div class="br"><span class="br-ini">${p.initials}</span><span class="br-name">${p.name}</span><span class="br-games">${s.games}g ${s.wins?`🏆${s.wins}W`:''}</span><span class="bv ${cls}">${bal>=0?'+':''}${bal.toFixed(1)}</span></div>`;}).join('');
}
function addPlayer(){if(!isAdmin){toast('Admin only','err');return;}const name=document.getElementById('np-name').value.trim();const initials=document.getElementById('np-init').value.trim().toUpperCase();const phone=document.getElementById('np-phone').value.trim();if(!name||!initials){toast('Name and initials required','err');return;}if(db.players.find(p=>p.initials===initials)){toast('Initials already used','err');return;}db.players.push({id:uid(),name,initials,phone,joinDate:todayStr()});saveDB();['np-name','np-init','np-phone'].forEach(id=>document.getElementById(id).value='');toast(`${name} added`);renderPlayers();}
function delPlayer(id){if(!isAdmin)return;const p=getP(id);if(!confirm(`Remove ${p?.name}?`))return;db.players=db.players.filter(x=>x.id!==id);selP.delete(id);winnerSet.delete(id);saveDB();renderPlayers();toast('Player removed');}
function selectSPB(val){
  shuttlesPerBox=val==='custom'?null:val;
  ['10','12','custom'].forEach(v=>{
    const el=document.getElementById('spb-'+v);
    if(!el)return;
    const active=String(val)===String(v);
    el.style.border=active?'2px solid var(--accent)':'2px solid var(--border)';
    el.style.background=active?'rgba(22,199,132,.12)':'var(--surface)';
    el.querySelector('div').style.color=active?'var(--accent)':'var(--muted)';
  });
  document.getElementById('custom-spb-wrap').style.display=val==='custom'?'block':'none';
  updateBoxPreview();
}
function getEffectiveSPB(){
  if(shuttlesPerBox===null){
    const v=parseInt(document.getElementById('custom-spb-val').value)||0;
    return v;
  }
  return shuttlesPerBox||10;
}
function updateBoxPreview(){
  const boxes=parseInt(document.getElementById('box-count').value)||1;
  const spb=getEffectiveSPB();
  const total=boxes*spb;
  const el=document.getElementById('box-preview-total');
  if(el) el.textContent=total>0?total:'—';
}
function addBox(){
  if(!isAdmin){toast('Admin only','err');return;}
  const pid=document.getElementById('box-player').value;
  const boxes=parseInt(document.getElementById('box-count').value)||1;
  const spb=getEffectiveSPB();
  if(!pid){toast('Select a player','err');return;}
  if(!spb||spb<1){toast('Enter shuttles per box','err');return;}
  const p=getP(pid);
  const wk=weekKey(todayStr());
  ensureWeek(wk);
  const totalShuttles=boxes*spb;
  db.purchases.push({id:uid(),date:todayStr(),weekKey:wk,playerId:pid,boxes,spb,ts:Date.now()});
  saveDB();
  toast(`${boxes} box${boxes>1?'es':''} · ${totalShuttles} shuttles credited to ${p.name}`);
  renderPlayers();
  renderStock();
  sendBoxWA(p, boxes, spb);
}

function sendBoxWA(player, boxes, spb){
  spb=spb||10;
  const shuttles=boxes*spb;
  const stats=playerStats();
  const s=stats[player.id]||{consumed:0,contributed:0};
  const bal=s.contributed-s.consumed;
  // Build message
  let msg=`🏸 *TOWERS CLUB BADMINTON*\n`;
  msg+=`📦 *Box Purchase Recorded*\n`;
  msg+=`━━━━━━━━━━━━━━\n`;
  msg+=`👤 Player: *${player.name}* (${player.initials})\n`;
  msg+=`📦 Boxes Purchased: *${boxes} box${boxes>1?'es':''}* (${spb} shuttles/box)\n`;
  msg+=`🪶 Shuttles Credited: *${shuttles}*\n`;
  msg+=`📅 Date: *${fmtDate(todayStr())}*\n`;
  msg+=`━━━━━━━━━━━━━━\n`;
  msg+=`📊 *Your Updated Balance:*\n`;
  msg+=`  Contributed: ${s.contributed} 🪶\n`;
  msg+=`  Consumed: ${s.consumed.toFixed(2)} 🪶\n`;
  msg+=`  Net Balance: ${bal>=0?'+':''}${bal.toFixed(2)} 🪶\n`;
  msg+=`━━━━━━━━━━━━━━\n`;
  msg+=`_Thank you for contributing! 🙏_\n`;
  msg+=`_Towers Club BC · ${APP_VERSION}_`;

  // If player has phone number, open direct WhatsApp to that number
  // Otherwise open WhatsApp with message ready to send manually
  const phone=player.phone?player.phone.replace(/[^0-9]/g,''):'';
  let url;
  if(phone&&phone.length>=10){
    url=`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  } else {
    // No phone stored — open WhatsApp share so admin can forward manually
    url=`https://wa.me/?text=${encodeURIComponent(msg)}`;
    toast(`No phone for ${player.name} — forwarding manually`,`err`);
  }
  setTimeout(()=>window.open(url,'_blank'),600);
}

function renderStock(){
  const bought=totalBought(),used=totalUsed(),left=stockLeft();const pct=bought>0?(left/bought)*100:0;
  document.getElementById('inv-bought').textContent=bought;document.getElementById('inv-used').textContent=used;document.getElementById('inv-left').textContent=left;document.getElementById('s-stock').textContent=left;
  const fill=document.getElementById('inv-fill');fill.style.width=pct.toFixed(0)+'%';fill.className='inv-fill '+(pct<20?'inv-lo':pct<50?'inv-med':'inv-hi');
  document.getElementById('inv-pct').textContent=`${pct.toFixed(0)}% remaining`;
  document.getElementById('opening-stock-card').style.display=isAdmin?'block':'none';
  const log=document.getElementById('purchase-log');
  if(!db.purchases.length){log.innerHTML='<div class="empty"><div class="empty-icon">📦</div><div>No purchases</div></div>';return;}
  log.innerHTML=[...db.purchases].sort((a,b)=>b.ts-a.ts).map(pur=>{const p=getP(pur.playerId);return `<div class="gr"><div class="gr-num">📦</div><div class="gr-body"><div class="gr-players bold">${p?.name||'?'} · ${pur.boxes} box${pur.boxes>1?'es':''} · ${pur.spb||10}/box</div><div class="gr-time">${fmtDate(pur.date)} · ${pur.boxes*(pur.spb||10)} shuttles total</div></div></div>`;}).join('');
}
function setOpening(){if(!isAdmin){toast('Admin only','err');return;}const v=parseInt(document.getElementById('op-stock').value);if(isNaN(v)||v<0){toast('Enter valid number','err');return;}db.openingStock=v;saveDB();renderStock();toast(`Opening stock: ${v} shuttles`);}

function populateMonthSelector(){const months=new Set();db.games.forEach(g=>months.add(monthKey(g.date)));months.add(monthKey(todayStr()));const sel=document.getElementById('champ-month');sel.innerHTML=[...months].sort((a,b)=>b.localeCompare(a)).map(m=>`<option value="${m}">${monthLabel(m)}</option>`).join('');}
function champTab(mode){champMode=mode;document.getElementById('ct-ind').className='stab'+(mode==='individual'?' active':'');document.getElementById('ct-pair').className='stab'+(mode==='pair'?' active':'');renderChamps();}
function renderChamps(){
  populateMonthSelector();const mk=document.getElementById('champ-month').value||monthKey(todayStr());
  const monthGames=db.games.filter(g=>monthKey(g.date)===mk&&g.winners&&g.winners.length===2);
  const cont=document.getElementById('champ-content');
  if(!monthGames.length){cont.innerHTML=`<div class="card"><div class="empty"><div class="empty-icon">🏆</div><div>No scored games in ${monthLabel(mk)}</div><div class="tm" style="margin-top:4px">Enable score when recording games</div></div></div>`;return;}
  const rankIcons=['🥇','🥈','🥉','4️⃣','5️⃣'];const rankClasses=['r1','r2','r3','r45','r45'];
  if(champMode==='individual'){
    const wins={};db.players.forEach(p=>{wins[p.id]=0;});monthGames.forEach(g=>g.winners.forEach(pid=>{if(wins[pid]!==undefined)wins[pid]++;}));
    const sorted=Object.entries(wins).filter(([,w])=>w>0).sort((a,b)=>b[1]-a[1]).slice(0,5);
    if(!sorted.length){cont.innerHTML='<div class="empty"><div>No winners recorded</div></div>';return;}
    cont.innerHTML=`<div class="card" style="border-color:var(--gold)"><div class="ct" style="color:var(--gold)">🏆 TOP 5 INDIVIDUALS — ${monthLabel(mk)}</div>${sorted.map(([pid,w],i)=>{const p=getP(pid);if(!p)return '';const tg=monthGames.filter(g=>g.players.includes(pid)).length;return `<div class="lb-row" style="${i===0?'border-color:var(--gold);background:rgba(240,180,41,.05)':''}"><div class="lb-rank ${rankClasses[i]}">${rankIcons[i]}</div><div class="lb-body"><div class="lb-name">${p.name}</div><div class="lb-sub">${p.initials} · ${tg} played · ${tg?((w/tg)*100).toFixed(0):0}% win rate</div></div><div style="text-align:right"><div class="lb-wins">${w}</div><div class="lb-wins-lbl">WINS</div></div></div>`;}).join('')}</div>`;
  } else {
    const pairWins={};monthGames.forEach(g=>{const key=[...g.winners].sort().join('|');if(!pairWins[key])pairWins[key]={ids:g.winners,wins:0,played:0};pairWins[key].wins++;});
    Object.keys(pairWins).forEach(key=>{const ids=key.split('|');pairWins[key].played=db.games.filter(g=>monthKey(g.date)===mk&&ids.every(id=>g.players.includes(id))).length;});
    const sorted=Object.entries(pairWins).sort((a,b)=>b[1].wins-a[1].wins).slice(0,5);
    if(!sorted.length){cont.innerHTML='<div class="empty"><div>No pair data</div></div>';return;}
    cont.innerHTML=`<div class="card" style="border-color:var(--gold)"><div class="ct" style="color:var(--gold)">🏆 TOP 5 PAIRS — ${monthLabel(mk)}</div>${sorted.map(([key,data],i)=>{const names=key.split('|').map(id=>{const p=getP(id);return p?p.name:'?';}).join(' & ');const inits=key.split('|').map(id=>{const p=getP(id);return p?p.initials:'?';}).join('&');return `<div class="lb-row" style="${i===0?'border-color:var(--gold);background:rgba(240,180,41,.05)':''}"><div class="lb-rank ${rankClasses[i]}">${rankIcons[i]}</div><div class="lb-body"><div class="lb-name">${names}</div><div class="lb-sub">${inits} · ${data.played} played · ${data.played?((data.wins/data.played)*100).toFixed(0):0}% win rate</div></div><div style="text-align:right"><div class="lb-wins">${data.wins}</div><div class="lb-wins-lbl">WINS</div></div></div>`;}).join('')}</div>`;
  }
}

function rTab(t){document.getElementById('r-week').style.display=t==='week'?'block':'none';document.getElementById('r-player').style.display=t==='player'?'block':'none';document.getElementById('rt-week').className='stab'+(t==='week'?' active':'');document.getElementById('rt-player').className='stab'+(t==='player'?' active':'');}
function renderReport(){renderWeekList();renderPlayerReport();if(document.getElementById('rp-sel'))document.getElementById('rp-sel').innerHTML='<option value="">-- All Players --</option>'+db.players.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');}
function renderWeekList(){
  const weeks={};db.games.forEach(g=>{if(!weeks[g.weekKey])weeks[g.weekKey]={games:[],purchases:[]};weeks[g.weekKey].games.push(g);});db.purchases.forEach(p=>{if(!weeks[p.weekKey])weeks[p.weekKey]={games:[],purchases:[]};weeks[p.weekKey].purchases.push(p);});db.weeks.forEach(w=>{if(!weeks[w.weekKey])weeks[w.weekKey]={games:[],purchases:[]};});
  const wks=Object.keys(weeks).sort((a,b)=>b.localeCompare(a));
  document.getElementById('week-count').textContent=`${wks.length} weeks`;
  const cont=document.getElementById('week-list');
  if(!wks.length){cont.innerHTML='<div class="empty"><div class="empty-icon">📋</div><div>No records</div></div>';return;}
  cont.innerHTML=wks.map(wk=>{const locked=isWeekLocked(wk);const data=weeks[wk];const totalS=data.games.reduce((a,g)=>a+g.shuttles,0);const wInfo=db.weeks.find(x=>x.weekKey===wk);const label=wInfo?wInfo.label:weekLabel(wk);
    return `<div><div class="wk-hdr ${locked?'locked':''}" onclick="toggleWD('${wk}')"><div><div class="wk-title">${wk} ${locked?'🔒':''}</div><div class="wk-meta">${label}</div><div class="wk-meta">${data.games.length} games · ${totalS} shuttles</div></div><div style="display:flex;flex-direction:column;gap:5px;align-items:flex-end"><span class="wk-badge ${locked?'wk-lock':'wk-open'}">${locked?'LOCKED':'OPEN'}</span>${isAdmin&&!locked?`<button class="btn-sm bs-o" onclick="event.stopPropagation();openLockModal('${wk}')">🔒 Lock</button>`:''}${locked?`<button class="btn-sm bs-b" onclick="event.stopPropagation();printWeekReport('${wk}')">🖨️ Print</button>`:''}</div></div><div id="wd-${wk.replace(/[^a-z0-9]/gi,'_')}" style="display:none;margin-bottom:7px;padding:0 3px">${renderWD(wk,data)}</div></div>`;
  }).join('');
}
function toggleWD(wk){const el=document.getElementById('wd-'+wk.replace(/[^a-z0-9]/gi,'_'));if(el)el.style.display=el.style.display==='none'?'block':'none';}
function renderWD(wk,data){if(!data.games.length)return '<div class="tm" style="padding:7px 0">No games</div>';const byDate={};data.games.forEach(g=>{if(!byDate[g.date])byDate[g.date]=[];byDate[g.date].push(g);});let html='';Object.keys(byDate).sort().forEach(date=>{html+=`<div class="dg-label">${fmtDate(date)}</div>`;byDate[date].forEach((g,i)=>{const names=g.players.map(pid=>{const p=getP(pid);return p?p.initials:'?';}).join('·');let ex='';if(g.score)ex+=`<span style="font-size:10px;color:var(--gold);margin-left:5px">${g.score.a}–${g.score.b}</span>`;if(g.winners&&g.winners.length){const wn=g.winners.map(id=>{const p=getP(id);return p?p.initials:'?';}).join('&');ex+=`<span style="font-size:9px;color:var(--gold);margin-left:4px">🏆${wn}</span>`;}html+=`<div class="gr"><div class="gr-num">${String(i+1).padStart(2,'0')}</div><div class="gr-body"><div class="gr-players">${names}${ex}</div></div><span class="gr-badge">${g.shuttles}🏸</span></div>`;});});return html;}
function renderPlayerReport(){const pid=document.getElementById('rp-sel')?.value;const cont=document.getElementById('player-report-list');if(!cont)return;const games=pid?db.games.filter(g=>g.players.includes(pid)):db.games;if(!games.length){cont.innerHTML='<div class="empty"><div>No games</div></div>';return;}const byDate={};games.forEach(g=>{if(!byDate[g.date])byDate[g.date]=[];byDate[g.date].push(g);});let html='',total=0;Object.keys(byDate).sort((a,b)=>b.localeCompare(a)).forEach(date=>{const dg=byDate[date];const ts=dg.reduce((a,g)=>a+(pid?g.shuttles/g.players.length:g.shuttles),0);total+=ts;html+=`<div class="dg-label">${fmtDate(date)} — ${ts.toFixed(2)} 🏸</div>`;dg.forEach((g,i)=>{const names=g.players.map(p2=>{const p=getP(p2);return p?p.initials:'?';}).join('·');const share=pid?(g.shuttles/g.players.length).toFixed(2):g.shuttles;html+=`<div class="gr"><div class="gr-num">${String(i+1).padStart(2,'0')}</div><div class="gr-body"><div class="gr-players">${names}</div></div><span class="gr-badge">${share}🏸</span></div>`;});});cont.innerHTML=`<div class="card" style="margin-bottom:8px"><div class="tm center">Total: <span class="bold ta">${total.toFixed(2)} 🏸</span></div></div>`+html;}

function openLockModal(wk){if(!isAdmin){toast('Admin only','err');return;}pendingLockWeek=wk;document.getElementById('lock-modal-msg').textContent=`Lock ${wk} (${weekLabel(wk)})? Cannot be undone.`;const stats={};db.players.forEach(p=>{stats[p.id]={consumed:0,contributed:0};});db.games.filter(g=>g.weekKey===wk).forEach(g=>{const sh=g.shuttles/g.players.length;g.players.forEach(pid=>{if(stats[pid])stats[pid].consumed+=sh;});});db.purchases.filter(p=>p.weekKey===wk).forEach(p=>{if(stats[p.playerId])stats[p.playerId].contributed+=p.boxes*(p.spb||10);});let prev=`<table style="width:100%;font-size:11px;border-collapse:collapse"><tr><th style="text-align:left;padding:3px;border-bottom:1px solid var(--border)">Player</th><th style="text-align:right;padding:3px;border-bottom:1px solid var(--border)">Used</th><th style="text-align:right;padding:3px;border-bottom:1px solid var(--border)">Contributed</th><th style="text-align:right;padding:3px;border-bottom:1px solid var(--border)">Balance</th></tr>`;db.players.forEach(p=>{const s=stats[p.id]||{consumed:0,contributed:0};const bal=s.contributed-s.consumed;prev+=`<tr><td style="padding:3px">${p.initials}</td><td style="text-align:right;padding:3px">${s.consumed.toFixed(2)}</td><td style="text-align:right;padding:3px">${s.contributed}</td><td style="text-align:right;padding:3px;color:${bal>=0?'var(--accent)':'var(--red)'}">${bal>=0?'+':''}${bal.toFixed(2)}</td></tr>`;});prev+=`</table>`;document.getElementById('lock-modal-preview').innerHTML=prev;openModal('lockModal');}
function confirmLock(){if(!pendingLockWeek)return;const wk=pendingLockWeek;ensureWeek(wk);const widx=db.weeks.findIndex(x=>x.weekKey===wk);db.weeks[widx].locked=true;db.weeks[widx].lockedAt=Date.now();db.games.forEach(g=>{if(g.weekKey===wk)g.locked=true;});saveDB();closeModal('lockModal');toast('Week locked 🔒');renderReport();setTimeout(()=>printWeekReport(wk),400);}

function printWeekReport(wk){
  const games=db.games.filter(g=>g.weekKey===wk);const purchases=db.purchases.filter(p=>p.weekKey===wk);
  const wInfo=db.weeks.find(x=>x.weekKey===wk);const label=wInfo?wInfo.label:weekLabel(wk);
  const stats={};db.players.forEach(p=>{stats[p.id]={consumed:0,contributed:0,games:0,wins:0};});
  games.forEach(g=>{const sh=g.shuttles/g.players.length;g.players.forEach(pid=>{if(stats[pid]){stats[pid].consumed+=sh;stats[pid].games++;}});if(g.winners)g.winners.forEach(pid=>{if(stats[pid])stats[pid].wins++;});});
  purchases.forEach(p=>{if(stats[p.playerId])stats[p.playerId].contributed+=p.boxes*(p.spb||10);});
  const byDate={};games.forEach(g=>{if(!byDate[g.date])byDate[g.date]=[];byDate[g.date].push(g);});
  let gameRows='';Object.keys(byDate).sort().forEach(date=>{byDate[date].forEach((g,i)=>{const names=g.players.map(pid=>{const p=getP(pid);return p?p.name:'?';}).join(', ');const score=g.score?`${g.score.a}–${g.score.b}`:'—';const winners=g.winners&&g.winners.length?g.winners.map(id=>{const p=getP(id);return p?p.initials:'?';}).join('&'):'—';gameRows+=`<tr><td>${fmtDate(date)}</td><td>${String(i+1).padStart(2,'0')}</td><td>${names}</td><td style="text-align:center">${g.shuttles}</td><td style="text-align:center">${score}</td><td style="text-align:center">${winners}</td></tr>`;});});
  let balRows='';db.players.forEach(p=>{const s=stats[p.id]||{consumed:0,contributed:0,games:0,wins:0};const bal=s.contributed-s.consumed;balRows+=`<tr><td>${p.initials}</td><td>${p.name}</td><td style="text-align:center">${s.games}</td><td style="text-align:center">${s.wins}</td><td style="text-align:center">${s.consumed.toFixed(2)}</td><td style="text-align:center">${s.contributed}</td><td style="text-align:center;font-weight:bold;color:${bal>=0?'#0a5a2a':'#c0392b'}">${bal>=0?'+':''}${bal.toFixed(2)}</td><td style="text-align:center;min-width:80px"></td></tr>`;});

  // Inline SVG logo for print (navy, no external refs)
  const printLogo=`<svg width="60" height="60" viewBox="0 0 680 580" xmlns="http://www.w3.org/2000/svg"><circle cx="340" cy="278" r="232" fill="#f0f4ff" stroke="#1a3a8f" stroke-width="5"/><circle cx="340" cy="278" r="218" fill="none" stroke="#1a3a8f" stroke-width="2"/><g transform="translate(234,200) rotate(-40)"><ellipse cx="0" cy="0" rx="46" ry="58" fill="#f0f4ff" stroke="#1a3a8f" stroke-width="5"/><line x1="-30" y1="-54" x2="-30" y2="54" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><line x1="-6" y1="-58" x2="-6" y2="58" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><line x1="18" y1="-57" x2="18" y2="57" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><line x1="-44" y1="-28" x2="44" y2="-28" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><line x1="-46" y1="8" x2="46" y2="8" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><line x1="-44" y1="44" x2="44" y2="44" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><polygon points="-14,58 14,58 8,82 -8,82" fill="#1a3a8f"/><rect x="-7" y="80" width="14" height="140" rx="4" fill="#1a3a8f"/></g><g transform="translate(446,200) rotate(40)"><ellipse cx="0" cy="0" rx="46" ry="58" fill="#f0f4ff" stroke="#1a3a8f" stroke-width="5"/><line x1="-30" y1="-54" x2="-30" y2="54" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><line x1="-6" y1="-58" x2="-6" y2="58" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><line x1="18" y1="-57" x2="18" y2="57" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><line x1="-44" y1="-28" x2="44" y2="-28" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><line x1="-46" y1="8" x2="46" y2="8" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><line x1="-44" y1="44" x2="44" y2="44" stroke="#1a3a8f" stroke-width="1.2" opacity=".6"/><polygon points="-14,58 14,58 8,82 -8,82" fill="#1a3a8f"/><rect x="-7" y="80" width="14" height="140" rx="4" fill="#1a3a8f"/></g><ellipse cx="340" cy="218" rx="13" ry="10" fill="#1a3a8f"/><line x1="340" y1="210" x2="308" y2="158" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/><line x1="340" y1="210" x2="340" y2="150" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/><line x1="340" y1="210" x2="372" y2="158" stroke="#1a3a8f" stroke-width="2" stroke-linecap="round"/><path d="M308,158 Q340,144 372,158" fill="none" stroke="#1a3a8f" stroke-width="1.8"/></svg>`;

  document.getElementById('print-zone').innerHTML=`<div class="pr-page">
    <div class="pr-logo-row">
      <div class="pr-logo-badge">${printLogo}</div>
      <div class="pr-org-block">
        <div class="pr-org-name">TOWERS CLUB</div>
        <div class="pr-org-addr">No.57, X-Block, 3rd Main Road, Anna Nagar, Chennai – 600 040<br>Tel: 044-26200077 / 88, 26213150 · mailtowersclub@gmail.com</div>
        <div class="pr-report-title">Badminton Group A — Weekly Report</div>
      </div>
    </div>
    <div class="pr-sub">${wk} · ${label} · Generated: ${fmtDate(todayStr())} ${fmtTime(Date.now())} · ${APP_VERSION} · ${isWeekLocked(wk)?'🔒 LOCKED':'OPEN'}</div>
    <div class="pr-sec">Game Log</div>
    <table class="pr-table"><tr><th>Date</th><th>#</th><th>Players</th><th>Shuttles</th><th>Score</th><th>Winners</th></tr>${gameRows||'<tr><td colspan="6">No games this week</td></tr>'}</table>
    <div class="pr-sec">Player Balances &amp; Signatures</div>
    <table class="pr-table"><tr><th>Ini</th><th>Name</th><th>Games</th><th>Wins</th><th>Consumed</th><th>Contributed</th><th>Balance</th><th>Signature</th></tr>${balRows}</table>
    <div class="pr-sec">Box Purchases</div>
    <table class="pr-table"><tr><th>Date</th><th>Player</th><th>Boxes</th><th>Per Box</th><th>Total Shuttles</th></tr>${purchases.map(p=>{const pl=getP(p.playerId);return `<tr><td>${fmtDate(p.date)}</td><td>${pl?.name||'?'}</td><td>${p.boxes}</td><td>${p.spb||10}</td><td>${p.boxes*(p.spb||10)}</td></tr>`;}).join('')||'<tr><td colspan="5">None</td></tr>'}</table>
    <div class="pr-sign"><div class="pr-sign-box">Admin Signature</div><div class="pr-sign-box">Date</div><div class="pr-sign-box">Verified By</div></div>
    <div class="pr-footer">Towers Club Badminton · ${APP_VERSION} · Auto-generated · Do not alter after printing</div>
  </div>`;
  window.print();
}

function openAdminModal(){if(isAdmin){isAdmin=false;updateAdminUI();toast('Admin logged out');render(curScreen);return;}pinBuf='';updatePinDots();document.getElementById('pin-msg').textContent='Enter 4-digit PIN';document.getElementById('pin-msg').style.color='var(--muted)';openModal('adminModal');}
function pinKey(k){if(k==='clr'){pinBuf=pinBuf.slice(0,-1);updatePinDots();return;}if(pinBuf.length>=4)return;pinBuf+=k;updatePinDots();if(pinBuf.length===4){setTimeout(()=>{if(pinBuf===ADMIN_PIN){isAdmin=true;updateAdminUI();closeModal('adminModal');toast('Admin access granted ✓');render(curScreen);}else{document.getElementById('pin-msg').textContent='Wrong PIN';document.getElementById('pin-msg').style.color='var(--red)';pinBuf='';updatePinDots();}},200);}}
function updatePinDots(){[0,1,2,3].forEach(i=>document.getElementById('pd'+i).className='pin-dot'+(pinBuf.length>i?' filled':''));}
function updateAdminUI(){const b=document.getElementById('adminBadge');b.textContent=isAdmin?'✓ ADMIN':'🔒 ADMIN';b.className=isAdmin?'admin-badge':'admin-badge off';}
function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}

function shareWA(){const tg=todayGames();const ts=tg.reduce((a,g)=>a+g.shuttles,0);const stats=playerStats();const pmap={};tg.forEach(g=>{g.players.forEach(pid=>{if(!pmap[pid])pmap[pid]=0;pmap[pid]+=g.shuttles/g.players.length;});});let msg=`🏸 *TOWERS CLUB BADMINTON*\n📅 *${fmtDate(todayStr())}*\n━━━━━━━━━━━━━━\n🎮 Games: *${tg.length}* | 🪶 Used: *${ts}* | 📦 Stock: *${stockLeft()}*\n━━━━━━━━━━━━━━\n*Player Usage Today:*\n`;db.players.forEach(p=>{if(pmap[p.id]){const bal=(stats[p.id]?.contributed||0)-(stats[p.id]?.consumed||0);msg+=`▸ ${p.name}: ${pmap[p.id].toFixed(2)} 🪶  Bal: ${bal>=0?'+':''}${bal.toFixed(1)}\n`;}});msg+=`━━━━━━━━━━━━━━\n_Towers Club BC · ${APP_VERSION}_`;window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`,'_blank');}

const helpContent={
  en:[
    {h:'INSTALLATION',steps:['Open app link in Safari (iPhone) or Chrome (Android).','Tap Share → Add to Home Screen (iPhone) or ⋮ → Install App (Android).','Name it TowersBC and confirm.','Always open from home screen icon.']},
    {h:'RECORDING A GAME',steps:['Tap 🎮 Game tab.','Select game date (defaults to today).','Tap 4 player names — they turn green.','Set shuttles used (1 or 2).','Optionally enable Score, pick 2 winners, set points.','Tap ✔ Record Game.']},
    {h:'VOICE ENTRY',steps:['Tap 🎙️ mic button.','Say: "Elango Sankar Kannan Pugazh two shuttles".','App selects players and sets count.','Verify and tap Record Game.']},
    {h:'CHAMPIONS 🏆',steps:['Shows Top 5 individuals and pairs per month.','Only scored games are counted.','Switch Individual / Pairs tabs.','Select month to view past records.']},
    {h:'WEEKLY LOCK & PRINT (ADMIN)',steps:['Every Monday morning, login with PIN 1255.','Report tab → current week → tap 🔒 Lock.','Preview shows all balances.','Tap Lock & Print — report auto-prints.','Collect player signatures on printed sheet.']},
  ],
  ta:[
    {h:'நிறுவுவது',steps:['iPhone-ல் Safari / Android-ல் Chrome மூலம் link திறக்கவும்.','Share → Add to Home Screen (iPhone) அல்லது ⋮ → Install App (Android).','பெயரை TowersBC என வைத்து confirm செய்யவும்.','எப்போதும் home screen icon மூலம் திறக்கவும்.']},
    {h:'Game பதிவு',steps:['🎮 Game tab தட்டவும்.','Game நடந்த தேதி தேர்ந்தெடுக்கவும்.','4 players தட்டவும் — பச்சை நிறமாகும்.','Shuttles எண்ணிக்கை (1 அல்லது 2) அமைக்கவும்.','Score enable செய்து 2 winners தேர்ந்தெடுக்கலாம்.','✔ Record Game தட்டவும்.']},
    {h:'Voice Entry',steps:['🎙️ mic தட்டவும்.','பேசவும்: "Elango Sankar Kannan Pugazh two shuttles".','App தானாக players மற்றும் count அமைக்கும்.','சரிபார்த்து Record Game தட்டவும்.']},
    {h:'Champions 🏆',steps:['மாதத்தின் Top 5 individuals மற்றும் pairs காட்டும்.','Score entry உள்ள games மட்டும் கணக்கிடும்.','Individual / Pairs tabs மாற்றலாம்.','Month selector மூலம் கடந்த மாதங்கள் பார்க்கலாம்.']},
    {h:'Weekly Lock & Print (Admin)',steps:['திங்கட்கிழமை காலையில் PIN 1255 மூலம் login செய்யவும்.','Report tab → நடப்பு வாரம் → 🔒 Lock தட்டவும்.','Balance preview காட்டும் — Lock & Print தட்டவும்.','Print sheet-ல் players கையெழுத்து பெறவும்.']},
  ]
};
function openHelp(){curHelpLang='en';renderHelpContent();openModal('helpModal');}
function helpLang(lang){curHelpLang=lang;document.getElementById('hl-en').className='hlt'+(lang==='en'?' active':'');document.getElementById('hl-ta').className='hlt'+(lang==='ta'?' active':'');renderHelpContent();}
function renderHelpContent(){document.getElementById('help-content').innerHTML=helpContent[curHelpLang].map(sec=>`<div class="help-section"><div class="help-h">${sec.h}</div>${sec.steps.map((s,i)=>`<div class="help-step"><span class="help-num">${i+1}</span><span class="help-p">${s}</span></div>`).join('')}</div>`).join('');}

function toast(msg,type=''){const t=document.getElementById('toast');t.textContent=msg;t.className='toast'+(type?' '+type:'')+' show';setTimeout(()=>t.classList.remove('show'),2800);}

setTimeout(()=>{document.getElementById('splash').classList.add('hide');renderHome();},1800);
</script>

<script>
// ── AUTO UPDATE CHECKER FOR iPHONE ──
// Checks GitHub for new version every time app opens
// If new version found, shows update banner and reloads
const CURRENT_VER = 'v2.6';
const REPO_URL = 'https://elangovan2015es-cmd.github.io/towers-badminton/';

function checkForUpdate(){
  // Add timestamp to bypass ALL caches
  const url = REPO_URL + '?_=' + Date.now();
  fetch(url, {cache:'no-store', headers:{'Cache-Control':'no-cache','Pragma':'no-cache'}})
    .then(r => r.text())
    .then(html => {
      // Extract version from fetched page
      const match = html.match(/const APP_VERSION="(v[\d.]+)"/);
      if(match && match[1] && match[1] !== CURRENT_VER){
        showUpdateBanner(match[1]);
      }
    })
    .catch(()=>{}); // Silent fail if offline
}

function showUpdateBanner(newVer){
  // Remove existing banner if any
  const existing = document.getElementById('update-banner');
  if(existing) existing.remove();

  const banner = document.createElement('div');
  banner.id = 'update-banner';
  banner.style.cssText = `
    position:fixed;top:0;left:0;right:0;z-index:99999;
    background:linear-gradient(135deg,#f0b429,#e09000);
    color:#030a05;padding:12px 16px;
    display:flex;align-items:center;justify-content:space-between;
    font-family:'Outfit',sans-serif;font-size:13px;font-weight:600;
    box-shadow:0 2px 12px rgba(240,180,41,.5);
  `;
  banner.innerHTML = `
    <div>
      <div style="font-size:14px;font-weight:700">🆕 Update Available — ${newVer}</div>
      <div style="font-size:11px;font-weight:400;margin-top:1px;opacity:.8">Tap to get the latest version</div>
    </div>
    <div style="display:flex;gap:8px">
      <button onclick="forceReload()" style="background:#030a05;color:#f0b429;border:none;border-radius:8px;padding:8px 14px;font-family:'Outfit',sans-serif;font-size:12px;font-weight:700;cursor:pointer">
        UPDATE NOW
      </button>
      <button onclick="document.getElementById('update-banner').remove()" style="background:rgba(0,0,0,.2);color:#030a05;border:none;border-radius:8px;padding:8px 10px;font-size:12px;cursor:pointer;font-weight:700">
        ✕
      </button>
    </div>
  `;
  document.body.prepend(banner);
}

function forceReload(){
  // Clear all caches then reload
  if('caches' in window){
    caches.keys().then(keys => {
      return Promise.all(keys.map(k => caches.delete(k)));
    }).then(()=>{
      window.location.href = REPO_URL + '?_=' + Date.now();
    });
  } else {
    window.location.href = REPO_URL + '?_=' + Date.now();
  }
}

// Check on load (after 3 seconds so app renders first)
setTimeout(checkForUpdate, 3000);

// Also check every 10 minutes while app is open
setInterval(checkForUpdate, 10 * 60 * 1000);
</script>
</body>
</html>
