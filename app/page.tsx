"use client";

import { useState } from "react";

import styles from "@/app/page.module.scss";
import Todos from "@/components/Todos/Todos";
import Button from "@/components/Button/Button";

export default function Home() {
  const [items, setItems] = useState([]);
  return (
    <main className={`flex flex_center ${styles.main}`}>
      <div className={`flex flex_column ${styles.main_wrapper}`}>
        <section className={styles.section}>
          <Todos items={items} />
        </section>
        <div className={`flex flex_column ${styles.main_input_wrapper}`}>
          <label className={styles.label} htmlFor="todo_input">
            Add todo
          </label>
          <input type="text" id="todo_input" className={styles.todo_input} />
          <div className={`flex ${styles.button_wrapper}`}>
            <Button text={"Add"} action={() => console.log("add")} />
            <Button text={"Clear"} action={() => console.log("clear")} />
          </div>
        </div>
      </div>
    </main>
  );
}
