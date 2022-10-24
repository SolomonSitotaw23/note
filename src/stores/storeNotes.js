import { defineStore, acceptHMRUpdate } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Here are the ise technology acquisitions of 2021 so far reverse chronological order.",
        },
        {
          id: "id2",
          content: "acquisitions of 2021 so far reverse chronological order.",
        },
        {
          id: "id3",
          content:
            "Here are the biggest enterprise technology acquisitions of 2021 so far reverse chronological order.",
        },
      ],
    };
  },

  actions: {
    addNote(noteToBeAdded) {
      this.notes.unshift(noteToBeAdded);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharacters: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}
