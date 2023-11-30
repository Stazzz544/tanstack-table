import styles from "./name-cell.module.css";
import cs from "classnames";

type NameCellProps = {
  text: string;
};

export const NameCell = ({ text }: NameCellProps): JSX.Element => {
  return <div className={cs(styles["name"])}>{text}</div>;
};
