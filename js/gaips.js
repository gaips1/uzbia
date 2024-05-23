document.addEventListener("DOMContentLoaded", () => {
  const gaipss = document.getElementById("gaipss");
  const gaipsy = document.getElementById("gaipsy");
  const gaipst = document.getElementById("gaipst");
  const back = document.getElementById("back");
  gaipss.addEventListener("click", () => {
      window.location.href = "https://steamcommunity.com/id/gaips/";
  });
  gaipsy.addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/channel/UCIXLcJwQqJt3g_cqcczkgZw";
  });
  gaipst.addEventListener("click", () => {
      window.location.href = "https://t.me/gaips";
  });
  back.addEventListener("click", () => {
      window.location.href = "index.html";
  });
});
