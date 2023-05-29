export const reducer = (state, action) => {
    if (action.type === "oge_ekle") {
      const newItem = [...state.people, action.payload];
      return {
        ...state,
        people: newItem,
        isModalOpen: true,
        modalContent: "öğe eklendi " + action.payload.name,
      };
    }
    if (action.type === "deger_yok") {
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Lütfen bir değer giriniz",
      };
    }
    if (action.type === "MODAL_KAPAT") {
      return { ...state, isModalOpen: false };
    }
    if (action.type === "OGEYI_KALDIR") {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
      return { ...state, people: newPeople };
    }
    throw new Error("Eşleşen eylem yok");
  };

  