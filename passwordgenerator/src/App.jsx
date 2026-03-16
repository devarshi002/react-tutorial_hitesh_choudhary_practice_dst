import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}()~`";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-gray-700">

      {/* MAIN CARD */}
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-6 text-orange-400">

        <h1 className="text-2xl font-bold text-center mb-6">
          🔐 Password Generator
        </h1>

        {/* PASSWORD BOX */}
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="outline-none w-full py-2 px-3 text-black"
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-orange-500 hover:bg-orange-600 px-4 text-white font-semibold transition"
          >
            Copy
          </button>
        </div>

        {/* CONTROLS */}
        <div className="space-y-4 text-sm">

          <div>
            <label className="block mb-1">Password Length: {length}</label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full cursor-pointer"
            />
          </div>

          <div className="flex gap-6">

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              Numbers
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
              />
              Symbols
            </label>

          </div>
        </div>
      </div>

      {/* PROJECT INFO PANEL */}
      <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-md text-white text-xs p-4 rounded-lg w-60 shadow-lg">

        <h2 className="font-bold mb-2 text-orange-400">Project Info</h2>

        <p className="mb-2">
          A secure password generator that creates random passwords based on
          selected options.
        </p>

        <p className="font-semibold">Tech Used:</p>

        <ul className="list-disc ml-4">
          <li>React Hooks</li>
          <li>useState</li>
          <li>useEffect</li>
          <li>useCallback</li>
          <li>useRef</li>
          <li>Tailwind CSS</li>
        </ul>

      </div>

    </div>
  );
}

export default App;