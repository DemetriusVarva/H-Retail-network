/* H-Retail-network prototype engine.
   ?id=<firma> selects a brand from brands.js; unknown/empty → _generic. */
(function () {
  var params = new URLSearchParams(location.search);
  var id = (params.get("id") || "").toLowerCase().trim();
  var B = window.BRANDS[id] || window.BRANDS._generic;

  /* ---- theme ---- */
  function hexL(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(function(c){return c+c}).join('');
    var r=parseInt(h.substr(0,2),16),g=parseInt(h.substr(2,2),16),b=parseInt(h.substr(4,2),16);
    return (0.2126*r+0.7152*g+0.0722*b)/255;}
  function on(h){return hexL(h)>0.6?'#15161c':'#ffffff';}
  var root=document.documentElement.style;
  root.setProperty('--primary',B.primary); root.setProperty('--accent',B.accent);
  root.setProperty('--dark',B.dark); root.setProperty('--neutral',B.neutral);
  root.setProperty('--cta-text',B.ctaText); root.setProperty('--font','"'+B.font+'"');
  root.setProperty('--on-primary',on(B.primary)); root.setProperty('--on-accent',on(B.accent));
  document.title=B.name+" — aplikacja";

  /* ---- tiny svg helpers ---- */
  var I={
    bell:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M6 8a6 6 0 0112 0c0 7 3 7 3 7H3s3 0 3-7"/><path d="M10 21a2 2 0 004 0"/></svg>',
    user:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
    back:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M15 5l-7 7 7 7"/></svg>',
    rma:'<svg viewBox="0 0 24 24"><path d="M4 7h16M4 7l1 13h14l1-13M9 7V5a3 3 0 016 0v2"/></svg>',
    ret:'<svg viewBox="0 0 24 24"><path d="M9 14l-4-4 4-4"/><path d="M5 10h9a5 5 0 010 10h-3"/></svg>',
    ord:'<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M4 9h16M9 13h6"/></svg>',
    help:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 013.9-2c1 .7 1.1 2 .1 2.8-.7.6-1.5.9-1.5 2M12 17h.01"/></svg>',
    home:'<svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/></svg>',
    bag:'<svg viewBox="0 0 24 24"><path d="M6 8h12l1 12H5z"/><path d="M9 8a3 3 0 016 0"/></svg>',
    star:'<svg viewBox="0 0 24 24"><path d="M12 3l2.6 5.5L21 9.2l-4.5 4.3L17.6 21 12 17.7 6.4 21l1.1-7.5L3 9.2l6.4-.7z"/></svg>',
    clip:'<svg viewBox="0 0 24 24"><path d="M9 5h6v3H9zM7 5H6v16h12V5h-1"/><path d="M9 12h6M9 16h4"/></svg>'
  };

  var app=document.getElementById('app');
  var current='home';

  function shell(inner){
    return '<div class="notch"></div>'+
      '<div class="status" style="background:var(--primary)"><span>9:41</span>'+
      '<span class="r">5G ▉▉▉ 100%</span></div>'+inner+tabbar();
  }
  function tabbar(){
    function t(k,ic,lb){return '<div class="tab '+(current===k?'on':'')+'" data-nav="'+k+'">'+ic+'<span>'+lb+'</span></div>';}
    return '<div class="tabs">'+t('home',I.home,'Start')+t('shop',I.bag,'Sklep')+
      t('club',I.star,'Klub')+t('orders',I.ord,'Zamówienia')+t('profile',I.user,'Profil')+'</div>';
  }

  function home(){
    var f=B.feature;
    var qa=[['rma',I.rma,'Reklamacja'],['ret',I.ret,'Zwrot'],['orders',I.ord,'Zamówienia'],['help',I.help,'Wsparcie']];
    var prods=['Nowość','Bestseller','Z Klubu -20%','Polecane'];
    return shell(
      '<div class="appbar"><span class="brandmark">'+B.name+'</span>'+
        '<div style="display:flex;gap:8px"><div class="ic">'+I.bell+'</div><div class="ic">'+I.user+'</div></div></div>'+
      '<div class="body">'+
        '<div class="hero"><h1>'+B.hero+'</h1><p>'+B.message+'</p>'+
          '<button class="btn" data-nav="club">'+B.cta+'</button></div>'+
        '<div class="wrap">'+
          '<div class="loyal"><div class="chip"></div><div class="club">'+B.loyalty+'</div>'+
            '<div class="pts">'+B.points.toLocaleString('pl-PL')+' pkt</div>'+
            '<div class="tier">Status: '+B.tier+'</div>'+
            '<div class="bar"><i style="width:'+Math.round(B.points/(B.points+B.toNext)*100)+'%"></i></div>'+
            '<div class="next">Do statusu '+B.nextTier+': '+B.toNext+' pkt</div>'+
            '<div class="code"></div></div>'+

          '<div class="grid4">'+qa.map(function(q){return '<div class="qa" data-nav="'+(q[0]==='rma'?'rma':q[0])+'"><div class="b">'+q[1]+'</div><span>'+q[2]+'</span></div>';}).join('')+'</div>'+

          '<div><div class="sect"><h3>Twoja sprawa</h3><a data-nav="rma">Szczegóły ›</a></div>'+
            '<div class="issue" data-nav="rma"><div class="row"><span class="code">'+f.code+'</span><span class="badge">'+f.status+'</span></div>'+
              '<h4>'+f.title+'</h4><p class="desc">'+f.desc+'</p>'+
              '<div class="sla"><span>'+f.sla+'</span><span>'+f.pct+'%</span></div>'+
              '<div class="track"><i style="width:'+f.pct+'%"></i></div></div></div>'+

          '<div><div class="sect"><h3>Dla Ciebie</h3><a data-nav="shop">Zobacz wszystko ›</a></div>'+
            '<div class="rail">'+prods.map(function(n){return '<div class="prod"><div class="img"></div><div class="nm">'+n+'</div><div class="pr">od 149 zł</div></div>';}).join('')+'</div></div>'+
          '<div class="note">Prototyp demonstracyjny · Appricotsoft × '+(B.domain||'H-Retail')+'</div>'+
        '</div>'+
      '</div>');
  }

  function rma(){
    var f=B.feature;
    var steps=[['Zgłoszenie przyjęte','Dodano zdjęcia i dowód zakupu','done'],
      ['W ocenie rzeczoznawcy',f.sla,'act'],
      ['Decyzja z uzasadnieniem','Otrzymasz push + pełne uzasadnienie','' ],
      ['Zwrot środków / naprawa','Status płatności widoczny na bieżąco','']];
    return shell(
      '<div class="subhead"><div class="back" data-nav="home">'+I.back+'</div><h2>'+
        (f.type==='zwrot'?'Zwrot':f.type==='rezerwacja'?'Rezerwacja':f.type==='drop'?'Drop':f.type==='gwarancja'?'Gwarancja':f.type==='omnichannel'?'Zamówienie':'Reklamacja')+'</h2></div>'+
      '<div class="body"><div class="wrap">'+
        '<div class="issue"><div class="row"><span class="code">'+f.code+'</span><span class="badge">'+f.status+'</span></div>'+
          '<h4>'+f.title+'</h4><p class="desc">'+f.desc+'</p>'+
          '<div class="sla"><span>'+f.sla+'</span><span>'+f.pct+'%</span></div>'+
          '<div class="track"><i style="width:'+f.pct+'%"></i></div></div>'+
        '<div class="card"><div class="sect"><h3>Status na żywo</h3></div><ul class="tl">'+
          steps.map(function(s){return '<li class="'+s[2]+'"><b>'+s[0]+'</b><small>'+s[1]+'</small></li>';}).join('')+'</ul></div>'+
        '<button class="btn block" data-nav="help">Napisz do nas na czacie</button>'+
        '<div class="note">Zamiast infolinii i maili bez odpowiedzi — jeden przejrzysty status.</div>'+
      '</div></div>');
  }

  function placeholder(title,emoji,txt){
    return shell('<div class="subhead"><div class="back" data-nav="home">'+I.back+'</div><h2>'+title+'</h2></div>'+
      '<div class="body"><div class="placeholder"><div class="em">'+emoji+'</div><p>'+txt+'</p></div></div>');
  }

  var screens={
    home:home, rma:rma,
    shop:function(){return placeholder('Sklep','🛍️','Katalog z realnym stanem magazynu i rezerwacją w salonie — w Kroku 4.');},
    club:function(){return placeholder('Klub — '+B.loyalty,'⭐','Cyfrowa karta, statusy i nagrody — pełny ekran w Kroku 4.');},
    orders:function(){return placeholder('Zamówienia','📦','Statusy, powiadomienia push i zwroty — w Kroku 4.');},
    profile:function(){return placeholder('Profil','👤','Zakupy online + salon, e-paragony i karty podarunkowe — w Kroku 4.');},
    help:function(){return placeholder('Wsparcie','💬','Czat w aplikacji zamiast infolinii — pełny ekran w Kroku 4.');}
  };

  function render(){
    app.innerHTML=(screens[current]||home)();
    app.querySelectorAll('[data-nav]').forEach(function(el){
      el.addEventListener('click',function(){ current=el.getAttribute('data-nav'); render();
        app.querySelector('.body') && (app.querySelector('.body').scrollTop=0);});
    });
  }
  render();
})();
