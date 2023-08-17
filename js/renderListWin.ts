import { renderFormSelectionLevel } from '../index';
import { playGame } from './play-game';

export function renderHtmlWin(
    goodGame: number,
    appEl: Element,
    min:HTMLElement|null, sec:HTMLElement|null
) {
    const modalWindowEl = document.getElementById('modal');
    const modalWindowHtml = `
    <div class="modal center">
        <div class="modal_content">
            <div class= "modal_content__img">
            ${
                goodGame === 0
                    ? '<img src="static/img/ImageWin.svg" alt="выиграл" />'
                    : '<img src="static/img/ImageLose.svg" alt="проиграл" />'
            }
            </div>
            <h3 class="modal_content__title">
                ${goodGame === 0 ? 'Вы выиграли!' : 'Вы проиграли'}
            </h3>
            <p class="modal_content__text">Затраченное время</p>
            <div class="modal_content__time">${min?.textContent}.${sec?.textContent}</div>
            <div class="modal_content__button">
                <button class="modal_content__button" id="modal-button" type="submit">Играть снова</button>
            </div>   
        </div>
    </div>
    `;

    if (modalWindowEl) {
        modalWindowEl.innerHTML = modalWindowHtml;
    }

    const modalEl: HTMLElement | null = document.querySelector('.modal');

    document
        .querySelector('.modal_content__button')
        ?.addEventListener('click', () => {
            renderFormSelectionLevel(appEl, playGame);

            if (modalEl) {
                modalEl.style.display = 'none';
            }
        });
}
