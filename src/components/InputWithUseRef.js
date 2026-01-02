import { useRef } from "react";

function InputWithUseRef() {
    const inputEl = useRef(null);
    function onButtonClick() {
        inputEl.current.focus();
    }
    return(
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus On the Input</button>
        </>
    );
};

export default InputWithUseRef;