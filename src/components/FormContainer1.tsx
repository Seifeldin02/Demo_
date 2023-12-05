import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormContainer1.module.css";

type FormContainer1Type = {
  /** Style props */
  adaptationCursor?: CSSProperties["cursor"];
  joinUsCursor?: CSSProperties["cursor"];
  menuItemCursor?: CSSProperties["cursor"];
  frameDivCursor?: CSSProperties["cursor"];

  /** Action props */
  onCarbonAnalysisTextClick?: () => void;
  onAdaptationTextClick?: () => void;
  onJoinUsTextClick?: () => void;
  onMenuItemContainerClick?: () => void;
};

const FormContainer1: FunctionComponent<FormContainer1Type> = ({
  adaptationCursor,
  joinUsCursor,
  menuItemCursor,
  frameDivCursor,
  onCarbonAnalysisTextClick,
  onAdaptationTextClick,
  onJoinUsTextClick,
  onMenuItemContainerClick,
}) => {
  const carbonAnalysis2Style: CSSProperties = useMemo(() => {
    return {
      cursor: adaptationCursor,
    };
  }, [adaptationCursor]);

  const adaptation2Style: CSSProperties = useMemo(() => {
    return {
      cursor: joinUsCursor,
    };
  }, [joinUsCursor]);

  const joinUs2Style: CSSProperties = useMemo(() => {
    return {
      cursor: menuItemCursor,
    };
  }, [menuItemCursor]);

  const menuItem3Style: CSSProperties = useMemo(() => {
    return {
      cursor: frameDivCursor,
    };
  }, [frameDivCursor]);

  return (
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
        style={carbonAnalysis2Style}
        onClick={onCarbonAnalysisTextClick}
      >
        Carbon Analysis
      </div>
      <div
        className={styles.adaptation}
        style={adaptation2Style}
        onClick={onAdaptationTextClick}
      >
        Adaptation
      </div>
      <div
        className={styles.joinUs}
        style={joinUs2Style}
        onClick={onJoinUsTextClick}
      >
        Join Us!
      </div>
      <div
        className={styles.menuItem}
        style={menuItem3Style}
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
          <img className={styles.calenderAlt2Icon} alt="" src="/useralt4.svg" />
          <div className={styles.calendar}>Profile</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
