import "./App.css";
import { Slider } from "new-range-slider";
import { useState } from "react";

function App() {
  const [Red, setRed] = useState(0);
  const [Green, setGreen] = useState(0);
  const [Blue, setBlue] = useState(0);

  const onChangeRed = (event) => {
    setRed(event.target.value);
  };
  const onChangeGreen = (event) => {
    setGreen(event.target.value);
  };
  const onChangeBlue = (event) => {
    setBlue(event.target.value);
  };

  return (
    <div className="App">
      <div
        className="color"
        style={{ backgroundColor: `rgb(${Red},${Green},${Blue})` }}
      ></div>
      <div>
        <div>
          <Slider
            min={0}
            max={255}
            value={Red}
            onChangeValue={onChangeRed}
            label="Red"
          />
        </div>
        <div>
          <Slider
            min={0}
            max={255}
            value={Green}
            onChangeValue={onChangeGreen}
            label="Green"
          />
        </div>
        <div>
          <Slider
            min={0}
            max={255}
            value={Blue}
            onChangeValue={onChangeBlue}
            label="Blue"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
