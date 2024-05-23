document.addEventListener("DOMContentLoaded", () => {
  const dexons = document.getElementById("dexons");
  const dexony = document.getElementById("dexony");
  const dexont = document.getElementById("dexont");
  const back = document.getElementById("back");
  dexons.addEventListener("click", () => {
      window.location.href = "https://steamcommunity.com/profiles/76561199039237595";
  });
  dexony.addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/@dexon9046";
  });
  dexont.addEventListener("click", () => {
      window.location.href = "https://t.me/Dexoneer";
  });
  back.addEventListener("click", () => {
      window.location.href = "index.html";
  });
});
