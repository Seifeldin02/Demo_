import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileContainer from "../components/ProfileContainer";
import Header from "../components/Header";
import styles from "./ViewDashboardADAPTATION.module.css";

const ViewDashboardADAPTATION: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuItemContainerClick = useCallback(() => {
    navigate("/profilepersonal-details-staff");
  }, [navigate]);

  const onCarbonAnalysisTextClick = useCallback(() => {
    navigate("/manage-carbon-analysis");
  }, [navigate]);

  const onJoinUsTextClick = useCallback(() => {
    navigate("/view-dashboardjoin-us-participant-list");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/manage-carbon-analysis");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardAdaptation}>
      <ProfileContainer
        menuItemOverflow="hidden"
        frameDivCursor="pointer"
        adaptationColor="2px solid #8a99af"
        adaptationCursor="pointer"
        joinUsCursor="unset"
        joinUsColor="#fff"
        menuItemColor="2px solid #8a99af"
        menuItemCursor="pointer"
        frameDivCursor1="unset"
        onMenuItemContainerClick={onMenuItemContainerClick}
        onCarbonAnalysisTextClick={onCarbonAnalysisTextClick}
        onJoinUsTextClick={onJoinUsTextClick}
      />
      <div className={styles.editPageParent}>
        <div className={styles.editPage}>edit page</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left1.svg" />
      </div>
      <Header
        componentTitle="DASHBOARD"
        userLabel="Staff"
        propWidth="233px"
        propRight="1.12%"
        propLeft="83.1%"
        propLeft1="966px"
      />
      <div className={styles.adaptation}>Adaptation</div>
      <div className={styles.ourGoal}>Our Goal</div>
      <div className={styles.expectedWeather}>Expected weather</div>
      <div className={styles.safetyPrecautions}>Safety Precautions</div>
      <div className={styles.currentWeather}>Current Weather</div>
      <div className={styles.backParent} onClick={onGroupContainer1Click}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon1} alt="" src="/expand-left.svg" />
      </div>
      <img
        className={styles.viewDashboardAdaptationChild}
        alt=""
        src="/rectangle-22@2x.png"
      />
      <img
        className={styles.viewDashboardAdaptationItem}
        alt=""
        src="/rectangle-24@2x.png"
      />
      <div className={styles.viewDashboardAdaptationInner} />
      <div className={styles.pledgesToIncrease}>
        Pledges to increase the city’s climate resilience by espousing the
        Sendai Framework’s targets of substantially reducing mortality, economic
        loses and damage to infrastructure
      </div>
      <div className={styles.rectangleDiv} />
      <img className={styles.rainIcon} alt="" src="/rain1.svg" />
      <div className={styles.socialImpactIncreasedContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{`Social Impact  `}</p>
        <p
          className={styles.increasedDemandFor}
        >{`Increased demand for public services (e.g. local government assistant to flood victims) / farmers `}</p>
      </div>
      <div className={styles.whatShouldDoContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>What should do?</p>
        <ul className={styles.stayInformedAndFollowWeath}>
          <li className={styles.prepareAnEmergencyKitWith}>
            <span>Stay informed and follow weather updates.</span>
          </li>
          <li className={styles.prepareAnEmergencyKitWith}>
            <span>Prepare an emergency kit with essential supplies.</span>
          </li>
          <li className={styles.prepareAnEmergencyKitWith}>
            <span>Follow evacuation orders and seek safe shelter.</span>
          </li>
          <li className={styles.prepareAnEmergencyKitWith}>
            <span>Avoid flooded areas and flowing water.</span>
          </li>
          <li className={styles.prepareAnEmergencyKitWith}>
            <span>Ensure food and water safety.</span>
          </li>
          <li className={styles.prepareAnEmergencyKitWith}>
            <span>Practice electrical safety.</span>
          </li>
          <li className={styles.prepareAnEmergencyKitWith}>
            <span>{`Learn basic first aid techniques. `}</span>
          </li>
        </ul>
      </div>
      <div className={styles.extremePrecipitationMonsoonContainer}>
        <p className={styles.blankLine}>{`Extreme Precipitation: Monsoon `}</p>
      </div>
      <div className={styles.july2023}>23 July 2023</div>
      <div className={styles.editParent}>
        <div className={styles.back}>edit</div>
        <img
          className={styles.expandLeftIcon1}
          alt=""
          src="/expand-left1.svg"
        />
      </div>
      <div className={styles.editGroup}>
        <div className={styles.back}>edit</div>
        <img
          className={styles.expandLeftIcon1}
          alt=""
          src="/expand-left1.svg"
        />
      </div>
      <div className={styles.editContainer}>
        <div className={styles.back}>edit</div>
        <img
          className={styles.expandLeftIcon1}
          alt=""
          src="/expand-left1.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.back}>edit</div>
        <img
          className={styles.expandLeftIcon1}
          alt=""
          src="/expand-left1.svg"
        />
      </div>
    </div>
  );
};

export default ViewDashboardADAPTATION;
