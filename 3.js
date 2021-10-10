// ЦЕ ПІД ОДНУ КАРТОЧКУ, ниже переписав під три

// const card = document.querySelector('.card');
// card.addEventListener('mousemove', rotate)

// function rotate(event){
// const cardItem =  this.querySelector('.card-item');
// // cardItem.innerText = event.offsetX + ' ' + event.offsetY; // оце виводило б коордінати внутрі карти відносно карти
// const halfHeight = cardItem.offsetHeight / 2; // шукали центр карти..
// console.log(halfHeight)
// cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 5
//  +'deg) rotateY(' + (event.offsetX - halfHeight) / 5 + 'deg)'
// }

// ! ! ! Це під три карточкі

const cards = document.querySelectorAll('.card');
// cards[0].addEventListener('mousemove', rotate)  !!! отак можна по елементам работать з  querySelectorAll
// ПЕРЕБІРАЄМ КАРТОЧКІ ЦИКЛОМ:
for (let i = 0; i < cards.length; i++){
    const card = cards[i];
    card.addEventListener('mousemove', startRotate); // при наведенні мишкой
    card.addEventListener('mouseout', stopRotate); // при відведенні мишкой
}

function startRotate(event){
const cardItem =  this.querySelector('.card-item');
// cardItem.innerText = event.offsetX + ' ' + event.offsetY; // оце виводило б коордінати внутрі карти відносно карти
const halfHeight = cardItem.offsetHeight / 2; // шукали центр карти..
const halfWidth = cardItem.offsetWidth / 2; // шукали центр карти..
console.log(halfHeight)
cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 5
 +'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)'
}

function stopRotate(event){
const cardItem =  this.querySelector('.card-item');
cardItem.style.transform = 'rotate(0)';
}