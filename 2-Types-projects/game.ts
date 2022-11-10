/**
 * Let's make a game 🕹
 */

const position = {
    x: 0,
    y: 0
}

type Direction = "left" | 'right' | 'up' | 'down';

function move_direction(direction: Direction) {
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
move_direction('up');
console.log(position); // { x: 0, y: 1}
move_direction('down');
console.log(position); // { x: 0, y: 0}
move_direction('left');
console.log(position); // { x: -1, y: 0}
move_direction('right');
console.log(position); // { x: 0, y: 0}
