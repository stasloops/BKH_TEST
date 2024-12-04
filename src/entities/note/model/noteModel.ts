import { create } from "zustand";
import { persist } from "zustand/middleware";
import { INote } from "../types";
import { fetchNotes } from "../api";

interface NotesStore {
  notes: INote[];
  isLoading: boolean;
  fetchNotes: () => Promise<void>;
  addNote: (note: Omit<INote, "id">) => void;
  updateNote: (id: number, updatedNote: Partial<INote>) => void;
  deleteNote: (id: number) => void;
}

export const useNotesStore = create(
  persist<NotesStore>(
    (set, get) => ({
      notes: [],
      isLoading: false,
      fetchNotes: async () => {
        if (get().notes.length) {
          return;
        }

        set({
          isLoading: true,
        });

        const notes = await fetchNotes();

        set({
          notes: notes.map((note: INote) => ({ ...note, completed: false })),
          isLoading: false,
        });
      },
      addNote: (note) =>
        set(({ notes }) => ({
          notes: [{ id: Date.now(), ...note }, ...notes],
        })),
      updateNote: (id, updatedNote) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, ...updatedNote } : note
          ),
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
    }),
    {
      name: "notes-storage",
    }
  )
);
