import styles from "@/components/Button/Button.module.scss";

type ButtonChildren = {
  text: string;
  action: () => void;
};

function Button({ text, action }: ButtonChildren) {
  return (
    <button className={styles.button} onClick={action}>
      {text}
    </button>
  );
}

export default Button;
