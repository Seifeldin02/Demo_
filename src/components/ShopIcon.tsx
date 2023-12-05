import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ShopIcon.module.css";

type ShopIconType = {
  /** Style props */
  propLeft?: CSSProperties["left"];
};

const ShopIcon: FunctionComponent<ShopIconType> = ({ propLeft }) => {
  const shopIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <img
      className={styles.shopIcon}
      alt=""
      src="/shop.svg"
      style={shopIconStyle}
    />
  );
};

export default ShopIcon;
