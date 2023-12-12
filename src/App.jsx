import { useReducer } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";
import { appReducer } from "./reducer/appRedecer";

const statee = {
  todos: [
    { name: "Zapłacić rachunki", done: false, id: 1 },
    { name: "Wyrzucić śmieci", done: false, id: 2 },
  ],
  isFormShown: false,
};

function App() {
  const [{ todos, isFormShown }, dispatch] = useReducer(appReducer, statee);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => dispatch({ type: "open_form" })}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form
          onFormSubmit={(newTodoName) =>
            dispatch({ type: "add", name: newTodoName })
          }
        />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => dispatch({ type: "delete", id })}
            onDoneButtonClick={() => dispatch({ type: "finish", id })}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
