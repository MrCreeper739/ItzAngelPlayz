var scrnH = document.documentElement.clientHeight;
var scrnW = document.documentElement.clientWidth;

const header  = document.getElementsByClassName("header");
const square  = document.getElementsByClassName("sqr");
const dash    = document.getElementsByClassName("dash");
const words   = document.getElementsByClassName("words");
const sqrMid  = document.getElementById("sqrMid");
const logo    = document.getElementById("logo");
//kit Constant Is Defined In Another JS File

change();

window.onresize = function() {

    scrnH = document.documentElement.clientHeight;
    scrnW = document.documentElement.clientWidth;

    change();
}

function PC() {

    header[0].style.height = `600px`;
    
    sqrMid.style.width = `77%`;

    kit.style.height = `450%`;
    kit.style.backgroundSize = `192px`;

    logo.style.lineHeight = `580px`;
    logo.style.fontSize = `6vw`;

    for (let i = 0; i < dash.length; i++) {

        dash[i].style.width = `60%`;
        dash[i].style.margin = `0`;
        dash[i].style.transform = `skewX(-5deg) translateX(-2%)`;
    }

    for (let i = 0; i < words.length; i++) {
        words[i].style.transform = `skewX(5deg)`;
    }

    for (let i = 0; i < square.length; i++) {
        square[i].style.display = `block`;
    }
}

function WideMonitor() {

    header[0].style.height = `100vh`;

    sqrMid.style.width = `77%`;

    kit.style.height = `450%`;
    kit.style.backgroundSize = `192px`;

    logo.style.lineHeight = `100vh`;
    logo.style.fontSize = `6vw`;

    for (let i = 0; i < dash.length; i++) {

        dash[i].style.width = `60%`;
        dash[i].style.margin = `0`;
        dash[i].style.transform = `skewX(-5deg) translateX(-2%)`;
    }
    
    for (let i = 0; i < words.length; i++) {
        words[i].style.transform = `skewX(5deg)`;
    }

    for (let i = 0; i < square.length; i++) {
        square[i].style.display = `block`;
    }
}

function TallMonitor() {

    header[0].style.height = `30vh`;

    sqrMid.style.width = `100%`;

    kit.style.height = `225%`;
    kit.style.backgroundSize = `70px`;

    logo.style.lineHeight = `30vh`;
    logo.style.fontSize = `10vw`;

    for (let i = 0; i < dash.length; i++) {

        dash[i].style.width = `100%`;
        dash[i].style.margin = `0 0 35vh 0`;
        dash[i].style.transform = `skewX(0)`;
    }
    
    for (let i = 0; i < words.length; i++) {
        words[i].style.transform = `skewX(0)`;
    }

    for (let i = 0; i < square.length; i++) {
        square[i].style.display = `none`;
    }
}

function NormalPhone() {

    header[0].style.height = `40vh`;

    sqrMid.style.width = `100%`;

    kit.style.height = `225%`;
    kit.style.backgroundSize = `70px`;

    logo.style.lineHeight = `40vh`;
    logo.style.fontSize = `10vw`;

    for (let i = 0; i < dash.length; i++) {

        dash[i].style.width = `100%`;
        dash[i].style.margin = `0 0 35vh 0`;
        dash[i].style.transform = `skewX(0)`;
    }
    
    for (let i = 0; i < words.length; i++) {
        words[i].style.transform = `skewX(0)`;
    }

    for (let i = 0; i < square.length; i++) {
        square[i].style.display = `none`;
    }
}

function change() {

    if (scrnH*2 < scrnW) {
        
        WideMonitor();

    }else if (scrnH <= scrnW) {
        
        PC();

    }else if (scrnW*2 < scrnH) {
        
        TallMonitor();

    }else if (scrnW < scrnH) {
        
        NormalPhone();
    }
}