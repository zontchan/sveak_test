//Toggle menu

const menu = document.querySelector('.sidebar__menu-toggle');
const sidebar = document.querySelector('.sidebar');
menu.addEventListener('click', () => {
    menu.classList.toggle('opened');
    sidebar.classList.toggle('opened');
});


//Active menu item toggle
    const sidebarItems = document.querySelectorAll('.sidebar__item');

    sidebarItems.forEach(function (item) {
        item.addEventListener('click', function () {
            sidebarItems.forEach(function (el) {
                el.classList.remove('sidebar__item-active');
            });
            item.classList.add('sidebar__item-active');
        });
    });




//Hide partial row

function hideRow (cardsInRow) {
    const cardsList = document.querySelector('.main__content-cards-list');
    const cards = Array.from(cardsList.children);

    const remainingCards = cards.length % cardsInRow;
    console.log(remainingCards)

    cards.forEach((c) => {
        c.classList.remove('hide');
    })
    if (remainingCards > 0) {
        let startIndex = cards.length - remainingCards;
        for (let j = 0; j < remainingCards; j++) {
            cards[startIndex + j].classList.add('hide');
        }
    }
}


function countCardsInRow() {
    const cardsList = document.querySelector('.main__content-cards-list');
    const card = cardsList.querySelector('li');
    let cardsInRow;

    const cardsListWidth = cardsList.offsetWidth;
    const cardWidth = card.offsetWidth;

    if(cardsListWidth >= 450 && cardsListWidth <= 490)  cardsInRow = 2;
    else cardsInRow = Math.floor(cardsListWidth / cardWidth);

    hideRow(cardsInRow);
}

window.onload = window.onresize = countCardsInRow;

