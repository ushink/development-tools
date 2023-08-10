
export function renderHtmlWin(goodGame) {
    
    let modalWindowEl = document.getElementById('modal');
    const modalWindowHtml = `
    <div class="modal center">
        <div class="modal_content">
            <div class= "modal_content__img">
            ${
                goodGame === true
                ? '<img src="static/img/ImageWin.svg" alt="выиграл" />'
                : '<img src="static/img/ImageLose.svg" alt="проиграл" />'
            }
            </div>
            <h3 class="modal_content__title">
                ${goodGame === true ? 'Вы выиграли!' : 'Вы проиграли'}
            </h3>
            <p class="modal_content__text">Затраченное время</p>
            <div class="modal_content__time">01.20</div>
            <div class="modal_content__button">
                <button class="modal_content__button" id="modal-button" type="submit">Играть снова</button>
            </div>   
        </div>
    </div>
    `
    
    if (modalWindowEl) {
        modalWindowEl.innerHTML = modalWindowHtml
    }

}