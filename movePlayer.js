const position = {x: 1, y: 1};
const grid = {width: playground[0].length, height: playground.length};

// Convert grid position to top and left %
const getCoordinatesByGridPosition = (x, y) => {
    const left = 100 / grid.width * x;
    const top = 100 - 100 / grid.height * (y + 1);
    return {left: left, top: top};
}

// Assign player width and height based on playground dimensions
const playerElement = document.getElementById("player");
playerElement.style.width = 100 / grid.width + "%";
playerElement.style.height = 100 / grid.height + "%";


// Place player on playground
const positionPlayer = (x, y) => {
    const coordinates = getCoordinatesByGridPosition(x, y);
    playerElement.style.left = coordinates.left + "%";
    playerElement.style.top = coordinates.top + "%";
}
positionPlayer(position.x, position.y);


// Moving direction
let moveHorizontal = 1;
let moveVertical = 0;
const speed = 1;

// Key events
const keyDown = (event) =>  {
    switch (event.key) {
        case "ArrowRight":
            moveHorizontal = speed;
            break;
        case "ArrowLeft":
            moveHorizontal = -speed;
            break;
        case "ArrowUp":
            moveVertical = speed;
            break;
        case "ArrowDown":
            moveVertical = -speed;
            break;
        case " ":
            moveHorizontal = 0;
            moveVertical = 0;
            break;
    }
}
window.addEventListener("keydown", keyDown);


const task = (i) => { 
    setTimeout(() => { 
        // Add tasks to do
        console.log(i);
        position.x += moveHorizontal;
        positionPlayer(position.x, position.y);

    }, 100 * i); 
};
 
let i = 0;
while (i < 100) { 
    task(i);
    i++;
}