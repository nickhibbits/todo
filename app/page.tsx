"use client";

import { useRef, useState } from "react";

import styles from "@/app/page.module.scss";
import Todos from "@/components/Todos/Todos";
import Button from "@/components/Button/Button";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function updateItems(item: string | []) {
    if (typeof item === "string") {
      if (item.trim().length !== 0) {
        setItems((items) => {
          return [...items, item];
        });
      }
    }

    if (typeof item !== "string") {
      setItems([]);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

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
          <input
            type="text"
            id="todo_input"
            className={styles.todo_input}
            ref={inputRef}
          />
          <div className={`flex ${styles.button_wrapper}`}>
            <Button
              text={"Add"}
              action={() => updateItems(inputRef.current?.value || "")}
            />
            <Button text={"Clear"} action={() => updateItems([])} />
          </div>
        </div>
      </div>
    </main>
  );
}
