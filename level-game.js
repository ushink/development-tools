export function renderLevel(card, appEl){
    const appHTML = `
    <div class="center">
        <h2 class="box-game__title">Скоро здесь будет: ${card.value} карт</h2>
    </div>`;

    appEl.innerHTML = appHTML;
}