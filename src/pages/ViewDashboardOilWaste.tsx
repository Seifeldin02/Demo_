import { FunctionComponent, useCallback } from "react";
import ProfileContainer from "../components/ProfileContainer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./ViewDashboardOilWaste.module.css";

const ViewDashboardOilWaste: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/view-dashboardjoin-us4");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardOilWaste}>
      <ProfileContainer />
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
      <div className={styles.cookingOilwasteConsumption}>
        Cooking Oil/Waste Consumption Calculation
      </div>
      <img
        className={styles.viewDashboardOilWasteChild}
        alt=""
        src="/rectangle-28@2x.png"
      />
      <div className={styles.viewDashboardOilWasteItem} />
      <div className={styles.billsUploadedBy}>bills uploaded by user</div>
      <div className={styles.massOfOils}>Mass of oils collected (kg) :</div>
      <div
        className={styles.calculationForCarbon}
      >{`Calculation for Carbon Reduction Emission for Oil Consumption: `}</div>
      <div className={styles.totalOilsCollected}>
        Total oils collected (days) :
      </div>
      <div className={styles.viewDashboardOilWasteInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.viewDashboardOilWasteChild1} />
      <div className={styles.div}>6</div>
      <div className={styles.div1}>17</div>
      <div className={styles.div2}>2.56</div>
    </div>
  );
};

export default ViewDashboardOilWaste;
