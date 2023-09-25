import './App.css';
import { Fragment, useState} from 'react';

function App() {
  const [displayText, setDisplayText] = useState("0");
  const handalonClick = (text) => {
    const validatedInput = validateInput(displayText + text);
    if(text === "C") {
      setDisplayText("0");
    } else if (text === "=") {
      try {
        const result = eval(displayText).toString();      
        setDisplayText(result);
      } catch {        
        setDisplayText("Error!");
      }
      
    }else {      
      setDisplayText(validatedInput);        
    }    
  };
  const validateInput = (input) => {
    let valInput = input;
    //check for mutiple zero at begining
    valInput = valInput.replace(/^0+(?=\d)/, "")
    //check multiple + in the string
    valInput = valInput.replace(/\++/g, "+")
    //check multiple - in the string
    valInput = valInput.replace(/\-+/g, "-")
    //check multiple * in the string
    valInput = valInput.replace(/\*+/g, "*")
    //check multiple / in the string
    valInput = valInput.replace(/\/+/g, "/")
    //check multiple . in the string
    valInput = valInput.replace(/\.+/g, ".")
    return valInput;
  };
  return (
   <Fragment>
     <div className="container text-center calculator">
        <input id="display" type="text" className="form-control mt-1 mb-3" value={displayText} readOnly />
        <div className="row justify-content-center flex-nowrap">  
            <div className="col-6 mt-2">
                <button id="clear" className="btn btn btn-danger cal-button" onClick={() => {handalonClick("C")}}>C</button>
            </div>
            <div className="col mt-2">
                <button className="btn btn-secondary cal-button" onClick={() => {handalonClick("+/-")}}>+/-</button>
            </div>          
            <div className="col mt-2">
                <button id="divide" className="btn btn-warning cal-button" onClick={() => {handalonClick("/")}}>/</button>
            </div>
        </div>      
        <div className="row justify-content-center flex-nowrap">
            <div className="col mt-2">
                <button id="seven" className="btn btn-secondary cal-button" onClick={() => {handalonClick("7")}}>7</button>
            </div>
            <div className="col mt-2">
                <button id="eight" className="btn btn-secondary cal-button" onClick={() => {handalonClick("8")}}>8</button>
            </div>
            <div className="col mt-2">
                <button id="nine" className="btn btn-secondary cal-button" onClick={() => {handalonClick("9")}}>9</button>
            </div>
            <div className="col mt-2">
                <button id="multiply" className="btn btn-warning cal-button" onClick={() => {handalonClick("*")}}>X</button>
            </div>
        </div>      
        <div className="row justify-content-center flex-nowrap">
            <div className="col mt-2">
                <button id="four" className="btn btn-secondary cal-button" onClick={() => {handalonClick("4")}}>4</button>
            </div>
            <div className="col mt-2">
                <button id="five" className="btn btn-secondary cal-button" onClick={() => {handalonClick("5")}}>5</button>
            </div>
            <div className="col mt-2">
                <button id="six" className="btn btn-secondary cal-button" onClick={() => {handalonClick("6")}}>6</button>
            </div>
            <div className="col mt-2">
                <button id="subtract" className="btn btn-warning cal-button" onClick={() => {handalonClick("-")}}>-</button>
            </div>
        </div>      
        <div className="row justify-content-center flex-nowrap">
            <div className="col mt-2">
                <button id="one" className="btn btn-secondary cal-button" onClick={() => {handalonClick("1")}}>1</button>
            </div>
            <div className="col mt-2">
                <button id="two" className="btn btn-secondary cal-button" onClick={() => {handalonClick("2")}}>2</button>
            </div>
            <div className="col mt-2">
                <button id="three" className="btn btn-secondary cal-button" onClick={() => {handalonClick("3")}}>3</button>
            </div>
            <div className="col mt-2">
                <button id="add" className="btn btn-warning cal-button" onClick={() => {handalonClick("+")}}>+</button>
            </div>
        </div>      

        <div className="row justify-content-center flex-nowrap">
            
            <div className="col-6 mt-2">
                <button id="zero" className="btn btn-secondary cal-button" onClick={() => {handalonClick("0")}}>0</button>
            </div>
            <div className="col mt-2">
                <button id="decimal" className="btn btn-secondary cal-button" onClick={() => {handalonClick(".")}}>.</button>
            </div>
            <div className="col mt-2">
                <button id="equals" className="btn btn-success cal-button" onClick={() => {handalonClick("=")}}>=</button>
            </div>
        </div>      

     </div>
   </Fragment>
  );
}

export default App;
