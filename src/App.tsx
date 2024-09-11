import React from "react";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Counter />
    </div>
  );
};

export default App;
