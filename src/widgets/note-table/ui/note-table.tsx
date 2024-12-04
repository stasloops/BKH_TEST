import React from "react";
import { INote, NoteItem } from "@/entities/note";

interface NoteTableProps {
  notes: INote[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  toggleComplete: (id: number) => void;
  toggleFilterCompleted: () => void;
}

export const NoteTable: React.FC<NoteTableProps> = ({
  notes,
  onEdit,
  onDelete,
  toggleComplete,
  toggleFilterCompleted,
}) => (
  <table>
    <thead>
      <tr>
        {/* Осознанно оставил inline стили */}
        <th style={{ width: "10%" }}>#</th>
        <th style={{ width: "40%" }}>Название</th>
        <th onClick={toggleFilterCompleted} style={{ width: "20%" }}>
          Отметка о выполнении
        </th>
        <th style={{ width: "20%" }}>Действия</th>
        <th style={{ width: "10%" }}>Детали</th>
      </tr>
    </thead>
    <tbody>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          completed={note.completed}
          onEdit={() => onEdit(note.id)}
          onDelete={() => onDelete(note.id)}
          toggleComplete={() => toggleComplete(note.id)}
        />
      ))}
    </tbody>
  </table>
);
