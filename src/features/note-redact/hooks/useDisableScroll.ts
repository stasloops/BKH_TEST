import { useEffect } from "react";

export const useDisableScroll = (editingNoteId: number | null) => {
  useEffect(() => {
    if (editingNoteId != null) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [editingNoteId]);
};
