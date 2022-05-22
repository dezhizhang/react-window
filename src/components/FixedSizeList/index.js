import React from "react";
import "./index.css";
import { FixedSizeList } from "react-window";

const Row = ({ index, style }) => {
  return (
    <div className={index % 2 === 0 ? "odd" : "even"} style={{ style }}>
      row{index}
    </div>
  );
};

function App() {
  return (
    <FixedSizeList
      className="list"
      height={200}
      width={200}
      itemSize={50}
      itemCount={1000}
    >
      {Row}
    </FixedSizeList>
  );
}

export default App;
