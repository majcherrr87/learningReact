export function appReducer(state, action) {
  switch (action.type) {
    case "delete":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "finish":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: true } : todo
        ),
      };
    case "add":
      return {
        isFormShown: false,
        todos: [
          ...state.todos,
          {
            name: action.name,
            done: false,
            id: Math.random(),
          },
        ],
      };
    case "open_form":
      return {
        ...state,
        isFormShown: true,
      };
    default:
      throw new Error("Action not supported!");
  }
}
