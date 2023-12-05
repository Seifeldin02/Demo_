import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ViewDashboardADAPTATION.module.css";

const ViewDashboardADAPTATION1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCarbonAnalysisTextClick = useCallback(() => {
    navigate("/view-dashboardcarbon-analysis");
  }, [navigate]);

  const onJoinUsTextClick = useCallback(() => {
    navigate("/view-dashboardjoin-us1");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardAdaptation}>
      <div className={styles.menuItem}>
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
        onClick={onCarbonAnalysisTextClick}
      >
        Carbon Analysis
      </div>
      <div className={styles.adaptation}>Adaptation</div>
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
        <div className={styles.dashboard1} style={dASHBOARDStyle}>
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
      <div className={styles.adaptation1}>Adaptation</div>
      <div className={styles.ourGoal}>Our Goal</div>
      <div className={styles.expectedWeather}>Expected weather</div>
      <div className={styles.safetyPrecautions}>Safety Precautions</div>
      <div className={styles.currentWeather}>Current Weather</div>
      <div className={styles.backParent}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
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
      <img className={styles.rainIcon} alt="" src="/rain.svg" />
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
    </div>
  );
};

export default ViewDashboardADAPTATION1;
