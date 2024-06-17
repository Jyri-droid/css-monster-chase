// Build playground to DOM and assign classes
const element = document.getElementById("playground");
for (let line of playground) {
    const lineNode = document.createElement("div");
    lineNode.classList.add("block-line");
    element.appendChild(lineNode);
    for (let charIndex = 0; charIndex < line.length; charIndex++) {
        const blockNode = document.createElement("div");
        let className;
        switch(line.charAt(charIndex)) {
            case "X":
                className = "block"
                break;
            case "C":
                className = "end-left"
                break;
            case "D":
                className = "end-right"
                break;
            case "A":
                className = "end-top"
                break;
            case "U":
                className = "end-bottom"
                break;
            case "J":
                className = "corner-bottom-right"
                break;
            case "F":
                className = "corner-top-left"
                break;
            case "7":
                className = "corner-top-right"
                break;
            case "L":
                className = "corner-bottom-left"
                break;
            default:
                className = "empty"
          }
        blockNode.classList.add(className);
        lineNode.appendChild(blockNode);
    }
}