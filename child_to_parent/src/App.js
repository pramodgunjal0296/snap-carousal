import { useState } from "react";
import "./App.css";

import Callback from "./component/Callback";

function App() {
  const [UIcolor, setUIcolor] = useState(null);

  const getColor = (color) => {
    setUIcolor(color);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 20,
          margin: "20px",
        }}
      >
        <div
          style={{
            width: "500px",
            height: "400px",
            border: "1px solid black",
            backgroundColor: `${UIcolor}`,
          }}
        ></div>
        <Callback getColor={getColor} />
      </div>
    </div>
  );
}

export default App;
