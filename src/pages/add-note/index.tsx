import { useNavigate } from "react-router";
import { useNotesStore } from "@/entities/note";
import { NoteForm } from "@/widgets/note-form/ui/note-form";

export const AddNote = () => {
  const { addNote } = useNotesStore();
  const navigate = useNavigate();

  const handleSubmit = (title: string, completed: boolean) => {
    addNote({ title, body: "", completed });
    navigate("/");
  };

  return (
    <>
      <h1>Создать заметку</h1>
      <NoteForm onSubmit={handleSubmit} onCancel={() => navigate("/")} />
    </>
  );
};
