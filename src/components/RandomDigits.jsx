import { useState } from "react";
import NumberDisplay from "./NumberDisplay";

function RandomDigits() {

    const [numbers, setNumbers] = useState([1,2,3,4,5]);

    function generateNewSet(){
        setNumbers(numbers.map(() => Math.floor(Math.random() * 9) + 1))
    }

    return (
        <>
            <h1>Random Digits</h1>
            <div className="cards-container">
                { numbers.map((nr, i) => <NumberDisplay key={i} number={nr}/>) }
            </div>
            <button onClick={generateNewSet}>New Digits Set</button>
        </>
    )
}

export default RandomDigits;