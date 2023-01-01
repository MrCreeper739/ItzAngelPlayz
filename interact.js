const cont2 = document.getElementsByClassName("cont2");
const names = document.getElementsByClassName("names");

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

    for (let i = 0; i < names.length; i++) {
        
        names[i].style.height = `2vw`;
        names[i].style.backgroundColor = `#181818`;
        names[i].style.color = `white`;
    }
}