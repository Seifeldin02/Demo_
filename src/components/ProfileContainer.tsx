import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProfileContainer.module.css";

type ProfileContainerType = {
  /** Style props */
  menuItemOverflow?: CSSProperties["overflow"];
  frameDivCursor?: CSSProperties["cursor"];
  adaptationColor?: CSSProperties["color"];
  adaptationCursor?: CSSProperties["cursor"];
  joinUsCursor?: CSSProperties["cursor"];
  joinUsColor?: CSSProperties["color"];
  menuItemColor?: CSSProperties["color"];
  menuItemCursor?: CSSProperties["cursor"];
  frameDivCursor1?: CSSProperties["cursor"];

  /** Action props */
  onMenuItemContainerClick?: () => void;
  onCarbonAnalysisTextClick?: () => void;
  onAdaptationTextClick?: () => void;
  onJoinUsTextClick?: () => void;
  onMenuItemContainer1Click?: () => void;
};

const ProfileContainer: FunctionComponent<ProfileContainerType> = ({
  menuItemOverflow,
  frameDivCursor,
  adaptationColor,
  adaptationCursor,
  joinUsCursor,
  joinUsColor,
  menuItemColor,
  menuItemCursor,
  frameDivCursor1,
  onMenuItemContainerClick,
  onCarbonAnalysisTextClick,
  onAdaptationTextClick,
  onJoinUsTextClick,
  onMenuItemContainer1Click,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      overflow: menuItemOverflow,
    };
  }, [menuItemOverflow]);

  const menuItem1Style: CSSProperties = useMemo(() => {
    return {
      cursor: frameDivCursor,
    };
  }, [frameDivCursor]);

  const carbonAnalysis1Style: CSSProperties = useMemo(() => {
    return {
      color: adaptationColor,
      cursor: adaptationCursor,
    };
  }, [adaptationColor, adaptationCursor]);

  const adaptation1Style: CSSProperties = useMemo(() => {
    return {
      cursor: joinUsCursor,
      color: joinUsColor,
    };
  }, [joinUsCursor, joinUsColor]);

  const joinUs1Style: CSSProperties = useMemo(() => {
    return {
      color: menuItemColor,
      cursor: menuItemCursor,
    };
  }, [menuItemColor, menuItemCursor]);

  const menuItem2Style: CSSProperties = useMemo(() => {
    return {
      cursor: frameDivCursor1,
    };
  }, [frameDivCursor1]);

  return (
    <div className={styles.menuItemParent} style={frameDivStyle}>
      <div
        className={styles.menuItem}
        style={menuItem1Style}
        onClick={onMenuItemContainerClick}
      >
        <div className={styles.userAlt4Parent}>
          <img className={styles.userAlt4Icon} alt="" src="/useralt4.svg" />
          <div className={styles.profile}>Profile</div>
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
        className={styles.menuItem1}
        style={menuItem2Style}
        onClick={onMenuItemContainer1Click}
      >
        <div className={styles.userAlt4Parent}>
          <img className={styles.userAlt4Icon} alt="" src="/calenderalt2.svg" />
          <div className={styles.profile}>Calendar</div>
        </div>
      </div>
      <div className={styles.menuItem2}>
        <div className={styles.frameParent}>
          <div className={styles.gridAltParent}>
            <img className={styles.userAlt4Icon} alt="" src="/gridalt.svg" />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <img
            className={styles.chevronUp2Icon}
            alt=""
            src="/chevronup-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
