import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

const ForgotPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGoToLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGoToRegisterClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/reset-password");
  }, [navigate]);

  return (
    <div className={styles.forgotPassword}>
      <div className={styles.forgotPasswordChild} />
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
      <div className={styles.forgotPasswordItem} />
      <div className={styles.typeInLost}>Type in Lost Email</div>
      <div className={styles.forgotPassword1}>Forgot password</div>
      <div className={styles.emailAddress}>Email Address</div>
      <div className={styles.goToLogin} onClick={onGoToLoginClick}>
        Go to Login page
      </div>
      <div className={styles.goToRegister} onClick={onGoToRegisterClick}>
        Go to Register page
      </div>
      <div className={styles.forgotPasswordInner} onClick={onRectangle1Click} />
      <div className={styles.rectangleDiv} />
      <div className={styles.requestCode}>Request Code</div>
    </div>
  );
};

export default ForgotPassword;
