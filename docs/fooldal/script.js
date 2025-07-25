window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const musicControl = document.getElementById("music-control");
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");

  if (music) {
    music.volume = 0.2;

    // Induljon el a zene, ha engedélyezett a böngészőben
    music.play().catch(() => {
      // Ha nem engedélyezett, akkor várunk user interakcióra
    });

    // Ha a user kattint, próbáljuk elindítani a zenét (mobil böngészők miatt)
    document.body.addEventListener(
      "click",
      () => {
        if (music.paused) {
          music.play().catch((e) => console.log("Zeneindítás sikertelen:", e));
        }
      },
      { once: true }
    );
  }

  if (musicControl) {
    musicControl.addEventListener("click", () => {
      if (music.paused) {
        music.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        musicControl.title = "Zene leállítása";
      } else {
        music.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        musicControl.title = "Zene lejátszása";
      }
    });
  }

  // Scroll nyíl gomb: smooth scroll a vezetoseg szekcióhoz
  const scrollArrow = document.getElementById("scroll-arrow");
  if (scrollArrow) {
    scrollArrow.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById("vezetoseg");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
