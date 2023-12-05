import { FunctionComponent, useCallback } from "react";
import DashboardContainer from "../components/DashboardContainer";
import MondayContainer from "../components/MondayContainer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./ViewCalendar2.module.css";

const ViewCalendar2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onExpandRightDoubleIconClick = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  return (
    <div className={styles.viewCalendar}>
      <DashboardContainer
        frameDivCursor="unset"
        signOutSqureIconCursor="unset"
        adaptationCursor="unset"
        joinUsCursor="unset"
        propCursor="unset"
      />
      <DashboardContainer
        frameDivCursor="unset"
        signOutSqureIconCursor="unset"
        adaptationCursor="unset"
        joinUsCursor="unset"
        propCursor="unset"
      />
      <MondayContainer rectangleDivCursor="unset" />
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
        userLabel="User"
        propWidth="207px"
        propRight="1.72%"
        propLeft="82.5%"
        propLeft1="959px"
      />
      <div className={styles.backParent}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <div className={styles.backParent}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <div className={styles.viewCalendarChild} />
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
      <img
        className={styles.viewCalendarItem}
        alt=""
        src="/rectangle-252@2x.png"
      />
      <div className={styles.viewCalendarInner} />
      <div className={styles.moreDetails}>more details</div>
      <img
        className={styles.expandRightDoubleIcon}
        alt=""
        src="/expand-right-double1.svg"
        onClick={onExpandRightDoubleIconClick}
      />
    </div>
  );
};

export default ViewCalendar2;
