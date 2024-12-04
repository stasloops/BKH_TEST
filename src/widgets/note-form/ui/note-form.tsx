import React, { useState } from "react";

interface NoteFormProps {
  initialTitle?: string;
  initialCompleted?: boolean;
  onSubmit: (title: string, completed: boolean) => void;
  onCancel: () => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({
  initialTitle = "",
  initialCompleted = false,
  onSubmit,
  onCancel,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [completed, setCompleted] = useState(initialCompleted);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.length < 3 || title.length > 50) {
      alert("Название должно быть от 3 до 50 символов");
      return;
    }
    onSubmit(title, completed);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Название</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          minLength={3}
          maxLength={50}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Выполнено
        </label>
      </div>
      <button type="submit">Сохранить</button>
      <button type="button" onClick={onCancel}>
        Отмена
      </button>
    </form>
  );
};
