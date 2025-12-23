import styles from "./SuccessModal.module.css";

interface Props {
  email: string;
  onClose: () => void;
}

const SuccessModal = ({ email, onClose }: Props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.box}>
        <h3>Login Successful</h3>
        <p>{email}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default SuccessModal;
