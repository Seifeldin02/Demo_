import { FunctionComponent, useCallback } from "react";
import FormContainer1 from "../components/FormContainer1";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileRemoveChanges1.module.css";

const ProfileRemoveChanges1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle9Click = useCallback(() => {
    navigate("/profileremove-changes3");
  }, [navigate]);

  return (
    <div className={styles.profileRemoveChanges}>
      <FormContainer1
        adaptationCursor="unset"
        joinUsCursor="unset"
        menuItemCursor="unset"
        frameDivCursor="unset"
      />
      <img
        className={styles.profileRemoveChangesChild}
        alt=""
        src="/ellipse-2824@2x.png"
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
      <div className={styles.profileRemoveChangesItem} />
      <div className={styles.profileRemoveChangesInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.profileRemoveChangesChild1} />
      <div className={styles.profileRemoveChangesChild2} />
      <div className={styles.profileRemoveChangesChild3} />
      <div className={styles.profileRemoveChangesChild4} />
      <div className={styles.profileRemoveChangesChild5} />
      <div className={styles.username}>Username</div>
      <div className={styles.name}>Name</div>
      <div className={styles.emailAddress}>Email address</div>
      <div className={styles.address}>Address</div>
      <div className={styles.age}>Age</div>
      <div className={styles.hpNo}>HP No.</div>
      <div className={styles.saveDetails}>Save details</div>
      <div className={styles.discardChanges}>Discard changes</div>
      <div className={styles.profileRemoveChangesChild6} />
      <div
        className={styles.profileRemoveChangesChild7}
        onClick={onRectangle9Click}
      />
      <div className={styles.profileRemoveChangesChild8} />
      <div className={styles.discardChanges1}>Discard changes?</div>
      <div className={styles.yes}>Yes</div>
      <div className={styles.no}>No</div>
    </div>
  );
};

export default ProfileRemoveChanges1;
