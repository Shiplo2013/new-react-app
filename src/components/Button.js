import { useState } from "react";

function Button() {
    const [getIncrement, setIncrement] = useState(0);
    const clickHandler = () => setIncrement(getIncrement + 1);
    return (
        <button onClick={clickHandler}>Click Me! <span>{getIncrement}</span> Times</button>
    );
}

export default Button;