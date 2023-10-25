"use client";

import styles from "@/components/Todo/Todo.module.scss";
import { useState } from "react";

type TodoChildren = {
  text: string;
};

function Todo({ text }: TodoChildren) {
  const [complete, setComplete] = useState(false);

  return (
    <div
      className={`${styles.todo} ${complete ? styles.todo_complete : null}`}
      onClick={() => setComplete(!complete)}
    >
      {text}
    </div>
  );
}

export default Todo;
