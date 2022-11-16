import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Todos.module.css";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await data.json();

  return {
    props: { todos },
  };
}

export default function Todos({ todos }) {
  return (
    <>
      <Head>
        <title>Todos</title>
      </Head>
      <div>
        <h1>Tarefas para fazer:</h1>
        <ul className={styles.todolist}>
          {todos.map((todo) => (
            <Link href={`/todos/${todo.id}`}>
              <li key={todo.id}>{todo.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
