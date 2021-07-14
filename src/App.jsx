import React, { useState } from "react";

import { useStore } from "./store";

export default function App() {
  const { kdramas, addDrama, removeDrama, patchDrama } = useStore();
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [update, setUpdate] = useState({
    id: null,
    name: "",
  });
  const addDramaHandler = (e) => {
    e.preventDefault();
    addDrama(input);
    setInput("");
  };
  const updateClickHandler = (drama) => {
    setIsEdit(true);
    setUpdate({
      id: drama.id,
      name: drama.name,
    });
  };
  const patchDramaHandler = (e) => {
    e.preventDefault();
    patchDrama(update);
    setUpdate({
      id: null,
      name: "",
    });
    setIsEdit(false);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new Korean Drama"
        />
        <button onClick={addDramaHandler}>Add</button>
      </div>
      <br />
      {kdramas.map((el) => (
        <div key={el.id}>
          <h1>{el.name}</h1>
          <button onClick={() => removeDrama(el.id)}>
            <i className="ti ti-trash"></i>
          </button>{" "}
          <button onClick={() => updateClickHandler(el)}>
            <i className="ti ti-edit-circle"></i>
          </button>
        </div>
      ))}
      <br />
      {isEdit && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Patch Korean Drama</label>
          <div style={{ display: "flex" }}>
            <input
              value={update.name}
              onChange={(e) => setUpdate({ ...update, name: e.target.value })}
            />
            <button onClick={patchDramaHandler}>Patch</button>
          </div>
        </div>
      )}
    </div>
  );
}
