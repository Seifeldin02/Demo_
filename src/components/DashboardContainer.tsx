import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DashboardContainer.module.css";

type DashboardContainerType = {
  /** Style props */
  frameDivCursor?: CSSProperties["cursor"];
  signOutSqureIconCursor?: CSSProperties["cursor"];
  adaptationCursor?: CSSProperties["cursor"];
  joinUsCursor?: CSSProperties["cursor"];
  propCursor?: CSSProperties["cursor"];

  /** Action props */
  onMenuItemContainer4Click?: () => void;
  onSignOutText1Click?: () => void;
  onCarbonAnalysisText1Click?: () => void;
  onAdaptationText1Click?: () => void;
  onJoinUsText1Click?: () => void;
};

const DashboardContainer: FunctionComponent<DashboardContainerType> = ({
  frameDivCursor,
  signOutSqureIconCursor,
  adaptationCursor,
  joinUsCursor,
  propCursor,
  onMenuItemContainer4Click,
  onSignOutText1Click,
  onCarbonAnalysisText1Click,
  onAdaptationText1Click,
  onJoinUsText1Click,
}) => {
  const menuItemStyle: CSSProperties = useMemo(() => {
    return {
      cursor: frameDivCursor,
    };
  }, [frameDivCursor]);

  const signOutStyle: CSSProperties = useMemo(() => {
    return {
      cursor: signOutSqureIconCursor,
    };
  }, [signOutSqureIconCursor]);

  const carbonAnalysisStyle: CSSProperties = useMemo(() => {
    return {
      cursor: adaptationCursor,
    };
  }, [adaptationCursor]);

  const adaptationStyle: CSSProperties = useMemo(() => {
    return {
      cursor: joinUsCursor,
    };
  }, [joinUsCursor]);

  const joinUsStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.menuItemParent}>
      <div className={styles.menuItem}>
        <div className={styles.frameParent}>
          <div className={styles.gridAltParent}>
            <img className={styles.gridAltIcon} alt="" src="/gridalt.svg" />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <img
            className={styles.chevronUp2Icon}
            alt=""
            src="/chevronup-2.svg"
          />
        </div>
      </div>
      <div
        className={styles.menuItem1}
        style={menuItemStyle}
        onClick={onMenuItemContainer4Click}
      >
        <div className={styles.frameParent}>
          <img className={styles.gridAltIcon} alt="" src="/useralt4.svg" />
          <div className={styles.profile}>Profile</div>
        </div>
      </div>
      <div className={styles.menuItem2}>
        <div className={styles.calenderAlt2Parent}>
          <img className={styles.gridAltIcon} alt="" src="/calenderalt2.svg" />
          <div className={styles.profile}>Calendar</div>
        </div>
      </div>
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
      <div
        className={styles.signOut}
        style={signOutStyle}
        onClick={onSignOutText1Click}
      >
        Sign Out
      </div>
      <img
        className={styles.signOutSqureIcon}
        alt=""
        src="/sign-out-squre.svg"
      />
      <div
        className={styles.carbonAnalysis}
        style={carbonAnalysisStyle}
        onClick={onCarbonAnalysisText1Click}
      >
        Carbon Analysis
      </div>
      <div
        className={styles.adaptation}
        style={adaptationStyle}
        onClick={onAdaptationText1Click}
      >
        Adaptation
      </div>
      <div
        className={styles.joinUs}
        style={joinUsStyle}
        onClick={onJoinUsText1Click}
      >
        Join Us!
      </div>
    </div>
  );
};

export default DashboardContainer;
