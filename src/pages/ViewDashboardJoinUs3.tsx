import { FunctionComponent, useCallback } from "react";
import FormContainer from "../components/FormContainer";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "./ViewDashboardJoinUs3.module.css";

const ViewDashboardJoinUs3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCarbonAnalysisTextClick = useCallback(() => {
    navigate("/view-dashboardcarbon-analysis");
  }, [navigate]);

  const onAdaptationTextClick = useCallback(() => {
    navigate("/view-dashboardadaptation");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/view-dashboardjoin-us2");
  }, [navigate]);

  const onExpandRightDoubleIconClick = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardJoinUs}>
      <div className={styles.menuItem}>
        <div className={styles.userAlt4Parent}>
          <img className={styles.userAlt4Icon} alt="" src="/useralt4.svg" />
          <div className={styles.profile}>Profile</div>
        </div>
      </div>
      <FormContainer />
      <div className={styles.signOut}>Sign Out</div>
      <img
        className={styles.signOutSqureIcon}
        alt=""
        src="/sign-out-squre.svg"
      />
      <div
        className={styles.carbonAnalysis}
        onClick={onCarbonAnalysisTextClick}
      >
        Carbon Analysis
      </div>
      <div className={styles.adaptation} onClick={onAdaptationTextClick}>
        Adaptation
      </div>
      <div className={styles.joinUs}>Join Us!</div>
      <div className={styles.menuItem1}>
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
      <Header
        componentTitle="DASHBOARD"
        userLabel="User"
        propWidth="233px"
        propRight="1.12%"
        propLeft="83.1%"
        propLeft1="966px"
      />
      <div className={styles.joinUs1}>Join Us</div>
      <div className={styles.countMeIn}>Count me in!</div>
      <div className={styles.step1Verify}>Step 1: Verify details</div>
      <div className={styles.backParent}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <img
        className={styles.viewDashboardJoinUsChild}
        alt=""
        src="/rectangle-232@2x.png"
      />
      <div className={styles.viewDashboardJoinUsItem} />
      <div
        className={styles.viewDashboardJoinUsInner}
        onClick={onRectangle1Click}
      />
      <div className={styles.saveProceed}>{`save & proceed`}</div>
      <img
        className={styles.expandRightDoubleIcon}
        alt=""
        src="/expand-right-double1.svg"
        onClick={onExpandRightDoubleIconClick}
      />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-2826@2x.png" />
      <div className={styles.termsConditionsContainer}>
        <span>{`Terms & conditions applies. Click `}</span>
        <span className={styles.here}>here</span>
        <span> to learn more</span>
      </div>
      <div className={styles.nameIcNoContainer}>
        <p className={styles.name}>Name:</p>
        <p className={styles.name}>IC No:</p>
        <p className={styles.name}>{`Address: `}</p>
        <p className={styles.name}>HP No.:</p>
        <p className={styles.name}>Date of birth:</p>
        <p className={styles.name}>Status:</p>
      </div>
    </div>
  );
};

export default ViewDashboardJoinUs3;
