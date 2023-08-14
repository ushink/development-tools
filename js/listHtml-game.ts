import { renderFormSelectionLevel } from '../index';
import { playGame } from './play-game';

export function renderListHtml(currentCardArr: string[], appEl: Element) {
    const appHTML = `
    <div class="game_card__box">
            <header class="header">
                <div class="header_game__timer">  
                   <div class="game_timer">
                       <p class="game_timer__item">min</p>
                       <p class="game_timer__item">sek</p>
                   </div>
                   <div class="game_timer__time">
                        <span class="interval" id="minutes">00</span>
                        <span class="interval_point">.</span>
                        <span class="interval" id="seconds">00</span>    
                   </div>    
                </div>
                <button class="header_game__button" id="submit-button" type="submit">Начать заново</button>
            </header>
            <div class="game_card" id="suits">
            ${currentCardArr.join('')}
            </div>
        </div>`;

    appEl.innerHTML = appHTML;

    const restartButton: Element | null = document.querySelector(
        '.header_game__button',
    );

    restartButton?.addEventListener('click', () => {
        renderFormSelectionLevel(appEl, playGame);
    });
}
