document.addEventListener("DOMContentLoaded", () => {
  const droms = document.getElementById("droms");
  const dromy = document.getElementById("dromy");
  const dromt = document.getElementById("dromt");
  const back = document.getElementById("back");
  droms.addEventListener("click", () => {
      window.location.href = "https://steamcommunity.com/id/dexonbot/";
  });
  dromy.addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/channel/UCkihKmlWLJyOGpk4G43hnfA";
  });
  dromt.addEventListener("click", () => {
      window.location.href = "https://t.me/drom6906";
  });
  back.addEventListener("click", () => {
      window.location.href = "index.html";
  });
});
