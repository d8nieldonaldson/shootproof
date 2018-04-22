'use strict';

const triggers = Array.from(document.querySelectorAll('.trigger'));
const nested = Array.from(document.querySelectorAll('.nested-list'));

triggers.forEach( function(item){
    item.addEventListener('click', function(e){
        nested.forEach( function(item){
            item.hidden = false;
        });
        item.querySelector('.carat').classList.toggle('closed');
        item.nextSibling.classList.toggle('opened');
        console.log('clicked');
    })
})