import { createCardArray, defaultCardArray } from './card-game';
import { renderListHtml } from './listHtml-game';
import { renderHtmlWin } from './renderListWin';

export function playGame(lengthArray:number, appEl:Element) {
    //let lengthArray = card.value;
    let currentCardArr:string[] = [];

    let flag:boolean = true;
    let goodGame:boolean = false;

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

    const cardsHeader:HTMLElement|null = document.querySelector(".header_game__timer");
    

    function showCoverCard() {
        renderListHtml(currentCardArr, appEl);
        const suits = document.getElementById('suits')
        
        if (suits) {
            
            let itemCards = suits.children;
            const itemCardsArray = Array.from(itemCards);
    
            for (const itemCard of itemCardsArray) {
    
                itemCard.addEventListener('click', () => {
    
                    let cardIndex = Number((itemCard as HTMLElement).dataset.index);
    
                    if (flag && cardIndex) {
                        firstCard = cardIndex;
                        goodGame = !goodGame; 

                        currentCardArr[cardIndex] = sortCardArray[cardIndex];
                        showCoverCard();
                    } else {
                        secondCard = cardIndex;
                        goodGame = !goodGame;
                        
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

            currentCardArr[secondCard] = sortCardArray[secondCard];
            goodGame === true
            ? renderHtmlWin(goodGame,appEl)
            : showCoverCard
        } else {
            currentCardArr = sortCardArray;
            renderHtmlWin(goodGame, appEl);
            flag = false;
        }
    }
}
