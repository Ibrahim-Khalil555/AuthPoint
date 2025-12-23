import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import UsersTable from "./components/UsersTable/UsersTable";
import LoginModal from "./components/LoginModal/LoginModal";
import SuccessModal from "./components/SuccessModal/SuccessModal";

const App = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [successEmail, setSuccessEmail] = useState("");
  const [users, setUsers] = useState<string[]>([]);

  const handleLoginSuccess = (email: string) => {
    setUsers((prev) => [...prev, email]);
    setSuccessEmail(email);
  };

  const handleDeleteUser = (email: string) => {
    setUsers((prev) => prev.filter((u) => u !== email));
  };

  return (
    <>
      <Navbar onLoginClick={() => setLoginOpen(true)} />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {successEmail && (
        <SuccessModal
          email={successEmail}
          onClose={() => setSuccessEmail("")}
        />
      )}

      {users.length > 0 && (
        <UsersTable users={users} onDelete={handleDeleteUser} />
      )}
    </>
  );
};

export default App;
