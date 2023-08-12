import { renderFormSelectionLevel } from '../index';
import { playGame } from './play-game';

export function renderListHtml(currentCardArr: string[], appEl:Element) {
    const appHTML = `
    <div class="game_card__box">
            <header class="header">
                <div class="header_game__timer">  
                   <div class="game_timer">
                       <p class="game_timer__item">min</p>
                       <p class="game_timer__item">sek</p>
                   </div>
                   <div class="game_timer__time">
                        <span class="interval minutes">00</span>
                        <span class="interval_point">.</span>
                        <span class="interval seconds">00</span>    
                   </div>    
                </div>
                <button class="header_game__button" id="submit-button" type="submit">Начать заново</button>
            </header>
            <div class="game_card" id="suits">
            ${currentCardArr.join('')}
            </div>
        </div>`;

    appEl.innerHTML = appHTML;

    const min:Element|null = document.querySelector('.minutes');
    const sec:Element|null = document.querySelector('.seconds');

    let interval;
    let minutes:number = 0;
    let seconds:number = 0;
    
    const startTimer = () => {
        seconds++;

        if (seconds > 59) {
            minutes++;
            (min as HTMLElement).innerHTML = minutes.toString().padStart(2, "0");
            seconds = 0;
        }

        (sec as HTMLElement).innerHTML = seconds.toString().padStart(2, "0");
    }
    startTimer();

    interval = setInterval(startTimer,1000);
    
    //let stopTimer = clearInterval(interval);

    const restartButton:Element|null = document.querySelector(".header_game__button");

    restartButton?.addEventListener("click", () => {
        minutes = 0;
        seconds = 0;
        renderFormSelectionLevel(appEl, playGame);
    });
}



