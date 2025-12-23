import DeleteButton from "../DeleteButton/DeleteButton";
import styles from "./UsersTable.module.css";

interface Props {
  users: string[];
  onDelete: (email: string) => void;
}

const UsersTable = ({ users, onDelete }: Props) => {
  return (
    <section className={styles.container}>
      <h3>Users</h3>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>User</th>
          </tr>
        </thead>

        <tbody>
          {users.map((email, index) => (
            <tr key={email}>
              <td>{index + 1}</td>

              <td>
                <div className={styles.row}>
                  <span>{email}</span>
                  <DeleteButton onClick={() => onDelete(email)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UsersTable;
