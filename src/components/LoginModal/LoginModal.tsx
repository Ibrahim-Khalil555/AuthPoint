import { FiX } from "react-icons/fi";
import LoginForm from "../LoginForm/LoginForm";
import styles from "./LoginModal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
}

const LoginModal = ({ isOpen, onClose, onLoginSuccess }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <FiX className={styles.close} onClick={onClose} />
        <LoginForm
          onSuccess={(email) => {
            onLoginSuccess(email);
            onClose();
          }}
        />
      </div>
    </div>
  );
};

export default LoginModal;
