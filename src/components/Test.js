import React, { useState } from "react";

function PlayPauseButton({ id }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isPlaying ? "Pause" : "Play"} {id}
      </button>
    </div>
  );
}

function App() {
  const buttonCount = 5;

  const buttonArray = Array.from({ length: buttonCount }, (_, index) => ({
    id: index + 1
  }));

  return (
    <div>
      {buttonArray.map((button) => (
        <PlayPauseButton key={button.id} id={button.id} />
      ))}
    </div>
  );
}

export default App;
