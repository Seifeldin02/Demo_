import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashboardContainer from "../components/DashboardContainer";
import Header from "../components/Header";
import styles from "./ViewCalendar1.module.css";

const ViewCalendar1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignOutTextClick = useCallback(() => {
    navigate("/select-option");
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
        signOutSqureIconCursor="pointer"
        adaptationCursor="unset"
        joinUsCursor="unset"
        propCursor="unset"
        onSignOutText1Click={onSignOutTextClick}
      />
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
      <div className={styles.areYouLooking}>
        Are you looking to take your app to the next level? Look no further than
        our App Design Showcase. Our team of talented designers is here to help
        you create a captivating and engaging user experience. With their
        expertise, they will transform your app into a visually stunning
        masterpiece that will leave a lasting impression on your target
        audience. From sleek and modern user interfaces to seamless and
        intuitive interactions, we pride ourselves on crafting designs that
        stand out in a crowded marketplace. Get ready to elevate your brand and
        showcase your app like never before. Don't miss out on the opportunity
        to captivate your users and set your app apart from the competition.
        Contact us today for a design consultation and let us bring your app
        design vision to life.
      </div>
      <div className={styles.appDesignShowcase}>App Design Showcase</div>
      <div className={styles.suteraMallJohor}>Sutera Mall, Johor Bahru</div>
      <div className={styles.hrs}>0800 - 1700 hrs</div>
      <img
        className={styles.viewCalendarItem}
        alt=""
        src="/rectangle-253@2x.png"
      />
      <div className={styles.exportIntoPdf}>Export into PDF</div>
      <div className={styles.exportIntoPng}>Export into PNG</div>
      <img className={styles.importIcon} alt="" src="/import.svg" />
    </div>
  );
};

export default ViewCalendar1;
