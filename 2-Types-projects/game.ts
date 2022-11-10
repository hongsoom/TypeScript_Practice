/**
 * Let's make a game 🕹
 */

const position = {
    x: 0,
    y: 0
}

type Direction = "left" | 'right' | 'up' | 'down';

function move_(direction: Direction) {
    switch (direction) {
        case 'up':
            position.y += 1;
            break;
        case 'down':
            position.y -= 1;
            break;
        case 'left':
            position.x -= 1;
            break;
        case 'right':
            position.x += 1;
            break;
        default:
            throw new Error(`unknown direction: ${direction}`)
    }
};

console.log(position); // { x: 0, y: 0}
move_('up');
console.log(position); // { x: 0, y: 1}
move_('down');
console.log(position); // { x: 0, y: 0}
move_('left');
console.log(position); // { x: -1, y: 0}
move_('right');
console.log(position); // { x: 0, y: 0}
