import { FunctionComponent } from "react";
import styles from "./FormContainer.module.css";

const FormContainer: FunctionComponent = () => {
  return (
    <div className={styles.mainLogo}>
      <img
        className={styles.imageRemovebgPreview1Icon}
        alt=""
        src="/imageremovebgpreview-11@2x.png"
      />
      <div className={styles.iprkParent}>
        <div className={styles.iprk}>IPRK</div>
        <div className={styles.iskandarPuteriRendah}>
          ISKANDAR PUTERI RENDAH KARBON
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
