import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HomeIcon.module.css";

type HomeIconType = {
  /** Style props */
  propLeft?: CSSProperties["left"];
};

const HomeIcon: FunctionComponent<HomeIconType> = ({ propLeft }) => {
  const homeIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <img
      className={styles.homeIcon}
      alt=""
      src="/home.svg"
      style={homeIconStyle}
    />
  );
};

export default HomeIcon;
