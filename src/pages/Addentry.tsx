import { FunctionComponent, useCallback } from "react";
import DashboardContainer from "../components/DashboardContainer";
import MondayContainer from "../components/MondayContainer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./Addentry.module.css";

const Addentry: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/managecalendar");
  }, [navigate]);

  const onExpandRightDoubleIconClick = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/view-calendar1");
  }, [navigate]);

  return (
    <div className={styles.addentry}>
      <DashboardContainer />
      <DashboardContainer
        frameDivCursor="unset"
        signOutSqureIconCursor="unset"
        adaptationCursor="unset"
        joinUsCursor="unset"
        propCursor="unset"
      />
      <MondayContainer />
      <Header
        componentTitle="CALENDAR"
        userLabel="User"
        propWidth="207px"
        propRight="1.72%"
        propLeft="82.5%"
        propLeft1="959px"
      />
      <Header
        componentTitle="CALENDAR"
        userLabel="Staff"
        propWidth="207px"
        propRight="1.72%"
        propLeft="82.5%"
        propLeft1="959px"
      />
      <div className={styles.backParent}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <div className={styles.backGroup} onClick={onGroupContainer1Click}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <div className={styles.addentryChild} />
      <div className={styles.upcomingEvents}>Upcoming Events</div>
      <div className={styles.june2023}>21-23 June 2023</div>
      <div className={styles.elevateYourBrand}>
        Elevate your brand with stunning app designs that captivate and engage
        your target audience. Our team of talented designers creates visually
        compelling and intuitive interfaces that bring your app to life.
      </div>
      <div className={styles.appDesignShowcase}>App Design Showcase</div>
      <div className={styles.suteraMallJohor}>Sutera Mall, Johor Bahru</div>
      <div className={styles.hrs}>0800 - 1700 hrs</div>
      <img className={styles.addentryItem} alt="" src="/rectangle-252@2x.png" />
      <div className={styles.addentryInner} />
      <div className={styles.moreDetails}>more details</div>
      <img
        className={styles.expandRightDoubleIcon}
        alt=""
        src="/expand-right-double1.svg"
        onClick={onExpandRightDoubleIconClick}
      />
      <div className={styles.editPageParent}>
        <div className={styles.editPage}>edit page</div>
        <img
          className={styles.expandLeftIcon2}
          alt=""
          src="/expand-left1.svg"
        />
      </div>
      <div className={styles.editParent} onClick={onGroupContainer3Click}>
        <div className={styles.back}>edit</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left1.svg" />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.newEntry}>New Entry</div>
      <div className={styles.june20231}>19 June 2023</div>
      <div className={styles.addentryChild1} />
      <div className={styles.addentryChild2} />
      <div className={styles.save}>save</div>
      <div className={styles.discard}>discard</div>
    </div>
  );
};

export default Addentry;
