import RemoveIcon from "../../assets/remove.svg";
import styles from "./Note.module.css";
import { TopBar } from "../top-bar/TopBar";
import { useLoaderData, Form, useSubmit, redirect } from "react-router-dom";

const NoteEditor = ({ children }) => (
  <div className={styles["note-editor"]}>{children}</div>
);

export async function updateNote({ request, params }) {
  const data = await request.formData();
  const title = data.get("title");
  const body = data.get("body");
  return fetch(`http://localhost:3000/notes/${params.noteId}`, {
    method: "PATCH",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export function deleteNote({ params }) {
  return fetch(`http://localhost:3000/notes/${params.noteId}`, {
    method: "DELETE",
  }).then(() => redirect(`/notes/${params.folderId}`));
}

const Note = () => {
  const note = useLoaderData();
  const submite = useSubmit();

  return (
    <div className={styles.container}>
      <TopBar>
        <Form method="DELETE" action="delete">
          <button className={styles.button}>
            <img className={styles.image} src={RemoveIcon} />
          </button>
        </Form>
      </TopBar>
      <Form
        method="PATCH"
        onChange={(event) => {
          submite(event.currentTarget);
        }}
      >
        <NoteEditor key={note.id}>
          <input name="title" type="text" defaultValue={note.title} />
          <textarea name="body" defaultValue={note.body} />
        </NoteEditor>
      </Form>
    </div>
  );
};

export { Note };
