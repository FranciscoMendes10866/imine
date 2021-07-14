import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  kdramas: [
    {
      id: Math.floor(Math.random() * 100),
      name: "River Where the Moon Rises",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "The Crowned Clown",
    },
  ],
  addDrama: (payload) =>
    set(
      produce((draft) => {
        draft.kdramas.push({
          id: Math.floor(Math.random() * 100),
          name: payload,
        });
      })
    ),
  removeDrama: (payload) =>
    set(
      produce((draft) => {
        const dramaIndex = draft.kdramas.findIndex((el) => el.id === payload);
        draft.kdramas.splice(dramaIndex, 1);
      })
    ),
  patchDrama: (payload) =>
    set(
      produce((draft) => {
        const drama = draft.kdramas.find((el) => el.id === payload.id);
        drama.name = payload.name;
      })
    ),
}));
