const gold = document.querySelector(".gold");


window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const movement = scroll / 10;


    gold.style.setProperty(
        "--lightX",
        `${50 + Math.sin(scroll / 300) * 25}%`
    );


    gold.style.setProperty(
        "--lightY",
        `${20 + scroll / 30}%`
    );


    gold.style.setProperty(
        "--goldX",
        `${40 + movement}%`
    );


    gold.style.setProperty(
        "--goldY",
        `${50 + movement / 2}%`
    );

});