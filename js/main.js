/* Ryoko Pro — us-ryoko.vercel.app
   Two jobs only: the mobile navigation panel and the sticky order rail.
   No scroll handlers and no animation library, so nothing competes for
   main-thread time once the page has painted. */
(function () {
  "use strict";

  var btn = document.querySelector(".nav-btn");
  var panel = document.getElementById("nav-panel");
  if (btn && panel) {
    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        panel.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* The rail appears once the opening buttons have scrolled away, and hides
     again over the fare table, where buy buttons are already on screen. */
  var rail = document.querySelector(".rail");
  if (!rail || !("IntersectionObserver" in window)) return;

  var pastTop = false;
  var atFares = false;
  function sync() { rail.classList.toggle("on", pastTop && !atFares); }

  var top = document.getElementById("board-go");
  if (top) {
    new IntersectionObserver(function (es) {
      pastTop = !es[0].isIntersecting; sync();
    }).observe(top);
  }
  var fares = document.getElementById("fares");
  if (fares) {
    new IntersectionObserver(function (es) {
      atFares = es[0].isIntersecting; sync();
    }, { threshold: 0 }).observe(fares);
  }
})();
