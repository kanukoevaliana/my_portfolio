import { functionDeclaration } from "babel-types";

var mod_1 = document.querySelector('.mod-1'),
mod_2 = document.querySelector('.mod-2'),
mod_3 = document.querySelector('.mod-3'),
mod_4 = document.querySelector('.mod-4');

function move(block, windowScroll, percent){
    const prlx = windowScroll / percent + '%';
    const tran = 'translate3d(0,-'+prlx+',0)';
    const style = block.style;
    style.transform = tran;
    style.webkitTransform = tran;
}

function init(wScroll){
    move(mod_1, wScroll, 40);
    move(mod_2, wScroll, 65);
    move(mod_3, wScroll, 70);
    move(mod_4, wScroll, 85);
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    init(wScroll);
});