import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";

const ResetPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGoToLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGoToRegisterClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.resetPassword}>
      <div className={styles.resetPasswordChild} />
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
      <div className={styles.resetPasswordItem} />
      <div className={styles.resetYourPassword}>Reset Your Password</div>
      <div className={styles.changePasssword}>Change Passsword</div>
      <div className={styles.resetCode}>Reset Code</div>
      <div className={styles.newPassword}>New Password</div>
      <div className={styles.confirmPassword}>Confirm Password</div>
      <div className={styles.goToLogin} onClick={onGoToLoginClick}>
        Go to Login page
      </div>
      <div className={styles.goToRegister} onClick={onGoToRegisterClick}>
        Go to Register page
      </div>
      <div className={styles.resetPasswordInner} onClick={onRectangle1Click} />
      <div className={styles.rectangleDiv} />
      <div className={styles.resetPasswordChild1} />
      <div className={styles.resetPasswordChild2} />
      <div className={styles.resetPassword1}>Reset Password</div>
    </div>
  );
};

export default ResetPassword;
