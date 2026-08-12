/* Boot: render current screen + wire navigation. */
(function(){
  var app=document.getElementById('app'), C=window.CTX, S=window.SCREENS;
  function render(){
    app.innerHTML=(S[C.current]||S.home)();
    app.querySelectorAll('[data-nav]').forEach(function(el){
      el.addEventListener('click',function(){
        C.current=el.getAttribute('data-nav'); render();
        var b=app.querySelector('.body'); if(b) b.scrollTop=0;
      });
    });
  }
  render();
})();
