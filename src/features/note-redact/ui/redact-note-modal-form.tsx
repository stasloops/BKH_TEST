import { Modal } from "@/shared/ui";
import { NoteForm } from "@/widgets/note-form";
import { useNoteRedactStore } from "../model";
import { useNotesStore } from "@/entities/note";

export const RedactNoteModalForm = () => {
  const { editingNoteId, setEditingNoteId } = useNoteRedactStore();
  const { notes, updateNote } = useNotesStore();

  const getEditingNote = () => {
    return notes.find((note) => note.id === editingNoteId);
  };

  const closeModal = () => {
    setEditingNoteId(null);
  };

  const submitModalForm = (title: string, completed: boolean) => {
    if (!editingNoteId) {
      return;
    }
    updateNote(editingNoteId, { title, completed });
    closeModal();
  };

  return (
    <Modal
      title="Редактировать заметку"
      isOpen={!!editingNoteId}
      onClose={closeModal}
    >
      <NoteForm
        initialTitle={getEditingNote()?.title || ""}
        initialCompleted={getEditingNote()?.completed || false}
        onSubmit={submitModalForm}
        onCancel={closeModal}
      />
    </Modal>
  );
};
