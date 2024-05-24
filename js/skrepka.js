document.addEventListener("DOMContentLoaded", () => {
  const skrepkas = document.getElementById("skrepkas");
  const skrepkay = document.getElementById("skrepkay");
  const skrepkat = document.getElementById("skrepkat");
  const back = document.getElementById("back");
  skrepkas.addEventListener("click", () => {
      window.location.href = "https://steamcommunity.com/id/skrepka4yrka/";
  });
  skrepkay.addEventListener("click", () => {
      window.location.href = "https://www.youtube.com/channel/UCmWH4KQz5Aec1p_E6-G3wjA";
  });
  skrepkat.addEventListener("click", () => {
      window.alert("У него нет тг :(")
  });
  back.addEventListener("click", () => {
      window.location.href = "index.html";
  });
});
