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
  r.setProperty('--mark','"'+B.name.trim().charAt(0).toUpperCase()+'"');
  var PERSONA={ochnik:'luxe',duka:'warm',lancerto:'luxe',giacomo:'luxe',solar:'luxe',
    diverse:'street',venezia:'luxe',kazar:'luxe',wojas:'luxe',monnari:'luxe',rylko:'luxe',
    kubota:'playful',homeyou:'warm',wittchen:'luxe',homla:'warm',_generic:'clean'};
  var pkey=window.BRANDS[id]?id:'_generic';
  document.documentElement.setAttribute('data-persona',PERSONA[pkey]||'clean');
  var TEXTURE={ochnik:'weave',duka:'matte',lancerto:'weave',giacomo:'weave',solar:'weave',
    diverse:'weave',venezia:'leather',kazar:'leather',wojas:'leather',monnari:'weave',rylko:'leather',
    kubota:'weave',homeyou:'matte',wittchen:'leather',homla:'matte',_generic:'weave'};
  document.documentElement.setAttribute('data-texture',TEXTURE[pkey]||'weave');
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
  var SB_BARS='<svg viewBox="0 0 18 12"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="5" y="4.5" width="3" height="7.5" rx="1"/><rect x="10" y="2" width="3" height="10" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1" opacity=".35"/></svg>';
  var SB_WIFI='<svg viewBox="0 0 16 12"><path d="M8 2.2C5 2.2 2.3 3.4.4 5.4l1.4 1.4C3.4 5.1 5.6 4.2 8 4.2s4.6.9 6.2 2.6l1.4-1.4C13.7 3.4 11 2.2 8 2.2z"/><path d="M8 6c-1.6 0-3.1.7-4.2 1.8l1.5 1.5C6 8.6 6.9 8.1 8 8.1s2 .5 2.7 1.2l1.5-1.5C11.1 6.7 9.6 6 8 6z"/><circle cx="8" cy="10.7" r="1.1"/></svg>';
  var SB_BAT='<svg class="bat" viewBox="0 0 28 13"><rect x="1" y="1.2" width="22" height="10.6" rx="3" fill="none" stroke="currentColor" stroke-width="1" opacity=".45"/><rect x="2.6" y="2.7" width="18.8" height="7.6" rx="1.6"/><rect x="24.2" y="4.4" width="2" height="4.2" rx="1" opacity=".45"/></svg>';
  function shell(inner){
    return '<div class="dyn"></div>'+
      '<div class="status"><span class="t">9:41</span>'+
      '<span class="si">'+SB_BARS+SB_WIFI+SB_BAT+'</span></div>'+
      inner+tabbar(CTX.current);
  }
  function subhead(title){
    return '<div class="subhead"><div class="back" data-nav="home">'+I.back+'</div><h2>'+title+'</h2></div>';
  }

  var CTX={B:B,I:I,shell:shell,tabbar:tabbar,subhead:subhead,current:'home'};
  window.CTX=CTX;
  window.SCREENS={};
})();
