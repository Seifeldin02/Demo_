import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNotAMemberClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onForgetPasswordTextClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/profilepersonal-details");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.loginChild} />
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
      <div className={styles.loginItem} />
      <div className={styles.signIn}>Sign In</div>
      <div className={styles.imAUser}>I’m a user</div>
      <div className={styles.username}>Username</div>
      <div className={styles.password}>Password</div>
      <div className={styles.notAMember} onClick={onNotAMemberClick}>
        Not a member? Sign up here!
      </div>
      <div
        className={styles.forgetPassword}
        onClick={onForgetPasswordTextClick}
      >
        Forget password?
      </div>
      <div className={styles.or}>or</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.signInWithGoogleParent}>
          <div className={styles.signInWith}>Sign in with Google</div>
          <img className={styles.google11} alt="" src="/google-1-1.svg" />
        </div>
      </div>
      <div className={styles.loginInner} onClick={onRectangle2Click} />
      <div className={styles.rectangleDiv} />
      <div className={styles.loginChild1} />
      <div className={styles.letMeIn}>Let me in</div>
    </div>
  );
};

export default Login;
