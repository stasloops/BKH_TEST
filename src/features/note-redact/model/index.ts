import { create } from "zustand";

interface NoteRedactStore {
  editingNoteId: number | null;
  setEditingNoteId: (editingNoteId: number | null) => void;
}

export const useNoteRedactStore = create<NoteRedactStore>((set) => ({
  editingNoteId: null,
  setEditingNoteId: (editingNoteId) => {
    set({ editingNoteId: editingNoteId });
  },
}));
