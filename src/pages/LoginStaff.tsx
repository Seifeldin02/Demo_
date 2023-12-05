import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginStaff.module.css";

const LoginStaff: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNotAMemberClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/profilepersonal-details-staff");
  }, [navigate]);

  const onLetMeInClick = useCallback(() => {
    navigate("/profilepersonal-details-staff");
  }, [navigate]);

  return (
    <div className={styles.loginStaff}>
      <div className={styles.loginStaffChild} />
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
      <div className={styles.loginStaffItem} />
      <div className={styles.signIn}>Sign In</div>
      <div className={styles.imAStaff}>I’m a staff</div>
      <div className={styles.username}>Username</div>
      <div className={styles.password}>Password</div>
      <div className={styles.notAMember} onClick={onNotAMemberClick}>
        Not a member? Sign up here!
      </div>
      <div className={styles.forgetPassword}>Forget password?</div>
      <div className={styles.or}>or</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.signInWithGoogleParent}>
          <div className={styles.signInWith}>Sign in with Google</div>
          <img className={styles.google11} alt="" src="/google-1-1.svg" />
        </div>
      </div>
      <div className={styles.loginStaffInner} onClick={onRectangle2Click} />
      <div className={styles.rectangleDiv} />
      <div className={styles.loginStaffChild1} />
      <div className={styles.letMeIn} onClick={onLetMeInClick}>
        Let me in
      </div>
    </div>
  );
};

export default LoginStaff;
