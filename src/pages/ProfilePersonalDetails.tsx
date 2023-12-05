import { FunctionComponent, useCallback } from "react";
import FormContainer1 from "../components/FormContainer1";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./ProfilePersonalDetails.module.css";

const ProfilePersonalDetails: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/profileremove-changes");
  }, [navigate]);

  return (
    <div className={styles.profilePersonalDetails}>
      <FormContainer1
        adaptationCursor="unset"
        joinUsCursor="unset"
        menuItemCursor="unset"
        frameDivCursor="unset"
      />
      <img
        className={styles.profilePersonalDetailsChild}
        alt=""
        src="/ellipse-28241@2x.png"
      />
      <Header
        componentTitle="PROFILE"
        userLabel="User"
        propWidth="233px"
        propRight="1.12%"
        propLeft="83.1%"
        propLeft1="966px"
      />
      <div className={styles.welcomeBackThomas}>Welcome back, Thomas!</div>
      <div className={styles.personalDetails}>Personal Details</div>
      <div className={styles.profilePersonalDetailsItem} />
      <div className={styles.profilePersonalDetailsInner} />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.profilePersonalDetailsChild1} />
      <div className={styles.profilePersonalDetailsChild2} />
      <div className={styles.profilePersonalDetailsChild3} />
      <div className={styles.profilePersonalDetailsChild4} />
      <div className={styles.profilePersonalDetailsChild5} />
      <div className={styles.username}>Username</div>
      <div className={styles.name}>Name</div>
      <div className={styles.emailAddress}>Email address</div>
      <div className={styles.address}>Address</div>
      <div className={styles.age}>Age</div>
      <div className={styles.hpNo}>HP No.</div>
      <div className={styles.saveDetails}>Save details</div>
      <div className={styles.discardChanges}>Discard changes</div>
      <div className={styles.backParent}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
    </div>
  );
};

export default ProfilePersonalDetails;
