import React from "react";
import { Link } from "react-router";

interface NoteItemProps {
  id: number;
  title: string;
  completed: boolean;
  onEdit: () => void;
  onDelete: () => void;
  toggleComplete: () => void;
}

export const NoteItem: React.FC<NoteItemProps> = ({
  id,
  title,
  completed,
  onEdit,
  onDelete,
  toggleComplete,
}) => (
  <tr style={{ backgroundColor: completed ? "lightgreen" : "transparent" }}>
    <td>{id}</td>
    <td>{title}</td>
    <td>
      <input type="checkbox" checked={completed} onChange={toggleComplete} />
    </td>
    <td>
      <button onClick={onEdit}>Редактировать</button>
      <button onClick={onDelete}>Удалить</button>
    </td>
    <td>
      <Link to={`/todo/${id}`}>Открыть</Link>
    </td>
  </tr>
);
