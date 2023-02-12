import React, { useState } from "react";
import Watermark from "./Watermark";
import Note from "./Note";
import CreateNote from "./CreateNote";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/Body.css";

export default function Body() {
  const [notes, setNotes] = useState([]);

  function filterNotes(id) {
    setNotes((prev) => prev.filter((note, idx) => idx !== id));
  }

  return (
    <div className="bg-dark">
      <CreateNote setNotes={setNotes} />

      {notes.length === 0 ? (
        <div className="container-fluid pt-5 bg-dark text-light d-flex align-items-center justify-content-center">
          <Watermark />
        </div>
      ) : (
        <div className="container-fluid body p-5 pt-0 text-light">
          <div className="d-flex flex-wrap px-3 align-content-stretch align-items-start justify-content-start">
            {notes.map((item, idx) => {
              return (
                <Note
                  key={idx}
                  id={idx}
                  title={item.title}
                  note={item.note}
                  filterNotes={filterNotes}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
