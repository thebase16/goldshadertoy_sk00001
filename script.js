
const gold = document.querySelector(".gold");

window.addEventListener("scroll", () => {

    const y = window.scrollY;

    gold.style.setProperty("--lightY", `${20 + y * 0.02}%`);
    gold.style.setProperty("--lightX", `${50 + Math.sin(y/250)*8}%`);

});
