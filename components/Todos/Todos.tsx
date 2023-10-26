import Todo from "@/components/Todo/Todo";
import styles from "@/components/Todos/Todos.module.scss";

type TodosChildren = {
  items: string[];
};

function Todos({ items }: TodosChildren) {
  return (
    <div>
      {items.map((item) => {
        return <Todo text={item} />;
      })}
    </div>
  );
}

export default Todos;
