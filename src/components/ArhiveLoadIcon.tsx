import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ArhiveLoadIcon.module.css";

type ArhiveLoadIconType = {
  /** Style props */
  propLeft?: CSSProperties["left"];
};

const ArhiveLoadIcon: FunctionComponent<ArhiveLoadIconType> = ({
  propLeft,
}) => {
  const arhiveLoadIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <img
      className={styles.arhiveLoadIcon}
      alt=""
      src="/arhive-load.svg"
      style={arhiveLoadIconStyle}
    />
  );
};

export default ArhiveLoadIcon;
