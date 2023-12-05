import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Header.module.css";

type HeaderType = {
  componentTitle?: string;
  userLabel?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
};

const Header: FunctionComponent<HeaderType> = ({
  componentTitle,
  userLabel,
  propWidth,
  propRight,
  propLeft,
  propLeft1,
}) => {
  const pROFILEStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const userStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={styles.profileParent}>
      <div className={styles.profile} style={pROFILEStyle}>
        {componentTitle}
      </div>
      <div className={styles.groupParent} style={groupDiv1Style}>
        <img className={styles.groupChild} alt="" src="/group-1000003666.svg" />
        <div className={styles.thomasAnreeWrapper}>
          <div className={styles.thomasAnree}>Thomas Anree</div>
        </div>
      </div>
      <div className={styles.user} style={userStyle}>
        {userLabel}
      </div>
    </div>
  );
};

export default Header;
