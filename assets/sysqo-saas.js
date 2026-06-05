(function(){
  "use strict";
  var reduce = matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  var nav = document.getElementById("nav");
  if(nav){
    var onScroll = function(){ nav.classList.toggle("scrolled", scrollY > 8); };
    onScroll();
    addEventListener("scroll", onScroll, {passive:true});
  }

  var yr = document.getElementById("yr");
  if(yr) yr.textContent = new Date().getFullYear();

  var rvs = [].slice.call(document.querySelectorAll(".reveal, .rv"));
  if(reduce){
    rvs.forEach(function(e){ e.classList.add("in"); });
    return;
  }
  function check(){
    var vh = innerHeight;
    for(var i = rvs.length - 1; i >= 0; i--){
      var r = rvs[i].getBoundingClientRect();
      if(r.top < vh * 0.92 && r.bottom > 0){
        rvs[i].classList.add("in");
        rvs.splice(i, 1);
      }
    }
  }
  check();
  addEventListener("scroll", check, {passive:true});
  addEventListener("resize", check);
  // safety: never leave content hidden
  setTimeout(function(){ rvs.forEach(function(e){ e.classList.add("in"); }); rvs = []; }, 2600);
})();
