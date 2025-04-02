import React from "react";
import Entry from "./components/Entry";
import Emojipedia from "./components/Emojipedia";

function createEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
