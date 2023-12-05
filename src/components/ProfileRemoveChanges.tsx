import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileRemoveChanges.module.css";

const ProfileRemoveChanges2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProfileRemoveChangesContainerClick = useCallback(() => {
    navigate("/view-dashboardcarbon-analysis");
  }, [navigate]);

  return (
    <div
      className={styles.profileRemoveChanges}
      onClick={onProfileRemoveChangesContainerClick}
    >
      <div className={styles.mainLogoParent}>
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
        <div className={styles.signOut}>Sign Out</div>
        <img
          className={styles.signOutSqureIcon}
          alt=""
          src="/sign-out-squre.svg"
        />
        <div
          className={styles.carbonAnalysis}
          style={carbonAnalysis1Style}
          onClick={onCarbonAnalysisTextClick}
        >
          Carbon Analysis
        </div>
        <div
          className={styles.adaptation}
          style={adaptation1Style}
          onClick={onAdaptationTextClick}
        >
          Adaptation
        </div>
        <div
          className={styles.joinUs}
          style={joinUs1Style}
          onClick={onJoinUsTextClick}
        >
          Join Us!
        </div>
        <div
          className={styles.menuItem}
          style={menuItem2Style}
          onClick={onMenuItemContainerClick}
        >
          <div className={styles.calenderAlt2Parent}>
            <img
              className={styles.calenderAlt2Icon}
              alt=""
              src="/calenderalt2.svg"
            />
            <div className={styles.calendar}>Calendar</div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <div className={styles.gridAltParent}>
                <img
                  className={styles.calenderAlt2Icon}
                  alt=""
                  src="/gridalt.svg"
                />
                <div className={styles.dashboard}>Dashboard</div>
              </div>
            </div>
            <img
              className={styles.chevronDown1Icon}
              alt=""
              src="/chevrondown-1.svg"
            />
          </div>
        </div>
        <div className={styles.menuItem1}>
          <div className={styles.userAlt4Parent}>
            <img
              className={styles.calenderAlt2Icon}
              alt=""
              src="/useralt4.svg"
            />
            <div className={styles.calendar}>Profile</div>
          </div>
        </div>
      </div>
      <div className={styles.profileParent}>
        <div className={styles.profile1} style={pROFILEStyle}>
          {componentTitle}
        </div>
        <div className={styles.groupParent} style={groupDivStyle}>
          <img
            className={styles.groupChild}
            alt=""
            src="/group-1000003666.svg"
          />
          <div className={styles.thomasAnreeWrapper}>
            <div className={styles.thomasAnree}>Thomas Anree</div>
          </div>
        </div>
        <div className={styles.user} style={user1Style}>
          {userLabel}
        </div>
      </div>
      <div className={styles.name}>Name</div>
      <div className={styles.emailAddress}>Email address</div>
      <div className={styles.address}>Address</div>
      <div className={styles.profileRemoveChangesChild} />
      <div className={styles.removesSuccessfully}>Removes successfully</div>
      <div className={styles.checkRing}>
        <div className={styles.checkRingChild} />
        <img className={styles.checkRingItem} alt="" src="/line-1.svg" />
      </div>
      <div className={styles.backParent}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
    </div>
  );
};

export default ProfileRemoveChanges2;
