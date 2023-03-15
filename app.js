const cardArray = [
    {
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'cake',
        img: 'images/cake.png'
    },
    {
        name: 'donut',
        img: 'images/donut.png'
    },
    {
        name: 'french-fries',
        img: 'images/french-fries.png'
    },
    {
        name: 'fried-egg',
        img: 'images/fried-egg.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'cake',
        img: 'images/cake.png'
    },
    {
        name: 'donut',
        img: 'images/donut.png'
    },
    {
        name: 'french-fries',
        img: 'images/french-fries.png'
    },
    {
        name: 'fried-egg',
        img: 'images/fried-egg.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
    
]

const cards = document.querySelectorAll('img');
const result = document.getElementById('score');
let cardsChosen=[];
let cardsChosenIds = [];
const cardsWon =[];
let count=0;
cardArray.sort(()=> 0.5 - Math.random());


cards.forEach(card =>{
        card.setAttribute('data-id',count);
        count++;
        card.addEventListener('click',flipCard);
})

function checkMatch(){
    
    if(cardsChosen[0]===cardsChosen[1])
    {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/cancel.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/cancel.png');
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);
    }
    else{
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.jpg');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.jpg');
    }
    cardsChosen = [];
    cardsChosenIds = [];
    result.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2)
    result.textContent= 'You found them all!'

}

function flipCard()
{
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);
        this.setAttribute('src' , cardArray[cardId].img);
        if(cardsChosen.length===2){
             setTimeout(checkMatch,500);
        }
}



