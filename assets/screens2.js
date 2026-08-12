/* Screens: Klub, Zamówienia, Profil, Wsparcie */
(function(){
  var C=window.CTX, B=C.B, I=C.I, S=window.SCREENS, sh=C.shell, sub=C.subhead;
  var ck='<span class="ck">'+I.check+'</span>';

  S.club=function(){
    var repair = B.loyalty.indexOf('SOLAR')>=0?'SOLAREPAIR — naprawy w cenie klubu':
      B.name==='WITTCHEN'?'Rejestracja gwarancji 5 lat w telefonie':
      B.name==='TATUUM'?'Repair Service dla członków':'Priorytetowa obsługa reklamacji i zwrotów';
    var benefits=[
      ['Rabaty i oferty tylko dla klubu','−10% na start, sezonowe promocje'],
      ['Wcześniejszy dostęp do drop-ów','Powiadomienia push zanim wyprzedadzą się'],
      ['Darmowa dostawa i zwroty','Dla członków '+B.loyalty],
      [repair,'Bez odrzuconych reklamacji — pełny status'],
      ['Urodzinowy bonus punktowy','+200 pkt co roku']];
    var hist=[['Zakup online','+120 pkt','wczoraj'],['Zakup w salonie','+80 pkt','3 dni temu'],['Bonus powitalny','+200 pkt','tydzień temu']];
    return sh(sub('Klub — '+B.loyalty)+
      '<div class="body"><div class="wrap">'+
        '<div class="loyal"><div class="chip"></div><div class="club">'+B.loyalty+'</div>'+
          '<div class="pts">'+B.points.toLocaleString('pl-PL')+' pkt</div><div class="tier">Status: '+B.tier+'</div>'+
          '<div class="bar"><i style="width:'+Math.round(B.points/(B.points+B.toNext)*100)+'%"></i></div>'+
          '<div class="next">Do statusu '+B.nextTier+': '+B.toNext+' pkt</div>'+
          '<div class="qr"><div></div></div></div>'+
        '<div class="card"><div class="sect"><h3>Twoje korzyści</h3></div>'+
          benefits.map(function(b){return '<div class="benefit">'+ck+'<div><b>'+b[0]+'</b><small>'+b[1]+'</small></div></div>';}).join('')+'</div>'+
        '<div class="card"><div class="sect"><h3>Historia punktów</h3></div>'+
          hist.map(function(h){return '<div class="prow"><div>'+h[0]+'<small>'+h[2]+'</small></div><b style="color:var(--accent)">'+h[1]+'</b></div>';}).join('')+'</div>'+
      '</div></div>');
  };

  S.orders=function(){
    var st=['Zamówione','Skompletowane','Wysłane','W doręczeniu','Dostarczone'];
    var active=3;
    return sh(sub('Zamówienia')+
      '<div class="body"><div class="wrap">'+
        '<div class="toggle"><span>Powiadomienia push o statusie</span><span class="sw"></span></div>'+
        '<div class="order"><div class="top"><span class="id">ZAM-8821 · 2 produkty</span><span class="chipst">W doręczeniu</span></div>'+
          '<div class="steps">'+st.map(function(s,i){return '<div class="s '+(i<=active?'d':'')+'">'+s+'</div>';}).join('')+'</div>'+
          '<div class="olink"><a data-nav="rma">Zgłoś reklamację</a><a data-nav="ret">Zwróć produkt</a></div></div>'+
        '<div class="order"><div class="top"><span class="id">ZAM-8710 · 1 produkt</span><span class="chipst">Dostarczone</span></div>'+
          '<div class="steps">'+st.map(function(s){return '<div class="s d">'+s+'</div>';}).join('')+'</div>'+
          '<div class="olink"><a data-nav="rma">Zgłoś reklamację</a><a data-nav="ret">Zwróć produkt</a></div></div>'+
        '<div class="note">Statusy i push zamiast dzwonienia na infolinię.</div>'+
      '</div></div>');
  };

  S.profile=function(){
    var buys=[['Online','Kurtka / model sezonowy','e-paragon'],['Salon','Akcesoria skórzane','e-paragon'],['Online','Bestseller kolekcji','e-paragon']];
    return sh(sub('Profil')+
      '<div class="body"><div class="wrap">'+
        '<div class="phead"><div class="av">AK</div><div><b>Anna Kowalska</b><small>'+B.loyalty+' · '+B.tier+'</small></div></div>'+
        '<div class="gift"><div class="lb">Karta podarunkowa</div><div class="val">150,00 zł</div></div>'+
        '<div class="card"><div class="sect"><h3>Zakupy — online i w salonie</h3></div>'+
          buys.map(function(b){return '<div class="prow"><div>'+b[1]+'<small><span class="seg '+(b[0]==='Online'?'on':'of')+'">'+b[0]+'</span></small></div><a>'+b[2]+' ›</a></div>';}).join('')+'</div>'+
        '<div class="card"><div class="sect"><h3>Konto</h3></div>'+
          ['Dane i adresy','Metody płatności','Powiadomienia','Zgody i prywatność'].map(function(x){return '<div class="prow"><div>'+x+'</div><span style="color:var(--muted)">›</span></div>';}).join('')+'</div>'+
        '<div class="note">Jedno konto: zakupy online i w salonie, e-paragony i karty — spójnie.</div>'+
      '</div></div>');
  };

  S.help=function(){
    return sh(sub('Wsparcie')+
      '<div class="body"><div class="wrap">'+
        '<div class="banner"><b>Odpowiadamy średnio w 3 min</b> — bez infolinii i czekania.</div>'+
        '<div class="chat">'+
          '<div class="bub bot">Dzień dobry! W czym możemy pomóc? Widzę Twoją sprawę '+B.feature.code+'.</div>'+
          '<div class="bub me">Jaki jest status mojej reklamacji?</div>'+
          '<div class="bub bot">'+B.feature.title+' — obecnie: <b>'+B.feature.status+'</b>. '+B.feature.sla+'. Otrzymasz push po decyzji.</div>'+
        '</div>'+
        '<div class="qr2"><span data-nav="rma">Status reklamacji</span><span data-nav="orders">Gdzie moja paczka?</span><span data-nav="ret">Chcę zwrot</span></div>'+
        '<div class="inbar"><span>Napisz wiadomość…</span><span class="send">↑</span></div>'+
      '</div></div>');
  };
})();
