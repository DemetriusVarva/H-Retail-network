/* Screens: Home, Reklamacja, Sklep */
(function(){
  var C=window.CTX, B=C.B, I=C.I, S=window.SCREENS, sh=C.shell, sub=C.subhead;

  S.home=function(){
    var f=B.feature;
    var qa=[['rma',I.rma,'Reklamacja'],['ret',I.ret,'Zwrot'],['orders',I.ord,'Zamówienia'],['help',I.help,'Wsparcie']];
    var prods=['Nowość','Bestseller','Z Klubu -20%','Polecane'];
    return sh(
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
          '<div class="grid4">'+qa.map(function(q){return '<div class="qa" data-nav="'+q[0]+'"><div class="b">'+q[1]+'</div><span>'+q[2]+'</span></div>';}).join('')+'</div>'+
          '<div><div class="sect"><h3>Twoja sprawa</h3><a data-nav="rma">Szczegóły ›</a></div>'+
            '<div class="issue" data-nav="rma"><div class="row"><span class="code">'+f.code+'</span><span class="badge">'+f.status+'</span></div>'+
              '<h4>'+f.title+'</h4><p class="desc">'+f.desc+'</p>'+
              '<div class="sla"><span>'+f.sla+'</span><span>'+f.pct+'%</span></div>'+
              '<div class="track"><i style="width:'+f.pct+'%"></i></div></div></div>'+
          '<div><div class="sect"><h3>Dla Ciebie</h3><a data-nav="shop">Zobacz wszystko ›</a></div>'+
            '<div class="rail">'+prods.map(function(n){return '<div class="prod"><div class="img"></div><div class="nm">'+n+'</div><div class="pr">od 149 zł</div></div>';}).join('')+'</div></div>'+
          '<div class="note">Prototyp demonstracyjny · Appricotsoft × '+(B.domain||'H-Retail')+'</div>'+
        '</div></div>');
  };

  S.rma=function(){
    var f=B.feature;
    var steps=[['Zgłoszenie przyjęte','Dodano zdjęcia i dowód zakupu','done'],
      ['W ocenie rzeczoznawcy',f.sla,'act'],
      ['Decyzja z uzasadnieniem','Otrzymasz push + pełne uzasadnienie',''],
      ['Zwrot środków / naprawa','Status płatności widoczny na bieżąco','']];
    var t=f.type;
    var title=t==='zwrot'?'Zwrot':t==='rezerwacja'?'Rezerwacja':t==='drop'?'Drop':t==='gwarancja'?'Gwarancja':t==='omnichannel'?'Zamówienie':'Reklamacja';
    return sh(sub(title)+
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
  };

  S.shop=function(){
    var cats=['Wszystko','Nowości','Bestsellery','Z Klubu','Wyprzedaż'];
    var prods=[['Model sezonowy','299 zł','ok','Dostępny · 12 szt'],
      ['Kolekcja premium','459 zł','low','Ostatnie 2 szt'],
      ['Klasyk','199 zł','ok','Dostępny · 34 szt'],
      ['Limitowany','389 zł','low','Ostatnia 1 szt']];
    return sh(sub('Sklep')+
      '<div class="body"><div class="wrap">'+
        '<div class="search">'+I.search+'<span>Szukaj w '+B.name+'…</span></div>'+
        '<div class="banner"><b>Realny stan magazynu</b> — koniec z anulowanymi zamówieniami.</div>'+
        '<div class="chips">'+cats.map(function(c,i){return '<span class="chip2 '+(i===0?'on':'')+'">'+c+'</span>';}).join('')+'</div>'+
        '<div class="grid2">'+prods.map(function(p){return '<div class="pcard"><div class="img"></div><div class="in">'+
          '<div class="nm">'+p[0]+'</div><div class="pr">'+p[1]+'</div>'+
          '<div class="stock '+p[2]+'"><span class="dot"></span>'+p[3]+'</div>'+
          '<button class="reserve" data-nav="orders">Rezerwuj w salonie</button></div></div>';}).join('')+'</div>'+
        '<div class="note">Rezerwacja potwierdza realny stan — produkt nie zniknie po dniach.</div>'+
      '</div></div>');
  };
})();
