'use strict';

regionA.mouseover((e) => {
    console.log(e.target);
    e.target.style.opacity = .5;
    e.target.style.fill = '#326789';
    e.target.style.stroke = '#000000';
});

regionA.mouseout( (e) => {
    e.target.style.opacity = 1;
    console.log(`x: ${e.pageX} y: ${e.pageY}`);
})