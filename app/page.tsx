import styles from "@/app/page.module.scss";
import Todo from "@/components/Todo/Todo";

export default function Home() {
  return (
    <main>
      <section className={styles.section}></section>
      <Todo text={"walk dog"} />
      <input type="text" className={styles.todo_input} />
    </main>
  );
}
