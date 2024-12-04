import { BrowserRouter, Route, Routes } from "react-router";
import { AddNote } from "./pages/add-note";
import { NoteList } from "./pages/note-list";
import { NoteDetails } from "./pages/note-details";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/todo/:slug" element={<NoteDetails />} />
        <Route path="/add" element={<AddNote />} />
      </Routes>
    </BrowserRouter>
  );
};
