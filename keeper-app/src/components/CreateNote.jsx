import React, { useState } from "react";
import "./css/CreateNote.css";

export default function CreateNote({ setNotes }) {
  const [noteObj, setNoteObj] = useState({});
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setNote(value);
    }
    setNoteObj((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function handleHeight() {
    const texta = document.querySelector("textarea");
    texta.addEventListener("keyup", (e) => {
      texta.style.height = "auto";
      let scHeight = e.target.scrollHeight;
      texta.style.height = `${scHeight}px`;
    });
  }

  return (
    <div className="container">
      <div className="row py-5 justify-content-md-center">
        <div className="col"></div>
        <div className="col-8 justify-content-center">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (JSON.stringify(noteObj) === "{}") return;
              setNotes((prev) => [...prev, noteObj]);
              setNoteObj({});
              setTitle("");
              setNote("");
              setExpand(false);
              event.target.reset();
            }}
          >
            <div className="note-wrapper w-100 p-1 border border-secondary rounded-3">
              {expand ? (
                <input
                  className="w-100 bg-dark text-light fw-bold"
                  type="text"
                  onChange={handleChange}
                  name="title"
                  value={title}
                  autoComplete="off"
                  placeholder="Title"
                />
              ) : null}
              <textarea
                onChange={handleChange}
                className="w-100 bg-dark text-light fw-bold"
                placeholder="Take a note..."
                name="note"
                value={note}
                rows="1"
                onClick={() => setExpand(true)}
                onDoubleClick={() => setExpand(false)}
                onKeyUp={handleHeight}
              ></textarea>
              {expand ? (
                <div className="text-end bg-dark pe-2 pb-2 text-light">
                  <input className="btn px-4" type="submit" value="Add" />
                </div>
              ) : null}
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
