import './style.css';
import { playGame } from './js/play-game.js';

let appEl = document.getElementById('app');

function renderFormSelectionLevel(appEl, renderListHtml) {
    const appHTML = `
    <div class="center">
    <form class="difficulty_box" id="form-selection" action="#">
        <h3 class="difficulty_box__title">
            Выбери<br>сложность
        </h3>
            <div class="difficulty_box__choice">
                <input class="button_level__radio" type="radio" id="levelChoice1" name="level" value="6" checked />
                <label for="levelChoice1" class="button_level">1</label>

                <input class="button_level__radio" type="radio" id="levelChoice2" name="level" value="12" />
                <label for="levelChoice2" class="button_level">2</label>

                <input class="button_level__radio" type="radio" id="levelChoice3" name="level" value="18" />
                <label for="levelChoice3" class="button_level">3</label>
            </div>
            <div class="difficulty_box__button">
                <button type="submit" id="button-submit" class="button_start">Старт</button>
            </div>
    </form>
    </div>`;

    appEl.innerHTML = appHTML;

    document
        .getElementById('form-selection')
            .addEventListener('submit', (event) => {
                event.preventDefault();

                let level = document.querySelectorAll('.button_level__radio');

                for (const card of level) {
                    if (card.checked) {
                        renderListHtml(card, appEl);
                    }
                }
            });

}

renderFormSelectionLevel(appEl, playGame);