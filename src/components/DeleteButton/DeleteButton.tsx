import styles from "./DeleteButton.module.css";

interface Props {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: Props) => {
  return (
    <button className={styles.deleteBtn} onClick={onClick}>
      Delete
    </button>
  );
};

export default DeleteButton;
