import { useNotesStore } from "@/entities/note";
import { useParams, useNavigate } from "react-router";

export const NoteDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const { notes } = useNotesStore();
  const navigate = useNavigate();

  const note = notes.find((n) => n.id === Number(slug));

  if (!note) {
    return <p>Заметка не найдена!</p>;
  }

  return (
    <>
      <h1>{note.title}</h1>
      <p>Статус: {note.completed ? "Выполнена" : "Не выполнена"}</p>
      <button onClick={() => navigate("/")}>Вернуться назад</button>
    </>
  );
};
