export const createCardArray:string[] = [
    `<img class="game_card__flip" src="./static/img/6 бубны.png" alt="6 бубны">`,
    `<img class="game_card__flip" src="./static/img/6 крести.png" alt="6 крести">`,
    `<img class="game_card__flip" src="./static/img/6 пики.png" alt="6 пики">`,
    `<img class="game_card__flip" src="./static/img/6 черви.png" alt="6 черви">`,

    `<img class="game_card__flip" src="./static/img/7 бубны.png" alt="7 бубны">`,
    `<img class="game_card__flip" src="./static/img/7 крести.png" alt="7 крести">`,
    `<img class="game_card__flip" src="./static/img/7 пики.png" alt="7 пики">`,
    `<img class="game_card__flip" src="./static/img/7 черви.png" alt="7 черви">`,

    `<img class="game_card__flip" src="./static/img/8 бубны.png" alt="8 бубны">`,
    `<img class="game_card__flip" src="./static/img/8 крести.png" alt="8 крести">`,
    `<img class="game_card__flip" src="./static/img/8 пики.png" alt="8 пики">`,
    `<img class="game_card__flip" src="./static/img/8 черви.png" alt="8 черви">`,

    `<img class="game_card__flip" src="./static/img/9 бубны.png" alt="9 бубны">`,
    `<img class="game_card__flip" src="./static/img/9 крести.png" alt="9 крести">`,
    `<img class="game_card__flip" src="./static/img/9 пики.png" alt="9 пики">`,
    `<img class="game_card__flip" src="./static/img/9 черви.png" alt="9 черви">`,

    `<img class="game_card__flip" src="./static/img/10 бубны.png" alt="10 бубны">`,
    `<img class="game_card__flip" src="./static/img/10 крести.png" alt="10 крести">`,
    `<img class="game_card__flip" src="./static/img/10 пики.png" alt="10 пики">`,
    `<img class="game_card__flip" src="./static/img/10 черви.png" alt="10 черви">`,

    `<img class="game_card__flip" src="./static/img/валет бубны.png" alt="валет бубны">`,
    `<img class="game_card__flip" src="./static/img/валет крести.png" alt="валет крести">`,
    `<img class="game_card__flip" src="./static/img/валет пики.png" alt="валет пики">`,
    `<img class="game_card__flip" src="./static/img/валет черви.png" alt="валет черви">`,

    `<img class="game_card__flip" src="./static/img/дама бубны.png" alt="дама бубны">`,
    `<img class="game_card__flip" src="./static/img/дама крести.png" alt="дама крести">`,
    `<img class="game_card__flip" src="./static/img/дама пики.png" alt="дама пики">`,
    `<img class="game_card__flip" src="./static/img/дама черви.png" alt="дама черви">`,

    `<img class="game_card__flip" src="./static/img/король бубны.png" alt="король бубны">`,
    `<img class="game_card__flip" src="./static/img/король крести.png" alt="король крести">`,
    `<img class="game_card__flip" src="./static/img/король пики.png" alt="король пики">`,
    `<img class="game_card__flip" src="./static/img/король черви.png" alt="король черви">`,

    `<img class="game_card__flip" src="./static/img/туз бубны.png" alt="туз бубны">`,
    `<img class="game_card__flip" src="./static/img/туз крести.png" alt="туз крести">`,
    `<img class="game_card__flip" src="./static/img/туз пики.png" alt="туз пики">`,
    `<img class="game_card__flip" src="./static/img/туз черви.png" alt="туз черви">`,
];

//массив рубашек
export const defaultCardArray:string[] = [];

for (let i = 0; i < 36; i++) {
    defaultCardArray.push(
        `<img class="game_card__flip" data-index="${i}" src="./static/img/рубашка.png">`,
    );
}
