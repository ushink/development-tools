import { createCardArray, defaultCardArray } from './card-game.js';
import { renderListHtml } from './listHtml-game.js';

export function playGame(card, appEl) {
    let lengthArray = card.value;
    let currentCardArr = [];

    let flag = true;

    let firstCard = null;
    let secondCard = null;

    let sortCardArray = createCardArray
        .sort(() => Math.random() - 0.5)
        .slice(0, lengthArray / 2);
    sortCardArray = sortCardArray
        .concat(sortCardArray)
        .sort(() => Math.random() - 0.5);

    let sortDefaultCardArr = defaultCardArray.slice(0, lengthArray);
    currentCardArr = sortDefaultCardArr;

    renderListHtml(sortCardArray, appEl);

    function showCoverCard() {
        renderListHtml(currentCardArr, appEl);

        const suits = document.getElementById('suits');
        let itemCards = suits.children;

        for (const itemCard of itemCards) {
            itemCard.addEventListener('click', () => {
                let cardIndex = itemCard.dataset.index;
                //let duplicate = itemCard.dataset.index;

                if (flag) {
                    firstCard = cardIndex;
                    currentCardArr[cardIndex] = sortCardArray[cardIndex];
                    showCoverCard();
                } else {
                    secondCard = cardIndex;
                    compareCard(firstCard, secondCard);
                    showCoverCard(); //нет картинки
                }
                flag = !flag;
            });
        }
    }
    setTimeout(showCoverCard, 5000);

    function compareCard(firstCard, secondCard) {
        if (sortCardArray[firstCard] === sortCardArray[secondCard]) {
            currentCardArr = sortCardArray;
            alert('Выиграл');
        } else {
            currentCardArr = sortCardArray;
            alert('Проиграл');
        }
    }
}
