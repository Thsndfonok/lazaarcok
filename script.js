document.getElementById("enter-btn").addEventListener("click", () => {
  const container = document.getElementById("fade-container");
  container.classList.add("fade-out");

  // 1 másodperc után átirányít
  setTimeout(() => {
    window.location.href = "main.html";
  }, 1000);
});
