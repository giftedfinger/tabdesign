import {data} from 'data.js';
console.log(data.co) 

const showHideAll = (list) => {
    for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('show');
        list[i].classList.add('hide'); // depending on what you're doing
    }
}

window.onload = function () {
    let innerDiv = document.getElementsByClassName("inner-description");
    let clicked = document.querySelectorAll('.show-hide-description');
    clicked.forEach((item, i) => {
        let clickedId = item.id;
        document.querySelector(`#${clickedId}`).addEventListener('click', () => {
            let clickedIdDescription = document.getElementById(`${clickedId}-description`);
            if (clickedIdDescription.classList.contains('show')) {
                showHideAll(innerDiv)
            } else {
                showHideAll(innerDiv)
                clickedIdDescription.classList.remove('hide');
                clickedIdDescription.classList.add('show');
            }
        })
    });