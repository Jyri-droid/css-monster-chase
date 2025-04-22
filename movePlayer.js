const grid = { width: playground[0].length, height: playground.length };
const step = { x: 100 / grid.width, y: 100 / grid.height };


const playerTo = (x, y) => {
    player.style.left = x * step.x + "%";
    player.style.top = y * step.y  + "%";
};

// Assign player
const player = document.getElementById("player");
player.style.width = step.x + "%";
player.style.height = step.y + "%";
const playerPosition = { x: 1, y: 1 };
playerTo(playerPosition.x, playerPosition.y);


console.log(isPath(1,1));

// Movement
const move = { x: 0, y: 0 };

// Key events
const keyDown = (event) =>  {
    switch (event.key) {
        case "ArrowRight":
            if (isPath(playerPosition.x + 1, playerPosition.y)) {
                move.x = 1;
                move.y = 0;
            }
            break;
        case "ArrowLeft":
            if (isPath(playerPosition.x - 1, playerPosition.y)) {
                move.x = -1;
                move.y = 0;

            }
            break;
        case "ArrowUp":
            if (isPath(playerPosition.x, playerPosition.y - 1)) {
                move.x = 0;
                move.y = -1;
            }
            break;
        case "ArrowDown":
            if (isPath(playerPosition.x, playerPosition.y + 1)) {
                move.x = 0;
                move.y = 1;
            }
            break;
        case " ":
            move.x = 0;
            move.y = 0;
            break;
    }
}
window.addEventListener("keydown", keyDown);

const task = (i) => { 
    setTimeout(() => { 
        // Add tasks to do
        playerPosition.x += move.x; 
        playerPosition.y += move.y;
        playerTo(playerPosition.x, playerPosition.y);
    }, 200 * i); 
};

let playerIsAlive = true;
let i = 0;
while (playerIsAlive) {
    task(i);
    i++;
    if (i > 1000000) { playerIsAlive = false };
}