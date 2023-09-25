import './App.css';
import { Fragment } from 'react';

function App() {
  return (
   <Fragment>
     <div className="container text-center calculator">
        <input type="text" id="display" className="form-control mt-1 mb-3" readOnly />

        <div className="row justify-content-center flex-nowrap">
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('7')">7</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('8')">8</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('9')">9</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-warning cal-button" onclick="addToDisplay('+')">x</button>
            </div>
        </div>      
        <div className="row justify-content-center flex-nowrap">
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('7')">4</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('8')">5</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('9')">6</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-warning cal-button" onclick="addToDisplay('+')">-</button>
            </div>
        </div>      
        <div className="row justify-content-center flex-nowrap">
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('7')">1</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('8')">2</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('9')">3</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-warning cal-button" onclick="addToDisplay('+')">+</button>
            </div>
        </div>      

        <div className="row justify-content-center flex-nowrap">
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('7')">+/-</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('8')">0</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-secondary cal-button" onclick="addToDisplay('9')">.</button>
            </div>
            <div className="col mt-2">
                <button class="btn btn-success cal-button" onclick="addToDisplay('+')">=</button>
            </div>
        </div>      

     </div>
   </Fragment>
  );
}

export default App;
