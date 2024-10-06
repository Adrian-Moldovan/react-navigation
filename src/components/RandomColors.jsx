import { useState } from "react";
import ColorDisplay from "./ColorDisplay";

function generateRandomColor() {
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let randomColor = '';
    while (randomColor.length < 6) {
        const randomHexDigitIndex = Math.floor(Math.random() * hexValues.length);
        randomColor += hexValues[randomHexDigitIndex];
    }
    
    return `#${randomColor}`;
}

let initialColoSet = [];
for (let i = 0; i < 3; i++) {
    initialColoSet.push(generateRandomColor())
}


function RandomColors() {
    const [colors, setColors] = useState(initialColoSet);

    function generateNewSet() {
        setColors(colors.map(() => generateRandomColor()))
    }

    return (
        <>
            <h1>Random Colors</h1>
            <div className="cards-container">
                {colors.map((color, i) => <ColorDisplay key={i} colorCode={color} />)}
            </div>
            <button onClick={generateNewSet}>New Color Set</button>
        </>
    )
}

export default RandomColors;