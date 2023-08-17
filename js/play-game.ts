import { createCardArray, defaultCardArray } from './card-game';
import { renderListHtml } from './listHtml-game';
import { renderHtmlWin } from './renderListWin';
import { Timer } from './timer-game';

export function playGame(lengthArray: number, appEl: Element) {
    //let lengthArray = card.value;
    let currentCardArr: string[] = [];

    let flag: boolean = true;
    let goodGame: number = lengthArray;

    let firstCard: number = 0;
    let secondCard: number = 0;

    const minutes: number = 0;
    const seconds: number = 0;

    let TimeId: NodeJS.Timer;

    let sortCardArray = createCardArray
        .sort(() => Math.random() - 0.5)
        .slice(0, lengthArray / 2);
    sortCardArray = sortCardArray
        .concat(sortCardArray)
        .sort(() => Math.random() - 0.5);

    const sortDefaultCardArr = defaultCardArray.slice(0, lengthArray);
    currentCardArr = sortDefaultCardArr;

    if (appEl) {
        appEl.innerHTML = '';
        renderListHtml(sortCardArray, appEl);
    }

    const min = document.getElementById('minutes');
    const sec = document.getElementById('seconds');

    setTimeout(() => {
        TimeId = Timer(minutes, seconds, min, sec);
    }, 5000);

    function showCoverCard() {
        const suits: HTMLElement | null = document.getElementById('suits');

        if (suits) {
            suits.innerHTML = `${currentCardArr.join('')}`;
        }

        const itemCards = document.querySelectorAll('.game_card__flip');

        const itemCardsArray = Array.from(itemCards);

        for (const itemCard of itemCardsArray) {
            itemCard.addEventListener('click', () => {
                const cardIndex = Number(
                    (itemCard as HTMLElement).dataset.index,
                );
                const suits: HTMLElement | null =
                    document.getElementById('suits');

                if (flag && cardIndex) {
                    firstCard = cardIndex;
                    goodGame = --goodGame;
                    currentCardArr[cardIndex] = sortCardArray[cardIndex];

                    if (suits) {
                        suits.innerHTML = `${currentCardArr.join('')}`;
                    }

                    showCoverCard();
                } else {
                    secondCard = cardIndex;
                    goodGame = --goodGame;
                    currentCardArr[cardIndex] = sortCardArray[cardIndex];

                    showCoverCard();
                    compareCard(firstCard, secondCard);
                }
                flag = !flag;
            });
        }
    }
    setTimeout(showCoverCard, 5000);

    function compareCard(firstCard: number, secondCard: number) {
        if (sortCardArray[firstCard] === sortCardArray[secondCard]) {
            currentCardArr[secondCard] = sortCardArray[secondCard];

            if (goodGame === 0) {
                renderHtmlWin(goodGame, appEl, min,sec);
                clearInterval(TimeId);
            } else {
                showCoverCard;
            }
            
        } else {
            currentCardArr = sortCardArray;
            flag = false;
            renderHtmlWin(goodGame, appEl, min,sec);
            clearInterval(TimeId);
        }
    }
}
