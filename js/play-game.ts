import { createCardArray, defaultCardArray } from './card-game';
import { renderListHtml } from './listHtml-game';
import { renderHtmlWin } from './renderListWin';
import { gameTimer } from './timer-game';

export function playGame(lengthArray:number, appEl:Element) {
    //let lengthArray = card.value;
    let currentCardArr:string[] = [];

    let flag:boolean = true;
    let goodGame:boolean = false;

    let firstCard:number = 0;
    let secondCard:number = 0;

    let seconds:number = 0;
    let minutes:number = 0;
    let timeStop:boolean = false;
    let id:NodeJS.Timer;

    let sortCardArray = createCardArray
        .sort(() => Math.random() - 0.5)
        .slice(0, lengthArray / 2);
    sortCardArray = sortCardArray
        .concat(sortCardArray)
        .sort(() => Math.random() - 0.5);

    let sortDefaultCardArr = defaultCardArray.slice(0, lengthArray);
    currentCardArr = sortDefaultCardArr;

    renderListHtml(sortCardArray, appEl, minutes, seconds);

    setTimeout(() => {
        if (id) {
            id = gameTimer(minutes, seconds, timeStop);
        }
      }, 5000);

    function showCoverCard() {
        renderListHtml(currentCardArr, appEl, minutes, seconds);
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
                        goodGame = !goodGame;
                        currentCardArr[cardIndex] = sortCardArray[cardIndex];
                        showCoverCard();
                    } else {
                        secondCard = cardIndex;
                        goodGame = !goodGame;
                        compareCard(firstCard, secondCard);
                        showCoverCard();
                        timeStop = true;
                        clearInterval(id);
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
            timeStop = true;
            clearInterval(id);
            currentCardArr = sortCardArray;
            renderHtmlWin(goodGame, appEl)
            flag = false
        }
    }
}
