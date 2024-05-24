document.addEventListener("DOMContentLoaded", () => {
  const nekits = document.getElementById("nekits");
  const nekity = document.getElementById("nekity");
  const nekitt = document.getElementById("nekitt");
  const back = document.getElementById("back");
  nekits.addEventListener("click", () => {
      window.location.href = "https://steamcommunity.com/id/nekitplay155";
  });
  nekity.addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/@nekitplay155";
  });
  nekitt.addEventListener("click", () => {
      window.location.href = "https://t.me/nekitplay155";
  });
  back.addEventListener("click", () => {
      window.location.href = "index.html";
  });
});
