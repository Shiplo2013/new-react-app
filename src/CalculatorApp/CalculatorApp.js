import {
    useRef,
    useState
} from "react";
import "./CalculatorApp.css";

function CalculatorApp() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
  	// Add the code for the minus function 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    // Add the code for the plus function
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    // Add the code for the divide function 
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    // Add the code for the resetInput function 
    if (inputRef.current) {
      inputRef.current.value = 0;
    }
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
  	// Add the code for the resetResult function 
    if (resultRef.current) {
      setResult(0);
    }
  }; 
 
  return ( 
    <div className="calculator"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
      </form> 
    </div> 
  ); 
} 
 
export default CalculatorApp; 