import { FunctionComponent } from "react";
import styles from "./Group.module.css";

const Group: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <img className={styles.groupChild} alt="" src="/group-1000003673.svg" />
      <img
        className={styles.chevronDown21}
        alt=""
        src="/group-10000036661.svg"
      />
    </div>
  );
};

export default Group;
