import { useState } from "react";

function InputArea({ handleInput }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  function handleLinkInput() {
    if (!input) {
      setError(true);
      return;
    } else {
      handleInput(input);
      setInput("");
    }
  }

  return (
    <div className="p-5 relative -top-10 bg-dark-violet">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <input
          className={`w-full p-3 md:p-2 md:mr-3 bg-white focus:outline-none ${
            error && "border-2 border-red"
          } ${error && "text-red"}`}
          placeholder="Shorten a link here..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onFocus={() => setError(false)}
          value={input}
        />
        <p className="text-red text-sm font-semibold md:hidden">
          {error && "Please add a link"}
        </p>
        <button
          onClick={handleLinkInput}
          className="w-full md:w-[20%] mt-3 md:mt-0 bg-cyan text-white text-sm font-semibold py-2 px-5 hover:opacity-50"
        >
          Shorten It!
        </button>
      </div>
      <p className="text-left text-red text-sm font-semibold hidden md:block">
        {error && "Please add a link"}
      </p>
    </div>
  );
}

export default InputArea;
