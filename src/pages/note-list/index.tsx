import { useEffect, useLayoutEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useNotesStore } from "@/entities/note";
import { NoteTable } from "@/widgets/note-table";
import {
  RedactNoteModalForm,
  useNoteRedactStore,
} from "@/features/note-redact";

export const NoteList = () => {
  const { notes, isLoading, fetchNotes, deleteNote, updateNote } =
    useNotesStore();
  const { setEditingNoteId } = useNoteRedactStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterCompleted, setFilterCompleted] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  useLayoutEffect(() => {
    const fetchAndFilter = async () => {
      const completed = searchParams.get("completed") === "true";
      setFilterCompleted(completed);
    };
    fetchAndFilter();
  }, [searchParams]);

  const toggleFilterCompleted = () => {
    setSearchParams(filterCompleted ? {} : { completed: "true" });
  };

  const handleUpdateNote = (id: number) => {
    updateNote(id, {
      completed: !notes.find((note) => note.id === id)?.completed,
    });
  };

  const filteredNotes = filterCompleted
    ? notes.filter((note) => note.completed)
    : notes;

  return (
    <>
      <h1>Список заметок</h1>

      {!isLoading ? (
        <NoteTable
          notes={filteredNotes}
          onEdit={setEditingNoteId}
          onDelete={deleteNote}
          toggleComplete={handleUpdateNote}
          toggleFilterCompleted={toggleFilterCompleted}
        />
      ) : (
        <div>Loading...</div>
      )}

      <RedactNoteModalForm />
    </>
  );
};
