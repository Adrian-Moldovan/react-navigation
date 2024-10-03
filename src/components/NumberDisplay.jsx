import './NumberDisplay.css'

function NumberDisplay(props) {

    return (
        <div className="card number-display">
            {props.number}
        </div>
    )
}

export default NumberDisplay;