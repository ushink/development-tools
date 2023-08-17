import {describe, expect, test} from '@jest/globals';
import {defaultCardArray} from '../js/card-game';

describe('Проверяем полученный массив',() => {
    
    test('массив не пустой',() => {
        expect(defaultCardArray).not.toBeNull()
    })

    test('массив включает в себя строку',() => {
        const i = 36;
        expect(defaultCardArray).toContain(`<img class="game_card__flip" data-index="${i}" src="./static/img/рубашка.png">`)
    })

    test('массив длинной 36 карт',() => {
        expect(defaultCardArray).toHaveLength(36)
    })
})