import { FunctionComponent, useCallback } from "react";
import FormContainer from "../components/FormContainer";
import { useNavigate } from "react-router-dom";
import styles from "./ViewDashboardCarbonAnalysis.module.css";

const ViewDashboardCarbonAnalysis: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAdaptationTextClick = useCallback(() => {
    navigate("/view-dashboardadaptation");
  }, [navigate]);

  const onJoinUsTextClick = useCallback(() => {
    navigate("/view-dashboardjoin-us1");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardCarbonAnalysis}>
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
      <div className={styles.carbonAnalysis}>Carbon Analysis</div>
      <div className={styles.adaptation} onClick={onAdaptationTextClick}>
        Adaptation
      </div>
      <div className={styles.joinUs} onClick={onJoinUsTextClick}>
        Join Us!
      </div>
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
      <div className={styles.dashboardParent}>
        <div className={styles.dashboard1}>DASHBOARD</div>
        <div className={styles.groupParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/group-10000036662.svg"
          />
          <div className={styles.thomasAnreeWrapper}>
            <div className={styles.thomasAnree}>Thomas Anree</div>
          </div>
        </div>
        <div className={styles.user}>User</div>
        <img className={styles.frameChild} alt="" src="/group-1000003673.svg" />
      </div>
      <div className={styles.carbonEmissionAnalysis}>
        Carbon Emission Analysis
      </div>
      <div className={styles.ghgEmissions}>GHG Emissions</div>
      <div className={styles.details}>Details</div>
      <div className={styles.projectImpact}>Project Impact</div>
      <div className={styles.backParent}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <img
        className={styles.viewDashboardCarbonAnalysisChild}
        alt=""
        src="/rectangle-20@2x.png"
      />
      <div className={styles.viewDashboardCarbonAnalysisItem} />
      <div className={styles.viewDashboardCarbonAnalysisItem} />
      <div className={styles.locationCoodinateZoneContainer}>
        <p className={styles.location}>{`Location `}</p>
        <p className={styles.location}>{`Coodinate `}</p>
        <p className={styles.location}>{`Zone `}</p>
        <p className={styles.location}>Landmark</p>
        <p className={styles.location}>&nbsp;</p>
        <p className={styles.location}>{`Water (l) `}</p>
        <p className={styles.location}>{`Energy (kWh) `}</p>
        <p className={styles.location}>{`Recycle (kg) `}</p>
        <p
          className={styles.location}
        >{`Food Waste (kg) Cooking Oil (l/kg)  `}</p>
        <p className={styles.location}>&nbsp;</p>
        <p className={styles.location}>Participation (people)</p>
        <p className={styles.location}>&nbsp;</p>
        <p className={styles.location}>{`Recycle Hub `}</p>
        <p className={styles.details1}>Details</p>
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-21@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.potentialReductionOn}>
        Potential reduction on absolute GHG emission
      </div>
      <div className={styles.by2030}>by 2030</div>
      <div className={styles.div}>41%</div>
    </div>
  );
};

export default ViewDashboardCarbonAnalysis;
