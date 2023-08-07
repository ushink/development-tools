export function renderListHtml(currentCardArr, appEl) {
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
            <div class="game_card" id="suits">
            ${currentCardArr.join('')}
            </div>
        </div>`;

    appEl.innerHTML = appHTML;
}
