var scrnH = document.documentElement.clientHeight;
var scrnW = document.documentElement.clientWidth;

const clmn = document.getElementsByClassName("clmn");

change();

window.onresize = function() {

    scrnH = document.documentElement.clientHeight;
    scrnW = document.documentElement.clientWidth;

    change();
}

function PC() {

    for (let i = 0; i < clmn.length; i++) {
        clmn[i].style.width = `25%`;
    }
}

function WideMonitor() {

    for (let i = 0; i < clmn.length; i++) {
        clmn[i].style.width = `25%`;
    }
}

function TallMonitor() {

    for (let i = 0; i < clmn.length; i++) {
        clmn[i].style.width = `100%`;
    }
}

function NormalPhone() {

    for (let i = 0; i < clmn.length; i++) {
        clmn[i].style.width = `50%`;
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