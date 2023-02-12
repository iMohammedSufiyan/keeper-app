import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/Note.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note({ id, title, note, filterNotes }) {
  return (
    <div className="card ps-2 border border-secondary bg-dark">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{note}</p>
        <IconButton
          className="delete-button float-end text-light"
          aria-label="delete"
          size="small"
          onClick={() => filterNotes(id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
