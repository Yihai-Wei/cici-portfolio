// about-particles.js
document.addEventListener("DOMContentLoaded", async () => {
  await tsParticles.load({
    id: "tsparticles",
    options: {
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: "transparent" },
      particles: {
        number: { value: 80 },
        color: { value: ["#ffb347", "#ffcc33", "#ff9900", "#ffffff"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.2, max: 0.8 },
          animation: { enable: true, speed: 1.5, sync: false },
        },
        size: {
          value: { min: 1, max: 3 },
          animation: { enable: true, speed: 3, sync: false },
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
          direction: "none",
          random: true,
          straight: false,
          outModes: "out",
          gravity: {
            enable: true,
            acceleration: 0.6,
          },
        },
        life: {
          duration: { value: 3 },
          count: 0,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
        },
      },
      detectRetina: true,
      emitters: {
        direction: "none",
        life: { count: 1, duration: 0.3 },
        rate: { delay: 0.05, quantity: 5 },
        position: { x: 50, y: 50 }, // center of screen
        size: { width: 10, height: 10 },
      },
    },
  });
});
