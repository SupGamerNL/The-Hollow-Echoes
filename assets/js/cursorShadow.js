document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  document.querySelectorAll(".cursor-shadow").forEach(el => {
    el.style.textShadow = `${x}px ${y}px 6px rgba(0, 0, 0, 0.9)`;
  });
});
