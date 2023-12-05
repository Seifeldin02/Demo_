import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer1 from "../components/FormContainer1";
import Header from "../components/Header";
import styles from "./ProfilePersonalDetailsStaf.module.css";

const ProfilePersonalDetailsStaf: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCarbonAnalysisTextClick = useCallback(() => {
    navigate("/manage-carbon-analysis");
  }, [navigate]);

  const onAdaptationTextClick = useCallback(() => {
    navigate("/view-dashboardadaptation1");
  }, [navigate]);

  const onJoinUsTextClick = useCallback(() => {
    navigate("/view-dashboardjoin-us-participant-list");
  }, [navigate]);

  const onMenuItemContainerClick = useCallback(() => {
    navigate("/managecalendar");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/profileremove-changes2");
  }, [navigate]);

  return (
    <div className={styles.profilePersonalDetailsStaf}>
      <FormContainer1
        adaptationCursor="pointer"
        joinUsCursor="pointer"
        menuItemCursor="pointer"
        frameDivCursor="pointer"
        onCarbonAnalysisTextClick={onCarbonAnalysisTextClick}
        onAdaptationTextClick={onAdaptationTextClick}
        onJoinUsTextClick={onJoinUsTextClick}
        onMenuItemContainerClick={onMenuItemContainerClick}
      />
      <img
        className={styles.profilePersonalDetailsStafChild}
        alt=""
        src="/ellipse-28241@2x.png"
      />
      <Header
        componentTitle="PROFILE"
        userLabel="Staff"
        propWidth="233px"
        propRight="1.12%"
        propLeft="83.1%"
        propLeft1="966px"
      />
      <div className={styles.welcomeBackAnree}>Welcome back, Anree!</div>
      <div className={styles.personalDetails}>Personal Details</div>
      <div className={styles.profilePersonalDetailsStafItem} />
      <div className={styles.profilePersonalDetailsStafInner} />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.profilePersonalDetailsStafChild1} />
      <div className={styles.profilePersonalDetailsStafChild2} />
      <div className={styles.profilePersonalDetailsStafChild3} />
      <div className={styles.profilePersonalDetailsStafChild4} />
      <div className={styles.profilePersonalDetailsStafChild5} />
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

export default ProfilePersonalDetailsStaf;
