(function () {
  // ---- Header scroll state ----
  var header = document.getElementById("siteHeader");
  var onScroll = function () {
    if (window.scrollY > 60) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Mobile menu ----
  var menuBtn = document.getElementById("menuBtn");
  var panel = document.getElementById("mobilePanel");
  menuBtn.addEventListener("click", function () {
    var open = panel.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  panel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      panel.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // ---- Scroll reveal ----
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 },
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      obs.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("in");
    });
  }

  // ---- Contact form -> WhatsApp handoff ----
  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    var msg = form.message.value.trim();
    var text =
      "नमस्कार, माझे नाव " +
      name +
      " आहे. माझा मोबाईल नंबर " +
      phone +
      ". " +
      msg;
    window.open(
      "https://wa.me/917775034111?text=" + encodeURIComponent(text),
      "_blank",
    );
  });
})();
