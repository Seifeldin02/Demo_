import { FunctionComponent, useCallback } from "react";
import ProfileContainer from "../components/ProfileContainer";
import Header from "../components/Header";
import HomeIcon from "../components/HomeIcon";
import { useNavigate } from "react-router-dom";
import ShopIcon from "../components/ShopIcon";
import styles from "./ViewDashboardJoinUs2.module.css";

const ViewDashboardJoinUs2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
    navigate("/view-dashboardjoin-us3");
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
      <div className={styles.step2Select}>Step 2: Select home owner type</div>
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
      <div className={styles.viewDashboardJoinUsInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.viewDashboardJoinUsChild1} />
      <HomeIcon />
      <HomeIcon propLeft="693px" />
      <div
        className={styles.viewDashboardJoinUsChild2}
        onClick={onRectangle4Click}
      />
      <div className={styles.saveProceed}>{`save & proceed`}</div>
      <img
        className={styles.expandRightDoubleIcon}
        alt=""
        src="/expand-right-double1.svg"
        onClick={onExpandRightDoubleIconClick}
      />
      <div className={styles.termsConditionsContainer}>
        <span>{`Terms & conditions applies. Click `}</span>
        <span className={styles.here}>here</span>
        <span> to learn more</span>
      </div>
      <ShopIcon />
      <ShopIcon propLeft="1212px" />
      <div className={styles.viewDashboardJoinUsChild3} />
      <div className={styles.viewDashboardJoinUsChild4} />
      <div className={styles.viewDashboardJoinUsChild5} />
      <div className={styles.viewDashboardJoinUsChild6} />
      <div className={styles.lowRiseHousing}>Low-rise housing</div>
      <div className={styles.highRiseHousing}>High-rise housing</div>
      <div className={styles.mbipInstitution}>MBIP Institution</div>
      <div className={styles.mbipInstitution1}>MBIP Institution</div>
      <div className={styles.population}>{`>2000 population`}</div>
      <div className={styles.population1}>{`<2000 population`}</div>
    </div>
  );
};

export default ViewDashboardJoinUs2;
