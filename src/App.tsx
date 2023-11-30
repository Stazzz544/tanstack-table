import { Table } from "./table/table";
import styles from "./app.module.css";
import cs from "classnames";

function App() {
  return (
    <div className={cs(styles["app-wrapper"])}>
      <Table />
    </div>
  );
}

export default App;
