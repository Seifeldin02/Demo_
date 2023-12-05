import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileContainer from "../components/ProfileContainer";
import Header from "../components/Header";
import styles from "./ViewDashboardJoinUsPartic.module.css";

const ViewDashboardJoinUsPartic: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuItemContainerClick = useCallback(() => {
    navigate("/profilepersonal-details-staff");
  }, [navigate]);

  const onCarbonAnalysisTextClick = useCallback(() => {
    navigate("/manage-carbon-analysis");
  }, [navigate]);

  const onAdaptationTextClick = useCallback(() => {
    navigate("/view-dashboardadaptation1");
  }, [navigate]);

  const onMenuItemContainer1Click = useCallback(() => {
    navigate("/managecalendar");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/view-dashboardadaptation1");
  }, [navigate]);

  const onExpandRightDoubleIconClick = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  const onExpandRightDoubleIcon1Click = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  const onExpandRightDoubleIcon2Click = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  const onExpandRightDoubleIcon3Click = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  const onExpandRightDoubleIcon4Click = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  const onExpandRightDoubleIcon5Click = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  const onExpandRightDoubleIcon6Click = useCallback(() => {
    navigate("/view-calendar");
  }, [navigate]);

  return (
    <div className={styles.viewDashboardJoinUsPartic}>
      <ProfileContainer
        menuItemOverflow="hidden"
        frameDivCursor="pointer"
        adaptationColor="2px solid #8a99af"
        adaptationCursor="pointer"
        joinUsCursor="pointer"
        joinUsColor="2px solid #8a99af"
        menuItemColor="#fff"
        menuItemCursor="unset"
        frameDivCursor1="pointer"
        onMenuItemContainerClick={onMenuItemContainerClick}
        onCarbonAnalysisTextClick={onCarbonAnalysisTextClick}
        onAdaptationTextClick={onAdaptationTextClick}
        onMenuItemContainer1Click={onMenuItemContainer1Click}
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
      <div className={styles.participantDetails}>Participant details</div>
      <div className={styles.backParent} onClick={onGroupContainerClick}>
        <div className={styles.back}>back</div>
        <img className={styles.expandLeftIcon} alt="" src="/expand-left.svg" />
      </div>
      <img
        className={styles.viewDashboardJoinUsParticChild}
        alt=""
        src="/rectangle-23@2x.png"
      />
      <div className={styles.viewDashboardJoinUsParticItem} />
      <div className={styles.viewDashboardJoinUsParticInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.viewDashboardJoinUsParticChild1} />
      <div className={styles.viewDashboardJoinUsParticChild2} />
      <div className={styles.viewDashboardJoinUsParticChild3} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-2825@2x.png" />
      <img
        className={styles.viewDashboardJoinUsParticChild4}
        alt=""
        src="/ellipse-2825@2x.png"
      />
      <img
        className={styles.viewDashboardJoinUsParticChild5}
        alt=""
        src="/ellipse-2825@2x.png"
      />
      <img
        className={styles.viewDashboardJoinUsParticChild6}
        alt=""
        src="/ellipse-2825@2x.png"
      />
      <img
        className={styles.viewDashboardJoinUsParticChild7}
        alt=""
        src="/ellipse-2825@2x.png"
      />
      <img
        className={styles.viewDashboardJoinUsParticChild8}
        alt=""
        src="/ellipse-2825@2x.png"
      />
      <div className={styles.amirahAbdullah}>Amirah Abdullah</div>
      <div className={styles.muhammadAli}>Muhammad Ali</div>
      <div className={styles.aisyahHassan}>Aisyah Hassan</div>
      <div className={styles.hafizIbrahim}>Hafiz Ibrahim</div>
      <div className={styles.nurulJamaluddin}>Nurul Jamaluddin</div>
      <div className={styles.fatinAhmad}>Fatin Ahmad</div>
      <div className={styles.loadMore}>load more</div>
      <img
        className={styles.expandRightDoubleIcon}
        alt=""
        src="/expand-right-double.svg"
        onClick={onExpandRightDoubleIconClick}
      />
      <img
        className={styles.expandRightDoubleIcon1}
        alt=""
        src="/expand-right-double.svg"
        onClick={onExpandRightDoubleIcon1Click}
      />
      <img
        className={styles.expandRightDoubleIcon2}
        alt=""
        src="/expand-right-double.svg"
        onClick={onExpandRightDoubleIcon2Click}
      />
      <img
        className={styles.expandRightDoubleIcon3}
        alt=""
        src="/expand-right-double.svg"
        onClick={onExpandRightDoubleIcon3Click}
      />
      <img
        className={styles.expandRightDoubleIcon4}
        alt=""
        src="/expand-right-double.svg"
        onClick={onExpandRightDoubleIcon4Click}
      />
      <img
        className={styles.expandRightDoubleIcon5}
        alt=""
        src="/expand-right-double.svg"
        onClick={onExpandRightDoubleIcon5Click}
      />
      <img
        className={styles.expandRightDoubleIcon6}
        alt=""
        src="/expand-right-double.svg"
        onClick={onExpandRightDoubleIcon6Click}
      />
    </div>
  );
};

export default ViewDashboardJoinUsPartic;
