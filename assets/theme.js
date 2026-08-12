/* H-Retail-network — core: brand pick, theme, shared UI context. */
(function () {
  var params = new URLSearchParams(location.search);
  var id = (params.get("id") || "").toLowerCase().trim();
  var B = window.BRANDS[id] || window.BRANDS._generic;

  function hexL(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(function(c){return c+c}).join('');
    var r=parseInt(h.substr(0,2),16),g=parseInt(h.substr(2,2),16),b=parseInt(h.substr(4,2),16);
    return (0.2126*r+0.7152*g+0.0722*b)/255;}
  function on(h){return hexL(h)>0.6?'#15161c':'#ffffff';}
  var r=document.documentElement.style;
  r.setProperty('--primary',B.primary); r.setProperty('--accent',B.accent);
  r.setProperty('--dark',B.dark); r.setProperty('--neutral',B.neutral);
  r.setProperty('--cta-text',B.ctaText); r.setProperty('--font','"'+B.font+'"');
  r.setProperty('--on-primary',on(B.primary)); r.setProperty('--on-accent',on(B.accent));
  document.title=B.name+" — aplikacja";

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
    search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>',
    check:'<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg>'
  };

  function tabbar(cur){
    function t(k,ic,lb){return '<div class="tab '+(cur===k?'on':'')+'" data-nav="'+k+'">'+ic+'<span>'+lb+'</span></div>';}
    return '<div class="tabs">'+t('home',I.home,'Start')+t('shop',I.bag,'Sklep')+
      t('club',I.star,'Klub')+t('orders',I.ord,'Zamówienia')+t('profile',I.user,'Profil')+'</div>';
  }
  function shell(inner){
    return '<div class="notch"></div>'+
      '<div class="status"><span>9:41</span><span class="r">5G ▉▉▉ 100%</span></div>'+
      inner+tabbar(CTX.current);
  }
  function subhead(title){
    return '<div class="subhead"><div class="back" data-nav="home">'+I.back+'</div><h2>'+title+'</h2></div>';
  }

  var CTX={B:B,I:I,shell:shell,tabbar:tabbar,subhead:subhead,current:'home'};
  window.CTX=CTX;
  window.SCREENS={};
})();
