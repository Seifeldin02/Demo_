import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SelectOption.module.css";

const SelectOption: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.selectOption}>
      <div className={styles.selectOptionChild} />
      <img
        className={styles.imageRemovebgPreview1Icon}
        alt=""
        src="/imageremovebgpreview-1@2x.png"
      />
      <div className={styles.iprkParent}>
        <div className={styles.iprk}>IPRK</div>
        <div className={styles.iskandarPuteriRendah}>
          ISKANDAR PUTERI RENDAH KARBON
        </div>
      </div>
      <div className={styles.selectOptionItem} onClick={onRectangleClick} />
      <div className={styles.selectOptionInner} onClick={onRectangle1Click} />
      <div className={styles.imAUser}>I’m a user</div>
      <div className={styles.imAStaff}>I’m a staff</div>
      <div className={styles.chooseSignIn}>Choose sign in option</div>
    </div>
  );
};

export default SelectOption;
