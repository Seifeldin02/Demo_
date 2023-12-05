import { FunctionComponent, useCallback } from "react";
import ProfileContainer from "../components/ProfileContainer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./ViewDashboardElectricity.module.css";

const ViewDashboardElectricity: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/view-dashboardjoin-us4");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardElectricity}>
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
      <img
        className={styles.viewDashboardElectricityChild}
        alt=""
        src="/rectangle-25@2x.png"
      />
      <div className={styles.viewDashboardElectricityItem} />
      <div className={styles.electricityConsumptionCalcul}>
        Electricity Consumption Calculation
      </div>
      <div className={styles.billsUploadedBy}>bills uploaded by user</div>
      <div className={styles.averageProrateFactor}>
        Average prorate factor (days) :
      </div>
      <div
        className={styles.calculationForCarbon}
      >{`Calculation for Carbon Reduction Emission for Electricity Consumption: `}</div>
      <div className={styles.averageElectricityUsage}>
        Average electricity usage (kWh) :
      </div>
      <div className={styles.viewDashboardElectricityInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.viewDashboardElectricityChild1} />
      <div className={styles.div}>{`1.0000 `}</div>
      <div className={styles.div1}>17</div>
      <div className={styles.div2}>2.56</div>
    </div>
  );
};

export default ViewDashboardElectricity;
