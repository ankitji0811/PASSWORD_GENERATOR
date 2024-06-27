import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "~!@#$%^&*()_+{}";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  useEffect(passwordGenerator, [
    length,
    numberAllow,
    charAllow,
    passwordGenerator,
  ]);

  return (
    <div className="max-w-md mx-auto text-center bg-gray-800 m-4 text-white rounded-md p-4">
      <h1 className="text-xl font-bold">Password Generator</h1>

      <div>
        <div className="flex mt-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            readOnly
            placeholder="Password...."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="outline-none shrink-0 bg-blue-700 py-1 px-2 ">
            Copy
          </button>
        </div>
        <div className="flex gap-x-2 mt-3">
          <div className="flex gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={numberAllow}
              onChange={() => setNumberAllow((prev) => !prev)}
            />
            <label>Number</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={charAllow}
              onChange={() => setCharAllow((prev) => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
