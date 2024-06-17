const player = {x: 1, y: 1};
const grid = {width: playground[0].length, height: playground.length};

// Convert grid position to top and left %
const getCoordinatesByGridPosition = (x, y) => {
    const left = 100 / grid.width * x;
    const top = 100 - 100 / grid.height * (y + 1);
    return {left: left, top: top};
}

// Place player on playground
const positionPlayer = (x, y) => {
    const coordinates = getCoordinatesByGridPosition(x, y);
    node.style.left = coordinates.left + "%";
    node.style.top = coordinates.top + "%";
}

// Create player
const playgroundElement = document.getElementById("playground");
const node = document.createElement("div");
node.classList.add("player");
node.style.width = 100 / grid.width + "%";
node.style.height = 100 / grid.height + "%";
positionPlayer(player.x, player.y);
playgroundElement.appendChild(node);

const keyDown = (event) =>  {
    switch (event.key) {
        case "ArrowRight":
            player.x++;
            break;
        case "ArrowLeft":
            player.x--;
            break;
        case "ArrowUp":
            player.y++;
            break;
        case "ArrowDown":
            player.y--;
            break;
    }
    positionPlayer(player.x, player.y); 
};

window.addEventListener("keydown", keyDown);