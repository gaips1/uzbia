document.addEventListener("DOMContentLoaded", () => {
    const gaipsb = document.getElementById("gaipsb");
    const drom = document.getElementById("drom");
    const dexon = document.getElementById("dexon");
    const nekit = document.getElementById("nekit");
    const skrepka = document.getElementById("skrepka");

    gaipsb.addEventListener("click", () => {
        window.location.href = "gaips.html";
    });
    drom.addEventListener("click", () => {
        window.location.href = "drom.html";
    });
    dexon.addEventListener("click", () => {
        window.location.href = "dexon.html";
    });
    nekit.addEventListener("click", () => {
        window.location.href = "nekit.html";
    });
    skrepka.addEventListener("click", () => {
        window.location.href = "skrepka.html";
    });
});
