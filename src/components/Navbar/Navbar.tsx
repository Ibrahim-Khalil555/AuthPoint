import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import styles from "./Navbar.module.css";

interface Props {
  onLoginClick: () => void;
}

const Navbar = ({ onLoginClick }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>Logo</div>

        <button className={styles.loginBtn} onClick={onLoginClick}>
          Log in
        </button>

        <FiMenu
          className={styles.menuIcon}
          onClick={() => setMenuOpen((p) => !p)}
        />
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button
            onClick={() => {
              setMenuOpen(false);
              onLoginClick();
            }}
          >
            Log in
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
