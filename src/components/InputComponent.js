import { useState } from "react";

function InputComponent() {
    const {inputText, setInputText} = useState('hello');
    function handleInput(e) {
        setInputText();
        console.log(e.target.value);
    }
    return (
        <div className="input-group">
            <input type="text" value={inputText} onChange={handleInput} />
            <h5>You typed: {inputText}</h5>
            <button onClick={() => setInputText('hello')}>Reset</button>
        </div>
    );
};

export default InputComponent;