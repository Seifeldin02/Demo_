import { FunctionComponent, useCallback } from "react";
import ProfileContainer from "../components/ProfileContainer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./ViewDashboardWater.module.css";

const ViewDashboardWater: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/view-dashboardjoin-us4");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardWater}>
      <ProfileContainer
        menuItemOverflow="hidden"
        frameDivCursor="unset"
        adaptationColor="2px solid #8a99af"
        adaptationCursor="unset"
        joinUsCursor="unset"
        joinUsColor="2px solid #8a99af"
        menuItemColor="#fff"
        menuItemCursor="unset"
        frameDivCursor1="unset"
      />
      <Header
        componentTitle="DASHBOARD"
        userLabel="Staff"
        propWidth="233px"
        propRight="1.12%"
        propLeft="83.1%"
        propLeft1="966px"
      />
      <div className={styles.joinUs}>Join Us</div>
      <div className={styles.backParent} onClick={onGroupContainerClick}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <div className={styles.waterConsumptionCalculation}>
        Water Consumption Calculation
      </div>
      <div className={styles.averageProrateFactor}>
        Average prorate factor (days) :
      </div>
      <div
        className={styles.calculationForCarbon}
      >{`Calculation for Carbon Reduction Emission for Water Consumption: `}</div>
      <div className={styles.averageWaterUsage}>
        Average water usage (meter cubic) :
      </div>
      <img
        className={styles.viewDashboardWaterChild}
        alt=""
        src="/rectangle-281@2x.png"
      />
      <div className={styles.viewDashboardWaterItem} />
      <div className={styles.billsUploadedBy}>bills uploaded by user</div>
      <div className={styles.viewDashboardWaterInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.viewDashboardWaterChild1} />
      <div className={styles.div}>{`1.0333 `}</div>
      <div className={styles.div1}>17</div>
      <div className={styles.div2}>2.56</div>
    </div>
  );
};

export default ViewDashboardWater;
