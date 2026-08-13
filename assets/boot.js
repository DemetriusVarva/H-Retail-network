/* Boot: render current screen + wire nav + entrance motion. */
(function(){
  var app=document.getElementById('app'), C=window.CTX, S=window.SCREENS;
  function ease(p){return 1-Math.pow(1-p,3);}
  function countUp(el,to){
    var start=null,dur=950;
    function step(ts){ if(start===null)start=ts;
      var p=Math.min((ts-start)/dur,1);
      el.textContent=Math.round(to*ease(p)).toLocaleString('pl-PL')+' pkt';
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function motion(){
    var i=0;
    app.querySelectorAll('.wrap>*').forEach(function(el){el.style.setProperty('--i',i++);});
    app.querySelectorAll('.bar>i,.track>i').forEach(function(el){
      var w=el.style.width||'0%'; el.style.width='0%';
      requestAnimationFrame(function(){requestAnimationFrame(function(){el.style.width=w;});});
    });
    var pts=app.querySelector('.loyal .pts');
    if(pts&&C.B&&typeof C.B.points==='number')countUp(pts,C.B.points);
  }
  var ORDER={home:0,shop:1,club:2,orders:3,profile:4,rma:6,ret:6,help:6};
  var prev='home';
  function render(){
    var cur=C.current;
    var oc=ORDER[cur]==null?0:ORDER[cur], op=ORDER[prev]==null?0:ORDER[prev];
    var dir=cur===prev?'':(oc<op?'nav-back':'nav-fwd');
    app.innerHTML=(S[cur]||S.home)();
    var body=app.querySelector('.body');
    if(body&&dir)body.classList.add(dir);
    prev=cur;
    motion();
    app.querySelectorAll('[data-nav]').forEach(function(el){
      el.addEventListener('click',function(){
        C.current=el.getAttribute('data-nav'); render();
        var b=app.querySelector('.body'); if(b) b.scrollTop=0;
      });
    });
  }
  render();
})();
