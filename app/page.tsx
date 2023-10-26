import styles from "@/app/page.module.scss";
import Todo from "@/components/Todo/Todo";

export default function Home() {
  return (
    <main className={`flex flex_center ${styles.main}`}>
      <div className={`flex flex_column ${styles.main_wrapper}`}>
        <section className={styles.section}>
          <Todo text={"walk dog"} />
        </section>
        <div className={`flex flex_column ${styles.main_input_wrapper}`}>
          <label htmlFor="todo_input">Add todo</label>
          <input type="text" id="todo_input" className={styles.todo_input} />
        </div>
      </div>
    </main>
  );
}
