var H, W;
var scrnH = document.documentElement.clientHeight;
var scrl = document.documentElement.scrollTop;
var open = false;

const topBG_cont = document.getElementsByClassName("topBG_cont");
const rec1       = document.getElementsByClassName("rec1");
const rec2       = document.getElementsByClassName("rec2");
const rec3       = document.getElementsByClassName("rec3");
const rec4       = document.getElementsByClassName("rec4");
const squr       = document.getElementsByClassName("squr");
const angel      = document.getElementsByClassName("angel");
const logo       = document.getElementsByClassName("logo");
const section    = document.getElementsByClassName("section");
const dash       = document.getElementsByClassName("dash");
const left       = document.getElementsByClassName("left");
const right      = document.getElementsByClassName("right");
const selectS    = document.getElementsByClassName("selectS");
const select     = document.getElementsByClassName("navBar");
const names      = document.getElementsByClassName("names");
const cont2      = document.getElementsByClassName("cont2");
const SNB        = document.getElementById("sideNavBar");
const black      = document.getElementById("black");
const kit        = document.getElementById("kit");

window.onresize = function() {

    scrnH = document.documentElement.clientHeight;

    websiteRes();
}

window.onscroll = function() {

    scrl = document.documentElement.scrollTop;

    kitMove();
}

function MrCreeper() {

    cont2[0].style.backgroundColor = `#ccfcc3`;
    names[0].style.backgroundColor = `#ccfcc3`;
    cont2[0].style.color = `black`;
    names[0].style.color = `black`;
    cont2[0].innerHTML = "An Egyptian Computer nerd, all the project code are done by me. <br><br>\
    Here's my Discord : <br>\
    MrCreeper#1339";
}
function Kristina() {

    cont2[0].style.backgroundColor = `#c8a2c8`;
    names[1].style.backgroundColor = `#c8a2c8`;
    cont2[0].style.color = `black`;
    names[1].style.color = `black`;
    cont2[0].innerHTML = "Hi I'm Kristina, I'm an artist who was a part in this project, <br> most of the artwork you see here are done by me in my slighlty chibi style. <br>\
    If you want to DM me here's my Discord : <br>\
    -Kristina-#2521 <br>\
    Thanks for reading.";
}
function Hana() {

    cont2[0].style.backgroundColor = `#ff7a7a`;
    names[2].style.backgroundColor = `#ff7a7a`;
    cont2[0].style.color = `black`;
    names[2].style.color = `black`;
    cont2[0].innerHTML = "Hihi! I'm Hana who only drew one but I'm also a part of this project! <br> Please subscribe to my beloved Angel. 🙏<br>\
    If you want to DM me, here's my discord <3 <br>\
    Hana !!#8503";
}

function reSize() {

    names[0].style.height = `20%`;
    names[1].style.height = `20%`;
    names[2].style.height = `20%`;
}

function unSize() {

    cont2[0].style.color = `white`;
    cont2[0].style.backgroundColor = `black`;
    cont2[0].innerHTML = "idk what to type here so hi :)";

    names[0].style.height = `2vw`;
    names[0].style.backgroundColor = `#181818`;
    names[0].style.color = `white`;

    names[1].style.height = `2vw`;
    names[1].style.backgroundColor = `#181818`;
    names[1].style.color = `white`;

    names[2].style.height = `2vw`;
    names[2].style.backgroundColor = `#181818`;
    names[2].style.color = `white`;
}

function openSideNavBar() {


    if (open == false) {
        SNB.style.right = `0vw`;
        black.style.display = `block`;

        open = true;
    } else {
        SNB.style.right = `-100vw`;
        black.style.display = `none`;
        open = false;
    }
}

websiteRes();

function modes(mode) {

    if (mode == "bigPhone") {

        selectS[1].style.display = `block`;

        topBG_cont[0].style.height = `600px`;

        rec1[0].style.display = `none`;
        rec2[0].style.display = `none`;
        rec3[0].style.display = `none`;
        rec4[0].style.display = `none`;

        squr[0].style.width = `120%`;

        logo[0].style.transform = `rotateZ(0deg)`;
        logo[0].style.margin = `0 5vw`;
        logo[0].style.width = `85%`;

        window.removeEventListener ('scroll', scrlFunction);

        optimizeDivs(true);

    } else if (mode == "phone") {

        selectS[1].style.display = `block`;

        topBG_cont[0].style.height = `600px`;

        rec1[0].style.display = `none`;
        rec2[0].style.display = `none`;
        rec3[0].style.display = `none`;
        rec4[0].style.display = `none`;

        squr[0].style.width = `120%`;

        logo[0].style.transform = `rotateZ(0deg)`;
        logo[0].style.margin = `0 10vw`;
        logo[0].style.width = `85%`;

        angel[0].style.width = ``;

        window.removeEventListener ('scroll', scrlFunction);
        
        optimizeDivs(true);

    } else if (mode == "wideScreen") {

        selectS[1].style.display = `none`;

        topBG_cont[0].style.height = `100vh`;

        rec1[0].style.display = `block`;
        rec2[0].style.display = `block`;
        rec3[0].style.display = `block`;
        rec4[0].style.display = `block`;

        squr[0].style.width = `60%`;

        logo[0].style.transform = `rotateZ(0deg)`;
        logo[0].style.margin = `0 20vw`;
        logo[0].style.width = `60%`;

        window.addEventListener ('scroll', scrlFunction);

        optimizeDivs(false);

        open = true;

        openSideNavBar();

    } else if (mode == "pc") {

        selectS[1].style.display = `none`;

        topBG_cont[0].style.height = `600px`;

        rec1[0].style.display = `block`;
        rec2[0].style.display = `block`;
        rec3[0].style.display = `block`;
        rec4[0].style.display = `block`;

        squr[0].style.width = `60%`;

        logo[0].style.transform = `rotateZ(7deg)`;
        logo[0].style.margin = `0 40vw`;
        logo[0].style.width = `55%`;

        window.addEventListener ('scroll', scrlFunction);

        optimizeDivs(false);

        open = true;

        openSideNavBar();
    }
}

function websiteRes() {

    H = document.documentElement.clientHeight;
    W = document.documentElement.clientWidth;

    if (H > W * 2) {

        modes("bigPhone");

    } else if (H > W || H == W) {

        modes("phone");

    } else if (W > H * 2) {

        modes("wideScreen");

    } else if (W > H) {

        modes("pc");
    }

    selectS[1].style.display = `none`;
}

console.log("What are you opening the console for?");

function optimizeDivs(turnON) {

    if (turnON == true) {
        
        for (let i = 0; i < section.length; i++) {

            section[i].style.display = `block`;

            dash[i].style.display = `none`;

            left[i].style.width     = `100%`;
            left[i].style.textAlign = `center`;
            left[i].style.height    = `30vh`;
            right[i].style.width    = `100%`;
            right[i].style.height   = `30vh`;
        }

    } else {

        for (let i = 0; i < section.length; i++) {

            section[i].style.display = `flex`;

            dash[i].style.display = `block`;

            left[i].style.width     = `58%`;
            left[i].style.textAlign = `left`;
            left[i].style.height    = `50vh`;
            right[i].style.width    = `44%`;
            right[i].style.height   = `50vh`;
        }
    }
}

function scrlFunction() {
    
    squr[0].style.width = `${scrl*0.05+60}%`;
}

function kitMove() {

    if (scrl > scrnH / 2) {

        kit.style.margin = `70px 0`;
        kit.style.transform = `rotateX(180deg)`;
    } else if (scrl < scrnH / 4) {

        kit.style.margin = `-100px 0`;
        kit.style.transform = `rotateX(0)`;
    }
}