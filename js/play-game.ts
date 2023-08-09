import { createCardArray, defaultCardArray } from './card-game';
import { renderListHtml } from './listHtml-game';

export function playGame(lengthArray:number, appEl:Element) {
    //let lengthArray = card.value;
    let currentCardArr:string[] = [];

    let flag:boolean = true;

    let firstCard:number = 0;
    let secondCard:number = 0;

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
        const suits = document.getElementById('suits')
        
        if (suits) {
            
            let itemCards = suits.children;
            const itemCardsArray = Array.from(itemCards);
    
            for (const itemCard of itemCardsArray) {
    
                itemCard.addEventListener('click', () => {
    
                    let cardIndex = Number((itemCard as HTMLElement).dataset.index);
                    //let duplicate = itemCard.dataset.index;
    
                    if (flag && cardIndex) {
                        firstCard = cardIndex;
                        currentCardArr[cardIndex] = sortCardArray[cardIndex];
                        showCoverCard();
                    } else {
                        secondCard = cardIndex;
                        compareCard(firstCard, secondCard);
                        showCoverCard();
                    }
                    flag = !flag;
                });
            }
        }
    }
    setTimeout(showCoverCard, 5000);

    function compareCard(firstCard:number, secondCard:number) {
        if (sortCardArray[firstCard] === sortCardArray[secondCard]) {
            currentCardArr = sortCardArray;
            alert('Выиграл');
        } else {
            currentCardArr = sortCardArray;
            alert('Проиграл');
        }
    }
}
