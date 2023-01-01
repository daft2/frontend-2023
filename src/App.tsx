import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex bg-slate-900 text-stone-100">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
