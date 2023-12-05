import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/otp-registration");
  }, [navigate]);

  return (
    <div className={styles.signup}>
      <div className={styles.signupChild} />
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
      <div className={styles.signupItem} />
      <div className={styles.signUp}>Sign Up</div>
      <div className={styles.phoneNo}>Phone No.</div>
      <div className={styles.address}>Address</div>
      <div className={styles.fullName}>Full Name</div>
      <div className={styles.email}>Email</div>
      <div className={styles.password}>Password</div>
      <div className={styles.theChoiceIs}>the choice is yours :3</div>
      <div className={styles.or}>or</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.signUpWithGoogleParent}>
          <div className={styles.signUpWith}>Sign in with Google</div>
          <img className={styles.google11} alt="" src="/google-1-1.svg" />
        </div>
      </div>
      <div className={styles.signupInner} onClick={onRectangle2Click} />
      <div className={styles.rectangleDiv} />
      <div className={styles.signupChild1} />
      <div className={styles.signupChild2} />
      <div className={styles.signupChild3} />
      <div className={styles.signupChild4} />
      <div className={styles.signMeUp}>Sign me up</div>
    </div>
  );
};

export default Signup;
