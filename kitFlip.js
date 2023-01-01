var scrl  = document.documentElement.scrollTop;

const kit = document.getElementById("kit");

//scrnH Variable Is Defined In Another JS File

window.onscroll = function() {

    scrl = document.documentElement.scrollTop;

    if (scrl >= scrnH/2.5) {

        kit.style.transform = `rotateX(180deg)`;
    } else {

        kit.style.transform = `rotateX(0)`;
    }
}