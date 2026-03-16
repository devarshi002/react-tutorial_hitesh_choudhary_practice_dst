import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const colors = ["red", "green", "blue", "yellow", "purple", "pink", "black", "orange"];

  return (
    <div
      className="w-full h-screen flex items-center justify-center duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-10 text-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">
          Background Color: {color}
        </h1>
      </div>

      <div className="fixed flex justify-center bottom-20 w-full px-4">
        <div className="flex flex-wrap justify-center gap-4 shadow-2xl backdrop-blur-lg bg-white/30 px-6 py-4 rounded-3xl border border-white/40">

          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transform transition hover:scale-110 active:scale-95"
              style={{ backgroundColor: c }}
            >
              {c}
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;