import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileContainer from "../components/ProfileContainer";
import styles from "./ManageCarbonAnalysis.module.css";

const ManageCarbonAnalysis: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuItemContainerClick = useCallback(() => {
    navigate("/profilepersonal-details-staff");
  }, [navigate]);

  const onAdaptationTextClick = useCallback(() => {
    navigate("/view-dashboardadaptation1");
  }, [navigate]);

  const onJoinUsTextClick = useCallback(() => {
    navigate("/view-dashboardadaptation1");
  }, [navigate]);

  const onMenuItemContainer1Click = useCallback(() => {
    navigate("/managecalendar");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/profilepersonal-details-staff");
  }, [navigate]);

  return (
    <div className={styles.manageCarbonAnalysis}>
      <ProfileContainer
        menuItemOverflow="unset"
        frameDivCursor="pointer"
        adaptationColor="#fff"
        adaptationCursor="unset"
        joinUsCursor="pointer"
        joinUsColor="2px solid #8a99af"
        menuItemColor="2px solid #8a99af"
        menuItemCursor="pointer"
        frameDivCursor1="pointer"
        onMenuItemContainerClick={onMenuItemContainerClick}
        onAdaptationTextClick={onAdaptationTextClick}
        onJoinUsTextClick={onJoinUsTextClick}
        onMenuItemContainer1Click={onMenuItemContainer1Click}
      />
      <div className={styles.dashboardParent}>
        <div className={styles.dashboard}>DASHBOARD</div>
        <div className={styles.groupParent}>
          <img
            className={styles.groupChild}
            alt=""
            src="/group-10000036661.svg"
          />
          <div className={styles.thomasAnreeWrapper}>
            <div className={styles.thomasAnree}>Thomas Anree</div>
          </div>
        </div>
        <div className={styles.staff}>Staff</div>
        <img className={styles.frameChild} alt="" src="/group-1000003673.svg" />
      </div>
      <div className={styles.carbonEmissionAnalysis}>
        Carbon Emission Analysis
      </div>
      <div className={styles.ghgEmissions}>GHG Emissions</div>
      <div className={styles.details}>Details</div>
      <div className={styles.projectImpact}>Project Impact</div>
      <div className={styles.backParent} onClick={onGroupContainer2Click}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <img
        className={styles.manageCarbonAnalysisChild}
        alt=""
        src="/rectangle-20@2x.png"
      />
      <div className={styles.manageCarbonAnalysisItem} />
      <div className={styles.manageCarbonAnalysisItem} />
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
      <div className={styles.editParent}>
        <div className={styles.back}>edit</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left1.svg" />
      </div>
      <div className={styles.editGroup}>
        <div className={styles.back}>edit</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left1.svg" />
      </div>
      <div className={styles.editContainer}>
        <div className={styles.back}>edit</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left1.svg" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.back}>edit</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left1.svg" />
      </div>
      <div className={styles.editPageParent}>
        <div className={styles.editPage}>edit page</div>
        <img
          className={styles.expandLeftIcon5}
          alt=""
          src="/expand-left1.svg"
        />
      </div>
    </div>
  );
};

export default ManageCarbonAnalysis;
