import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OtpRegistration.module.css";

const OtpRegistration: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/profilepersonal-details");
  }, [navigate]);

  return (
    <div className={styles.otpRegistration}>
      <div className={styles.otpRegistrationChild} />
      <div className={styles.otpRegistrationItem} />
      <div className={styles.anOtpNumber}>
        An OTP number has been sent to your email
      </div>
      <div className={styles.enterOtpNumber}>Enter OTP number</div>
      <div className={styles.sendOtpUsing}>Send OTP using SMS</div>
      <div
        className={styles.otpRegistrationInner}
        onClick={onRectangle1Click}
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.signMeUp}>Sign me up</div>
    </div>
  );
};

export default OtpRegistration;
