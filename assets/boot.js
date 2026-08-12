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
  function render(){
    app.innerHTML=(S[C.current]||S.home)();
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
