// Cuentos para Regina — comportamiento común
(function(){var c=document.getElementById('estrellas');if(!c)return;for(var i=0;i<40;i++){var s=document.createElement('i');s.style.left=Math.random()*100+'%';s.style.top=Math.random()*70+'%';s.style.animationDelay=(Math.random()*3)+'s';var z=1+Math.random()*3;s.style.width=s.style.height=z+'px';c.appendChild(s);}})();
// Videos de YouTube: se cargan recién al tocar (data-video="ID")
document.querySelectorAll('.yt[data-video]').forEach(function(b){b.addEventListener('click',function(){
  b.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+b.dataset.video+'?autoplay=1&rel=0" title="'+(b.dataset.titulo||'Cuento')+'" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
},{once:true});});
