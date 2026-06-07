(function(){
  "use strict";
  var burger = document.querySelector(".nav-burger");
  var menu = document.getElementById("mobileMenu");
  if (!burger || !menu) return;
  var closeBtn = menu.querySelector(".mobile-menu-close");

  function open(){
    menu.classList.add("open");
    menu.setAttribute("aria-hidden","false");
    burger.setAttribute("aria-expanded","true");
    document.body.style.overflow = "hidden";
  }
  function close(){
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden","true");
    burger.setAttribute("aria-expanded","false");
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", function(e){
    e.preventDefault();
    if (menu.classList.contains("open")) close();
    else open();
  });
  if (closeBtn) closeBtn.addEventListener("click", close);

  // close on Escape
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && menu.classList.contains("open")) close();
  });

  // close when a menu link is tapped
  [].slice.call(menu.querySelectorAll("a")).forEach(function(a){
    a.addEventListener("click", close);
  });
})();
