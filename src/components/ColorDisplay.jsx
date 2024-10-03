import './ColorDisplay.css'

function ColorDisplay(props) {

    return (
        <div className="card color-display" style={{backgroundColor: props.colorCode}}>
            {props.colorCode}
        </div>
    )
}

export default ColorDisplay;