const playground = [
    "XXXXXXXXXXXXXXXXXXXX",
    "X------------------X",
    "X-CXD-CXXD-A-FXXXD-X",
    "X----------X-X-----X",
    "X-CXD-CXXXXJ-LXXXD-X",
    "X--------X---------X",
    "X-CXD-CXXJ-A-CXXX7-X",
    "X----------X-----X-X",
    "X-CXD-CXXXXJ-CXD-U-X",
    "X------------------X",
    "XXXXXXXXXXXXXXXXXXXX"
];

const isPath = (x, y) => {
    const row = playground[y];
    const character = row.charAt(x);
    return character === "-";
};