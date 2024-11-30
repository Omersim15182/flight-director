import InputData from "./components/inputData";
import "./assets/global.css";
import VisualData from "./components/VisualData";
import TextData from "./components/TextData";
import { useState } from "react";

function App() {
  const [altitude, setAltitude] = useState("");
  const [compass, setCompass] = useState("");
  const [horizontalAngle, setHorizontalAngle] = useState("");

  return (
    <div>
      <div className="title">
        <h1>Flight Director</h1>
      </div>
      <div>
        <VisualData
          altitude={altitude}
          compass={compass}
          horizontalAngle={horizontalAngle}
        ></VisualData>
        <InputData
          altitude={setAltitude}
          compass={setCompass}
          horizontalAngle={setHorizontalAngle}
        ></InputData>
        <TextData
          altitude={altitude}
          compass={compass}
          horizontalAngle={horizontalAngle}
        ></TextData>
      </div>
    </div>
  );
}

export default App;
