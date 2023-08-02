import { cardsSuitsArr } from "./wholeCardsSuits.js";

export function renderLevel(card, appEl) {
    let levelGame = card.value;
    const cardsFlipSide = [];

    function getCardsFlipSideArr(levelGame) {
        for (let i = 0; i < levelGame; i++) {
            cardsFlipSide.push(
                `<img id="cards-click" class="game_card__flip" src="./img/рубашка.png">`,
            );
        }
        return cardsFlipSide;
    }

    getCardsFlipSideArr(levelGame);


    const appHTML = `
    <div class="game_card__box">
            <header class="header">
                <div class="header_game__timer">  
                   <div class="game_timer">
                       <p class="game_timer__item">min</p>
                       <p class="game_timer__item">sek</p>
                   </div>   
                    <p class="game_timer__time">00.00</p>         
                </div>
                <button class="header_game__button" id="submit-button" type="submit">Начать заново</button>
            </header>
            <div class="game_card">
            ${cardsFlipSide}
            </div>
        </div>`;

    appEl.innerHTML = appHTML;

    let button = document.querySelector('.game_card__flip');

    button.addEventListener('click', (event) => {
        event.preventDefault();

        const appHTML = `
         <div class="game_card__box">
            <header class="header">
                <div class="header_game__timer">  
                   <div class="game_timer">
                       <p class="game_timer__item">min</p>
                       <p class="game_timer__item">sek</p>
                   </div>   
                    <p class="game_timer__time">00.00</p>         
                </div>
                <button class="header_game__button" id="submit-button" type="submit">Начать заново</button>
            </header>
            <div class="game_card">
            ${cardsSuitsArr}
            </div>
        </div>`;

        appEl.innerHTML = appHTML;
    });
}
