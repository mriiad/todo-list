export const initialList = { content: [] };
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      console.log(action.payload);
      return { content: action.payload };
    }
    case "ADD_ITEM":
      return {
        content: [
          ...state.content,
          { id: action.payload.contentId, content: action.payload.contentText },
        ],
      };
    case "DELETE_ITEM":
      console.log(
        state.content.filter((content) => content.id != action.payload)
      );
      return {
        content: state.content.filter(
          (content) => content.id != action.payload
        ),
      };
    default:
      return { initialList };
  }
};
