import { FunctionComponent, useCallback } from "react";
import ProfileContainer from "../components/ProfileContainer";
import Header from "../components/Header";
import ArhiveLoadIcon from "../components/ArhiveLoadIcon";
import { useNavigate } from "react-router-dom";
import styles from "./ViewDashboardJoinUs1.module.css";

const ViewDashboardJoinUs1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle3Click = useCallback(() => {
    navigate("/view-dashboardjoin-us");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/view-dashboardjoin-us");
  }, [navigate]);

  const onExpandRightDoubleIconClick = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardJoinUs}>
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
        userLabel="User"
        propWidth="233px"
        propRight="1.12%"
        propLeft="83.1%"
        propLeft1="966px"
      />
      <div className={styles.joinUs}>Join Us</div>
      <div className={styles.countMeIn}>Count me in!</div>
      <div className={styles.step3Upload}>Step 3: Upload documents</div>
      <div className={styles.termsConditionsContainer}>
        <span>{`Terms & conditions applies. Click `}</span>
        <span className={styles.here}>here</span>
        <span> to learn more</span>
      </div>
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
      <ArhiveLoadIcon />
      <div className={styles.viewDashboardJoinUsInner} />
      <div className={styles.rectangleDiv} />
      <div
        className={styles.viewDashboardJoinUsChild1}
        onClick={onRectangle3Click}
      />
      <div
        className={styles.viewDashboardJoinUsChild1}
        onClick={onRectangle4Click}
      />
      <div className={styles.saveProceed}>{`save & proceed`}</div>
      <img
        className={styles.expandRightDoubleIcon}
        alt=""
        src="/expand-right-double1.svg"
        onClick={onExpandRightDoubleIconClick}
      />
      <ArhiveLoadIcon propLeft="830px" />
      <ArhiveLoadIcon propLeft="1226px" />
      <div className={styles.viewDashboardJoinUsChild3} />
      <div className={styles.viewDashboardJoinUsChild4} />
      <div className={styles.viewDashboardJoinUsChild5} />
      <div className={styles.uploadWaterBill}>Upload water bill</div>
      <div className={styles.uploadElectricityBill}>
        Upload electricity bill
      </div>
      <div className={styles.uploadOilConsumption}>
        Upload oil consumption receipt
      </div>
    </div>
  );
};

export default ViewDashboardJoinUs1;
